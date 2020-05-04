import {Component, OnInit} from '@angular/core';
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  condition='view_all';
  isShow=true;
  newEn = '';
  newVn = '';
  arrWords = [
    {id: 1, en: 'action', vn: 'hành động', memorized: true},
    {id: 2, en: 'actor', vn: 'diễn viên', memorized: false},
    {id: 3, en: 'activity', vn: 'hoạt động', memorized: true},
    {id: 4, en: 'active', vn: 'chủ động', memorized: true},
    {id: 5, en: 'bath', vn: 'tắm', memorized: false},
    {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true}
  ];

  ngOnInit(): void {
  }

  add() {
    this.arrWords.unshift({
      id: 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    })
    for (let i = 1; i < this.arrWords.length; i++) {
      this.arrWords[i].id = i + 1;
    }
    this.isShow=false;
  }

  delete(id:number){
  const index= this.arrWords.findIndex(e=> e.id===id);
    this.arrWords.splice(index,1);
  }

  toggle(){
    this.isShow=!this.isShow;
  }

  constructor() {
  }


}
