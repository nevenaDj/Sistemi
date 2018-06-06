import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
