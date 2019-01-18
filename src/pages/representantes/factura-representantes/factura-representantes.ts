import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsultaDetallePagoRepresentantePage } from '../../admin';
import { ConsultasAdminProvider } from '../../../providers/consultas-admin/consultas-admin';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-factura-representantes',
  templateUrl: 'factura-representantes.html',
})
export class FacturaRepresentantesPage {
  pushPage:any=ConsultaDetallePagoRepresentantePage;
  item:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_consultasadmin:ConsultasAdminProvider,private storage:Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('representante').then((data)=>{
      console.log(data.cedula_representante);
      this.p_consultasadmin.cargar_pagos_por_representante(data.idrepresentante);
    })
    
  }

}
