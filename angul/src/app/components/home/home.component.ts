import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RoomService} from "../../services/room.service";
import {audit} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Object;
  rooms: Object[];

  constructor(private auth: AuthService,
              private roomService: RoomService) { }

  ngOnInit(): void {
    this.auth.getProfile().subscribe(value => this.user = value);
  }

}
