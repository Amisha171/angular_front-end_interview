import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
 import { MainComponent } from '..';
import { CommentsModule } from '../../modules/comments/comments.module';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    FormsModule,
    CommentsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
