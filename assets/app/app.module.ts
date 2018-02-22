import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./loginComponent/login.component";
import { SignupComponent } from "./signupComponent/signup.component";
import { DashboardComponent } from "./dashboardComponent/dashboard.component";

import {RouterModule} from '@angular/router'; 
import {HttpModule} from '@angular/http'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        DashboardComponent
    ],
    imports: [BrowserModule,
		RouterModule.forRoot([
		{ path: '',component:LoginComponent},
		{ path:'signup',component:SignupComponent},
		{ path:'dash',component:DashboardComponent}
		 ]),
		 HttpModule,
		FormsModule,	 
		 ReactiveFormsModule
			],
		    bootstrap: [AppComponent]
})
export class AppModule {

}