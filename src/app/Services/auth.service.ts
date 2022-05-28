import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './../Models/user';
import { Injectable } from '@angular/core';
import { UserLoginData } from '../Models/UserLoginData';
import { LoginResponse } from '../Models/LoginResponse';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  Message: string ='';
 userData  = new BehaviorSubject(null);
  constructor(private _http:HttpClient , private _router:Router) { 
    localStorage.getItem('token')!= null?this.setUserData():null;
  }

  Register(userData: User) :Observable<any>{
     
    return   this._http.post(environment.AUTH_BASE_URL + 'signup' , userData);
  }

  Login(logData:UserLoginData):Observable<LoginResponse>
  {
  
    return this._http.post(environment.AUTH_BASE_URL + 'signin' , logData) as Observable<LoginResponse>;
  }

  setUserData():void{
    localStorage.getItem('token')?this.userData.next(jwtDecode(localStorage.getItem('token')!)):null;
    console.log(this.userData.getValue())
  }

  Logout():void{
    localStorage.removeItem('token');
    this.userData.next(null);
    this._router.navigate(['login']);
  }

  
}

