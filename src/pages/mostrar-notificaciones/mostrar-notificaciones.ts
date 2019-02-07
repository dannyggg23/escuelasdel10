import { NotificacionesProvider } from './../../providers/notificaciones/notificaciones';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarNotificacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-notificaciones',
  templateUrl: 'mostrar-notificaciones.html',
})
export class MostrarNotificacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_notificaciones:NotificacionesProvider) {
  }

  ionViewDidLoad() {
    this.p_notificaciones.cargarNotificaciones().then(()=>{
      
    })
  }

}
