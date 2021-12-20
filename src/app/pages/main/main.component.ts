import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  commentsResponse: any = [];
  ngOnInit(): void {
    this.commentService.getComments().pipe(
      take(1),
    ).subscribe(response => {
      // this.comments = response.slice(0, 10);
      this.commentsResponse = response;
      console.log(this.commentsResponse);
    }, error => {
      console.log('Error Code : ', Error);
    })
  }

}
