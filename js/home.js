let contacts=[
    {
        name: "Chandermani Arora",
        email: "chandermani@technovert.com",
        phnno: "+91 9292929292"
    },
    {
        name: "Sashi Pagadala",
        email: "sashi@technovert.com",
        phnno: "+91 9393939393"
    },
    {
        name: "Praveen Battula",
        email: "praveen@technovert.com",
        phnno: "+91 9494949494"
    },
    {
        name: "Vijay Yalamanchili",
        email: "praveen@technovert.com",
        phnno: "+91 9595959595"
    }
]
let list=document.querySelector("#list");
let contactList="";
contacts.forEach((contact)=>{
    contactList += `<div class=list-item>
    <div class="item-name">${contact.name}</div>
    <div class="item-email">${contact.email}</div>
    <div class="item-phnno">${contact.phnno}</div>
    </div>`
});
contactList="<div class=`list-container`>"+ contactList + "</div>";
list.innerHTML= contactList;