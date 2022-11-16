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
    $("#addButton").click(function(){
        let name=validateName();
        let email=validateEmail();
        let mobile=validateMobile();
        let landline=validateLandline();
        console.log(name,email,mobile);
        if((name && mobile) || (name && email && mobile) || (name && email && mobile && landline) ){
            contacts.push({
                name: $('#name').val(),
                email: $('#email').val(),
                mobile: "+91 " + $('#mobile').val()
            });
            display();
            $(".add-form").hide();
            $("#formDetails").trigger("reset");
            alert("Contact added successfully");
        };
    });
    $("#cancelButton").click(function(e){
        e.preventDefault();
        $("#formDetails").trigger("reset");
        $(".add-form").hide();
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
    const validMail=/^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
    if(validMail.test(email) || email==""){
        if(email==""){
            $('#emailError').text("");
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
};

function validateMobile(){
    let mobile=$("#mobile").val();
    const validMobile =/^\d*(?:\.\d{1,2})?$/;
    console.log(validMobile.test(mobile));
    if((validMobile.test(mobile) && mobile.length==10) || mobile==""){
        if(mobile==""){
            $('#mobileError').text("Mobile is required");
            return false;
        }
        else{
            $('#mobileError').text("");
            return true;
        }
    }
    else{
        $('#mobileError').text("Enter Valid Mobile");
        return false;
    }
};

function validateLandline(){
    let landline=$("#landline").val();
    const validLandline =/^[0-9]\d{2,4}-\d{6,8}$/;
    console.log(validLandline.test(landline));
    if(validLandline.test(landline) || landline==""){
        if(landline==""){
            $('#landlineError').text("");
            return false;
        }
        else{
            $('#landlineError').text("");
            return true;
        }
    }
    else{
        $('#landlineError').text("Enter Valid Landline");
        return false;
    }
};