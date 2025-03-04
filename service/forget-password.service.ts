import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = 'https://angular-ecommerce-2.onrender.com/api/forgot-password';

  constructor(private http: HttpClient) {}

  resetPassword(email: string, newPassword: string, confirmPassword: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, newPassword, confirmPassword });
  }
}
