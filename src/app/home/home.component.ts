import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    data:any=''
  constructor(private router:Router){}
  
  rep(){
    new Observable((observer)=>{
      setTimeout(()=>{
        observer.next("wait for 5 sec")
      },3000)

      setTimeout(()=>{
        observer.next("loading packages")
      },6000)

      setTimeout(()=>{
        observer.next("yahh its ready")

      },8000)
    })
    .subscribe(( routes :any)=>{
      this.data= routes;
    })
  }
    
  
    
  
  

  

  contact(){
    this.router.navigate(['contact'])
  }
}
  