import { LoaderService } from './../../Services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading! : boolean;
  constructor(private loading: LoaderService) {
    this.loading.isLoading.subscribe(isLoading=>
      {
        this.isLoading = isLoading;
      })
    
   }

  ngOnInit(): void {
  

  }

}
