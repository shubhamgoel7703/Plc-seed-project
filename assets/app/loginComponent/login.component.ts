import { Component } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private http:Http){}

  title = 'app';

  public postCredentials()
  {
  console.log("DSSD");
  		return this.http.post('/users/signin','username:ss').subscribe(response => {console.log("ss");});
  }
}
