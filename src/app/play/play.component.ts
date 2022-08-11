import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { KeyService } from '../service/keybord/key.service';
import { CountComponent } from './count/count.component';
import { KeybayComponent } from './keybar/keybay/keybay.component';
import { WinComponent } from './win/win.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  data: any = {
    game: 0,
    type: ['อ', 'อ', 'ก', 'เ', 'ธ', 'อ'],
    back: ['ฟ', 'ก', 'ด', 'ย'],
    onChange: false,
  }

  endGame: boolean = false
  redeyGame: boolean = false


  intoPopupIndexPlay: number = -1
  intoPopupPlay: boolean = false

  runTime: boolean = false
  sec: string = '00'
  min: number = 0

  displayInputPlay = true

  keybarCopy: string[] = []
  pass: number = 0
  keyPass: number = 0
  KeyMistake: number = 0

  resetState() {
    this.redeyGame = false
    this.endGame = false
    this.intoPopupIndexPlay = -1
    this.intoPopupPlay = false
    this.runTime = false
    this.sec = '00'
    this.min = 0
    this.displayInputPlay = true
    this.keybarCopy = []
    this.pass = 0
    this.keyPass = 0
    this.KeyMistake = 0
    this.Keybar.reset()
    this.startGame()
  }

  getData(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.data = {
          game: 1,
          type: ['น', '่', 'า', 'ร', 'ั', 'ก'],
          back: ['ฟ', 'ก', 'ด', 'ย'],
          onChange: false,
        }
        resolve(true)
      }, 2000);
    })
  }

  soundEffect(): Promise<boolean> {
    return new Promise((resolve) => {
      var audio = new Audio();
      audio.src = '../../assets/sound/start/start.mp3'
      audio.load();
      audio.play();
      setTimeout(() => {
        resolve(true)
      }, 2300);
    })
  }

  soundEffectReplay(): Promise<boolean> {
    return new Promise((resolve) => {
      var audio = new Audio();
      audio.src = '../../assets/sound/start/ch.mp3'
      audio.load();
      audio.play();
      setTimeout(() => {
        resolve(true)
      }, 4000);
    })
  }

  startGame() {
    this.intoPopupPlay = true
    this.soundEffect().then(data => {
      this.run(this.data.type.length)
    })
    this.copyArray()
  }



  @ViewChild('keybar') Keybar!: KeybayComponent;
  @ViewChild('countTime') countTime!: CountComponent;
  @ViewChild('winPopup') winPopup!: WinComponent;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key == 'Enter' && this.redeyGame == false) {
      if (this.intoPopupPlay == false && this.endGame == false && this.min != 1 ) {
        this.displayInputPlay = false
        this.redeyGame = true
        this.countTime.count()
        setTimeout(() => {
          this.time()
        }, 3000);
      } else if (this.endGame == true && this.min != 1) {
        this.getData().then(data => {
          this.resetState()
        })
      } else if (this.min == 1) {
        this.resetState()
      }
    } else if (event.key == ' ') {
      if (!this.intoPopupPlay && this.displayInputPlay) {
        let i = this.data.type.length
        this.intoPopupIndexPlay = -1
        this.run(i)
      } else if (this.runTime == true) {
        this.key.speech(this.data.type[this.keyPass])
      }
    }
    else if (event.key != 'Enter' && this.redeyGame == true) {
      this.Keybar.typeText(event.key)
      this.key.speech(event.key)
    }
  }



  setPass(i: number) {
    this.pass = i
    this.keyPass++
  }
  setMistake() {
    this.KeyMistake++
  }

  setEnd() {
    this.endGame = true
    this.redeyGame = false
    if (this.min != 1) {
      this.winPopup.sound()
    }
    this.countTime.stopSound()
  }
  run(length: number, time: number = 0, i: number = 0) {
    if (this.displayInputPlay) {
      setTimeout(() => {
        this.key.speech(this.data.type[i])
        if (i < length) {
          this.intoPopupIndexPlay = this.intoPopupIndexPlay + 1
          this.run(length, 1000, i + 1)
        } else {
          this.intoPopupIndexPlay = this.intoPopupIndexPlay + 1
          this.intoPopupPlay = false
          this.soundEffectReplay()
        }
      }, time);
    } else {
      this.intoPopupPlay = false
    }
  }

  time() {
    this.runTime = true
    setTimeout(() => {
      let sec = Number(this.sec)
      sec = sec + 1

      if (sec <= 9) {
        this.sec = '0' + sec
      } else {
        this.sec = sec + ''
      }

      if (sec == 60) {
        this.min++
        this.sec = '00'
      }

      if (!this.endGame && this.min != 1) { this.time() }
      else { this.runTime = false; this.countTime.stopSound();this.redeyGame = false }
    }, 1000);
  }

  copyArray() {
    const data = this.data.type.map((data: any) => data)
    this.keybarCopy = data
  }

  constructor(private key: KeyService) {
    this.startGame()
  }

  ngOnInit(): void {

  }

}
