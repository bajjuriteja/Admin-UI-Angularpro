import { Component, OnInit } from '@angular/core';
import { Theater } from './theater.model';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  message:string="";

  t:Theater=new Theater();

  constructor(private http:HttpClient) { 

        

  }

  ngOnInit(): void {
  }
  add()
  {
    this.http.post("http://localhost:8090/addTheater",this.t,{responseType:"text"}).subscribe((re)=>{this.message=re;console.log(re);});

  }


  }
