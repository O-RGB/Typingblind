import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ฝึกพิมดีดคนตาบอด';

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(arrayText[event.key]){
      this.tts(event.key)
    }
  }

  tts(filename:string){
    var audio = new Audio();
    audio.src = '../assets/sound/thai-sound/'+filename+'.mp3'
    audio.load();
    audio.play();
  }

  ngOnInit(): void {
    
  }
  
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
