class Student{

    name:string=''
    address:string=''
    city:string=''
    email:string=''
    postal:string=''
  
    constructor(_name:string,_address:string,_city:string,_email:string,_postal:string)
    {
        this.name=_name;
        this.address=_address;
        this.city=_city;
        this.email=_email;
        this.postal=_postal
    }
  }

  let Entname:any=prompt("Enter Name")
  let Entaddress:any=prompt("Enter Address")
  let Entcity:any=prompt("Enter City")
  let Entemail:any=prompt("Enter Email")
  let Entpostal:any=prompt("Enter Postal")

  // create object
let data=new Student(Entname,Entaddress,Entcity,Entemail,Entpostal)
console.log("Studentinformation",data)
 
