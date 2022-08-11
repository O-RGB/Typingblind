import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {

  @Input() open: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
