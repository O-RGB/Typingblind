import { Component, Input, OnInit } from '@angular/core';
interface stat {
  game: number
  time: number
  acc: number
}
@Component({
  selector: 'end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  @Input() open: boolean = false
  @Input() stat: stat[] = []

  constructor() { }

  ngOnInit(): void {
  }

  time: number = 0
  acc: number = 0

  public calStat() {
    let round = 0
    this.stat.map((data, index) => {
      console.log(data)
      this.time += data.time
      this.acc += data.acc
      round++
    })
    this.time = this.time / round
    this.acc = this.acc / round
  }
}
