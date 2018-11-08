import { SigninPage } from './../signin/signin';
import { AuthService } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService){}

  signOut(){
    this.authService.signOut()
    .then(() => {
      this.navCtrl.setRoot(SigninPage);
    })
  }
  

}
