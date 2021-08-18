import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-test-component',
  templateUrl: './bootstrap-test-component.component.html',
  styleUrls: ['./bootstrap-test-component.component.scss']
})
export class BootstrapTestComponentComponent implements OnInit {

  value: any;
  step: any;
  max: any;
  min: any;
  disabled = true;
  display: any;
  document: any;
  checked = true;
  placeholder = "Please enter the value";
  arialabel = "arialabel";
  multiple = "multiple";
  constructor() { }
  ngOnInit(): void {
  }
  onKey(value: any) {
  }
  onBlur(value: any) { }
  openDialog() {
    alert('Dialog');
  }
  openModal() {
    alert('modal');
  }
  onCloseHandled() {
    alert('closed');
  }
  onChange(boxvalue: string) { console.log('onChange = ' + boxvalue); }
  onChangeSelect(selectedValue: string) { console.log('onChange = ' + selectedValue); }
  
 }
