import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  @Input() open: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
