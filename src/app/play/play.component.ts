import { Component, HostListener, OnInit } from '@angular/core';
import { KeyService } from '../service/keybord/key.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key == 'Enter') {
      this.test = false
    } else if (event.key == ' ') {
      if(!this.playRun){
        let i = this.data.type.length
        this.playIndex = -1
        this.run(i)
      }
    }
    else {
      this.key.speech(event.key)
    }
  }

  data: any = {
    game: 0,
    type: ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง'],
    back: ['ฟ', 'ก', 'ด', 'ย'],
    onChange: false,
  }

  playIndex: number = -1
  playRun:boolean = false
  run(length: number, time: number = 0, i: number = 0) {
    this.playRun = true
    setTimeout(() => {
      this.key.speech(this.data.type[i])
      if (i < length) {
        this.playIndex = this.playIndex + 1
        this.run(length, 1000, i + 1)
      } else {
        this.playIndex = this.playIndex + 1
        this.playRun = false
      }
    }, time);
  }

  test = true
  constructor(private key: KeyService) {
    let i = this.data.type.length
    this.run(i)
  }

  ngOnInit(): void {

  }

}
