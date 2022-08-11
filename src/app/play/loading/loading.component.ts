import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  
  @Input() open: boolean = false


  constructor() { }

  ngOnInit(): void {
  }

}
