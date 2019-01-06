import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isSearchBarOpened=false;
  constructor(public navCtrl: NavController) {

  }

  onSearch(event){
    console.log(event.target.value);
  }
}
