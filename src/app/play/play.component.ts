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

  counting(): Promise<boolean> {
    return new Promise((resolve) => {
      var audio = new Audio();
      resolve(true)

    })
  }

  @ViewChild('keybar') Keybar!: KeybayComponent;
  @ViewChild('countTime') countTime!: CountComponent;
  @ViewChild('winPopup') winPopup!: WinComponent;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key == 'Enter') {
      this.test = false
      this.countTime.count()
      setTimeout(() => {
        this.time()
      }, 3000);
    } else if (event.key == ' ') {
      if (!this.playRun && this.test) {
        let i = this.data.type.length
        this.playIndex = -1
        this.run(i)
      }else if(this.runTime == true){
        console.log('fff')
        this.key.speech(this.data.type[this.keyPass])
      }
    }
    else {
      this.Keybar.typeText(event.key)
      this.key.speech(event.key)
    }
  }

  data: any = {
    game: 0,
    type: ['ก', 'ข', 'ฃ', 'ค', 'ฅ', 'ฆ', 'ง'],
    back: ['ฟ', 'ก', 'ด', 'ย'],
    onChange: false,
  }

  keybarCopy: string[] = []
  pass: number = 0
  keyPass: number = 0
  KeyMistake: number = 0
  setPass(i: number) {
    this.pass = i
    this.keyPass++
  }
  setMistake() {
    this.KeyMistake++
  }

  endGame: boolean = false
  setEnd() {
    this.endGame = true
    this.winPopup.sound()
    this.countTime.stopSound()
  }

  playIndex: number = -1
  playRun: boolean = false
  run(length: number, time: number = 0, i: number = 0) {
    this.playRun = true
    if(this.test){
      setTimeout(() => {
        this.key.speech(this.data.type[i])
        if (i < length) {
          this.playIndex = this.playIndex + 1
          this.run(length, 1000, i + 1)
        } else {
          this.playIndex = this.playIndex + 1
          this.playRun = false
          this.soundEffectReplay()
        }
      }, time);
    }else{
      this.playRun = false
    }
  }

  runTime: boolean = false
  sec: string = '00'
  min: number = 0
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
      else { this.runTime = false }
    }, 1000);
  }

  copyArray() {
    const data = this.data.type.map((data: any) => data)
    this.keybarCopy = data
  }

  test = true
  constructor(private key: KeyService) {
    this.soundEffect().then(data => {
      this.run(this.data.type.length)
    })
    this.copyArray()
  }

  ngOnInit(): void {

  }

}
