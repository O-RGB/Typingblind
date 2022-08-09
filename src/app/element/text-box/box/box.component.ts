import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface returndata{
  text:string
  index:number
}

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})

export class BoxComponent implements OnInit {
  @Input() text:string = ''
  @Input() index:number = -8
  @Input() addMode:boolean = false
  @Output() onAdd = new EventEmitter<boolean>();
  @Output() onChangeText = new EventEmitter<returndata>();
  constructor() { }

  ngOnInit(): void {
    if(this.text.length > 2){
      this.text = ''
    }
  }

  textOnAdd(text:any){

      let data :returndata = {
        index:this.index,
        text:text.target.value
      }
      console.log("onChangeText",data)
      this.onChangeText.emit(data)

  }

  addData(){
    this.onAdd.emit(true)
  }

}
