import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchArticle = new EventEmitter<string>();

  @Input() keyword = 'test';
  @Output() keywordChange = new EventEmitter<string>();

  // inputType = 'text';
  highlightTitle = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    console.log(event.clientX);
    this.searchArticle.emit(this.keyword);
    this.keywordChange.emit(this.keyword);
    // this.keyword += '!';
    this.highlightTitle = !this.highlightTitle;
    this.fontSize++;
  }

}
