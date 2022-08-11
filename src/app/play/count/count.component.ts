import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor() { }

  audio = new Audio();
  soundEffect() {
    this.audio.src = '../../../assets/sound/start/countMusic.mp3'
    this.audio.load();
    this.audio.play();
  }
  public stopSound() {
    this.audio.src = ''
    this.audio.load();
    this.audio.play();
  }

  countnumber: number = 3
  count() {
    this.audio.src = '../../../assets/sound/start/CountdownStart.mp3'
    this.audio.load();
    this.audio.play();
    setTimeout(() => {
      this.countnumber--
      if (this.countnumber == 0) {
        this.audio.src = '../../../assets/sound/start/CountdownEnd.mp3'
        this.audio.load();
        this.audio.play();
        setTimeout(() => {
          this.soundEffect()
          this.countnumber = 3
        }, 1000);
      } else {
        this.count()
      }
    }, 1000);
  }

  ngOnInit(): void {

  }

}
