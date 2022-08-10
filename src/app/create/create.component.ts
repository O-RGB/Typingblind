import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  deleteData:boolean = false
  editData:boolean = false
  editIndexData:number | undefined
  editTextData:string | undefined
  editSaveData:string | undefined

  showDialogDeleteData(){
    this.deleteData = true
  }
  showDialogEditData(index:number){
    this.editIndexData = index
    this.editTextData = this.testtext[index]
    this.editData = true
  }


  testBut:string[] = ['ege','weigie']
  testtext:string[] = ['ี','ก','พ','ำ','ื','ะ','g','ะ','e','ะ','ะ','e','ะ','ะ','e','ะ']
  constructor(private router: Router) { }

  add(){
    this.testBut.push('')
  }

  addText(){
    this.testtext.push('')
  }

  changeText(text:any){
    this.editSaveData = text
  }

  saveText(){
    this.testtext[this.editIndexData!] = this.editSaveData!;
    this.editData = false
    this.editIndexData = undefined
    this.editTextData = undefined
    this.editSaveData = undefined
  }

  deleteAllGame(){
    this.deleteData = false
  }

  gotoHome(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
