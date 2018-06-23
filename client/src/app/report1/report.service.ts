import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ReportService {

  constructor(private http: HttpClient) { }

  getReport1(): Promise<PatientInterface[]>{
    return this.http
          .get<PatientInterface[]>("/api/report1")
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getReport2(): Promise<PatientInterface[]>{
    return this.http
          .get<PatientInterface[]>("/api/report2")
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  getReport3(): Promise<PatientInterface[]>{
    return this.http
          .get<PatientInterface[]>("/api/report3")
          .toPromise()
          .then(res => res)
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
