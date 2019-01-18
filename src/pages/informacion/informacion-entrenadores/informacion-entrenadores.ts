import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { InformacionAcademiaProvider } from '../../../providers/informacion-academia/informacion-academia';
import { URL_IMG_ENTRENADOR } from '../../../app/config/url_servicios';


@Component({
  selector: 'page-informacion-entrenadores',
  templateUrl: 'informacion-entrenadores.html',
})
export class InformacionEntrenadoresPage {

  urlimagen:string=URL_IMG_ENTRENADOR;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_informacion:InformacionAcademiaProvider) {
  }

  ionViewDidLoad() {
    this.p_informacion.cargar_entrenadores();
    
  }

}
