import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lose',
  templateUrl: './lose.component.html',
  styleUrls: ['./lose.component.css']
})
export class LoseComponent implements OnInit {

  @Input() open: boolean = false
  constructor() { }

  public sound() {
    let loseSound = new Audio();
    loseSound.src = '../../../assets/sound/lose/loseSound.mp3'
    loseSound.load();
    loseSound.play();
    setTimeout(() => {
      let lose = new Audio();
      lose.src = '../../../assets/sound/lose/lose.mp3'
      lose.load();
      lose.play();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
