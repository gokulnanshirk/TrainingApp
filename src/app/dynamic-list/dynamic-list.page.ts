import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ViewUserComponent } from '../view-user/view-user.component';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.page.html',
  styleUrls: ['./dynamic-list.page.scss'],
})
export class DynamicListPage implements OnInit {
  users = [
    {
      name: 'Gokul',
      city: 'Banglore',
    },
    {
      name: 'Moni',
      city: 'Chennai'
    } 
  ]
  name: any
  city: any

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {
  }

  addUser() {
    let newUser = {
      name: this.name,
      city: this.city
    }
    this.users.unshift(newUser)
  }
  removeUser(i) {
    this.users = this.users.filter((item)=>{
      return i.name != item.name
    })
  }
  
  async viewUser(ev: any,i) {
    const popover = await this.popoverController.create({
      component: ViewUserComponent,
      event: ev,
      translucent: true,
      componentProps:{
        name:i.name
      }
    });
    return await popover.present();
  }

}
