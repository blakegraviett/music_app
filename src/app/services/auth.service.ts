import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  kind: String;
  idToken: String;
  email:  String;
  refreshToken: String;
  expiresIn: String;
  localId:  String;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email: String, password: String) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]',
    {
      email: email,
      password: password,
      returnSecureToken: true
     }
    );
  }
}
