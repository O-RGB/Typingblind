import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-loading',
  templateUrl: './main-loading.component.html',
  styleUrls: ['./main-loading.component.css']
})
export class MainLoadingComponent implements OnInit {

  @Input() text: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
