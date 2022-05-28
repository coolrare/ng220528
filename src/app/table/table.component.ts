import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild('list') table?: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.table !== null){
      $(this.table?.nativeElement).DataTable();
    }
  }

}
