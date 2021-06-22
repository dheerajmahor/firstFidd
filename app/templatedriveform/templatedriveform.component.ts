import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriveform',
  templateUrl: './templatedriveform.component.html',
  styleUrls: ['./templatedriveform.component.css']
})
export class TemplatedriveformComponent implements OnInit {
url="http://127.0.0.1:8000/api/insert";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
  }
  onSubmit(userForm){
   // console.log(userForm);
   this.http.post(this.url,userForm) .subscribe
   (
      data=>
      {
       
        console.log(data);
      }
   )
   
      
  }
}
