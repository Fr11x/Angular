import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { AppRoutingModule } from './app-routing.module';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageConnectionComponent } from './page-connection/page-connection.component';
import { PageIngredientComponent } from './page-ingredient/page-ingredient.component';
import { PageIngredientAdminComponent } from './page-ingredient-admin/page-ingredient-admin.component';
import { PageUserAdminComponent } from './page-user-admin/page-user-admin.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageCalculComponent } from './page-calcul/page-calcul.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageIndexComponent,
    PageInscriptionComponent,
    PageConnectionComponent,
    PageIngredientComponent,
    PageIngredientAdminComponent,
    PageUserAdminComponent,
    PageUserComponent,
    PageCalculComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
