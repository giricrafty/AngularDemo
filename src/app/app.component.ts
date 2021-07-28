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
  eventList: string[] = ['keyup','change','keyupenter', 'blur'];
  validationList: string[] = ['required', 'disabled','placeholder','number','maxlength','minlength','email'];
  template:any;

  test:string ="";
  testcases=false;
  htmlsnippet: string = "";
  tssnippet: string = "";  
  specsnippet: string = "";

  selectedComponent:any;
  selectedEvents:any;
  selectedValidation:any;

  private httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  ngOnInit(){
    this.httpClient.get('assets/input.json', { responseType: 'json' })
    .subscribe(data => {
      this.template=data;
      this.fieldsList = Object.keys(data);
    });
  }  

  onChange()
  {
      this.eventList = Object.keys(this.template[this.selectedComponent]["event"]);
      this.validationList = Object.keys(this.template[this.selectedComponent]["validation"]);
  }

  btnNavigate()
  {
    this.testcases = !this.testcases;
  }

  generateForm()
  {
    window.open("file:///C:Test/test.bat");
  }

  btnClick()
  {
      this.htmlsnippet = JSON.stringify(this.template[this.selectedComponent]["html"]);

      //Events html template
      let events:string ="";
      for(let i=0;i<this.selectedEvents.length;i++)
      {
        events=events+" "+JSON.stringify(this.template[this.selectedComponent]["event"][this.selectedEvents[i]]);              
      }

      this.htmlsnippet = this.htmlsnippet.replace("<"+this.template[this.selectedComponent]["tag"],"<"+this.template[this.selectedComponent]["tag"]+events);
      
      //Validations template
      let validations:string ="";
      for(let i=0;i<this.selectedValidation.length;i++)
      {
        validations=validations+" "+JSON.stringify(this.template[this.selectedComponent]["validation"][this.selectedValidation[i]]);               
      }

      this.htmlsnippet = this.htmlsnippet.replace("<"+this.template[this.selectedComponent]["tag"],"<"+this.template[this.selectedComponent]["tag"]+validations);
      let htmlTemplate = this.htmlsnippet.split("\"").join("");
      
      //TS template and SPEC template
      let tsTemplate:string ="";
      let specTemplate: string = "";
      for(let i=0;i<this.selectedEvents.length;i++)
      {
          tsTemplate=tsTemplate+" "+JSON.stringify(this.template[this.selectedComponent]["ts"][this.selectedEvents[i]]);
          specTemplate = specTemplate+"<br/><br/>\/\/Spec functionality for "+this.selectedEvents[i]+"<br/><br/>"+JSON.stringify(this.template[this.selectedComponent]["unittest"][this.selectedEvents[i]]);
      }
      
      tsTemplate = tsTemplate.split("\"").join("<br/>");
      this.tssnippet = tsTemplate;
      specTemplate = specTemplate.split(';').join("<br/>");
      specTemplate = specTemplate.split("\"").join("");
      this.specsnippet = specTemplate;
      this.htmlsnippet = htmlTemplate;
  }
}
