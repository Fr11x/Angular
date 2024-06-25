import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndexComponent } from './page-index/page-index.component'; 
import { PageConnectionComponent } from './page-connection/page-connection.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageIngredientComponent } from './page-ingredient/page-ingredient.component';
import { PageIngredientAdminComponent } from './page-ingredient-admin/page-ingredient-admin.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageUserAdminComponent } from './page-user-admin/page-user-admin.component';
import { PageCalculComponent } from './page-calcul/page-calcul.component';

const routes: Routes = [
  {path: '', component: PageIndexComponent },
  {path:"login",component:PageConnectionComponent},
  {path:"inscription", component: PageInscriptionComponent},
  {path:"ingredients", component: PageIngredientComponent},
  {path:"ingredients-admin", component: PageIngredientAdminComponent},
  {path:"user", component: PageUserComponent},
  {path:"user-admin", component: PageUserAdminComponent},
  {path:"calcul", component: PageCalculComponent}


];


@NgModule({
  declarations: [],
  imports: 
  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
