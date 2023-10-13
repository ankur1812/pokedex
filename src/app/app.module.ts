import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app-component/app.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';
import { HttpClientModule } from '@angular/common/http';
// import { PokeSearchComponent } from './components/poke-search/poke-search.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PokeAccordionComponent } from './components/poke-accordion/poke-accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    // PokeSearchComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PokeAccordionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
