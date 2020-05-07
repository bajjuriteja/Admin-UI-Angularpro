import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-screendelete',
  templateUrl: './screendelete.component.html',
  styleUrls: ['./screendelete.component.css']
})
export class ScreendeleteComponent implements OnInit {

  sid:number;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  deletescreen()
  {
    this.http.delete("http://localhost:8009/deleteRestScreen/"+this.sid).subscribe((response)=>{console.log(response);});
  }


}
