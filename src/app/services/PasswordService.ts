import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {Password} from "../models/Password";
import {SharePasswordDTO} from "../models/SharePasswordDTO";
import {IpAddress} from "../models/IpAddress";
import {UserLogin} from "../models/UserLogin";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient) {
  }


  getAllPasswordsForUser(user: User): Observable<Array<Password>> {
    return this.http.get<Array<Password>>('http://localhost:8080/passwords/' + user.login);
  }

  sharePassword(sharePasswordDTO: SharePasswordDTO): Observable<HttpResponse<String>> {
    return this.http.post<any>('http://localhost:8080/password/share', sharePasswordDTO);
  }

  getAllIpAddresses(): Observable<Array<IpAddress>> {
    return this.http.get<Array<IpAddress>>('http://localhost:8080/ipAddresses');
  }


  decryptPassword(password: string, passId: number): Observable<any> {
    const p = {
      'masterPassword': password,
      'passwordId': passId
    }
    return this.http.post<any>('http://localhost:8080/decrypt', null, {params: p});
  }

  encryptPassword(password: string, passId: number): Observable<any> {
    const p = {
      'masterPassword': password,
      'passwordId': passId
    }
    return this.http.post<any>('http://localhost:8080/encrypt', null, {params: p});
  }


  addNewPasswordToUserWallet(password: Password): Observable<any> {
    return this.http.post<any>('http://localhost:8080/add-password', password);
  }

  deletePassword(passwordId: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/password/' + passwordId);
  }

  unblockIpAddress(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/ipAddresses/unblock/${id}`)
  }

  blockIpAddress(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/ipAddresses/block/${id}`)
  }

  getUserLogins(login: string): Observable<Array<UserLogin>> {
    return this.http.get<Array<UserLogin>>("http://localhost:8080/userLogins/"+login)
  }
}

