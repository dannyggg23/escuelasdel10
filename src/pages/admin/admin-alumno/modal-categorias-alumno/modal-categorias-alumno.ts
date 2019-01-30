import { ModalCrearAlumnoPage } from './../modal-crear-alumno/modal-crear-alumno';

import { AlumnosProvider } from './../../../../providers/alumnos/alumnos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdminMensualidadesConsultaRepresentantePage } from '../../admin-mensualidades/admin-mensualidades-consulta-representante/admin-mensualidades-consulta-representante';


@Component({
  selector: 'page-modal-categorias-alumno',
  templateUrl: 'modal-categorias-alumno.html',
})
export class ModalCategoriasAlumnoPage {

  item:any;
  //pushPage:any=AdminMensualidadesConsultaRepresentantePage;
  pushPage:any=ModalCrearAlumnoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_alumnos:AlumnosProvider) {
     this.item=this.navParams.get("item");
  }

  ionViewDidLoad() {
   this.p_alumnos.cargar_categorias_horario_sucursal(this.item.idsucursal);
  }

}
