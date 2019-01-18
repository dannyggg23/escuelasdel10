import { URL_IMG_ALUMNOS } from './../../../../app/config/url_servicios';
import { ConsultasAdminProvider } from './../../../../providers/consultas-admin/consultas-admin';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-tabs-admin-consulta-alumnos',
  templateUrl: 'tabs-admin-consulta-alumnos.html',
})
export class TabsAdminConsultaAlumnosPage {
  mymodel="segment1";
  item:any;
  urlimagen=URL_IMG_ALUMNOS;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_consultasadmin:ConsultasAdminProvider) {

    this.item=this.navParams.get('item');
    console.log(this.item);
  }

  ionViewDidLoad() {
    this.p_consultasadmin.cargar_pagos_por_alumno(this.item.idalumno).then(()=>{
    this.p_consultasadmin.cargar_datos_por_alumno(this.item.idalumno).then(()=>{
      this.p_consultasadmin.cargar_asistencia_por_alumno(this.item.idalumno).then(()=>{

      });
      });
    });
  }

}
