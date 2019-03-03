import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generatepwd',
  templateUrl: './generatepwd.component.html',
  styleUrls: ['./generatepwd.component.css']
})
export class GeneratepwdComponent implements OnInit {

  loading: boolean = false;
  verfiyForm: string;

  user = {
    email:"",
    pwd: ""
  }

  constructor() { }

  ngOnInit() {
  }

  mySubmit({value,valid}){
    if(valid){ 
      this.user.email = value.email;
      this.user.pwd = value.pwd;
      this.loading = true;
      this.verfiyForm = ""
    }

    else {this.verfiyForm = "قيمة غير صحيحة!";}
  }

}
