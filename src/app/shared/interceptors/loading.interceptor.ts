import { LoaderService } from './../../Services/loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
 bindingRequest : number =0;
  constructor(private loading : LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
    this.loading.ShowLoader();
    this.bindingRequest +=1;

    return next.handle(request).pipe(
      tap(
        {
          next: (event)=> {
            if(event.type === HttpEventType.Response)
            {
              this.handleHideLoading();
            }
           
         },
         error: (_)=>
         {
           this.handleHideLoading();
         }
        }
      )
    );
  }

  handleHideLoading()
  {
    this.bindingRequest -=1;
    if(this.bindingRequest ==0)
    this.loading.HiddenLoader();
  }
}
