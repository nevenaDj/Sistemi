import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Symptom } from '../model/symptom'

@Injectable()
export class SymptomService {

  constructor(private http: HttpClient) { }

  addSymptom(symptom: Symptom): Promise<Symptom>{
    const url = '/api/symptom';
    return this.http
          .post(url, symptom)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getAllSymptoms(): Promise<Symptom[]>{
    const url = '/api/symptom';
    return this.http
          .get(url)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getAllSymptomsShow(): Promise<Symptom[]>{
    const url = '/api/symptom/show';
    return this.http
          .get(url)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getSymptoms(page: number, size: number = 5): Promise<Symptom[]>{
    const httpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http
          .get<Symptom[]>("/api/symptoms", { params: httpParams})
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getSymptomsCount(): Promise<number>{
    const url = '/api/symptoms/count';
    return this.http
          .get(url)
          .toPromise()
          .then(res => {return res})
          .catch(this.handleError);
  }

  deleteSymptom(id: number): Promise<{}>{
    const url = `/api/symptom/${id}`;
    return this.http
          .delete(url)
          .toPromise()
          .catch(this.handleError);
  }

  findSymptoms(disease: string): Promise<Symptom[]>{
    const httpParams = new HttpParams().set('disease', disease);
    const url = `/api/symptoms/find`;
    return this.http
         .get(url, { params: httpParams})
         .toPromise()
         .then(res => res)
         .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
