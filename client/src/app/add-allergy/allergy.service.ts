import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AllergyCure } from '../model/allergy-cure';
import { AllergyComponent } from '../model/allergy-component';

@Injectable()
export class AllergyService {

  constructor(private http: HttpClient) { }

  addAllergyCure(allergyCure: AllergyCure, id: number): Promise<AllergyCure>{
    const url = `/api/patient/${id}/allergy/cure`;
    return this.http
          .post(url, allergyCure)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  addAllergyComponent(allergyComponent: AllergyComponent, id: number): Promise<AllergyComponent>{
    const url = `/api/patient/${id}/allergy/component`;
    return this.http
          .post(url, allergyComponent)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getAllergyCures(id: number): Promise<AllergyCure[]>{
    return this.http
          .get<AllergyCure[]>(`/api/patient/${id}/allergy/cure`)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getAllergyComponents(id: number): Promise<AllergyComponent[]>{
    return this.http
          .get<AllergyComponent[]>(`/api/patient/${id}/allergy/component`)
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
