import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() list:any[] = []
  @Output() onAdd = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  
  add(){
    this.onAdd.emit(true)
  }

}
