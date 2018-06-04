import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }

  addPatient(patient: PatientInterface): Promise<{}>{
    const url = '/api/patient';
    return this.http
          .post(url, patient)
          .toPromise()
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }


}
