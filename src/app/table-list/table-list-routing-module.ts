import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from '../update/update.component';

const routes: Routes = [
  { path: 'update', component: UpdateComponent },

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TableListRoutingModule { }
