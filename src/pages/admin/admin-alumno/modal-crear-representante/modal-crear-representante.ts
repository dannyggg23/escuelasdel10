import { AlumnosProvider } from './../../../../providers/alumnos/alumnos';
import { SucursalesProvider } from './../../../../providers/sucursales/sucursales';
import { AdminAlumnoPage } from './../admin-alumno';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';


@Component({
  selector: 'page-modal-crear-representante',
  templateUrl: 'modal-crear-representante.html',
})
export class ModalCrearRepresentantePage {

cedula_representante:any="";
nombre_representante:any="";
email_representante:any="";
direccion_representante:any="";
telefono_representante:any="";
genero_representante:any="";
fecha_nacimiento_representante:any="";
parentesco_respresentante:any="";
celular_representante:any="";
lugar_trabajo_representante:any="";
cedula_conyugue_representante:any="";
nombre_conyugue_representante:any="";
barrio_representante:any="";
ciudad_representante:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private nativePageTransitions:NativePageTransitions,
  private p_sucursales:SucursalesProvider,private p_alumnos:AlumnosProvider) {

  }

  ionViewDidLoad() {
    this.p_sucursales.cargar_ciudades();
  }

  insertar_datos(){

    if(this.cedula_representante=="" ||
    this.nombre_representante=="" ||
    this.email_representante=="" ||
    this.direccion_representante=="" ||
    this.genero_representante=="" ||
    this.fecha_nacimiento_representante=="" ||
    this.parentesco_respresentante=="" ||
    this.celular_representante=="" ||
    this.lugar_trabajo_representante=="" ||
    this.cedula_conyugue_representante=="" ||
    this.nombre_conyugue_representante=="" ||
    this.barrio_representante=="" ||
    this.ciudad_representante==""  ){this.p_sucursales.mostar_alerta("Error","Verifique los campos vacíos")}else{
    
      this.p_alumnos.insertar_representante(
        this.cedula_representante,
        this.nombre_representante,
        this.email_representante,
        this.direccion_representante,
        this.telefono_representante,
        this.genero_representante,
        this.fecha_nacimiento_representante,
        this.parentesco_respresentante,
        this.celular_representante,
        this.lugar_trabajo_representante,
        this.cedula_conyugue_representante,
        this.nombre_conyugue_representante,
        this.barrio_representante,
        this.ciudad_representante);
      this.navCtrl.setRoot(AdminAlumnoPage);
    }


  }

  

}
