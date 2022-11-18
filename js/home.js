let mode;
let contacts=[
    {
        name: "Chandermani Arora",
        email: "chandermani@technovert.com",
        mobile: "+91 9292929292",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: "123 now here\nSome Street\nMadhapur,Hyderabad 500033"
    },
    {
        name: "Sashi Pagadala",
        email: "sashi@technovert.com",
        mobile: "+91 9393939393",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: "123 now here\nSome Street\nMadhapur,Hyderabad 500033"
    },
    {
        name: "Praveen Battula",
        email: "praveen@technovert.com",
        mobile: "+91 9494949494",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: "123 now here\nSome Street\nMadhapur,Hyderabad 500033"
    },
    {
        name: "Vijay Yalamanchili",
        email: "praveen@technovert.com",
        mobile: "+91 9595959595",
        landline: "040 30 1231211",
        website: "http://www.technovert.com",
        address: "123 now here\nSome Street\nMadhapur,Hyderabad 500033"
    }
]

$(document).ready(function(){
    display();
    displayDetailed(0);
    $("#add").click(function(e){
        e.preventDefault();
        mode= "new";
        render();
    });

    $("#addButton").click(function(e){
        e.preventDefault();
        let name=validateName();
        let email=validateEmail();
        let mobile=validateMobile();
        let landline=validateLandline();
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
            $(".form-wrapper").hide();
            $("#formDetails").trigger("reset");
            alert("Contact added successfully");
            displayDetailed(0); 
        };
    });

    $("#cancelButton").click(function(e){
        e.preventDefault();
        $("#formDetails").trigger("reset");
        $(".error-msg").hide();
        $(".form-wrapper").hide();
        displayDetailed(0);
    });

    $("#edit").click(function(e){
        e.preventDefault();
        mode= "edit";
        render();
    });

    $('#delete').click(function(e){
        e.preventDefault();
        contacts.splice(counter,1);
        $('.detailed-contact').css("display","none");
        render();
        display();
        displayDetailed(0);
    });
    
});

function display(){
    let list=document.querySelector("#list");
    let contactList="";
    let i=0;
    contacts.forEach((contact)=>{
        contactList += `<div class=list-item onclick="displayDetailed(${i})" id="user${i}">
        <div class="item-name">${contact.name}</div>
        ${contact.email!=null && contact.email!="" ? "<div class='item-email'>"+ "Email: " + contact.email+"</div>" : ""}
        <div class="item-phnno">${"Mobile: " + contact.mobile}</div>
        </div>`
        i++;
    });
    contactList="<div class=`list-container`>"+ contactList + "</div>";
    list.innerHTML= contactList;
}


function render(){
    if(mode==="new"){
        $("#formDetails").trigger("reset");
        $(".detailed-contact").hide();
        $("#editButton").css("display", "none");
        $("#addButton").css("display", "block");
        $(".form-wrapper").show();
        display();
    }
    else if(mode==="edit"){
        $(".detailed-contact").hide();
        $("#editButton").css("display", "block");
        $("#addButton").css("display", "none");
        $(".form-wrapper").show();
        $('#name').val(contacts[counter].name);
        $('#email').val(contacts[counter].email);
        $('#mobile').val(contacts[counter].mobile);
        $('#landline').val(contacts[counter].landline);
        $('#website').val(contacts[counter].website);
        $('#address').val(contacts[counter].address);
        $('#editButton').click(function(e){
            e.preventDefault();
            alert(contacts[counter].name+" data will be updated");
            contacts[counter]={
                name: $('#name').val(),
                email: $('#email').val(),
                mobile: $("#mobile").val(),
                landline: $('#landline').val(),
                website: $('#website').val(),
                address: $('#address').val()
            }
            $(".form-wrapper").hide();
            display();
            displayDetailed(counter);
        });
    }
    else{
        display();
    }
}

let counter;
const displayDetailed=(i)=>{
    counter=i;
    $(`#user${i}`).addClass("selected-item");
    for(let j=0;j<contacts.length;j++)
    {
        if(i!==j)
        {
            $(`#user${j}`).removeClass("selected-item");
        }
    }
    $(".form-wrapper").hide();
    $('.detailed-contact').css("display","block");
    $('.detailed-name').text(contacts[i].name);
    $('.email').text(contacts[i].email!=null && contacts[i].email!="" ? contacts[i].email : "N/A");
    $('.mobile').text(contacts[i].mobile);
    $('.landline').text(contacts[i].landline!=null && contacts[i].landline!="" ? contacts[i].landline : "N/A");
    $('.website').text(contacts[i].website!=null && contacts[i].website!="" ? contacts[i].website : "N/A");
    $('.contact-address').text(contacts[i].address!=null && contacts[i].address!="" ? contacts[i].address : "N/A");
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
        $('#emailError').text("");
        return true;
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
        $('#landlineError').text("");
        return true;
    }
    else{
        $('#landlineError').text("Enter Valid Landline");
        return false;
    }
};