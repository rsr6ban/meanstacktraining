"use strict";
var person_details = [];
var username = prompt("Enter the username");
var MailID = prompt("Enter the MailID");
var PhoneNo = prompt("Enter the PhoneNo");
var Agestring = prompt("Enter the Age");
var Age = Number(Agestring);
var Ticketpricestring = prompt("Enter the Ticketprice");
var Ticketprice = Number(Ticketpricestring);
person_details.push(username, MailID, PhoneNo, Age, Ticketprice);
console.log(person_details);
var check;
for (check in person_details) {
    console.log(person_details[check]);
}
if (Age >= 70) {
    var A = Number(Ticketprice) * 50 / 100;
    var result1 = Number(Ticketprice) - A;
    console.log("The TicketPrice for the Age above 70 after discount is rupees", result1);
}
else {
    var A = Number(Ticketprice) * 20 / 100;
    var result = Number(Ticketprice) - A;
    console.log("The TicketPrice for the Age below 70 after discount is rupees", result);
}
//# sourceMappingURL=hello.js.map