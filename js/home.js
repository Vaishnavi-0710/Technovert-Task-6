let contacts=[
    {
        name: "Chandermani Arora",
        email: "chandermani@technovert.com",
        mobile: "+91 9292929292",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: `123 now here 
                  Some Street
                  Madhapur,Hyderabad 500033`
    },
    {
        name: "Sashi Pagadala",
        email: "sashi@technovert.com",
        mobile: "+91 9393939393",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: `123 now here 
                  Some Street
                  Madhapur,Hyderabad 500033`
    },
    {
        name: "Praveen Battula",
        email: "praveen@technovert.com",
        mobile: "+91 9494949494",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: `123 now here 
                  Some Street
                  Madhapur,Hyderabad 500033`
    },
    {
        name: "Vijay Yalamanchili",
        email: "praveen@technovert.com",
        mobile: "+91 9595959595",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: `123 now here
                  Some Street 
                  Madhapur,Hyderabad 500033`
    }
]
$(document).ready(function(){
    $("#add").click(function(e){
        e.preventDefault();
        $(".detailed-contact").hide();
        $(".edit-form").hide();
        $(".add-form").show();
    }
    );

    $("#edit").click(function(e){
        e.preventDefault();
        $(".detailed-contact").hide();
        $(".add-form").hide();
        $(".edit-form").show();
    }
    );

    $("#addButton").click(function(e){
        e.preventDefault();
        let name=validateName();
        let email=validateEmail();
        let mobile=validateMobile();
        let landline=validateLandline();
        console.log(name,email,mobile);
        if((name && email && mobile && landline) ){
            contacts.push({
                name: $('#name').val(),
                email: $('#email').val(),
                mobile: "+91 " + $('#mobile').val(),
                landline: $('#landline').val(),
                website: $('#website').val(),
                address: $('#address').val()
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

    $('#edit').click(function(e){
        e.preventDefault();
        console.log($('.detailedName').text());
        $('#edit-form').show();
        $('#newName').val($('.detailed-name').text());
        $('#newEmail').val($('.email').text());
        $('#newMobile').val($('.mobile').text());
        $('#newLandline').val($('.landline').text());
        $('#newWebsite').val($('.website').text());
        $('#newAddress').val($('.contact-address').text());
    });
    
    $('#newEditButton').click(function(e){
        e.preventDefault();
        alert(contacts[counter].name+"data will be updated");
        $(`#user${counter} .item-name`).text($('#newName').val());
        $(`#user${counter} .item-email`).text($('#newEmail').val());
        $(`#user${counter} .item-mobile`).text($('#newMobile').val());
        $(`#user${counter} .item-landline`).text($('#newLandline').val());
        $(`#user${counter} .item-website`).text($('#newWebsite').val());
        $(`#user${counter} .item-address`).text($('#newAddress').val());
        $('#edit-form').hide();
    });
});
function display(){
    let list=document.querySelector("#list");
    let contactList="";
    let i=0;
    contacts.forEach((contact)=>{
        console.log(contact);
        contactList += `<div class=list-item onclick="displayDetailed(${i})" id="user${i}">
        <div class="item-name">${contact.name}</div>
        <div class="item-email">${"Email: " + contact.email}</div>
        <div class="item-phnno">${"Mobile: " + contact.mobile}</div>
        </div>`
        i++;
    });
    contactList="<div class=`list-container`>"+ contactList + "</div>";
    list.innerHTML= contactList;
}
display();

const displayDetailed=(i)=>{
    console.log(i);
    $(".add-form").hide();
    $(".edit-form").hide();
    $('.detailed-contact').css("display","block");
    $('.detailed-name').text(contacts[i].name);
    $('.email').text(contacts[i].email);
    $('.mobile').text(contacts[i].mobile);
    $('.landline').text("Landline: " + contacts[i].landline);
    $('.website').text("Website: " + contacts[i].website);
    $('.contact-address').text("Address: " + contacts[i].address);
}

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