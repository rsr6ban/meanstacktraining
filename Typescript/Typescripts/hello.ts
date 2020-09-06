
let person_details=[]
let username=prompt("Enter the username")
let MailID=prompt("Enter the MailID")
let PhoneNo=prompt("Enter the PhoneNo")
let Agestring=prompt("Enter the Age")
let Age = Number(Agestring)
let Ticketpricestring=prompt("Enter the Ticketprice")
let Ticketprice =Number(Ticketpricestring)
person_details.push(username,MailID,PhoneNo,Age,Ticketprice)
console.log(person_details)

let check;
for(check in person_details){
console.log(person_details[check])
}

if (Age>=70) {
    let A= Number(Ticketprice)*50/100
    let result1= Number(Ticketprice)-A
    console.log("The TicketPrice for the Age above 70 after discount is rupees",result1)
   
} else {
    let A= Number(Ticketprice)*20/100
    let result= Number(Ticketprice)-A
    console.log("The TicketPrice for the Age below 70 after discount is rupees",result)
}

