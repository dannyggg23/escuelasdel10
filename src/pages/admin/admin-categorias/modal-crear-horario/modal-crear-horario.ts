import { CategoriasProvider } from './../../../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Time } from '@angular/common';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AdminCategoriasPage } from '../admin-categorias';

@Component({
  selector: 'page-modal-crear-horario',
  templateUrl: 'modal-crear-horario.html',
})
export class ModalCrearHorarioPage {

nombre:String="";
hora_inicio:String="";
hora_fin:String="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativePageTransitions:NativePageTransitions,private p_categorias:CategoriasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCrearHorarioPage');
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20,
      };
 
      this.nativePageTransitions.slide(options);
      this.navCtrl.pop();
    } else {
      let options: NativeTransitionOptions = {
        duration: 700
      };
      this.nativePageTransitions.drawer(options);
      this.navCtrl.setRoot(AdminCategoriasPage);
    }
  }


  insertar_horario()
  {
    if(this.nombre=="" ||
      this.hora_inicio=="" ||
      this.hora_fin==""){this.p_categorias.mostar_alerta("Error","Verifique los campos vacíos")}else{
        this.p_categorias.insertar_horario(this.nombre,
          this.hora_inicio,
          this.hora_fin);
        this.navCtrl.setRoot(AdminCategoriasPage);
      }
  
   
  }

}
