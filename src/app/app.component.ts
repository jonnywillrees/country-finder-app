import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  darkMode = false;
  _countries: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.fetchCountryData();
  }  

  fetchCountryData() {
    // get array with 3 country objects
    // const BASE_URL = `https://restcountries.com/v3.1/alpha?codes=za,nl,it`;
    const BASE_URL = `https://restcountries.com/v3.1/all`;
    
    this.http.get(BASE_URL).subscribe((data: any) => {
      this._countries = data;
    })
  }
}
