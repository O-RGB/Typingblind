import { HostListener, Injectable } from '@angular/core';
import { SoundService } from '../sound/sound.service';
interface test{
  name:string,
  a:HTMLAudioElement
}

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  
  constructor(private sound:SoundService) { }

  speech(key: string) {
    if (arrayText[key]) {
      this.tts(arrayText[key])
    }
  }

  // audio = new Audio();
  tts(filename: string) {
    console.log(this.sound.getSoundThai().get(filename))
    this.sound.getSoundThai().get(filename)?.play()
  }


}
const arrayText: any = {
  "ก": 'ก',
  "ข": 'ข',
  "ฃ": 'ฃ',
  "ค": 'ค',
  "ฅ": 'ฅ',
  "ฆ": 'ฆ',
  "ง": 'ง',
  "จ": 'จ',
  "ฉ": 'ฉ',
  "ช": 'ช',
  "ซ": 'ซ',
  "ฌ": 'ฌ',
  "ญ": 'ญ',
  "ฎ": 'ฎ',
  "ฏ": 'ฏ',
  "ฐ": 'ฐ',
  "ฑ": 'ฑ',
  "ฒ": 'ฒ',
  "ณ": 'ณ',
  "ด": 'ด',
  "ต": 'ต',
  "ถ": 'ถ',
  "ท": 'ท',
  "ธ": 'ธ',
  "น": 'น',
  "บ": 'บ',
  "ป": 'ป',
  "ผ": 'ผ',
  "ฝ": 'ฝ',
  "พ": 'พ',
  "ฟ": 'ฟ',
  "ภ": 'ภ',
  "ม": 'ม',
  "ย": 'ย',
  "ร": 'ร',
  "ล": 'ล',
  "ว": 'ว',
  "ศ": 'ศ',
  "ษ": 'ษ',
  "ส": 'ส',
  "ห": 'ห',
  "ฬ": 'ฬ',
  "อ": 'อ',
  "ฮ": 'ฮ',
  "ะ": 'สระa',
  "า": 'สระah',
  "ิ": 'สระei',//ไฟล์พิเศษ 
  "ี": 'สระee',//ไฟล์พิเศษ
  "ึ": 'สระam',//ไฟล์พิเศษ
  "ื": 'สระamm',//ไฟล์พิเศษ
  " ุ": 'สระau',//ไฟล์พิเศษ
  " ู": 'สระaou',//ไฟล์พิเศษ
  "เ": 'สระar',
  "แ": 'สระal',
  "โ": 'สระo',

}

const array: string[] = [
  "ก",
  "ข",
  "ฃ",
  "ค",
  "ฅ",
  "ฆ",
  "ง",
  "จ",
  "ฉ",
  "ช",
  "ซ",
  "ฌ",
  "ญ",
  "ฎ",
  "ฏ",
  "ฐ",
  "ฑ",
  "ฒ",
  "ณ",
  "ด",
  "ต",
  "ถ",
  "ท",
  "ธ",
  "น",
  "บ",
  "ป",
  "ผ",
  "ฝ",
  "พ",
  "ฟ",
  "ภ",
  "ม",
  "ย",
  "ร",
  "ล",
  "ว",
  "ศ",
  "ษ",
  "ส",
  "ห",
  "ฬ",
  "อ",
  "ฮ",
  "ะ",
  "า",
  " ิ",
  " ี",
  " ึ",
  " ื",
  " ุ",
  " ู",
  "เ",
  "แ",
  "โ"
]



//   ่  ้  ๊  ๋
//   ั
//   ็   ์
//  ๆ ฯ
//  ฦ ฤ