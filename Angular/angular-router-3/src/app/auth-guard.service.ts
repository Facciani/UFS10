import {inject, Injectable} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {AuthService} from "./auth.service";
/*
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return this.auth.isAuthenticated().then(authenticated => {
      if(authenticated){
        return true
      }else {
        this.router.navigate(['/login'])
        return false
      }
    })
  }


}*/

export const myCanActivateProfile: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.isAuthenticated().then((logged)=>{
    if(logged){
      return true
    }else {
      router.navigate(['/login'])
      return false
    }
  })
}

export const myCanActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.isAuthenticated().then((logged)=>{
    if(logged){
      router.navigate(['/profile'])
      return false
    }else {
      return true
    }
  })
}
