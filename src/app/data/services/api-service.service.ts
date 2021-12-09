import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { igeneralModel } from '../model/igeneralModel';
import { iidModel } from '../model/iidModel';
import { iinfoModel } from '../model/iinfoModel';
import { inameModel } from '../model/inameModel';
import { inatModel } from '../model/inatModel';
import { ipatientDetails } from '../model/ipatientDetails';
import { ipatientsModel } from '../model/ipatientsModel';
import { iresultsModel } from '../model/iresultsModel';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  randonUserUrl = "https://randomuser.me/api/?results=100"
  fullnameUrl = "https://randomuser.me/api/"


  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<igeneralModel> {
    return this.http.get<igeneralModel>(this.randonUserUrl);
  }


  getRepoIssues(): Observable<iinfoModel> {
    return this.http.get<iinfoModel>(this.randonUserUrl);
  }

}
