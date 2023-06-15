import { Component } from '@angular/core';
import Cookies from 'js-cookie';
import { AplicationsService } from '../aplications.service';

interface JobApplication {
  name: string;
  surname: string;
  address: string;
  about: string;
  rating: number;
}

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent {
  pageSize: number = 5;
  currentPage: number = 1;
  aplications: JobApplication[] = [];
  selectedOption: string = "";

  constructor(private aplicationService: AplicationsService) {
    const apps = this.aplicationService.getApplications();
    if (apps.length != 0) {
      this.aplications = apps;
    }
  }

  ratingSelected(aplication: JobApplication) {
    const index = this.aplications.findIndex(app => app === aplication);
    this.aplications[index].rating = aplication.rating;
    this.aplicationService.saveApplications(this.aplications);
  }

}
