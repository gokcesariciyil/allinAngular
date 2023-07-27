import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { LifecycleComponent } from './lifecycle.component';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    LifecycleRoutingModule,
    FormsModule
  ],
  declarations: [LifecycleComponent]
})
export class LifecycleModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/