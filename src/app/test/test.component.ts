import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKey(boxvalue:string){console.log('onKey = ' + boxvalue);}
 
  onChange(boxvalue:string){console.log('onChange = ' +boxvalue);}
   
  onKeyEnter(boxvalue:string){console.log('onKeyEnter = ' +boxvalue);}
   
  onBlur(boxvalue:string){console.log('onBlur = ' +boxvalue);}

}
