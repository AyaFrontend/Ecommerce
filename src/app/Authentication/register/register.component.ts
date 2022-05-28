import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm : any;
  hidden = true;
  errorMessage :string = '';
  constructor(private _auth : AuthService , private _router:Router ) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      first_name : new FormControl(null , [Validators.required , 
      Validators.pattern(/[a-zA-Z][^0-9]{3,}/) ]) ,
      last_name : new FormControl(null , [Validators.required ,
        Validators.pattern(/[a-zA-Z][^0-9]{3,}/) ]),
      email : new FormControl(null ,[Validators.required , Validators.email]),
      password : new FormControl(null , [Validators.required , Validators.pattern(/[a-zA-Z0-9]{6,}/)])

    });
  }

  register(registerForm : FormGroup):void{

       this._auth.Register(registerForm.value).subscribe(res=>
        {
          
          res.message == 'success' ? this._router.navigateByUrl('/login') :this.errorMessage = res.errors.email.message
          console.log(res.message)
        },
        err=>
        {
          console.log(err)
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
          this.errorMessage =propName + ' Pattern is invalid';
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
