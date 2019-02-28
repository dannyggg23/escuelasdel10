import { URL_IMG_DOCUMENTOS } from './../../app/config/url_servicios';
import { InformacionAcademiaProvider } from './../../providers/informacion-academia/informacion-academia';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-informacion-academia',
  templateUrl: 'informacion-academia.html',
})
export class InformacionAcademiaPage {
  urlimg=URL_IMG_DOCUMENTOS;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_informacion:InformacionAcademiaProvider) {
  }

  ionViewDidLoad() {
   this.p_informacion.cargar_convenios().then(()=>{
     this.p_informacion.cargar_certificaciones().then(()=>{
       console.log("Datos cargados");     
     })
   })
  }

}
