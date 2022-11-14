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
        name: "Chandermani Arora",
        email: "chandermani@technovert.com",
        phnno: "+91 9494949494"
    }
]
let list=document.querySelector("#list");
let contactList="";
contacts.forEach((contact)=>{
    contactList += `<div class=list-item>
    <div>${contact.name}</div>
    <div>${contact.email}</div>
    <div>${contact.phnno}</div>
    </div>`
});
contactList="<div class=`list-container`>"+ contactList + "</div>";
list.innerHTML= contactList;