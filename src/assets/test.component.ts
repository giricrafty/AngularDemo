import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface TestElement {
  id: number;
  isc:string;
  ise:string[];
  isv:string[];
  sc: string[];
  se: string[];
  sv: string[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  displayedColumns: string[] = ['id', 'component', 'event', 'validation'];
  dataSource: TestElement[] = [];

  private httpClient: HttpClient;

  template: any;
  fieldsList: string[] =[];
  inputfields: TestElement[] =[];
  selectedComponent:string="";
  selectedEvent:string="";
  selectedValidation:string="";

  constructor(http: HttpClient) {
    this.httpClient = http;
  }
  ngOnInit() {
    this.httpClient.get('assets/input.json', { responseType: 'json' })
      .subscribe(data => {
        this.template = data;
        this.fieldsList = Object.keys(data);
        console.log(this.template)
      

      this.inputfields = [];
      let isc = Object.keys(this.template);
      for(let n=1; n<=3; n++)
      {
        const td: TestElement = {
          id: n,
          isc:"",
          ise:[],
          isv:[],
          sc: isc,
          sv: [],
          se: []
        };
        this.inputfields.push(td);
      }
      this.dataSource = this.inputfields;
    });

    }

    btnClick()
    {
      console.log(this.inputfields);
    }
    updateEvents(value:string, row:TestElement): void {
        this.inputfields = this.inputfields.filter(item => item.id !== row.id);
       
         
        let isc = Object.keys(this.template);
        let ise = Object.keys(this.template[value]["event"]);
        let isv = Object.keys(this.template[value]["validation"]);
      
        // for (const element of this.inputfields) {

        //   if (element.id === row.id) {
        //     const note = row.note;
        //     const doc = value;
        //     const amount = row.amount;
        //     this.documentselectedArray = this.documentselectedArray.filter(item => item.note !== note);
        //     this.documentselectedArray.push({
        //       note,
        //       include: true,
        //       documentType: doc,
        //       amount,
        //     });
        //   }
        // }

        this.inputfields.push({
          id: row.id,
          isc:value,
          isv:[],
          ise:[],
          sc: row.sc,
          sv: isv,
          se: ise
        });

        this.inputfields.sort((a,b)=> a.id-b.id);
        this.dataSource = this.inputfields;
    }
}

