import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MensualidadesProvider } from '../../../../providers/mensualidades/mensualidades';
import { URL_IMG_ALUMNOS } from '../../../../app/config/url_servicios';
import { MensualidadesPagoPage } from '../mensualidades-pago/mensualidades-pago';
import { ConsultaDeudoresSucursalesPage } from '../../consultas-admin/consulta-deudores-sucursales/consulta-deudores-sucursales';


@Component({
  selector: 'page-mensualidades-alumno',
  templateUrl: 'mensualidades-alumno.html',
})
export class MensualidadesAlumnoPage {
  pushPage:any=ConsultaDeudoresSucursalesPage

  urlimagen=URL_IMG_ALUMNOS;

  item:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private p_mensualidades:MensualidadesProvider) {
   this.item= this.navParams.get("item");
  }

  ionViewDidLoad() {
  this.p_mensualidades.cargar_alumnos_representante(this.item.idrepresentante);

  }

}
