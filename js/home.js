let mode,contacts=[],counter=0,contactList;
function storage(){
    contacts=JSON.parse(localStorage.getItem("contacts"));
    if(contacts=="" || contacts==null){
        localStorage.setItem("contacts",JSON.stringify(contacts));
    }
}

function contactNotNull(){
    if(contacts!="" && contacts!=null){
        displayDetails(counter);
    }
}
$(document).ready(function(){
    storage();
    display();
    contactNotNull();
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
        $(".error-msg").show();
        if((name && email && mobile && landline) ){
            if(confirm("Are you sure you want to add the contact?")==true){
                contacts.push({
                    name: $('#name').val(),
                    email: $('#email').val(),
                    mobile: "+91 " + $('#mobile').val(),
                    landline: $('#landline').val(),
                    website: $('#website').val(),
                    address: $('#address').val()
                });
            };
            localStorage.setItem('contacts', JSON. stringify(contacts));
            display();
            $(".form-wrapper").hide();
            $("#formDetails").trigger("reset");
            alert("Contact added successfully");
            contactNotNull();
        };
    });

    $("#cancelButton").click(function(e){
        e.preventDefault();
        $("#formDetails").trigger("reset");
        $(".error-msg").hide();
        $(".form-wrapper").hide();
        contactNotNull();
    });

    $("#edit").click(function(e){
        e.preventDefault();
        mode= "edit";
        render();
    });

    $('#delete').click(function(e){
        e.preventDefault();
        if(confirm("Are you sure you want to delete the contact?")==true){
            contacts.splice(counter,1);
            $('.detailed-contact').css("display","none");
            localStorage.setItem('contacts', JSON.stringify(contacts));
            storage();
            display();
            if(contacts!="" && contacts!=null){
                displayDetails(counter-counter);
            }
        }
    });
    
});

function display(){
    let list=document.querySelector("#list");
    let contactList="";
    let i=0;
    contacts.forEach((contact)=>{
        contactList += `<div class=list-item onclick="displayDetails(${i})" id="user${i}">
        <div class="item-name">${contact.name}</div>
        ${contact.email!=null && contact.email!="" ? "<div class='item-email'>"+ "Email: " + contact.email+"</div>" : ""}
        <div class="item-phnno">${"Mobile: " + contact.mobile}</div>
        </div>`
        i++;
    });
    if(contactList!="" && contactList!=null){
        contactList="<div class=`list-container`>"+ contactList + "</div>";
        list.innerHTML= contactList;
    }
    else{
        list.innerHTML= "There are no contacts to display";
    }
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
            let name=validateName();
            let email=validateEmail();
            let mobile=validateMobile();
            let landline=validateLandline();
            $(".error-msg").show();
            if((name && email && mobile && landline) ){
                if(confirm("Are you sure you want to update the data?")==true){
                    contacts[counter]={
                        name: $('#name').val(),
                        email: $('#email').val(),
                        mobile: $("#mobile").val(),
                        landline: $('#landline').val(),
                        website: $('#website').val(),
                        address: $('#address').val()
                    }
                    $(".form-wrapper").hide();
                    localStorage.setItem('contacts', JSON.stringify(contacts));
                    display();
                    alert(contacts[counter].name+"'s data is updated");
                    contactNotNull();
                }
            }
        });
    }
    else{
        display();
    }
}

const displayDetails=(i)=>{
    counter=i;
    $(`#user${i}`).addClass("selected-item");
    for(let j=0;j<contacts.length;j++)
    {
        if(i!==j)
        {
            $(`#user${j}`).removeClass("selected-item");
        }
    }
    if (contacts==null || contacts==[]){
        $('.detailed-contact').hide();
    }
    else{
        $(".form-wrapper").hide();
        $('.detailed-contact').css("display","block");
        $('.detailed-name').text(contacts[i].name!=null && contacts[i].name!="" ? contacts[i].name : "N/A");
        $('.email').text(contacts[i].email!=null && contacts[i].email!="" ? contacts[i].email : "N/A");
        $('.mobile').text(contacts[i].mobile);
        $('.landline').text(contacts[i].landline!=null && contacts[i].landline!="" ? contacts[i].landline : "N/A");
        $('.website').text(contacts[i].website!=null && contacts[i].website!="" ? contacts[i].website : "N/A");
        $('.contact-address').text(contacts[i].address!=null && contacts[i].address!="" ? contacts[i].address : "N/A");
    }
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
    if((validMobile.test(mobile) && (mobile.length==10 || mobile.length==14)) || mobile==""){
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
    if(validLandline.test(landline) || landline==""){
        $('#landlineError').text("");
        return true;
    }
    else{
        $('#landlineError').text("Enter Valid Landline");
        return false;
    }
};