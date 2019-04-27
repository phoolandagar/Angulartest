import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveDetail(detaForm:NgForm): void {
    console.log(detaForm.value);
  }
}
