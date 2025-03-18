import {inject, Injectable, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {lastValueFrom} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  protected apiURL = environment.BASE_URL;
  private http = inject(HttpClient);

  constructor() {}

  async get<T>(endpoint: string): Promise<T> {
    return await lastValueFrom(this.http.get<T>(this.apiURL + endpoint));
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      return await lastValueFrom(this.http.post<T>(this.apiURL + endpoint, data));
    } catch (error: any) {
      return error;
    }
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return await lastValueFrom(this.http.put<T>(this.apiURL + endpoint, data));
  }

  async patch<T>(endpoint: string, data: any): Promise<T> {
    return await lastValueFrom(this.http.patch<T>(this.apiURL + endpoint, data));
  }

  async delete<T>(endpoint: string): Promise<T> {
    return await lastValueFrom(this.http.delete<T>(this.apiURL + endpoint));
  }
}
