import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    var audio = new Audio();
    audio.src = '../assets/sound/thai-sound/แนะนำหน้าเว็บ.mp3'
    audio.load();
    audio.play();
  }

  gotoCreate(){
    this.router.navigate(['/create']);
  }
  gotoPlay(){
    this.router.navigate(['/play']);
  }

}
