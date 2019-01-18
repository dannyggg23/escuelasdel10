import { ModalCrearFichaalumnoPage } from './../modal-crear-fichaalumno/modal-crear-fichaalumno';
import { ModalCrearRepresentantePage } from './../modal-crear-representante/modal-crear-representante';
import { AlumnosProvider } from './../../../../providers/alumnos/alumnos';
import { URL_IMG_ALUMNOS } from './../../../../app/config/url_servicios';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';



@Component({
  selector: 'page-modal-vista-alumnos',
  templateUrl: 'modal-vista-alumnos.html',
})
export class ModalVistaAlumnosPage {
  urlimagen=URL_IMG_ALUMNOS;

  item:any;
  representante:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private p_alumnos:AlumnosProvider,
    private nativePageTransitions:NativePageTransitions) {
    
    
     this.item=this.navParams.get("item");
    // 
    console.log(this.item);
    

  }
  
  ionViewDidLoad() {
    this.p_alumnos.cargar_alumnoscategoria(this.item.idsucursal_categorias).then(()=>{
      this.representante=this.navParams.get("representante");
      console.log(this.representante)
    });
  }

  

  crear_ficha()
  {
  let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 600
   };
  this.nativePageTransitions.fade(options);
  this.navCtrl.push(ModalCrearFichaalumnoPage,{"idsucursal_categorias":this.item.idsucursal_categorias,"idrepresentante":this.representante.idrepresentante});
  }


}
