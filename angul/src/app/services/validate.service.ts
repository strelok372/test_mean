import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() {
  }

  stringCorrect(s) {
    return !(s == undefined || s == '' || s.length > 128);
  }

  stringObjectCorrect(anyOb) {
    for (let v in anyOb) {
      if (!this.stringCorrect(anyOb[v]))
        return false;
    }
    return true;
  }

  ValidateUser(user) {
    return this.stringObjectCorrect(user)
  }

  ValidateCredential(credential) {
    return this.stringObjectCorrect(credential)
  }

  ValidateRoom(room) {
    return this.stringCorrect(room.title)
      && (!room.withPass
        || (room.withPass && this.stringCorrect(room.password)));
  }
}
