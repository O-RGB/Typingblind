import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { KeyService } from '../service/keybord/key.service';
import { CountComponent } from './count/count.component';
import { KeybayComponent } from './keybar/keybay/keybay.component';
import { WinComponent } from './win/win.component';
import { LoseComponent } from './lose/lose.component';
import { LoadingComponent } from './loading/loading.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  data: any

  english = /^[A-Za-z0-9]*$/;

  endGame: boolean = false
  redeyGame: boolean = false
  gameRound: number = 0//ด่านที่กำลังเล่นอยู่

  waitSpeech:boolean = false


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

  loadData: boolean = false

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
    this.loadData = true
    let loading = new Audio();
    loading.src = '../../../assets/sound/win/loading.mp3'
    loading.load();
    loading.play();
    return new Promise((resolve) => {
      setTimeout(() => {
        this.data = [{
          game: 0,
          type: ['ค', 'ิ', 'ด', 'ถ', 'ึ', 'ง'],
          back: ['ฟ', 'ก', 'ด', 'ย'],
          onChange: false,
          end: false
        }, {
          game: 0,
          type: ['น', '่', 'า', 'ร', 'ั', 'ก'],
          back: ['ฟ', 'ก', 'ด', 'ย'],
          onChange: false,
          end: true
        }]
        this.loadData = false
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
        this.waitSpeech = false
      }, 4000);
    })
  }

  startGame() {
    // this.loading.sound()

    
    this.soundEffect().then(data => {
      this.run(this.data[this.gameRound].type.length)
    })
    this.copyArray()

  }



  @ViewChild('keybar') Keybar!: KeybayComponent;
  @ViewChild('countTime') countTime!: CountComponent;
  @ViewChild('winPopup') winPopup!: WinComponent;
  @ViewChild('losePopup') losePopup!: LoseComponent;
  @ViewChild('loadingPopup') loadingPopup!: LoadingComponent;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key)
    if(this.waitSpeech == false){
      if (event.key == 'Enter' && this.redeyGame == false) {
        if (this.intoPopupPlay == false && this.endGame == false && this.min != 1) {
          this.redeyGame = true
          this.displayInputPlay = false
          this.countTime.count()
          setTimeout(() => {
            this.time()
          }, 4000);
        }
        else if (this.endGame == true && this.min != 1) {
          if (this.data.length > 0) {
            if (this.gameRound + 1 <= this.data.length)
              this.gameRound = this.gameRound + 1
              this.resetState()
          }
  
        } else if (this.min == 1) {
          this.resetState()
        }
      } else if (event.key == ' ') {
        console.log(this.intoPopupPlay,this.displayInputPlay)
        if (this.intoPopupPlay == false && this.displayInputPlay == true) {//replay intro
          //displayInputPlay กำลังโชว์ into อยู่ไหม == true
          //intoPopupPlay กำลังพูดอยู่ไหม
          let i = this.data[this.gameRound].type.length
          this.intoPopupIndexPlay = -1
          this.run(i)
        } else if (this.runTime == true) {//เฉลย
          this.key.speech(this.data[this.gameRound].type[this.keyPass])
        }
      }
      else if (event.key != 'Enter' && this.redeyGame == true && this.runTime == true) {
        if (event.key.length == 1) {
          if (this.english.test(event.key)) {
            let language = new Audio();
            language.src = '../../assets/sound/start/language.mp3'
            language.load();
            language.play();
          } else {
            this.Keybar.typeText(event.key)
            this.key.speech(event.key)
          }
        }
      }
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
    this.waitSpeech = true
    this.endGame = true
    this.redeyGame = false
    if (this.min != 1) {
      if (this.data[this.gameRound].end == false) {//เช็คว่าเป็นเกมสุดท้านแล้วรึยัง
        this.winPopup.sound()
      }
    } else {
      this.losePopup.sound()
    }
    this.countTime.stopSound()

    setTimeout(() => {
      this.waitSpeech = false
    }, 3000);
  }
  run(length: number, time: number = 0, i: number = 0) {
    if (this.displayInputPlay) {
      setTimeout(() => {
        this.intoPopupPlay = true
        this.key.speech(this.data[this.gameRound].type[i])
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
      else if (this.min == 1) {
        // this.losePopup.sound()
        this.setEnd()
      }
      else {
        this.runTime = false;
        this.countTime.stopSound();
        this.redeyGame = false
      }
    }, 1000);
  }

  copyArray() {
    const data = this.data[this.gameRound].type.map((data: any) => data)
    this.keybarCopy = data
  }

  constructor(private key: KeyService) {
    this.waitSpeech = true
    this.getData().then(data => {
      this.startGame()
    })
  }

  ngOnInit(): void {

  }

}
