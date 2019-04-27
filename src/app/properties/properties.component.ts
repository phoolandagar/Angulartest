import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveDetail(detaForm:NgForm): void {
    console.log(detaForm.value);
  }
}
