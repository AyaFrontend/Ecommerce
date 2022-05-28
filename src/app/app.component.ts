
import { Component } from '@angular/core';


declare let $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Online Foods';



  constructor() {}
  ngOnInit()
  {

   
    
    $(window).scroll(function(){
      let pos = $(window).scrollTop();
    
      if(pos >= 474)
      {
        $('.content').addClass('translate-animated')
       
        
        
      }
      if(pos >= 2000)
      {
        $('.links').addClass('x')
       
        $('.copy').addClass('x2')
        
      }
    })
         
  }
 
 
  

}
