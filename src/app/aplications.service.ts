import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class AplicationsService {

  constructor() { }

  saveApplications(aplications: any[]): void {
    Cookies.set('aplications', JSON.stringify(aplications));
  }

  getApplications(): any[] {
    const aplications = Cookies.get('aplications');
    if (aplications) {
      return JSON.parse(aplications);
    }
    return [];
  }
}
