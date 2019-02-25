import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagenesAppAdminPage } from './imagenes-app-admin';

@NgModule({
  declarations: [
    ImagenesAppAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagenesAppAdminPage),
  ],
})
export class ImagenesAppAdminPageModule {}
