import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AppModule } from '../app.module';


@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FormsModule,
    AppModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/