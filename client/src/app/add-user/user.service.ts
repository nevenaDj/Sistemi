import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: UserInterface): Promise<UserInterface>{
    const url = '/api/user';
    return this.http
          .post(url, user)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  changePassword (user: UserPassInterface): Promise<any>{
    return this.http
          .post('/api/password', user)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getDoctors(page: number, size: number = 5): Promise<UserInterface[]>{
    const httpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http
          .get<UserInterface[]>("/api/doctors", { params: httpParams})
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }


  getDoctorsCount(): Promise<number>{
    const url = '/api/doctors/count';
    return this.http
          .get(url)
          .toPromise()
          .then(res => {return res})
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }


}
