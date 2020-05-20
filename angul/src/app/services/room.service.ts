import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  authToken: any;
  user: any;
  tokenHeader: HttpHeaders = new HttpHeaders({'Content-type':'application/json', 'Authorization': this.authToken});
  jsonHeader: HttpHeaders = new HttpHeaders({'Content-type':'application/json'});

  constructor(private http: HttpClient,
              private tokenService: TokenService) {
  }

  createRoom(Room){
    return this.http.post('localhost:3000/room/create', Room, {headers:this.tokenService.getTokenHeader()})
      .pipe(map(value => {
        return value as any;
      }));
  }

  joinRoom(Room){
    return this.http.post('localhost:3000/room/join', Room, {headers:this.tokenService.getTokenHeader()})
      .pipe(map(value => {
        return value as any;
      }));
  }

  getRooms(){
    return this.http.get('localhost:3000/room/list', {headers:this.tokenService.getTokenHeader()})
      .pipe(map(value => {
        return value as any;
      }));
  }

}
