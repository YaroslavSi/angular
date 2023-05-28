import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  inputCurrency1: number;
  inputCurrency2: number;
  selectedCurrency1: string = 'UAH';
  selectedCurrency2: string = 'USD';
  convertedAmount1: number;
  convertedAmount2: number;
  exchangeRates: { [key: string]: number } = {
    UAH: 1,
    USD: 0, // Первоначальное значение, будет обновлено после получения курса валют
    EUR: 0 // Первоначальное значение, будет обновлено после получения курса валют
  };

  ngOnInit() {
    this.fetchExchangeRates();
  }

  fetchExchangeRates() {
    // Здесь нужно указать URL публичного API для получения курса валют
    const url = 'none';

    // Загрузка курсов валют
    this.http.get(url).subscribe((data: any) => {
      this.exchangeRates.USD = data.USD;
      this.exchangeRates.EUR = data.EUR;
      this.convertCurrency(1); // Пересчитываем значения
      this.convertCurrency(2);
    });
  }

  convertCurrency(conversionType: number) {
    if (conversionType === 1) {
      // Конвертация из первой валюты во вторую
      const rate = this.exchangeRates[this.selectedCurrency2] / this.exchangeRates[this.selectedCurrency1];
      this.convertedAmount1 = this.inputCurrency1 * rate;
    } else if (conversionType === 2) {
      // Конвертация из второй валюты в первую
      const rate = this.exchangeRates[this.selectedCurrency1] / this.exchangeRates[this.selectedCurrency2];
      this.convertedAmount2 = this.inputCurrency2 * rate;
    }
  }
}
