import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
disabled: boolean;

  constructor() { }

  disan(){
    this.disabled = !this.disabled;
  }

  ngOnInit(): void {
    this.disabled = false;
  }

}
