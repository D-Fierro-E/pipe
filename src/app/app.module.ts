import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesModule } from './components/pipes/pipes.module';
import { TextoComponent } from './components/pipe/texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent ,
    
  ],
  imports: [
    BrowserModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
