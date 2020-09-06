class student {
    name: string = 'Sri';
    emailID: string = 'srsriranga@gmail.com';
    mobile: number = 8867078988;


    studentinfo()
    {
        alert(this.name +''+ this.emailID +''+ this.mobile) 
    }
}
let d1=new student()
d1.studentinfo()

class company {
    name1:string='BOSCH'
    Location1:string='Bangalore'
    name2:string='HORIBA'
    Location2:string='Pune'

    constructor() {
        alert(this.name1 +''+this.Location1+''+this.name2+''+this.Location2)
    }
}
new company()