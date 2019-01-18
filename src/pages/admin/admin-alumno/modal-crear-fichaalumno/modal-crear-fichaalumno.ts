import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnosProvider } from '../../../../providers/alumnos/alumnos';
import { AdminAlumnoPage } from '../admin-alumno';


@Component({
  selector: 'page-modal-crear-fichaalumno',
  templateUrl: 'modal-crear-fichaalumno.html',
})
export class ModalCrearFichaalumnoPage {
idsucursal_categorias:any="";
cedula_alumno:any="";
nombre_alumno:any="";
genero_alumno:any="";
representante_idrepresentante:any="";
tipo_sangre_alumno:any="";
escuela_alumno:any="";
fecha_nacimiento:any="";
posicion_alumno:any="";
peso_alumno:any="";
talla_alumno:any="";
informacion_alumno:any="";
descuento_ficha_alumno:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_alumnos:AlumnosProvider) {

      this.idsucursal_categorias=this.navParams.get("idsucursal_categorias");

      console.log("sucursal "+this.idsucursal_categorias);

  }

  ionViewDidLoad() {
    //this.p_alumnos.cargar_representante();
    this.representante_idrepresentante=this.navParams.get("idrepresentante");
    console.log("representante "+this.representante_idrepresentante)
  }


  insertar_datos(){

    if(this.idsucursal_categorias=="" ||
    this.cedula_alumno=="" ||
    this.nombre_alumno=="" ||
    this.genero_alumno=="" ||
    this.representante_idrepresentante=="" ||
    this.tipo_sangre_alumno=="" ||
    this.escuela_alumno=="" ||
    this.fecha_nacimiento=="" ||
    this.posicion_alumno=="" ||
    this.peso_alumno=="" ||
    this.talla_alumno=="" ||
    this.descuento_ficha_alumno=="" ){this.p_alumnos.mostar_alerta("Error","Verifique los campos vacíos")}else{
    
      this.p_alumnos.insertar_alumno(
        this.idsucursal_categorias,
        this.cedula_alumno,
        this.nombre_alumno,
        this.genero_alumno,
        this.representante_idrepresentante,
        this.tipo_sangre_alumno,
        this.escuela_alumno,
        this.fecha_nacimiento,
        this.posicion_alumno,
        this.peso_alumno,
        this.talla_alumno,
        this.informacion_alumno,
        this.descuento_ficha_alumno);
        
      this.navCtrl.setRoot(AdminAlumnoPage);
    }


  }

}

  
