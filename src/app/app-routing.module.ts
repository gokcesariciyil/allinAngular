import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path: 'gallery',
    loadChildren: ()=> import('./gallery/gallery.module').then(m=>m.GalleryModule)
  },
  {
    path: 'lifecycle',
    loadChildren: ()=> import('./lifecycle/lifecycle.module').then(m=>m.LifecycleModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
