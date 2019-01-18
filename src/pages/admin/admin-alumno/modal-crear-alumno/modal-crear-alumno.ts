import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenurepresentantesPage } from '../../../representantes/menurepresentantes/menurepresentantes';

@Component({
  selector: 'page-modal-crear-alumno',
  templateUrl: 'modal-crear-alumno.html',
})
export class ModalCrearAlumnoPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl:AlertController,private storage:Storage) {
  
  }

  ionViewDidLoad() {

    let alert = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: 'Está seguro de cerrar la sesión?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {

           this.navCtrl.parent.select(1);

          }
        },
        {
          text: 'ACEPTAR',
          handler: () => {
            this.storage.remove('representante').then(()=>{
              this.storage.remove('entrenador').then(()=>{
                window.location.reload();
              })
            });
          }
        }
      ]
    });
    alert.present();
    
  }

}
