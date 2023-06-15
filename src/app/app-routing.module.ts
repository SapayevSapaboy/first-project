import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { MalumotComponent } from "./malumot/malumot.component";
import { HeaderComponent } from "./header/header.component";
import { ProductsComponent } from "./products/products.component";
import { HomeComponent } from "./home/home.component";
import { XivacityComponent } from "./xivacity/xivacity.component";
import { ContactListComponent } from "./component/contact-list/contact-list.component";
import { AddContactComponent } from "./component/add-contact/add-contact.component";
import { UpdateContactComponent } from "./component/update-contact/update-contact.component";
import { ViewComponent } from "./component/view/view.component";


const AppRoute: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'malumot', component: MalumotComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'xivacity', component: XivacityComponent },
  { path: 'contactlist', component: ContactListComponent },
  { path: 'contact/:id/view', component: ViewComponent },
  { path: 'addcontact', component: AddContactComponent },
  { path: 'updatecontact/:id', component: UpdateContactComponent }

]
@NgModule({
  imports: [
    RouterModule.forRoot(AppRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}