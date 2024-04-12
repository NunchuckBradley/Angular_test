import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { HeaderComponent } from './header/header.component';

// Providers
import { Constants } from './constants';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
