import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { KeyService } from '../service/keybord/key.service';
import { KeybayComponent } from './keybar/keybay/keybay.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {



  @ViewChild('keybar') Keybar!: KeybayComponent;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key == 'Enter') {
      this.test = false
      this.time()
    } else if (event.key == ' ') {
      if(!this.playRun){
        let i = this.data.type.length
        this.playIndex = -1
        this.run(i)
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

  keybarCopy:string[] = []
  pass:number = 0
  keyPass:number = 0
  KeyMistake:number = 0
  setPass(i:number){
    this.pass = i
    this.keyPass++
  }
  setMistake(){
    this.KeyMistake++
  }

  endGame:boolean = false
  setEnd(){
    this.endGame = true
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

  sec:string = '00'
  min:number = 0
  time(){
    setTimeout(() => {
      let sec = Number(this.sec)
      sec = sec + 1
      
      if(sec <= 9) {
        this.sec = '0'+sec
      }else{
        this.sec = sec+''
      }

      if(sec == 60){
        this.min++
        this.sec = '00'
      }

      if(!this.endGame) this.time()
    }, 1000);
  }

  copyArray(){
    const data = this.data.type.map((data:any) => data)
    this.keybarCopy = data
  }

  test = true
  constructor(private key: KeyService) {
    let i = this.data.type.length
    this.run(i)
    this.copyArray()
  }

  ngOnInit(): void {
    
  }

}
