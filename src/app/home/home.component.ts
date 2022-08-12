import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyService } from '../service/keybord/key.service';
import { CreateService } from '../service/firebase/create.service';
import * as googleTTS from 'google-tts-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private key: KeyService, private create: CreateService) { }


  ngOnInit(): void {
    const url = googleTTS.getAudioUrl('สวัสดีครับ ท่านสมาชิกชมรมคนชอบ', {
      lang: 'th',
      slow: false,
      host: 'https://translate.google.com',
    });
    console.log(url);
  }

  load: boolean = false
  text: string = ''

  createMode: boolean = false
  playMode: boolean = false

  gotoCreate() {
    this.load = true
    this.text = 'กำลังสร้าง URL'
    this.create.createURL().then(id => {
      this.router.navigate(['create', id]);
    })
  }

  url: string = ''
  urlPlay: string = ''

  URLC(e: any) {
    this.url = e.target.value
  }

  URLP(e: any) {
    this.urlPlay = e.target.value
  }

  gotoURL() {
    this.load = true
    this.text = 'กำลังนำทาง'
    this.create.createURL().then(id => {
      this.router.navigate(['create', this.url]);
    })
  }



  gotoPlay() {
    this.router.navigate(['play', this.urlPlay.trim()]);
  }

}
