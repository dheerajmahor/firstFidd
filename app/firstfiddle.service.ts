import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirstfiddleService {
  url="http://127.0.0.1:8000/api/alldata";
  url1="http://127.0.0.1:8000/api/fetchwimg";
  url2="http://127.0.0.1:8000/api/fetchdata1";
  url3="http://127.0.0.1:8000/api/fetchdata2";
  constructor(private http: HttpClient) { }
 /*  stdData:any[]=[

    {id:1,name:'vikas',email:'jain@gmail.com',address:'Gwalior'},
    {id:2,name:'mohit',email:'jain@gmail.com',address:'Bhind'},
    {id:3,name:'viki',email:'jain@gmail.com',address:'Etawah'},
    {id:4,name:'ram',email:'jain@gmail.com',address:'Delhi'},
    
  ]; */
  getdata():Observable<any>{
   return this.http.get(this.url)

  }
  getdata1():Observable<any>{
   return this.http.get(this.url1)

  }
  getdata2():Observable<any>{
   return this.http.get(this.url2)

  }
  getdata3():Observable<any>{
   return this.http.get(this.url3)

  }
}
