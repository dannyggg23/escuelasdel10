import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformacionAcademiaProvider } from '../../../providers/informacion-academia/informacion-academia';
import { URL_IMG_NOTICIA } from '../../../app/config/url_servicios';

@Component({
  selector: 'page-noticias-inicio',
  templateUrl: 'noticias-inicio.html',
})
export class NoticiasInicioPage {
  urlimagen:any=URL_IMG_NOTICIA;
  constructor(public navCtrl: 
    NavController, public navParams: NavParams,
    private p_informacion:InformacionAcademiaProvider) {
  }

  ionViewDidLoad() {
    this.p_informacion.cargar_noticias();
    
  }

}
