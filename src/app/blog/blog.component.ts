import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveDetail(detaForm:NgForm): void {
    console.log(detaForm.value);
}
