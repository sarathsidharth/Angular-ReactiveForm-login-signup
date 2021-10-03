import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//table
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
//form
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio'
//card
import {MatCardModule} from '@angular/material/card';
//password icon
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,MatTableModule,MatFormFieldModule,MatSelectModule,MatInputModule,
    MatCardModule,MatButtonModule,MatRadioModule,MatIconModule
  ],
  exports:[
    CommonModule,MatToolbarModule,MatTableModule,MatFormFieldModule,MatSelectModule,MatInputModule,
    MatCardModule,MatButtonModule,MatRadioModule,MatIconModule
  ]
})
export class MaterialModule { }
