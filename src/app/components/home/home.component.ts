import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkit: boolean = true;
  productTypes!: any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllProductTypes();
  }

  isCheck(bool: boolean): string {
    if (bool) {
      return "&#x2716;"
    } else return "";
  }

  MySymbol(): string {
    return "&#x2716;";
  }

  getAllProductTypes() {
    this.http.get<any>('http://localhost:3000/productTypes').subscribe(
      response => {
        this.productTypes = response;
        console.log(this.productTypes);
      })
  }
}
