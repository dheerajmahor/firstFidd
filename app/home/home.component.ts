import { Component, OnInit } from '@angular/core';
import { FirstfiddleService } from '../firstfiddle.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsdata1;
  newsdata2;
  newsdata3;
  constructor(private firstfiddle:FirstfiddleService ) { }

  ngOnInit(): void {
    /* const url="http://127.0.0.1:8000/api/fetchdata"; */
    this.firstfiddle.getdata1()
    .subscribe
    (
       data=>
       {
         this.newsdata1 =data.user;
         console.log(this.newsdata1);
       }
    )
    this.firstfiddle.getdata2()
    .subscribe
    (
       data=>
       {
         this.newsdata2 =data.user;
         console.log(this.newsdata2);
       }
    )
    this.firstfiddle.getdata3()
    .subscribe
    (
       data=>
       {
         this.newsdata3 =data.user;
         console.log(this.newsdata3);
       }
    )
    
  }

}
