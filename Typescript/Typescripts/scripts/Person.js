"use strict";
var student = /** @class */ (function () {
    function student() {
        this.name = 'Sri';
        this.emailID = 'srsriranga@gmail.com';
        this.mobile = 8867078988;
    }
    student.prototype.studentinfo = function () {
        alert(this.name + '' + this.emailID + '' + this.mobile);
    };
    return student;
}());
var d1 = new student();
d1.studentinfo();
var company = /** @class */ (function () {
    function company() {
        this.name1 = 'BOSCH';
        this.Location1 = 'Bangalore';
        this.name2 = 'HORIBA';
        this.Location2 = 'Pune';
        alert(this.name1 + '' + this.Location1 + '' + this.name2 + '' + this.Location2);
    }
    return company;
}());
new company();
//# sourceMappingURL=Person.js.map