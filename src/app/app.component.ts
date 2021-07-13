import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CommonModule';
  fieldsList: string[] = ['input', 'button', 'select', 'modal', 'tooltip'];
  eventList: string[] = ['keyup','change','keyupenter', 'blur'];
  validationList: string[] = ['required', 'placeholder', 'hint','mismatch', 'invalid'];
  template:any;

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
  onKey() {
    console.log('test confirm for keyupUnitTest');
  }
  onKeyEnter() {
    console.log('test confirm for keyupenterTest');
  }

  btnClick()
  {
    this.httpClient.get('assets/input.json', { responseType: 'json' })
      .subscribe(data => {
      this.template=data;

      //Component Base template
      switch (this.selectedComponent[0]) {
          case 'input':
              this.htmlsnippet = JSON.stringify(this.template.input.html.basic);
              this.tssnippet = JSON.stringify(this.template.input.validation);
              this.specsnippet = JSON.stringify(this.template.input.unittest);
              break;
          case 'button':
              console.log("It is a button.");
              break;
          case 'select':
              console.log("It is a select.");
              break;
          case 'table':
              console.log("It is a table.");
              break;
          default:
              console.log("No such day exists!");
              break;
      }

      //Events html template
      let events:string ="";
      for(let i=0;i<this.selectedEvents.length;i++)
      {
        switch (this.selectedEvents[i]) {
          case 'keyup':
              events=events+" "+JSON.stringify(this.template.input.html.keyup);
              break;
          case 'keyupenter':
              events=events+" "+JSON.stringify(this.template.input.html.keyupenter);
              break;
          case 'blur':
              events=events+" "+JSON.stringify(this.template.input.html.blur);
              break;
          case 'change':
              events=events+" "+JSON.stringify(this.template.input.html.change);
              break;
          default:
              console.log("No such day exists!");
              break;
        }        
      }

      this.htmlsnippet = this.htmlsnippet.replace("<"+this.selectedComponent[0],"<"+this.selectedComponent[0]+events);
      
      //Validations template
      let validations:string ="";
      for(let i=0;i<this.selectedValidation.length;i++)
      {
        switch (this.selectedValidation[i]) {
          case 'required':
            validations=validations+" "+JSON.stringify(this.template.input.validation.required);
            break;          
          default:
            console.log("No such day exists!");
            break;
        }        
      }

      this.htmlsnippet = this.htmlsnippet.replace("<"+this.selectedComponent[0],"<"+this.selectedComponent[0]+validations);
      this.htmlsnippet = this.htmlsnippet.split("\"").join("");
      
      //TS template and SPEC template
      let tsTemplate:string ="";
      let specTemplate: string = "";
      for(let i=0;i<this.selectedEvents.length;i++)
      {
        switch (this.selectedEvents[i]) {
          case 'keyup':
            tsTemplate=tsTemplate+" "+JSON.stringify(this.template.input.ts.keyup);
            specTemplate = specTemplate+"<br/>Spec functionality for keyup Event: <br/><br/>"+JSON.stringify(this.template.input.unittest.keyupUnitTest)
            break;
          case 'keyupenter':
            tsTemplate=tsTemplate+" "+JSON.stringify(this.template.input.ts.keyupenter);
            specTemplate = specTemplate+"<br/> Spec functionality for keyupenter Event: <br/><br/>"+JSON.stringify(this.template.input.unittest.keyupenterTest);
            break;
          case 'blur':
            tsTemplate=tsTemplate+" "+JSON.stringify(this.template.input.ts.blur);
            specTemplate = specTemplate+"<br/> Spec functionality for blur Event: <br/><br/>"+JSON.stringify(this.template.input.unittest.blurTest)
            break;
          case 'change':
            tsTemplate=tsTemplate+" "+JSON.stringify(this.template.input.ts.change);
            specTemplate = specTemplate+"<br/> Spec functionality for change Event: <br/><br/>"+JSON.stringify(this.template.input.unittest.changeTest)
            break;
          default:
            console.log("No such day exists!");
            break;
        }        
      }
      
      tsTemplate = tsTemplate.split("\"").join("<br/>");
      this.tssnippet = tsTemplate;
      specTemplate = specTemplate.split(';').join("<br/>");
      this.specsnippet = specTemplate;

    });
  }
}