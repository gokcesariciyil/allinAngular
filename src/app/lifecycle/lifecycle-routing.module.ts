import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifecycleComponent } from './lifecycle.component';


const routes: Routes = [
  {
    path: '/lifecycle',
    component: LifecycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/