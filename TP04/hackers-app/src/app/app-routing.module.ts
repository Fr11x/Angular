import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PageAProposComponent } from './page/page-a-propos/page-a-propos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'a-propos', component: PageAProposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
