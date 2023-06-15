import { AdminsService } from './../admins.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AplicationsService } from './../aplications.service';


interface JobApplication {
  name: string;
  surname: string;
  address: string;
  about: string;
  rating: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  feedback: string = "";
  aplications: JobApplication[] = [];
  feedbackColor: string = "";
  success = false;

  @ViewChild('name', { static: false }) name!: ElementRef<HTMLInputElement>;
  @ViewChild('surname', { static: false }) surname!: ElementRef<HTMLInputElement>;
  @ViewChild('address', { static: false }) address!: ElementRef<HTMLInputElement>;
  @ViewChild('about', { static: false }) about!: ElementRef<HTMLInputElement>;

  constructor(private router: Router, private aplicationService: AplicationsService, private adminsService: AdminsService) {
    const apps = this.aplicationService.getApplications();
    if (apps.length != 0) {
      this.aplications = apps;
    }
  }

  public Oddaj() {
    const name = this.name.nativeElement.value;
    const surname = this.surname.nativeElement.value;
    const address = this.address.nativeElement.value;
    const about = this.about.nativeElement.value;
    if (name == "") {
      this.feedbackColor = "red";
      this.feedback = "Ime mora biti izpolnjeno!";
    } else if (surname == "") {
      this.feedbackColor = "red";
      this.feedback = "Priimek mora biti izpolnjen!";
    }
    else if (address == "") {
      this.feedbackColor = "red";
      this.feedback = "Naslov mora biti izpolnjen!";
    }
    else if (about == "") {
      this.feedbackColor = "red";
      this.feedback = "Primernost o delovnem mestu mora biti izpolnjeno!";
    } else {
      const jobApplication: JobApplication = {
        name: name,
        surname: surname,
        address: address,
        about: about,
        rating: 0
      };
      try {
        this.aplications.push(jobApplication);
        this.aplicationService.saveApplications(this.aplications);
        this.name.nativeElement.value = '';
        this.surname.nativeElement.value = '';
        this.address.nativeElement.value = '';
        this.about.nativeElement.value = '';
        this.success = true;
      } catch {
        this.feedbackColor = "Red";
        this.feedback = "Prošnja za delo ni vstavljena!";
      }
    }
  }

  resetForm() {
    this.success = false;
  }

  loginAsAdmin() {

    if (this.adminsService.getAdmin() == "true") {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
