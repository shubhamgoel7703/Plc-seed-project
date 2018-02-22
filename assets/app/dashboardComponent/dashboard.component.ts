import { Component } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private http:Http){}

  title = 'app';

 
}
