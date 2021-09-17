import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonServiceService } from '../json-service.service';

@Component({
  selector: 'app-jpmc-project-link',
  templateUrl: './jpmc-project-link.component.html',
  styleUrls: ['./jpmc-project-link.component.scss']
})
export class JpmcProjectLinkComponent implements OnInit {

  constructor(private jsonServiceService:JsonServiceService,private route:Router){}
  callToJson(){
    this.jsonServiceService.getJson().subscribe(data=>{
      console.log(data);
    })
  }
    goToLink(url: string){
      window.open(url, "_blank");
  }
  ngOnInit(): void {
  }

}
