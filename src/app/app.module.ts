import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './utilisateurs/accueil/accueil.component';
import { AproposComponent } from './utilisateurs/apropos/apropos.component';
import { ProjetsComponent } from './utilisateurs/projets/projets.component';
import { BlogComponent } from './utilisateurs/blog/blog.component';
import { DetailsBlogComponent } from './utilisateurs/details-blog/details-blog.component';
import { ContactComponent } from './utilisateurs/contact/contact.component';
import { ConditionUtilisationComponent } from './utilisateurs/condition-utilisation/condition-utilisation.component';
import { PolitiqueConfidentialiteComponent } from './utilisateurs/politique-confidentialite/politique-confidentialite.component';
import { DashboardAdminComponent } from './utilisateurs/dashboard-admin/dashboard-admin.component';
import { DashboardBailleurComponent } from './bailleur/dashboard-bailleur/dashboard-bailleur.component';
import { DashboardPorteurProjetComponent } from './porteur-projet/dashboard-porteur-projet/dashboard-porteur-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    AproposComponent,
    ProjetsComponent,
    BlogComponent,
    DetailsBlogComponent,
    ContactComponent,
    ConditionUtilisationComponent,
    PolitiqueConfidentialiteComponent,
    DashboardAdminComponent,
    DashboardBailleurComponent,
    DashboardPorteurProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
