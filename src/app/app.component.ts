import { Component, HostListener, OnInit } from '@angular/core';
import { SoundService } from './service/sound/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ฝึกพิมดีดคนตาบอด';

  loadSound:boolean = false
  constructor(private sound:SoundService){
    this.sound.load().then((data:boolean) => {
      this.loadSound = true
      console.log("FIN")
    })
  }

  ngOnInit(): void {
    
  }


}


