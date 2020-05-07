import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-theaterdelete',
  templateUrl: './theaterdelete.component.html',
  styleUrls: ['./theaterdelete.component.css']
})
export class TheaterdeleteComponent implements OnInit {


  thid:number;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  deleteTheater()
  {
    this.http.delete("http://localhost:8009/deleteRestTheater/"+this.thid).subscribe((response)=>{console.log(response);});
  }


}
