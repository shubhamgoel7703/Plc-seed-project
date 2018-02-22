import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private http:Http,private router: Router)
{

}

isOn : boolean=true;
isOff : boolean=false;
flowData : string="";

ngOnInit()
{
//  let timer = Observable.timer(5000,8000);
//  timer.subscribe(this.getFlowData);
this.getFlowData();
}

getFlowData()
{
  console.log("sending req");
  this.http.get('/flowdata')
  .subscribe(  
  data => {
  console.log(data); console.log(data.json().flowData);this.flowData=data.json().flowData;
//this.flowData=data.flowData;
  console.log("flowdata send success");
},
error => {  console.log("flowdata send fail");console.error(error)}); 

setTimeout(()=>{    //<<<---    using ()=> syntax
  this.getFlowData();
},10000);
}

LogOut()
{
  localStorage.clear();
  this.router.navigateByUrl('/');
}

pumpOn()
{
console.log("on");
this.isOn=true;
this.isOff=false;
var postObj = { "pumpstatus":"on"};
const body = JSON.stringify(postObj);
const headers = new Headers({'Content-Type': 'application/json'});
this.http.post('/pumpstatus', body, {headers: headers})
.subscribe(  
  data => {
  console.log("pumpstatus send success");
},
error => {  console.log("pumpstatus send fail");;console.error(error)}); 
}
pumpOff()
{
  console.log("off");
  this.isOn=false;
  this.isOff=true;
  var postObj = { "pumpstatus":"off"};
  const body = JSON.stringify(postObj);
  const headers = new Headers({'Content-Type': 'application/json'});
  this.http.post('/pumpstatus', body, {headers: headers})
.subscribe(  
  data => {
  console.log("pumpstatus send success");
},
error => {  console.log("pumpstatus send fail");;console.error(error)}); 
}

setPointOnBlur(setpoint)
{
  console.log(setpoint);
  //var setpoint="10";
  var postObj = { "setpoint":setpoint};
  const body = JSON.stringify(postObj);
  const headers = new Headers({'Content-Type': 'application/json'});
  this.http.post('/setpoint', body, {headers: headers})
.subscribe(  
  data => {
  console.log("setpoint send success");
},
error => {  console.log("setpoint send fail");;console.error(error)}); 
}

 
}
