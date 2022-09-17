import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RegisterService {

  constructor(@Inject('baseUrl') private readonly baseUrl: string, private readonly http: HttpClient) { }

  // NOTE : Discuss how to get types with Nicolas
  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/local/signup`, {email, password});
  }
}
