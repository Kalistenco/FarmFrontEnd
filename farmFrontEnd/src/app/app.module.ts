import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { ChickensListComponent } from './chickens-list/chickens-list.component';
import { FarmsCreateComponent } from './farms-create/farms-create.component';
import { ChickensCreateComponent } from './chickens-create/chickens-create.component';
import { ChickensUpdateComponent } from './chickens-update/chickens-update.component'

@NgModule({
  declarations: [
    AppComponent,
    FarmsListComponent,
    ChickensListComponent,
    FarmsCreateComponent,
    ChickensCreateComponent,
    ChickensUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
