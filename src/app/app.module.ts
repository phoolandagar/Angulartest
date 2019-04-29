import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { CarouselModule } from 'ngx-bootstrap';
//import  {RouterModule,Routes}  from '@angular/router'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { AgentComponent } from './agent/agent.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {  AuthGuard}  from './auth.guard';







  //{
   // path: '',
    //loadChildren: './home/project.module#ProjectModule'
    // Lazy Loading
  //},
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    AgentComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    
  
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,//CarouselModule.forRoot()
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }