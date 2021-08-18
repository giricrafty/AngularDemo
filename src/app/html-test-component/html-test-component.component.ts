import { BreakpointObserver } from '@angular/cdk/layout';
import { Inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {  MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { MatSidenav } from '@angular/material/sidenav';
//import { MydialogComponent } from '../mydialog/mydialog.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
]; 

@Component({
  selector: 'app-html-test-component',
  templateUrl: './html-test-component.component.html',
  styleUrls: ['./html-test-component.component.scss']
})
export class HtmlTestComponentComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  panelOpenState = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  msg:string="";
  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit()
  {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
           if (res.matches) {
             this.sidenav.mode = 'over';
             this.sidenav.close();
           } else {
             this.sidenav.mode = 'side';
             this.sidenav.open();
           }
         });
      
  }
  openDialog(): void {
   // this.dialog.open(MydialogComponent);

  }
  onKey(boxvalue:string)
  {
    console.log('onKey = ' + boxvalue);
  }
  ClickMe()
  {
    this.msg='Button is Clicked';
    return this.msg;
  }
  doSomething()
  {
    this.msg='Select Change';
    return this.msg;
  }
  onChangeDemo(ob:MatCheckboxChange)
  {
    console.log('Checked'+ob.checked);
  }
  radioChange(rd:MatRadioChange)
  {
    console.log('Change'+rd.value);
  }
  color='accent';
  checked='false';
  changed(){
    console.log(this.checked)
  }
  onChange(value:any){
    
  }


  

}




