import { Component, OnInit } from '@angular/core';
import { GetCountriesService } from 'src/app/services/get-countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries = []

  constructor(
    protected getCountriesService: GetCountriesService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.getCountriesService.requestCountries()
      .subscribe(response => this.countries = response.map(country => country))
  }

  openDetail(alpha3Code) {
    this.router.navigate(['/detail/' + alpha3Code]);
  }

}
