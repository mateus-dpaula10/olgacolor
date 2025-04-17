import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    if (!token) {
      this.router.navigate(['/login'])
      return of(false)
    }

    return this.authService.getUser().pipe(
      map(user => {
        const allowedRoles = route.data['roles'] as string[]

        if (allowedRoles.includes(user.role)) {
          return true
        } else {
          if (user.role === 'User') {
            this.router.navigate(['/mercados/categorias'])
          } else {
            this.router.navigate(['/login'])
          }
          return false
        }
      }),
      catchError(() => {
        this.router.navigate(['/login'])
        return of(false)
      })
    )
  }
}
