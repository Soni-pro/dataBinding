import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';
  serverElements=[{type:'server', name:'soni', content:'testing'}];


  // newServerName: any='';
  // newServerContent: any='';
  // addname:any;
  // addcontent:any;
  // serverElements:any=[];
  

  // addServer(){
  //   this.serverElements.push({
  //     type:'server',
  //     name:this.newServerName,
  //     content:this.newServerContent
  //   });
  // }

  // addServerContent(){
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name:this.newServerName,
  //     content:this.newServerContent
  //   });
  // }
}
