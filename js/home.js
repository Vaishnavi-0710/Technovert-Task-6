let contacts=[
    {
        name: "Chandermani Arora",
        email: "chandermani@technovert.com",
        mobile: "+91 9292929292"
    },
    {
        name: "Sashi Pagadala",
        email: "sashi@technovert.com",
        mobile: "+91 9393939393"
    },
    {
        name: "Praveen Battula",
        email: "praveen@technovert.com",
        mobile: "+91 9494949494"
    },
    {
        name: "Vijay Yalamanchili",
        email: "praveen@technovert.com",
        mobile: "+91 9595959595"
    }
]
$(document).ready(function(){
    $("#add").click(function(){
        $(".add-form").show();
    }
    );
    $("#button").click(function(){
        let name=validateName();
        let email=validateEmail();
        let mobile=validateMobile();
        let website=validateWebsite();
        let address=validateAddress();
        if(name && email && mobile && website && address){
            contacts.push({
                name: $('#name').val(),
                email: $('#email').val(),
                mobile: "+91 " + $('#mobile').val()
            });
            display();
            $(".add-form").hide();
        };
    });
});
function display(){
    let list=document.querySelector("#list");
    let contactList="";
    contacts.forEach((contact)=>{
        contactList += `<div class=list-item>
        <div class="item-name">${contact.name}</div>
        <div class="item-email">${contact.email}</div>
        <div class="item-phnno">${contact.mobile}</div>
        </div>`
    });
    contactList="<div class=`list-container`>"+ contactList + "</div>";
    list.innerHTML= contactList;
}
display();

function validateName(){
    let name=$("#name").val();
    if(name!=""){
        $('#nameError').text("");
        return true;
    }
    else{
        $('#nameError').text("Name is required");
        return false;
    }
};
  
function validateEmail(){
    let email=$("#email").val();
    const mail=/^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
    if(mail.test(email) || email==""){
        if(email==""){
            $('#emailError').text("Email is required");
            return false;
        }
        else{
            $('#emailError').text("");
            return true;
        }
    }
    else{
        $("#emailError").text("Enter Valid Email");
        return false;
    }
}

function validateWebsite(){
    let website=$('#website').val();
    const validWebsite =/^(http(s)?:\/\/)?((www.)?)+[a-zA-Z0-9#!:?+=&%!.\-\/]+\.[a-zA-Z\/]{2,}$/;
    if(validWebsite.test(website) || website==""){
        if(website==""){
            $('#websiteError').text("Website is required");
            return false;
        }
        else{
            $('#websiteError').text("");
            return true;
        }
    }
    else{
        $("#websiteError").text("Enter Valid Website");
        return false;
    }
}

function validateMobile(){
    let name=$("#mobile").val();
    if(name!=""){
        $('#mobileError').text("");
        return true;
    }
    else{
        $('#mobileError').text("Mobile is required");
        return false;
    }
};

function validateAddress(){
    let address = $('#address').val();
    if(address!=""){
        $('#addressError').text("");
        return true;
    }
    else{
        $('#addressError').text("Address is required");
        return false;
    }
}