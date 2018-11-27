import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/** o mesmo aqui, carrega a pagina de reset de senha */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

}
