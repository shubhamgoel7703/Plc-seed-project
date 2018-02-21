import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./loginComponent/login.component";
import { SignupComponent } from "./signupComponent/signup.component";
import {RouterModule} from '@angular/router'; 
import {HttpModule} from '@angular/http'; 

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [BrowserModule,
		RouterModule.forRoot([
		{ path: '',component:LoginComponent},
		{ path:'signup',component:SignupComponent}
		 ]),
		 HttpModule
			],
		    bootstrap: [AppComponent]
})
export class AppModule {

}