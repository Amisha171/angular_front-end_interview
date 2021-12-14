import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CommentService } from 'src/app/services/comment.service';
import { EditCommentComponent } from '../edit-comment/edit-comment.component';

@Component({
  selector: 'app-comment-data',
  templateUrl: './comment-data.component.html',
  styleUrls: ['./comment-data.component.scss']
})
export class CommentDataComponent implements OnInit {
  comments: any = [];
  commentsResponse: any = [];
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(response=>{
      this.comments = response.slice(0,10);
      this.commentsResponse = response;
    })
  }

  pageChanged(event: PageChangedEvent) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.comments = this.commentsResponse.slice(startItem, endItem);
  }

  openEditModal(e:any) {
    this.bsModalRef = this.modalService.show(EditCommentComponent,e);
    this.bsModalRef.content = {data: e, closeBtnName:'Close', title:'Edit Component'};
  }

}
