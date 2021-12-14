import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  URL = 'https://jsonplaceholder.typicode.com/comments';

  getComments():Observable<any> {
    return this.http.get(this.URL);
  }

  setComment(data: any) {
    //return this.http.post(this.URL, data);
    console.log(data,' POST DATA')
  }
}
