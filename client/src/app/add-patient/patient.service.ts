import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Disease } from '../model/disease';
import { Cure } from '../model/cure';
import { PatientDisease } from '../model/patient-disease';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }

  addPatient(patient: PatientInterface): Promise<PatientInterface>{
    const url = '/api/patient';
    return this.http
          .post(url, patient)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  findPatients(search: string): Promise<PatientInterface[]>{
    const httpParams = new HttpParams().set('search', search);
    const url = `/api/patients`;
    return this.http
         .get(url, { params: httpParams})
         .toPromise()
         .then(res => res)
         .catch(this.handleError);
  }

  addPatientDisease(id: number, disease: Disease): Promise<number>{
    const url = `/api/patient/${id}/disease`;
    return this.http
          .post(url, disease)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  addTherapy(id: number, idD: number, cures: Cure[]): Promise<{}>{
    const url = `/api/patient/${id}/diagnosis/${idD}/therapy`;
    return this.http
          .post(url, cures)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getPatients(page: number, size: number = 5): Promise<PatientInterface[]>{
    const httpParams = new HttpParams().set('page', page.toString()).set('size', size.toString());
    return this.http
          .get<PatientInterface[]>("/api/patients/all", { params: httpParams})
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getPatientsCount(): Promise<number>{
    const url = '/api/patients/all/count';
    return this.http
          .get(url)
          .toPromise()
          .then(res => {return res})
          .catch(this.handleError);
  }

  getPatient(id : number): Promise<PatientInterface>{
    const url = `/api/patient/${id}`;
    return this.http
          .get(url)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getPatientDiseases(id : number): Promise<PatientDisease[]>{
    const url = `/api/patient/${id}/diseases`;
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
