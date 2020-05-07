import { Component, OnInit } from '@angular/core';
import { screen } from './screen.component.model';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  theater_theaterid:number;

  s :screen = new screen();





  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {
  }

  addscreen()
  {
    this.http.post('http://localhost:8009/addRestScreen/'+this.theater_theaterid,this.s).subscribe((response)=>{console.log(response);});
  }





}
