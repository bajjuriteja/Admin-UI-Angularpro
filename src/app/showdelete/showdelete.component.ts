import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showdelete',
  templateUrl: './showdelete.component.html',
  styleUrls: ['./showdelete.component.css']
})
export class ShowdeleteComponent implements OnInit {

  shid:number;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  deleteshow()
  {
    this.http.delete("http://localhost:8009/deleteRestShow/"+this.shid).subscribe((response)=>{console.log(response);});
  }



}
