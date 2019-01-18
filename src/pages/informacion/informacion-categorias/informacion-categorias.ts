import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformacionAcademiaProvider } from '../../../providers/informacion-academia/informacion-academia';
import { SucursalesProvider } from '../../../providers/sucursales/sucursales';

@Component({
  selector: 'page-informacion-categorias',
  templateUrl: 'informacion-categorias.html',
})
export class InformacionCategoriasPage {

  constructor(public navCtrl: NavController,private p_sucursale:SucursalesProvider,
     public navParams: NavParams,private p_infromacion:InformacionAcademiaProvider) {
  }

  ionViewDidLoad() {
   // this.p_infromacion.cargar_categorias();
   this.p_sucursale.cargar_categorias();
  
  }

}
