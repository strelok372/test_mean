import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private validateService: ValidateService,
              private flashService: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashService.show('You are logged out', {cssClass: 'alert-success'});
    this.router.navigate(['/login']);
  }
}
