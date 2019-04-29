import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {  BlogComponent} from './blog/blog.component'
import { ContactComponent} from './contact/contact.component';
import { AgentComponent} from './agent/agent.component';
import { PropertiesComponent} from './properties/properties.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './auth.guard'



const appRoutes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  
  {
    path: '',
    component: LoginComponent  
  },
  {
    path: 'home',canActivate:[AuthGuard],
    component: HomeComponent  
  },
  
  {
    path: 'properties',
    component: PropertiesComponent  
  },
  
  
{
  path:'Agent',
  component:AgentComponent
},
{
    path: 'blog',
    component: BlogComponent,
    //canActivate:[AuthGuard]
   // canActivate: [AuthGuard]
  },
 
 
  {
    path: 'Contact',
    component:ContactComponent,
   // redirectTo: 'contact',
    //pathMatch:'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }