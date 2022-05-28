import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
 private isLoaderSubject  = new BehaviorSubject<boolean>(false);
  constructor() { }

  ShowLoader():void{
    this.isLoaderSubject.next(true);
  }

  
  HiddenLoader():void{
    this.isLoaderSubject.next(false);
  }

  get isLoading()
  {
    return this.isLoaderSubject.asObservable();
  }
}
