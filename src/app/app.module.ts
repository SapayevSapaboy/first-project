import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MalumotComponent } from './malumot/malumot.component';
import { MalumotRoutingModule } from './malumot/malumot-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { XivacityComponent } from './xivacity/xivacity.component';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { SearchPipe } from './search.pipe';
import { ViewComponent } from './component/view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    ModalComponent,
    MalumotComponent,
    HomeComponent,
    XivacityComponent,
    ContactListComponent,
    AddContactComponent,
    UpdateContactComponent,
    SearchPipe,
    ViewComponent,
    

    ], 
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MalumotRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
