import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';
import { AdminsService } from '../admins.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  @ViewChild('name', { static: false }) name!: ElementRef<HTMLInputElement>;
  feedback: string = "";
  constructor(private router: Router, private adminsService: AdminsService) {
  }

  public LogIn() {
    const name = this.name.nativeElement.value;
    if (name == "") {
      this.feedback = "Uporabniško ime mora biti izpolnjeno!";
    } else {
      this.adminsService.saveAdmin(name);
      this.router.navigate(['/admin']);
    }
  }
}
