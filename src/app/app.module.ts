import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth-guard.guard';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
