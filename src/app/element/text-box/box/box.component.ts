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

  //UI
  @Input() w: number = 100
  @Input() h: number = 130
  @Input() f: number = 85
  @Input() bg: boolean = false
  @Input() cursor: boolean = true
  @Input() colorText: string = 'white'


  //play
  @Input() playIndex: number = 0
  @Input() playIndexSelectColor: number = 0



  @Input() text: string = ''
  @Input() addMode: mode = ''
  @Output() onAdd = new EventEmitter<boolean | string>();
  maginTopFix: number = -10;
  maginlifeFix: number = 0;

  
  constructor() {
    console.log(this.playIndex)
    console.log(this.playIndexSelectColor)
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
  "ะ":{//สระอะ
    maginTopFix:-10,
    maginlifeFix:0
  },
  "า":{//สระอา
    maginTopFix:-10,
    maginlifeFix:0
  },
  "ิ":{//สระอิ
    maginTopFix:40,
    maginlifeFix:55
  },
  "ี":{//สระอี
    maginTopFix:40,
    maginlifeFix:50
  },
  "ึ":{//สระอึ
    maginTopFix:40,
    maginlifeFix:55
  },
  "ื":{//สระอือ
    maginTopFix:40,
    maginlifeFix:50
  },
  "ุ":{//สระอุ
    maginTopFix:-60,
    maginlifeFix:25
  },
  "ู":{//สระอู
    maginTopFix:-60,
    maginlifeFix:45
  },
  "เ":{//สระเอ
    maginTopFix:-10,
    maginlifeFix:0
  },
  "แ":{//สระแอ
    maginTopFix:-10,
    maginlifeFix:0
  },
  "โ":{//สระโอ
    maginTopFix:10,
    maginlifeFix:0
  },///////////////////////////////////
  '่':{//ไม้เอก
    maginTopFix:35,
    maginlifeFix:20
  },
  '้':{//ไม้โท
    maginTopFix:35,
    maginlifeFix:30
  },
  '๊':{//ไม้ตรี
    maginTopFix:35,
    maginlifeFix:40
  },
  '์':{//ไม้จัตวา
    maginTopFix:35,
    maginlifeFix:30
  },//////////////////////////////////
  'ั':{//ไม้หัน
    maginTopFix:35,
    maginlifeFix:25
  },
  '็':{//ไม้ไต่คู้
    maginTopFix:40,
    maginlifeFix:45
  },//////////////////////////////////
  'ฐ':{//
    maginTopFix:-20,
    maginlifeFix:0
  },
  'ญ':{//
    maginTopFix:-15,
    maginlifeFix:-11
  },
}

