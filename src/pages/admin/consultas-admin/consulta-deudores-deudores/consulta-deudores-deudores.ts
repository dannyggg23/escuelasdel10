import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsultasAdminProvider } from '../../../../providers/consultas-admin/consultas-admin';
import { URL_IMG_ALUMNOS } from '../../../../app/config/url_servicios';


@Component({
  selector: 'page-consulta-deudores-deudores',
  templateUrl: 'consulta-deudores-deudores.html',
})
export class ConsultaDeudoresDeudoresPage {
  urlimagen=URL_IMG_ALUMNOS;
  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private p_consultas:ConsultasAdminProvider) {
  this.item=this.navParams.get("item");
  

  }

  ionViewDidLoad() {
    this.p_consultas.cargar_deudores(this.item.idsucursal_categorias);
    
  }

}
