import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { StripHtmlPipe } from './pipes/strip-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StripHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  exports:[StripHtmlPipe],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://api.tvmaze.com/singlesearch/shows?q=%20%20%20||%20%20https://api.tvmaze.com/search/shows?q=