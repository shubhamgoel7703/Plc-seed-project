import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private http:Http,private router: Router){}

myForm: FormGroup;

ngOnInit() {
  this.myForm = new FormGroup({
      email: new FormControl(null, [
          Validators.required
         // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
  });
}

  public onSubmit()
  {
  console.log(this.myForm);
    //  return this.http.post('/users/signin','username:ss').subscribe(response => {console.log("ss");});
      
if(this.myForm.value.email==='shubham')
{
  console.log("sending request");

  var postObj = { "name":this.myForm.value.email, "pass":this.myForm.value.password};
  const body = JSON.stringify(postObj);
  const headers = new Headers({'Content-Type': 'application/json'});
  
  return this.http.post('/users/signin', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()))
      .subscribe(  
        data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.router.navigateByUrl('/dash');
    },
    error => {console.log("errorrrrr");console.error(error)}); 

   // return this.http.post('/users/signin','{username:ss}').subscribe(response => {console.log(response);});
     
   // localStorage.setItem('token', data.token);
  //localStorage.setItem('userId', data.userId);
  //this.router.navigateByUrl('/dash');

}
else{
  console.error("invalid credentials");
}
  
  }

  logout() {
    localStorage.clear();
}

}
