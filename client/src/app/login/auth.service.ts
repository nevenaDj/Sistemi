import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) { }

  login(username:string, password:string): Promise<any>{
    return this.http
    .post('/api/login', {username, password}, {responseType: 'text'})
    .toPromise()
    .then(res => localStorage.setItem('token', res))
    .catch(this.handleError);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  redirect(): void {
    if (localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['home']);
    }
  }

  me(): Promise<any>{
    return this.http
    .get('/api/me')
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
