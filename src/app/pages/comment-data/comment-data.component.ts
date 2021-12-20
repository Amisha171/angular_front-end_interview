import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { CommentService } from 'src/app/services/comment.service';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';
import { take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comment-data',
  templateUrl: './comment-data.component.html',
  styleUrls: ['./comment-data.component.scss']
})
export class CommentDataComponent implements OnInit {

  @Input() commentsResponse = [];
  comments: any = [];
  constructor( private commentService: CommentService, 
    public dialog: MatDialog, private _snackbar: MatSnackBar) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(response=>{
      this.comments = response.slice(0,10);
      this.commentsResponse = response;
    }, (err) => {
      this._snackbar.open('Error getting comments ');
    });
  }

  pageChanged(event: PageChangedEvent) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.comments = this.commentsResponse.slice(startItem, endItem);
  }

  openEditModal(e: any) {
    const dialogRef = this.dialog.open(EditCommentComponent, {
      width: '1000px',
      data: { data: e, closeBtnName: 'Close', title: 'Edit Component' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }, (err) => {
      console.log(':: Error Closing ');
    });
  }


}
