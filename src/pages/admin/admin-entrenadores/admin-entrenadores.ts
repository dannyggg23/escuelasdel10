
import { ModalCrearFichaentrenadorPage } from './modal-crear-fichaentrenador/modal-crear-fichaentrenador';
import { ModalCrearEntrenadorPage } from './modal-crear-entrenador/modal-crear-entrenador';
import { URL_IMG_ENTRENADOR } from './../../../app/config/url_servicios';
import { EntrenadoresProvider } from './../../../providers/entrenadores/entrenadores';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-admin-entrenadores',
  templateUrl: 'admin-entrenadores.html',
})
export class AdminEntrenadoresPage {

  urlimagen=URL_IMG_ENTRENADOR;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private p_entrenadores:EntrenadoresProvider,
    private nativePageTransitions:NativePageTransitions,
    private alertCtrl:AlertController) {
     
  }

  ionViewDidLoad() {

    this.p_entrenadores.cargar_fichaentrenadores().then(
      ()=>{
        console.log("datos cargados");
      }
    )

  }


desactivar_ficha(item:any,item2:any){

  let alert = this.alertCtrl.create({
    title: 'Desactivar',
    message: 'Esta seguro de desactivar?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          console.log(item);
          this.p_entrenadores.desactivar(item,item2);
          this.navCtrl.setRoot(AdminEntrenadoresPage);
        }
      }
    ]
  });
  alert.present();




}

crear_fichaentrenador(){
  let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 700
   };
  this.nativePageTransitions.fade(options);
  this.navCtrl.push(ModalCrearFichaentrenadorPage);
}

nuevo_entrenador(){
  let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 700
   };
  this.nativePageTransitions.fade(options);
  this.navCtrl.push(ModalCrearEntrenadorPage);
}
  

}
