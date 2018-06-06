import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CureComponent } from '../model/component';

@Injectable()
export class ComponentService {

  constructor(private http: HttpClient) { }

  addComponent(component: CureComponent): Promise<CureComponent>{
    const url = '/api/component';
    return this.http
          .post(url, component)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getAllComponents(): Promise<CureComponent[]>{
    const url = '/api/component';
    return this.http
          .get(url)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
