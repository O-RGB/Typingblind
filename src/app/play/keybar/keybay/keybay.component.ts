import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'keybay',
  templateUrl: './keybay.component.html',
  styleUrls: ['./keybay.component.css']
})
export class KeybayComponent implements OnInit {

  
  @Output() pass = new EventEmitter<number>();
  @Output() mistake = new EventEmitter<boolean>();
  @Output() endGame = new EventEmitter<boolean>();
  @Input() right:string[] = []
  public left:string[] = []
  public end:boolean = false

  soundEffect(pass:boolean){
    var audio = new Audio();
    if(pass == true){
      audio.src = '../../../../assets/sound/typeing/pass.mp3'
    }else{
      audio.src = '../../../../assets/sound/typeing/miss.mp3'
    }
    audio.load();
    audio.play();
  }

  public typeText(text:string){
    if(this.right.length > 0){
      let check = this.right[0]
      console.log(this.right)
      if(check == text){
        this.soundEffect(true)
        this.right.splice(0,1)
        this.pass.emit(this.left.length+1)
        this.left.push(text)
        this.left.reverse()

      }else{
        this.soundEffect(false)
        this.mistake.emit(true)
      }
      if(this.right.length == 0){
        this.end = true
        this.endGame.emit(true)
      }
    }else{
      console.log('right error')
    }
  }

  public reset(){
    this.left = []
    this.end = false
  }


  

  constructor() { }

  ngOnInit(): void {
    let data = (<HTMLInputElement>document.getElementById("mainFocus"))
    data.focus()
  }

}
