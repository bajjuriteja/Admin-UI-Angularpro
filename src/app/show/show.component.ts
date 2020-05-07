import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Show } from './show.component.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  screen_screenid:number;

  sh :Show=new Show();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  addshow()
  {
      this.http.post('http://localhost:8009/'+this.screen_screenid,this.sh).subscribe((response)=>{console.log(response);});
  }

}
