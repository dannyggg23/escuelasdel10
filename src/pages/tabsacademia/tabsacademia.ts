import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabsacademia',
  templateUrl: 'tabsacademia.html',
})
export class TabsacademiaPage {

  tab1:any="AcademiaCertificacionesPage";
  tab2:any="AcademiaConeniosPage";
  tab3:any="AcademiaInstitucionPage";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,private alertCtrl:AlertController,
    private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsacademiaPage');
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
           
              this.viewCtrl.dismiss();
           
          }
        }
      ]
    });
    alert.present();
  }

}
