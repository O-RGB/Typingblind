import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectService } from '../service/firebase/select.service';
import { CreateService } from '../service/firebase/create.service';

interface game {
  type: string[],
  back: string[],
  onChange: boolean,
  end: boolean
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  idURL: string = ''
  data: game[] = []
  load: boolean = false
  text: string = 'กำลังโหลดข้อมูล Game'
  URLDisplay:boolean = false
  // data: any = [{
  //   game: 0,
  //   type: ['ฟ', 'ก', 'ด', 'ย'],
  //   back: ['ฟ', 'ก', 'ด', 'ย'],
  //   onChange: false,


  // }, {

  //   game: 1,
  //   type: ['ิ', 'ก', 'ะ', 'ไ', 'ั', 'ก', 'ป'],
  //   back: ['ิ', 'ก', 'ะ', 'ไ', 'ั', 'ก', 'ป'],
  //   onChange: false,


  // }]

  hoverButGame: number = 0//index detect page now selection

  deleteData: boolean = false
  editData: boolean = false
  editIndexData: number | undefined
  editTextData: string | undefined
  editSaveData: string | undefined


  backup: any
  backupLoad: boolean = false



  showDialogDeleteData() {
    this.deleteData = true
  }
  showDialogEditData(index: number) {
    this.editIndexData = index
    this.editTextData = this.data[this.hoverButGame].type[index]
    this.editData = true
  }

  //tab


  changeGame(index: number) {
    this.hoverButGame = index
  }

  ///[end tab]///


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private database: CreateService) {
  }


  add() {
    this.data.push({
      type: [],
      back: [],
      onChange: true,
      end: false
    })
    this.hoverButGame = this.data.length - 1
  }

  save() {
    const data = this.data[this.hoverButGame].type.map((data: any) => data)
    this.data[this.hoverButGame].back = data
    this.data[this.hoverButGame].onChange = false
    this.data.map((data: any) => data.end = false)
    this.data[this.data.length - 1].end = true
    this.database.saveByID(this.idURL, this.data)
  }

  addText() {
    this.data[this.hoverButGame].type.push('')
    this.data[this.hoverButGame].onChange = true
  }

  changeText(text: any) {
    this.editSaveData = text

  }

  restore(index?: number) {
    const data = this.data[this.hoverButGame].back.map((data: any) => data)
    if (data.length != 0) {
      if (index) {
        this.hoverButGame = index
      }
      this.data[this.hoverButGame].type = data
      this.data[this.hoverButGame].onChange = false
      console.log(index)
    } else {
      this.data.splice(this.hoverButGame, 1)
      if (index) {
        this.hoverButGame = index
      } else {
        if (this.hoverButGame - 1 != 0) {
          this.hoverButGame = this.hoverButGame - 1
        }
      }
    }
  }



  saveText() {
    this.data[this.hoverButGame].type[this.editIndexData!] = this.editSaveData!
    this.data[this.hoverButGame].onChange = true
    this.editData = false
    this.editIndexData = undefined
    this.editTextData = undefined
    this.editSaveData = undefined
  }

  deleteAllGame() {
    this.data.splice(this.hoverButGame, 1)
    console.log(this.data)
    if (this.hoverButGame - 1 != 0) {
      this.hoverButGame = this.hoverButGame - 1
    }
    this.deleteData = false
  }

  deleteEmemntGame(index: number) {
    if (this.data.length > 0) {
      this.data[this.hoverButGame].type.splice(index, 1);
      this.data[this.hoverButGame].onChange = true
    }
  }

  gotoHome() {
    this.router.navigate(['']);
  }

  
  copy(text:string) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((paramsId: any) => {
      this.idURL = paramsId.game;
      if (this.idURL != '') {
        console.log(this.idURL)
        this.database.getById(this.idURL).then((data: any) => {
          this.data = data.game
          this.load = true
        })
      }
    });
  }

}
