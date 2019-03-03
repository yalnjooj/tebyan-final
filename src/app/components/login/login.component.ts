import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verfiyForm: string="";
  loading: boolean = false;
  route: string = "home";

  user = {
    email:"",
    pwd: ""
  }

  results={
    email:"",
    pwd: ""
  }


  mySubmit({value,valid}){
    if(valid){ 
      this.results.email = value.email;
      this.results.pwd = value.pwd;
      this.loading = true;
      this.verfiyForm = ""
    }

    else {this.verfiyForm = "قيمة غير صحيحة!";}
  }

  constructor() {
    
   }

  ngOnInit() {
    
  }

 
}
