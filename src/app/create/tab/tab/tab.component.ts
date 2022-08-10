import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() list: any
  @Input() selectIndex: number = 0

  @Output() onAdd = new EventEmitter<boolean>();
  @Output() onClickGame = new EventEmitter<number>();
  @Output() onClickRestore = new EventEmitter<number>();

  displayCFNoneSave: boolean = false
  displayCFIndexNondSave: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.list.length > 0  && this.list[this.selectIndex]) {
      if (this.list[this.selectIndex].onChange) {
        this.displayCFNoneSave = true
      } else {
        this.onAdd.emit(true)
      }
    } else {
      this.onAdd.emit(true)
    }

  }
  restore() {
    this.onClickRestore.emit(this.displayCFIndexNondSave)
    this.displayCFNoneSave = false
  }

  clickGame(index: number) {
    if (this.list.length > 0 && this.list[this.selectIndex]) {

      if (this.list[this.selectIndex].onChange) {
        if (index != this.selectIndex) {
          this.displayCFIndexNondSave = index
          this.displayCFNoneSave = true
        }
      } else {
        this.onClickGame.emit(index)
      }
    } else {
      this.onClickGame.emit(index)
    }
  }

}
