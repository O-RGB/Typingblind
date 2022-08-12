import { Injectable } from '@angular/core';
import { FILENAME_THAI } from './filename';

@Injectable({
  providedIn: 'root'
})
export class SoundService {


  constructor() { }

  private SOUND_THAI: Map<String, HTMLAudioElement> = new Map<String, HTMLAudioElement>()

  public load():Promise<boolean> {
    return new Promise((resolve) => {
      FILENAME_THAI.forEach((element,index) => {
        let audioTemp = new Audio()
        audioTemp.preload = "metadata"
        let url = '../../../assets/sound/thai-sound/' + element + '.mp3'
        audioTemp.addEventListener('canplaythrough', () => url, false)
        audioTemp.addEventListener('error', function failed(e) {
          console.log("COULD NOT LOAD AUDIO");
        });
        audioTemp.src = url
        audioTemp.load();
        this.SOUND_THAI.set(element, audioTemp)
        if(index == FILENAME_THAI.length-1){
          setTimeout(() => {
            return resolve(true)
          }, 1000);
        }
  
      });
    })
    
  }

  public getSoundThai(): Map<String, HTMLAudioElement> {
    return this.SOUND_THAI
  }

}



