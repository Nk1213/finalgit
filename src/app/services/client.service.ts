import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';
import { client } from '../model/class/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient){
        
  }

  getAllClient():Observable<ApiResponseModel>
{
  return this.http.get<ApiResponseModel>(environment.API_URL+"GetAllClients")
}
addUpdate(obj:client):Observable<ApiResponseModel>
{
  return this.http.post<ApiResponseModel>(environment.API_URL+"AddUpdateClient",obj)
}
deleteClientById(id:number):Observable<ApiResponseModel>
{
  debugger;
  return this.http.delete<ApiResponseModel>(environment.API_URL+"DeleteClientByClientId?clientId="+id)
}
}
