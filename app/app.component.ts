import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Title:string;
  Author:string;
  Delete:string="X";
  rows=[];
  input1(event){
    this.Title=event.target.value;
    return this.Title;
  }
  input2(event){
    this.Author=event.target.value;
    return this.Author;
  }
  add(){
    this.rows.push( {Title: this.Title, Author: this.Author,Delete:this.Delete});
  }
}
