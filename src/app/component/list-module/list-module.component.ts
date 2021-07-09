import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss']
})
export class ListModuleComponent implements OnInit {
  fieldsList: string[] = ['Input', 'Button', 'Select', 'Modal', 'Tooltip'];
  eventList: string[] = ['onclick', 'doubleclick', 'change', 'input'];
  validationList: string[] = ['Required', 'Mismatch', 'In-Valid'];
  constructor() { }

  ngOnInit(): void {
  }

}
