import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: UserInterface): Promise<{}>{
    const url = '/api/user';
    return this.http
          .post(url, user)
          .toPromise()
          .catch(this.handleError);
  }

  changePassword (user: UserPassInterface): Promise<any>{
    return this.http
    .post('/api/password', user)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }


}
