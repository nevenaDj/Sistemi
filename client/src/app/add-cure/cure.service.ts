import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cure } from '../model/cure';

@Injectable()
export class CureService {

  constructor(private http: HttpClient) { }

  addCure(cure: Cure): Promise<Cure>{
    const url = '/api/cure';
    return this.http
          .post(url, cure)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getCures(page: number, size: number = 15): Promise<Cure[]>{
    const httpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http
          .get<Cure[]>("/api/cures", { params: httpParams})
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getAllCures(): Promise<Cure[]>{
    return this.http
          .get<Cure[]>("/api/cure")
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }


  getCuresCount(): Promise<number>{
    const url = '/api/cures/count';
    return this.http
          .get(url)
          .toPromise()
          .then(res => {return res})
          .catch(this.handleError);
  }

  deleteCure(id: number): Promise<{}>{
    const url = `/api/cure/${id}`;
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
