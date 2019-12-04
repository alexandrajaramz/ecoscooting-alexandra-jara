import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetCountriesService } from 'src/app/services/get-countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  alpha3Code: string  = '';
  country: object = {};

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected getCountriesService: GetCountriesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.findCountryDetail(params);
    });
  }

  findCountryDetail(params) {
    this.alpha3Code = params.get('id');
    this.getCountriesService.requestCountryDetail(this.alpha3Code)
      .subscribe(response => this.country = response)
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
