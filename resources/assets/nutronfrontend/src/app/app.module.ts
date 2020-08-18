import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VisaoComponent } from './visao/visao.component';
import { routing } from './app.routing';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { AppRoutingModule, routingComponents } from './app-route.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
