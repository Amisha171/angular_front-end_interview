import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    console.log(this.bsModalRef,'15::')
  }

}
