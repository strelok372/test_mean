import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from '@angular/router'
import {map} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  login: string;
  password: string;

  constructor(private validateService: ValidateService,
              private flashService: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      login: this.login,
      password: this.password
    };

    if (!this.validateService.ValidateUser(user)) {
      this.flashService.show("Incorrect input", {cssClass: 'alert-danger'});
      return;
    }

    this.authService.registerUser(user).subscribe(value => {
      if (value.success) {
        this.flashService.show("You are now registered and can log in!", {cssClass: 'alert-success'});
        this.router.navigate(['/login']);
      } else {
        this.flashService.show("Something goes wrong", {cssClass: 'alert-danger'});
      }
    });
  }
}
