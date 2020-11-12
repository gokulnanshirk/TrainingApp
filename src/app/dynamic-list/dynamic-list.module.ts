import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicListPageRoutingModule } from './dynamic-list-routing.module';

import { DynamicListPage } from './dynamic-list.page';
import { ViewUserComponent } from '../view-user/view-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicListPageRoutingModule
  ],
  declarations: [DynamicListPage,ViewUserComponent],
  entryComponents:[ViewUserComponent]
})
export class DynamicListPageModule {}
