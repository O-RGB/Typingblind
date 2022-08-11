import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.css']
})
export class WinComponent implements OnInit {

  @Input() time: string = ''
  @Input() pass: number = 0
  @Input() miss: number = 0
  @Input() open: boolean = false
  public sound() {
    let audioWin = new Audio();
    audioWin.src = '../../../assets/sound/win/LevelUp.mp3'
    audioWin.load();
    audioWin.play();
    setTimeout(() => {
      console.log("test ")
      let audioWin = new Audio();
      audioWin.src = '../../../assets/sound/win/win4.mp3'
      audioWin.load();
      audioWin.play();
    }, 1000);
  }

  constructor() { }

  test: boolean = true

  ngOnInit(): void {
  }

}
