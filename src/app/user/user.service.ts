import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  private usersUrl = environment.restUrl+'users/';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    const users = body['items'] as User[];
    return users;
  }

  private handleError(error: Response | any) {
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
   }

getUser(id: number): Observable<User> {
  let user: User;
  return this.getUsers()
    .map(users => users.filter(u => u.id === id) [0]);
  }

  addUser(user: User): Observable<User> {
    return this.http.post(
      this.usersUrl,
      JSON.stringify(user),
       {headers : this.headers })
    .map(res => res.json() as User)
    .catch(this.handleError);
  }
  updateUser(user: User):Observable<User> {
      const url = `${this.usersUrl}/${user.id}`;
      return this.http
        .put(url, JSON.stringify(user), { headers: this.headers })
        .catch(this.handleError);
    }

    deleteUser(user: User): Observable<void> {
      const url = `${this.usersUrl}/${user.id}`;
      return this.http.delete(url, { headers: this.headers })
        .catch(this.handleError);
    }
}
