import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AsistenciAlumnosRepresentantetabPage } from '../asistenci-alumnos-representantetab/asistenci-alumnos-representantetab';
import { DatosAlumnosRepresentantetabPage } from '../datos-alumnos-representantetab/datos-alumnos-representantetab';
import { NoticiasInicioPage } from '../../informacion/noticias-inicio/noticias-inicio';
import { FacturaRepresentantesPage } from '..';
import { Storage } from '@ionic/storage';
import { SubirimagenesRepresentantesPage } from '../subirimagenes-representantes/subirimagenes-representantes';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@Component({
  selector: 'page-menurepresentantes',
  templateUrl: 'menurepresentantes.html',
})
export class MenurepresentantesPage {

tab1:any;
tab2:any;
tab3:any;
tab4:any;
tab5:any;
tab6:any="MostrarNotificacionesPage";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private alertCtrl:AlertController,private storage:Storage,
    private viewCtrl:ViewController) {
    this.tab1=FacturaRepresentantesPage;
    this.tab2=AsistenciAlumnosRepresentantetabPage;
    this.tab3=DatosAlumnosRepresentantetabPage;
    this.tab4=NoticiasInicioPage;
    this.tab5=SubirimagenesRepresentantesPage
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenurepresentantesPage');
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
            this.storage.remove('representante').then(()=>{
            //  this.splashscreen.show();
            //  window.location.reload();
            this.viewCtrl.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }


 

}
