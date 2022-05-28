import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' ]
})
export class LoginComponent implements OnInit {

  hidden = true;
  errorMessage :string = '';
  loginForm : any;

  
  constructor(private auth: AuthService , private _router : Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null , [Validators.required , Validators.email]),
      password : new FormControl(null , [Validators.required , Validators.pattern(/[a-zA-Z0-9{6,}]/)])
    });
  }

  Login(loginData : FormGroup)
  {
    this.auth.Login(loginData.value).subscribe(res=>
      {
       if(!res.token )
         {
           this.hidden = false;
           this.errorMessage = res.message;
        }
        else{
          localStorage.setItem('token' ,JSON.stringify(res.token))
          this.auth.setUserData();
          this._router.navigateByUrl('home');
        }
      });
  }

  validation(propName : string , formControl : FormGroup) : void
  {
    let control : any;
    control = formControl.get(propName);
   
     
      if(formControl.get(propName)?.touched && formControl.get(propName)?.errors != null)
      {
        console.log(formControl
          )
         this.hidden = false;
         if( control?.errors["required"])
         {
           this.errorMessage =propName + ' is required';
         }
         else if(control?.errors["pattern"])
         {
          this.errorMessage =propName + ' Passowrd or email is invalid';
         }
         else{
           this.errorMessage = 'there ara an error'
         }
         
        }
      
    
       
  }
  alertHide() : void
  {
    this.hidden = true
  }
}
