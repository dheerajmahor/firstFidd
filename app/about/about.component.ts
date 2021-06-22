import { Component, OnInit } from '@angular/core';
import { FirstfiddleService } from '../firstfiddle.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
//getdata;
newsdata;
  constructor(private firstfiddle:FirstfiddleService) { }

  ngOnInit(): void {
    //this.getdata=this.firstfiddle.stdData;
   // console.log(this.getdata);
   this.firstfiddle.getdata()
      .subscribe
      (
         data=>
         {
           this.newsdata =data.user;
           console.log(this.newsdata);
         }
      )
  }

}
