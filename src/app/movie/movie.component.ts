import { Component, OnInit } from '@angular/core';
import { movie } from './movie.component.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {



  m:movie=new movie();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  addmovie()
  {
    this.http.post('http://localhost:8009/addRestMovie',this.m).subscribe((response)=>{console.log(response);})
  }

}
