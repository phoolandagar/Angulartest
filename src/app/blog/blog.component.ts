import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
    
    

 Image : any [] = [
   "assets/images/property-4.jpg" , "assets/images/property-2.jpg","assets/images/property-3.jpg","assets/images/property-4.jpg",
   "assets/images/property-5.jpg","assets/images/property-6.jpg"
 ];
    
 

      

  constructor() { }
    
       
    
  ngOnInit() {
  }
  saveDetail(detaForm:NgForm): void {
    console.log(detaForm.value);
}
}