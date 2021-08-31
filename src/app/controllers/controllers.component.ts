import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatRadioChange } from '@angular/material/radio';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface TestElement {
  id: number;
  isc: string;
  ise: string[];
  isv: string[];
  sc: string[];
  se: string[];
  sv: string[];
}
@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.scss']
})
export class ControllersComponent implements OnInit {
  title = 'CommonModule';
  fieldsList: string[] = ['input', 'button', 'select', 'slidder', 'slidetoggle'];
  eventList: string[] = ['keyup', 'change', 'keyupenter', 'blur'];
  validationList: string[] = ['required', 'disabled', 'placeholder', 'number', 'maxlength', 'minlength', 'email'];
  styleList: string[] = ['material ui', 'bootstrap'];
  template: any;
  style: any;
  total1: number = 0;
  total: any = [];
  max: number = 5;
  min: number = 0;
  invert: boolean = true;
  templateBootstrap: boolean = false;
  test: string = "";
  testcases = false;
  step: number = 0.5;
  row = 0;
  col = 0;
  displayedColumns: string[] = ['id', 'component', 'event', 'validation'];
  dataSource: TestElement[] = [];
  inputfields: TestElement[] = [];
  selectedComponent: string = "";
  selectedEvent: string = "";
  //For Radio Change
   hideTabMat:boolean=true;
   hideBootTab:boolean=true;
   hideCompTab:boolean=true;
   
   
 
 
  columnSnippet: string = "";
  materialCloseTag: string = "";
  materialCloseTagSnippet: string = "";
  materialTableSnippet: string = "";
  selectedValidation: string = "";
  htmlsnippet: string = "";
  subComponentSnipped: string = "";
  subEvents: string = "";
  subValidation: string = "";
  subComponentSnippedBs: string = "";
  bootstraphtmlsnippet: string = "";
  tssnippet: string = "";
  csssnippet: string = "";
  bscsssnippet: string = "";
  tssnippet1: string = "";
  tscodesnippet: string = "";
  importsnippet: string = "";
  bshtmlsnippet: string = "";
  subcomponentTag: string = "";
  tag: any;
  subcomponentTag2: string = "";
  tableHtml: string = "";
  tableCode: string = "";
  specsnippet: string = "";
  hidetable: boolean = true;
  hideValidation: boolean = false;
  hideUserInputCol: boolean = true;
  hideUserInputRow: boolean = true;
  hideUserInput: boolean = true;
  hideEvent: boolean = false;
  example: string = "slidder";
  thumbLabel: string = "slidder"
  selectedComponents: any = [];
  selectComponent: any;
  NoOfColumns: any;
  vertical: boolean = true;
  columns: any;
  value: string = "Hi";
  rows: any;
  NoOfRows: any;
  selectedEvents: any;
  isei: any;
  selectValidation: any;
  selectEvent: any;
  selectStyle: any;
  private httpClient: HttpClient;
  constructor(http: HttpClient, private observer: BreakpointObserver) {
    this.httpClient = http;
  }
  ngOnInit() {
    this.httpClient.get('assets/inputbs.json', { responseType: 'json' })
      .subscribe(data => {
        this.template = data;
        this.fieldsList = Object.keys(data);
        console.log(this.template)
        this.inputfields = [];
      })
  }
  onChange() {
    if (this.selectedComponent == "table") {
      this.hideEvent = true;
      this.hideValidation = true;
      this.hideUserInput = false;
    } else {
      this.hideEvent = false;
      this.hideValidation = false;
      this.hideUserInput = true;
      this.eventList = Object.keys(this.template[this.selectedComponent]["event"]);
      console.log(this.eventList)
      this.validationList = Object.keys(this.template[this.selectedComponent]["validation"]);
    }
  }
  btnClick() {
    this.htmlsnippet = JSON.stringify(this.template[this.selectedComponent]["html"]);
    this.bootstraphtmlsnippet = JSON.stringify(this.template[this.selectedComponent]["bootstraphtml"]);
    console.log(this.htmlsnippet);
    console.log(this.bootstraphtmlsnippet);
    if (this.selectedComponent == "table") {
      this.htmlsnippet = JSON.stringify(this.template[this.selectedComponent]["html"]);
      this.columnSnippet = JSON.stringify(this.template[this.selectedComponent]["column"]);
      this.materialCloseTag = JSON.stringify(this.template[this.selectedComponent]["MaterialClosetag"]);
      let tsTemplate: string = "";
      let specTemplate: string = "";
      //let controller: string = "";
      for (let i = 0; i < this.dataSource.length; i++) {
        this.subComponentSnipped = "";
        this.subComponentSnippedBs = "";
        let id = this.dataSource[i].id;
        let controller = this.dataSource[i].isc;
        this.subEvents = "";
        this.subValidation = "";
        this.tag = "";
        this.subComponentSnipped = this.subComponentSnipped + " " + JSON.stringify(this.template[this.dataSource[i].isc]["html"]);
        console.log(this.subComponentSnipped);
        this.subcomponentTag =  (JSON.stringify(this.template[this.dataSource[i].isc]["tag"])).split("\"").join("");
        console.log(this.subcomponentTag);
        this.subEvents = this.subEvents + " "+ JSON.stringify(this.template[this.dataSource[i].isc]["event"][this.dataSource[i].ise[0]]);
        console.log(this.subEvents);
        this.subComponentSnipped = this.subComponentSnipped.replace("<" + this.subcomponentTag, "<" + this.subcomponentTag + this.subEvents);
        console.log(this.subComponentSnipped)
        this.subValidation = this.subValidation + " " + JSON.stringify(this.template[this.dataSource[i].isc]["validation"][this.dataSource[i].isv[0]]);
        this.subComponentSnipped = this.subComponentSnipped.replace("<" + this.subcomponentTag, "<" + this.subcomponentTag + this.subValidation);
        console.log(this.subComponentSnipped)
        this.tableCode = this.tableCode + this.columnSnippet + this.subComponentSnipped + "</td></ng-container>"
        console.log(this.tableCode)
        this.tableHtml = this.tableHtml + "<tr class='row-span'><td>" + this.subComponentSnipped + "</td></tr>";
        console.log(this.tableHtml)
        //TS template and SPEC template
        tsTemplate = tsTemplate +" "+ JSON.stringify(this.template[this.dataSource[i].isc]["event"][this.dataSource[i].ise[0]]);
        console.log(tsTemplate)
      }
      this.tableHtml = this.tableHtml.replace(this.tableHtml, this.bootstraphtmlsnippet + this.tableHtml + "</table");
      console.log(this.tableHtml)

      let bootstrapHtmlTemplate = this.tableHtml.split('<').join("\n<");
      console.log(bootstrapHtmlTemplate);
      let materialTableTemplate = this.htmlsnippet + this.tableCode + this.materialCloseTag;
      this.htmlsnippet = materialTableTemplate.split('<').join("\n<");
      this.htmlsnippet = this.htmlsnippet.split("\"").join("");
      console.log(this.htmlsnippet)
      this.bootstraphtmlsnippet = bootstrapHtmlTemplate.split("\"").join("");
      tsTemplate = tsTemplate.split("\"").join("<br/>");
      this.tssnippet = tsTemplate;
      specTemplate = specTemplate.split(';').join("<br/>");
      specTemplate = specTemplate.split("\"").join("");
      this.specsnippet = specTemplate;
      console.log(this.bootstraphtmlsnippet)
    }
    else {
      let events: string = "";
      for (let i = 0; i < this.selectedEvents.length; i++) {
        events = events + " " + JSON.stringify(this.template[this.selectedComponent]["event"][this.selectedEvents[i]]);
      }
      console.log(events)
      console.log(this.template[this.selectedComponent]["tag"])
      this.htmlsnippet = this.htmlsnippet.replace("<" + this.template[this.selectedComponent]["tag"], "<" + this.template[this.selectedComponent]["tag"] + events);
      console.log(this.htmlsnippet)
      this.bootstraphtmlsnippet = this.bootstraphtmlsnippet.replace("<" + this.template[this.selectedComponent]["tag"], "<" + this.template[this.selectedComponent]["tag"] + events);

      //Validations template
      let validations: string = "";
      for (let i = 0; i < this.selectedValidation.length; i++) {
        validations = validations + " " + JSON.stringify(this.template[this.selectedComponent]["validation"][this.selectedValidation[i]]);
      }

      this.htmlsnippet = this.htmlsnippet.replace("<" + this.template[this.selectedComponent]["tag"], "<" + this.template[this.selectedComponent]["tag"] + validations);
      let htmlTemplate = this.htmlsnippet.split("\"").join("");
      this.bootstraphtmlsnippet = this.bootstraphtmlsnippet.replace("<" + this.template[this.selectedComponent]["tag"], "<" + this.template[this.selectedComponent]["tag"] + validations);
      let bootstrapHtmlTemplate = this.bootstraphtmlsnippet.split("\"").join("");


      //TS template and SPEC template
      let tsTemplate: string = "";
      let specTemplate: string = "";
      for (let i = 0; i < this.selectedEvents.length; i++) {
        tsTemplate = tsTemplate + " " + JSON.stringify(this.template[this.selectedComponent]["ts"][this.selectedEvents[i]]);
        specTemplate = specTemplate + "<br/><br/>\/\/Spec functionality for " + this.selectedEvents[i] + "<br/><br/>" + JSON.stringify(this.template[this.selectedComponent]["unittest"][this.selectedEvents[i]]);
      }

      tsTemplate = tsTemplate.split("\"").join("<br/>");
      this.tssnippet = tsTemplate;
      specTemplate = specTemplate.split(';').join("<br/>");
      specTemplate = specTemplate.split("\"").join("");
      this.specsnippet = specTemplate;
      htmlTemplate = htmlTemplate.split('>').join(">\n");
      this.htmlsnippet = htmlTemplate;
      this.bootstraphtmlsnippet = bootstrapHtmlTemplate;
      console.log(this.htmlsnippet)
    }
    let cssTmpt = JSON.stringify(this.template[this.selectedComponent]["css"]);

    this.csssnippet = cssTmpt.split("\"").join("");
    console.log(this.csssnippet)
    //this.bshtmlsnippet = JSON.stringify(this.template[this.selectedComponent]["bootstraphtml"]);
    let bscssTmp = JSON.stringify(this.template[this.selectedComponent]["bootstrapcss"]);
    this.bscsssnippet = bscssTmp;
    //console.log(this.bscsssnippet);
    this.tscodesnippet = JSON.stringify(this.template[this.selectedComponent]["tscode"]);
    //this.tscodesnippet = tscodeTmp.split("\"").join("");
    console.log(this.tscodesnippet);
    let importTmpt = JSON.stringify(this.template[this.selectedComponent]["import"]);
    this.importsnippet = importTmpt.split(";").join(";\n");
    console.log(this.importsnippet)
  }
  updateEvents(value: string, row: TestElement): void {
    this.inputfields = this.inputfields.filter(item => item.id !== row.id);
    let isc = Object.keys(this.template);
    let ist = Object.keys(this.template[value]["tag"]);
    let ise = Object.keys(this.template[value]["event"]);
    let isv = Object.keys(this.template[value]["validation"]);
    this.inputfields.push({
      id: row.id,
      isc: value,
      isv: [],
      ise: [],
      sc: row.sc,
      sv: isv,
      se: ise
    });
    this.inputfields.sort((a, b) => a.id - b.id);
    this.dataSource = this.inputfields;
    console.log(this.dataSource);
    console.log(isc)//all controllers
    console.log(isv)//selected controllers validations
    console.log(ise)//selected controllers events
  }
  radioButtonChanged(rd:MatRadioChange)
   {
     console.log("Radio Value",rd.value)
     if(rd.value =="material"){
      this.hideCompTab=false;
      this.hideTabMat=false;
      this.hideBootTab=true;
     }else{
       this.hideTabMat=true;
      this.hideCompTab=false;
      this.hideBootTab=false;
     }
   }
  addTableControls(row: any) {
    console.log(row)
    this.hidetable = false;
    let isc = Object.keys(this.template);
    for (let n = 1; n <= row; n++) {
      const td: TestElement = {
        id: n,
        isc: "",
        ise: [],
        isv: [],
        sc: isc,
        sv: [],
        se: []
      };
      this.inputfields.push(td);
    }
    this.dataSource = this.inputfields;
  }
}
