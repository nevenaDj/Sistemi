import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Groupe } from '../model/group';

@Injectable()
export class GroupeService {

  constructor(private http: HttpClient) { }

  getAllGroup(): Promise<Groupe[]>{
    const url = '/api/groupe';
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
