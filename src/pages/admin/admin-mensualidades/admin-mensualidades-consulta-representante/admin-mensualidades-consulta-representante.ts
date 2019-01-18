import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { MensualidadesProvider } from '../../../../providers/mensualidades/mensualidades';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { ModalCrearRepresentantePage } from '../..';
import { ModalVistaAlumnosPage } from '../../admin-alumno/modal-vista-alumnos/modal-vista-alumnos';


@Component({
  selector: 'page-admin-mensualidades-consulta-representante',
  templateUrl: 'admin-mensualidades-consulta-representante.html',
})
export class AdminMensualidadesConsultaRepresentantePage {
 
  pushPage:any=ModalVistaAlumnosPage;
  item:any[]=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private p_mensualidades:MensualidadesProvider,
    private nativePageTransitions:NativePageTransitions) {

      this.item=this.navParams.get("item");
      console.log(this.item);
      

  }

  ionViewDidLoad() {
   
  }

  getItems(ev:any){
    const val = ev.target.value;
    console.log(val);
    this.p_mensualidades.cargar_representante(val);
    this.item=this.navParams.get("item");
    console.log(this.item);
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
