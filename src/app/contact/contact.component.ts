import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
  // styleUrls: ['./contact.component.css']
})
export class ContactComponent {
   tittle='service-project';
  data:any=''
  constructor(private router:Router){}

  that(){
    new Observable((observer)=>{
      setTimeout(()=>{ 
      observer.next('3 seconds')
      },3000);
      
      setTimeout(()=>{
        observer.next('2 seconds')
      },5000);
      setTimeout(()=>{
        observer.next('1 seconds')
      },7000);

    })
    .subscribe((routes : any) => {
      this.data = routes; 
  })
}
  

// constructor(private router:Router){}

  about(){
    this.router.navigate(['home'])
  }

}
   