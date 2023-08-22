import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAngularComponent } from './pipes-angular/pipes-angular.component';
import { TextoComponent } from './texto/texto.component';
import { NumerosoComponent } from './numeroso/numeroso.component';



@NgModule({
  declarations: [
    PipesAngularComponent,
    TextoComponent,
    NumerosoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PipesAngularComponent]
})
export class PipesModule { }
