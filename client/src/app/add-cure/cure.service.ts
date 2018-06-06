import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
