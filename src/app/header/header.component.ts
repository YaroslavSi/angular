import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdRate: number;
  eurRate: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchExchangeRates();
  }

  fetchExchangeRates() {
    // Здесь нужно указать URL публичного API для получения курса валют
    const url = 'https://api.example.com/exchangerates';

    this.http.get(url).subscribe((data: any) => {
      this.usdRate = data.USD;
      this.eurRate = data.EUR;
    });
  }
}
