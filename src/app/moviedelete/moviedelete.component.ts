import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-moviedelete',
  templateUrl: './moviedelete.component.html',
  styleUrls: ['./moviedelete.component.css']
})
export class MoviedeleteComponent implements OnInit {

  mid:number;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  deletemovie()
  {
    this.http.delete("http://localhost:8009/deleteRestMovie/"+this.mid).subscribe((response)=>{console.log(response);});
  }


}
