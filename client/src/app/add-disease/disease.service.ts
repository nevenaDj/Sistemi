import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Disease } from '../model/disease';
import { Symptom } from '../model/symptom';

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

  getDiseases(page: number, size: number = 5): Promise<Disease[]>{
    const httpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http
          .get<Disease[]>("/api/diseases", { params: httpParams})
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getAllDiseases(): Promise<Disease[]>{
    return this.http
          .get<Disease[]>("/api/disease")
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }


  getDiseasesCount(): Promise<number>{
    const url = '/api/diseases/count';
    return this.http
          .get(url)
          .toPromise()
          .then(res => {return res})
          .catch(this.handleError);
  }

  deleteDisease(id: number): Promise<{}>{
    const url = `/api/disease/${id}`;
    return this.http
          .delete(url)
          .toPromise()
          .catch(this.handleError);
  }

  searchDiseases(symptoms : Symptom[]): Promise<Disease[]>{
    return this.http
          .post<Disease[]>("/api/disease/search", symptoms)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  findDisease(id: number, symptoms : Symptom[]): Promise<Disease>{
    return this.http
          .post<Disease>(`/api/disease/patient/${id}/find`, symptoms)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }
  

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
