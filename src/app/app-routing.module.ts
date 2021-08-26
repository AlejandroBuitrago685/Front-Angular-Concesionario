import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarIndexComponent } from './Components/Car/car-index/car-index.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component:  IndexComponent},
  { path: 'car', component:  CarIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
