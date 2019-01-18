import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InformacionSucursalesPage } from '../informacion-sucursales/informacion-sucursales';
import { InformacionCategoriasPage } from '../informacion-categorias/informacion-categorias';
import { InformacionHorariosPage } from '../informacion-horarios/informacion-horarios';
import { NoticiasInicioPage } from '../noticias-inicio/noticias-inicio';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { InformacionEntrenadoresPage } from '../informacion-entrenadores/informacion-entrenadores';


@Component({
  selector: 'page-informacion-tabs',
  templateUrl: 'informacion-tabs.html',
})
export class InformacionTabsPage {

tab1:any;
//tab2:any;
tab3:any;
tab4:any;
tab5:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,private alertCtrl:AlertController,
     private viewCtrl:ViewController) {
  this.tab1=InformacionSucursalesPage;
 // this.tab2=InformacionCategoriasPage;
  this.tab3=InformacionHorariosPage;
  this.tab4=NoticiasInicioPage;
  this.tab5=InformacionEntrenadoresPage;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionTabsPage');
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
