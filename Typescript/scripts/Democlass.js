"use strict";
var Student = /** @class */ (function () {
    function Student(_name, _address, _city, _email, _postal) {
        this.name = '';
        this.address = '';
        this.city = '';
        this.email = '';
        this.postal = '';
        this.name = _name;
        this.address = _address;
        this.city = _city;
        this.email = _email;
        this.postal = _postal;
    }
    return Student;
}());
var Entname = prompt("Enter Name");
var Entaddress = prompt("Enter Address");
var Entcity = prompt("Enter City");
var Entemail = prompt("Enter Email");
var Entpostal = prompt("Enter Postal");
// create object
var data = new Student(Entname, Entaddress, Entcity, Entemail, Entpostal);
console.log("Studentinformation", data);
//# sourceMappingURL=Democlass.js.map