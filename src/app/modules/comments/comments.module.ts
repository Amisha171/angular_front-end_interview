import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatIconModule } from '@angular/material/icon';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditCommentComponent } from 'src/app/pages/edit-comment/edit-comment.component';
import { OnlyNumbersDirective } from 'src/app/directives/only-numbers.directive';
import { PhoneMaskDirective } from 'src/app/directives/phone-mask.directive';
import { CommentDataComponent, CommentFormComponent } from 'src/app/pages';
import { CommentService } from 'src/app/services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [EditCommentComponent, OnlyNumbersDirective, PhoneMaskDirective, CommentDataComponent, CommentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatBadgeModule,
    PaginationModule,
    MatIconModule,
    ModalModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports: [EditCommentComponent, OnlyNumbersDirective, PhoneMaskDirective, CommentDataComponent, CommentFormComponent],
  providers:[CommentService]
})
export class CommentsModule { }
