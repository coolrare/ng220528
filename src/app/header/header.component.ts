import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = 'test';
  // inputType = 'text';
  highlightTitle = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    console.log(event.clientX);
    this.keyword += '!';
    this.highlightTitle = !this.highlightTitle;
    this.fontSize++;
  }

}
