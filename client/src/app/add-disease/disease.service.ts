import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disease } from '../model/disease';

@Injectable()
export class DiseaseService {

  constructor(private http: HttpClient) { }

  addDisease(disease: Disease): Promise<Disease>{
    const url = '/api/disease';
    return this.http
          .post(url, disease)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
