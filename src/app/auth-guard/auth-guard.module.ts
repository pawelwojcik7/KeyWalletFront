import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserService} from "../services/UserService";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private sub = new Subscription();

  constructor(private readonly userService: UserService
    , private readonly router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.sub.add(this.userService.getUserObs().subscribe(
        (user: User) => {
          if (user.login === undefined) {
            this.router.navigate(['/login']);
          }

        },
        () => {
          return false
        }
      )
    );
    return true;
  }
}
