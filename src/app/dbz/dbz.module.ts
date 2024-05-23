import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from "./pages/main-page.component";
import { DbzListComponent } from './components/list/dbz-list.component';
import { DbzAddCharacterComponent } from './components/dbz-add-character/dbz-add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzAddCharacterComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DecimalPipe]
})
export class DbzModule { }
