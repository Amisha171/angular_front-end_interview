import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @ViewChild('commentForm') form: any;
  @ViewChild('phone') phone: any;
  constructor(private commentService: CommentService, private _snackBar: MatSnackBar) { }
  formData = {
    body: "",
    email: "",
    phone: null,
    name: "",
    postId: null
  }
  ngOnInit(): void {
  }

  submit() {
    if (this.phone?.value?.length === 16 && this.form.form.valid) {
      this._snackBar.open("Form has Successfully updated", 'close');
      this.commentService.setComment(this.formData);
    } else {
      this._snackBar.open("Form is Invalid", 'close');
    }
  }

}
