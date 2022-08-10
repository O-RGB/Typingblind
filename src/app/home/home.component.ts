import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyService } from '../service/keybord/key.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private key:KeyService) { }

  ngOnInit(): void {
  }

  gotoCreate(){
    this.router.navigate(['create']);
  }
  gotoPlay(){
    this.router.navigate(['play','87568']);
  }

}
