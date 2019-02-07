import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CursosEntrenadorTabPage } from '../cursos-entrenador-tab/cursos-entrenador-tab';
import { AsistenciaEntrenadorTabPage } from '../asistencia-entrenador-tab/asistencia-entrenador-tab';
import { DatosEntrenadorTabPage } from '../datos-entrenador-tab/datos-entrenador-tab';
import { NoticiasInicioPage } from '../../informacion/noticias-inicio/noticias-inicio';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular/navigation/view-controller';



@Component({
  selector: 'page-menuentrenadores',
  templateUrl: 'menuentrenadores.html',
})
export class MenuentrenadoresPage {

tab1:any;
tab2:any;
tab3:any;
tab4:any;
tab5:any="MostrarNotificacionesPage";

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,
    private storage:Storage,
    public viewCtrl: ViewController ) {
    this.tab1=CursosEntrenadorTabPage;
    this.tab2=AsistenciaEntrenadorTabPage;
    this.tab3=DatosEntrenadorTabPage;
    this.tab4=NoticiasInicioPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuentrenadoresPage');
  }

  cerra_sesion(){
    let alert = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: 'Está seguro de cerrar la sesión?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ACEPTAR',
          handler: () => {
            this.storage.remove('entrenador').then(()=>{
             // this.splashscreen.show();
              //window.location.reload();
              this.viewCtrl.dismiss();
              
            });
          }
        }
      ]
    });
    alert.present();
  }


}
