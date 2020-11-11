import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  title = "My Title"

  show: any = "student"

  student = [
    { name: 'gokul' },
    { name: 'priyanka' },
    { name: 'pavithra' }
  ]
  teacher = [
    { name: 'Dinesh' },
    { name: 'Mouli' },
    { name: 'Mohan' }
  ]
  constructor(private navController:NavController) {
  }

  ngOnInit() {
  }
  showName(name) {
    alert(name)
  }
  gotToList(){
this.navController.navigateForward('/list')
  }





}
