import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import  {RouterModule,Routes}  from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { AgentComponent } from './agent/agent.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';






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
  
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }