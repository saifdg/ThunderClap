import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Register } from '../model/register.model';
const httpOptions ={
  headers:new HttpHeaders({'content_type':'application/json'})
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  api:String ="url";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
