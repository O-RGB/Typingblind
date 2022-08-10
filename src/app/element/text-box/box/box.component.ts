import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface returndata {
  text: string
  index: number
}
type mode = ''|'emtpy' | 'edit'

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() text: string = ''
  @Input() addMode: mode = ''
  @Output() onAdd = new EventEmitter<boolean | string>();
  maginTopFix: number = -20;
  maginlifeFix: number = 0;

  
  constructor() {

   }




  ngOnInit(): void {
    if(sala[this.text]){
      this.maginTopFix = 20
      this.maginlifeFix = 50
    }
  }

  addData(e?:any) {
    if(e){
      this.onAdd.emit(e.data as string)
    }else{
      this.onAdd.emit(true)
    }
  }

}

const sala:any = {
  "ี":'ี',
  "่":'่',
  "ื":'ื',
}
