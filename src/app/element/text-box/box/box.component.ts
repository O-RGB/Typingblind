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
  maginTopFix: number = -10;
  maginlifeFix: number = 0;

  
  constructor() {

   }

  ngOnInit(): void {
    let magin:any | undefined = sala[this.text]
    if(magin){
      this.maginTopFix = magin.maginTopFix
      this.maginlifeFix = magin.maginlifeFix
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
  "ี":{//สระอี
    maginTopFix:40,
    maginlifeFix:50
  },
  "ิ":{//สระอิ
    maginTopFix:40,
    maginlifeFix:55
  },
  "ั":{//สระ  ั
    maginTopFix:40,
    maginlifeFix:30
  },
  "ื":{
    maginTopFix:40,
    maginlifeFix:50
  },
  "ำ":{
    maginTopFix:0,
    maginlifeFix:10
  },
}
