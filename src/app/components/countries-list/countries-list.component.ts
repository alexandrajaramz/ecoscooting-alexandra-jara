import { Component, OnInit } from '@angular/core';
import { GetCountriesService } from 'src/app/services/get-countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries = []

  constructor(
    protected getCountriesService: GetCountriesService
  ) { }

  ngOnInit() {
    this.getCountriesService.requestCountries()
      .subscribe(response => this.countries = response.map(country => country))
  }

}
