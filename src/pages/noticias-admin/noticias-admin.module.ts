import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasAdminPage } from './noticias-admin';

@NgModule({
  declarations: [
    NoticiasAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasAdminPage),
  ],
})
export class NoticiasAdminPageModule {}
