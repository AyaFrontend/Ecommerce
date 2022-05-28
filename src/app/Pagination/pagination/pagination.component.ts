import {EventEmitter, Component, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit , OnChanges {
 @Input() current:number = 0;
 @Input() total:number = 0;

 @Output() previous : EventEmitter<number> = new EventEmitter<number>();
 @Output() next : EventEmitter<number> = new EventEmitter<number>();
 @Output() goTo : EventEmitter<number> = new EventEmitter<number>()


 Pages : number[] = [];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   
    if(changes['total'] && changes['total'].currentValue)
    {
      this.Pages = this.total >= 5? [...Array(5).keys()].map(x => x+1)
    :[...Array(this.total).keys()].map(x => x+1) ;
    
    }
  }
 


  ngOnInit(): void {
   
    
  }
 

onPrevious()
{
  
  this.previous.emit(this.current)
  
}

onNext()
{
  this.next.emit(this.current)
 
}

onGoTo(page:number)
{
  this.goTo.emit(page)

}
}
