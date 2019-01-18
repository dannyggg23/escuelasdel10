import { ModalActualizarCategoriaPage } from './modal-actualizar-categoria/modal-actualizar-categoria';
import { ModalCrearCategoriaPage } from './modal-crear-categoria/modal-crear-categoria';
import { CategoriasProvider } from './../../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { URL_IMG_SUCURSAL } from '../../../app/config/url_servicios';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { ModalCrearCategoriasolaPage } from './modal-crear-categoriasola/modal-crear-categoriasola';
import { ModalCrearHorarioPage } from './modal-crear-horario/modal-crear-horario';


@Component({
  selector: 'page-admin-categorias',
  templateUrl: 'admin-categorias.html',
})
export class AdminCategoriasPage {

  urlimagen=URL_IMG_SUCURSAL;
  pushPage:any=ModalActualizarCategoriaPage;

  constructor(private nativePageTransitions:NativePageTransitions,
    private p_categorias:CategoriasProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.p_categorias.cargar_categorias();
  }


  crear_categoria()
  {
  let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 700
   };
  this.nativePageTransitions.fade(options);
  this.navCtrl.push(ModalCrearCategoriaPage,{"userd":"danny"});
  }


  nueva_categoria(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 700
     };
    this.nativePageTransitions.fade(options);
    this.navCtrl.push(ModalCrearCategoriasolaPage);
  }
  
  
  nueva_horario(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 700
     };
  
    this.nativePageTransitions.fade(options);
    this.navCtrl.push(ModalCrearHorarioPage);
  
  }

}
