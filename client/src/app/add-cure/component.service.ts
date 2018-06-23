import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getComponents(page: number, size: number = 5): Promise<CureComponent[]>{
    const httpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http
          .get<CureComponent[]>("/api/components", { params: httpParams})
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getComponentsCount(): Promise<number>{
    const url = '/api/components/count';
    return this.http
          .get(url)
          .toPromise()
          .then(res => {return res})
          .catch(this.handleError);
  }

  deleteComponent(id: number): Promise<{}>{
    const url = `/api/component/${id}`;
    return this.http
          .delete(url)
          .toPromise()
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
