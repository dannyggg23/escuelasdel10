import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { AlumnosProvider } from '../../../../providers/alumnos/alumnos';
import { MensualidadesPagoPage } from '../../admin-mensualidades/mensualidades-pago/mensualidades-pago';

@Component({
  selector: 'page-consulta-deudores-sucursales',
  templateUrl: 'consulta-deudores-sucursales.html',
})
export class ConsultaDeudoresSucursalesPage {
  
  pushPage:any=MensualidadesPagoPage;  

  item:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_alumnos:AlumnosProvider) {
      this.item=this.navParams.get("item");
  }
 
  ionViewDidLoad() {

  this.p_alumnos.cargar_servicios();
  
  }

}
