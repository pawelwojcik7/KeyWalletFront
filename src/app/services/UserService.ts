import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ChangePassword} from "../models/ChangePassword";
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User("","",false)

  loggedUserObs = new BehaviorSubject<User>(this.user)



  constructor(private http: HttpClient) {
  }

  setUser(user: User): void {
    this.user=user;
  }

  loginUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/login', user);
  }

  registerUser(user: User): Observable<HttpResponse<String>> {
    return this.http.post<any>('http://localhost:8080/register', user);
  }

  changePassword(changePasswordRequest: ChangePassword): Observable<any> {
    return this.http.post<any>('http://localhost:8080/password/change', changePasswordRequest);
  }

  getUserObs(): BehaviorSubject<User> {
    return this.loggedUserObs
  }
}
