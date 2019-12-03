import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  constructor(
    protected http: HttpClient
  ) { }

  requestCountries() {
    const ENDPOINT = 'https://restcountries.eu/rest/v2/all';
    return this.http.get<any>(ENDPOINT);
  }

  requestCountryDetail(code: string){
    const baseUrl = 'https://restcountries.eu/rest/v2/alpha/{alphaCode}';
    const ENDPOINT = baseUrl.replace('{alphaCode}', code);
    return this.http.get<any>(ENDPOINT);
  }

}
