import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';

import {MatBadgeModule} from '@angular/material/badge';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {MatIconModule} from '@angular/material/icon';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommentDataComponent, CommentFormComponent, MainComponent } from '..';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';
import { OnlyNumbersDirective } from './../../directives/only-numbers.directive';
import { PhoneMaskDirective } from './../../directives/phone-mask.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [MainComponent,CommentDataComponent, CommentFormComponent, EditCommentComponent, OnlyNumbersDirective, PhoneMaskDirective],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    MatBadgeModule,
    MatIconModule,
    ModalModule.forRoot(),
    FormsModule,
    MatSnackBarModule
  ]
})
export class MainModule { }
