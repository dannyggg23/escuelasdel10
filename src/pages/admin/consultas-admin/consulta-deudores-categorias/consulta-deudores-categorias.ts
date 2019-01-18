import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnosProvider } from '../../../../providers/alumnos/alumnos';
import { ConsultaDeudoresDeudoresPage } from '../consulta-deudores-deudores/consulta-deudores-deudores';

@Component({
  selector: 'page-consulta-deudores-categorias',
  templateUrl: 'consulta-deudores-categorias.html',
})
export class ConsultaDeudoresCategoriasPage {
  pushPage:any=ConsultaDeudoresDeudoresPage;
  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_alumnos:AlumnosProvider) {
   this.item=this.navParams.get("item");
  }

  ionViewDidLoad() {
   
    this.p_alumnos.cargar_categorias_horario_sucursal(this.item.idsucursal)
  }

}
