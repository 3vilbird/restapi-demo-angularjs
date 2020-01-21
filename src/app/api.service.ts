import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpParams} from '@angular/common/http';
import {Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient)  {  }
  getcomments(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
put(opost: Post ): Observable<any> {
    return this.http.put('http://jsonplaceholder.typicode.com/posts/1', opost);
}
patch(opost: Post): Observable<any> {
  return this.http.patch('https://jsonplaceholder.typicode.com/posts/1', opost);
}
getbyid(): Observable<any> {
 const para = new HttpParams().set('userId', '1');
 return this.http.get('http://jsonplaceholder.typicode.com/posts/', {params: para});
}
post(opost: Post): Observable<any> {
  return this.http.post('https://jsonplaceholder.typicode.com/posts', opost);
}
delete(): Observable<any> {
  return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
}
}

