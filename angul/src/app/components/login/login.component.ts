import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  login: string;

  constructor(private validateService: ValidateService,
              private flashService: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  Authenticate() {
    const credential = {
      login: this.login,
      password: this.password
    };

    if (!this.validateService.ValidateCredential(credential)){
      this.flashService.show("Incorrect input", {cssClass: 'alert-danger'});
      return;
    }

    this.authService.loginUser(credential).subscribe(value => {
      if (value.success){
        this.flashService.show("You are successfully logged!", {cssClass: 'alert-success'});
        this.authService.storeUserData(value.token, value.user);
        this.router.navigate(['/']);
      }else{
        this.flashService.show("Something goes wrong", {cssClass: 'alert-danger'});
      }
    })
  }

  ngOnInit(): void {
  }

}
