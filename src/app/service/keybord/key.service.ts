import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyService {


  speech(key:string){
    if(arrayText[key]){
      this.tts(key)
    }
  }

  tts(filename:string){
    var audio = new Audio();
    audio.src = '../../../assets/sound/thai-sound/'+filename+'.mp3'
    audio.load();
    audio.play();
  }

  constructor() { }
}
const arrayText:any = {
  "ก":'ก',
  "ข":'ข',
  "ฃ":'ฃ',
  "ค":'ค',
  "ฅ":'ฅ',
  "ฆ":'ฆ',
  "ง":'ง',
  "จ":'ง',
  "ฉ":'ง',
  "ช":'ง',
  "ซ":'ง',
  "ฌ":'ง',
  "ญ":'ง',
  "ฎ":'ง',
  "ฏ":'ง',
  "ฐ":'ง',
  "ฑ":'ง',
  "ฒ":'ง',
  "ณ":'ง',
  "ด":'ง',
  "ต":'ง',
  "ถ":'ง',
  "ท":'ง',
  "ธ":'ง',
  "น":'ง',
  "บ":'ง',
  "ป":'ง',
  "ผ":'ง',
  "ฝ":'ง',
  "พ":'ง',
  "ฟ":'ง',
  "ภ":'ง',
  "ม":'ง',
  "ย":'ง',
  "ร":'ง',
  "ล":'ง',
  "ว":'ง',
  "ศ":'ง',
  "ษ":'ง',
  "ส":'ง',
  "ห":'ง',
  "ฬ":'ง',
  "อ":'ง',
  "ฮ":'ง',
}
