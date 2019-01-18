
import { ModalCrearRepresentantePage } from './modal-crear-representante/modal-crear-representante';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { SucursalesProvider } from '../../../providers/sucursales/sucursales';
import { ModalCategoriasAlumnoPage } from './modal-categorias-alumno/modal-categorias-alumno';
import { URL_IMG_SUCURSAL } from '../../../app/config/url_servicios';

@Component({
  selector: 'page-admin-alumno',
  templateUrl: 'admin-alumno.html',
})
export class AdminAlumnoPage {

  pushPage:any=ModalCategoriasAlumnoPage;
  urlimagen=URL_IMG_SUCURSAL;

  constructor( private p_sucursales:SucursalesProvider,
    public navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
   this.p_sucursales.cargar_todos();
  }


  crear_representante()
  {
  let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 600
   };
  this.nativePageTransitions.fade(options);
  this.navCtrl.push(ModalCrearRepresentantePage);
  }

}
