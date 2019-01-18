import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ConsultasAdminProvider } from '../../../../providers/consultas-admin/consultas-admin';


@Component({
  selector: 'page-consulta-detalle-pago-representante',
  templateUrl: 'consulta-detalle-pago-representante.html',
})
export class ConsultaDetallePagoRepresentantePage {
  
  item:any=[];
  fecha:any="";
  num_comprobante:any="";
  serie_comprobante:any="";
  tipo_documento:any="";
  total:any="";
  subtotal:any="";




  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private p_consustasadmin:ConsultasAdminProvider) {

     
  }

  ionViewDidLoad() {
    this.item=this.navParams.get("item");
    console.log(this.item);
    this.p_consustasadmin.cargar_detalle_de_pago(this.item.idpago).then(()=>{
    this.fecha=this.item.fecha;
    this.num_comprobante=this.item.num_comprobante;
    this.serie_comprobante=this.item.serie_comprobante;
    this.tipo_documento=this.item.tipo_documento;
    this.total=this.item.total;
    this.subtotal=this.item.subtotal;


    });
  }

}
