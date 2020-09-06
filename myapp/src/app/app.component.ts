import { Component, Input } from '@angular/core';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  

  clickMe(data){
    console.log("The square root of input number is", data*data)
  }
 display(input){
   console.log("Please check for the input details filled", input)
 }
 validate(check){
   if (check="india12345" ) {
     alert("happy independence day") 
   } else {
    alert("INVALID") 
   }
 }
 
}
