import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ConsultasAdminProvider } from '../../../../providers/consultas-admin/consultas-admin';
import { ConsultaDetallePagoRepresentantePage } from '../consulta-detalle-pago-representante/consulta-detalle-pago-representante';



@Component({
  selector: 'page-consulta-pagos-por-representante',
  templateUrl: 'consulta-pagos-por-representante.html',
})
export class ConsultaPagosPorRepresentantePage {
  pushPage:any=ConsultaDetallePagoRepresentantePage;
  item:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private p_consultasadmin:ConsultasAdminProvider) {
  }

  ionViewDidLoad() {
   this.item=this.navParams.get("item");
   this.p_consultasadmin.cargar_pagos_por_representante(this.item.idrepresentante);
  
  }

}
