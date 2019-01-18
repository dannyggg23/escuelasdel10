import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MensualidadesProvider } from '../../../providers/mensualidades/mensualidades';
import { MensualidadesAlumnoPage } from './mensualidades-alumno/mensualidades-alumno';
 
@Component({
  selector: 'page-admin-mensualidades',
  templateUrl: 'admin-mensualidades.html',
})
export class AdminMensualidadesPage {

  pushPage:any=MensualidadesAlumnoPage

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_mensualidades:MensualidadesProvider) {

  }

  ionViewDidLoad() {

    this.p_mensualidades.representantes=[];

  }

  getItems(ev:any){
    const val = ev.target.value;
    console.log(val);
    this.p_mensualidades.cargar_representante(val);
  }

}
