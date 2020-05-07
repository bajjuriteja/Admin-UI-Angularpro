import { Component, OnInit } from '@angular/core';
import { Theater } from './theater.model';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  

  t:Theater=new Theater();

  constructor(private http:HttpClient) { 

        

  }

  ngOnInit(): void {
  }
  add()
  {
    this.http.post("http://localhost:8009/addTheater",this.t).subscribe((response)=>{console.log(response)});

  }


  }
