import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkit: boolean = true;

  constructor() {}

  ngOnInit(): void {
      
  }

  isCheck(bool: boolean): string {
    if (bool) {
      return "&#x2716;"
    } else return "";
  }

  MySymbol(): string {
    return "&#x2716;";
  }
}
