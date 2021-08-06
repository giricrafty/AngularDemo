import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'CommonModule';
  fieldsList: string[] = ['input', 'button', 'select', 'slidder', 'slidetoggle'];
  eventList: string[] = ['keyup', 'change', 'keyupenter', 'blur'];
  validationList: string[] = ['required', 'disabled', 'placeholder', 'number', 'maxlength', 'minlength', 'email'];
  styleList: string[] = ['material ui', 'bootstrap'];
  template: any;
  style: any;
  total:any;

  templateBootstrap: boolean = false;
  test: string = "";
  testcases = false;

  htmlsnippet: string = "";
  bootstraphtmlsnippet: string = "";
  tssnippet: string = "";
  specsnippet: string = "";
  hideValidation: boolean = false;
  hideUserInputCol: boolean = true;
  hideUserInputRow: boolean = true;
  hideUserInput: boolean = true;
  hideEvent: boolean = false;
  selectedComponent: any;
  NoOfColumns:any;
  columns:any;
  rows:any;
  NoOfRows:any;
  selectedEvents: any;
  selectedValidation: any;
  selectStyle: any;

  private httpClient: HttpClient;
  constructor(http: HttpClient) {
    this.httpClient = http;
  }
  ngOnInit() {
    this.httpClient.get('assets/input.json', { responseType: 'json' })
      .subscribe(data => {
        this.template = data;
        this.fieldsList = Object.keys(data);
        console.log(this.template)
      });
    // this.httpClient.get('assets/bootstrap.json', {responseType:'json'})
    // .subscribe(data =>{
    //   this.templateBootstrap = data;
    //   this.fieldsList=Object.keys(data);
    //   console.log(this.templateBootstrap)
    // })
  }
  onChange() {
    if (this.selectedComponent == "table") {
      this.hideEvent = true;
      this.hideValidation = true;
      this.hideUserInput = false;
      console.log(this.selectedComponent, "HI")

    } else {
      this.hideEvent = false;
      this.hideValidation = false;
      this.hideUserInput = true;
      this.eventList = Object.keys(this.template[this.selectedComponent]["event"]);
      console.log(this.eventList)
      this.validationList = Object.keys(this.template[this.selectedComponent]["validation"]);
    }
  }
  btnNavigate() {
    this.testcases = !this.testcases;
  }

  generateForm() {
    window.open("file:///C:Test/test.bat");
  }

  btnClick() {

    // this.style = JSON.stringify(this.template[this.selectedComponent]["style_language"][this.selectStyle[i]]);
    this.htmlsnippet = JSON.stringify(this.template[this.selectedComponent]["html"]);
    this.bootstraphtmlsnippet = JSON.stringify(this.template[this.selectedComponent]["bootstraphtml"]);

    //Events html template
    let events: string = "";
    for (let i = 0; i < this.selectedEvents.length; i++) {
      events = events + " " + JSON.stringify(this.template[this.selectedComponent]["event"][this.selectedEvents[i]]);
    }

    this.htmlsnippet = this.htmlsnippet.replace("<" + this.template[this.selectedComponent]["tag"], "<" + this.template[this.selectedComponent]["tag"] + events);
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
    this.htmlsnippet = htmlTemplate;
    this.bootstraphtmlsnippet = bootstrapHtmlTemplate;

  }
  askControllers(a:any,b:any){
    
    console.log(this.total,"total")
    console.log(a,b) 
    this.total= new Array((a*b));
    console.log(this.total)
  
  }
}
