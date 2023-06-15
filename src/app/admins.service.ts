import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor() { }

  saveAdmin(admin: string): void {
    Cookies.set('jeAdmin', "true", { expires: 1 });
    Cookies.set('AdminUsername', admin, { expires: 1 });
  }

  getAdmin(): string | undefined {
    return Cookies.get('jeAdmin');
  }
}
