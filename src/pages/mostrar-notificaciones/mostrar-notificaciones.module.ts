import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarNotificacionesPage } from './mostrar-notificaciones';

@NgModule({
  declarations: [
    MostrarNotificacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarNotificacionesPage),
  ],
})
export class MostrarNotificacionesPageModule {}
