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
}
