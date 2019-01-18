import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntrenadorestabProvider } from '../../../providers/entrenadorestab/entrenadorestab';
import { URL_IMG_ALUMNOS } from '../../../app/config/url_servicios';


@Component({
  selector: 'page-cargar-alumnos-entrenador',
  templateUrl: 'cargar-alumnos-entrenador.html',
})
export class CargarAlumnosEntrenadorPage {

  urlimagen:any=URL_IMG_ALUMNOS;
  item:any=[];

  fecha_asistencia:any="";

  //fecha_asistencia: String = new Date().toISOString();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private p_entrenadorestab:EntrenadorestabProvider) {
    this.item=this.navParams.get("item");
    console.log(this.navParams.get("item"));
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CargarAlumnosEntrenadorPage');
    this.p_entrenadorestab.cargar_alumnosCursos(this.item.idsucursal_categorias)
  }


asiste(fichaAlumno:any){
  if(this.fecha_asistencia==""){
    this.p_entrenadorestab.mostar_alerta("Error","Seleccione la fecha")
  }
  else{
    this.p_entrenadorestab.insertar("1",this.fecha_asistencia,fichaAlumno)
  }
  
}
falta(fichaAlumno:any){
  if(this.fecha_asistencia==""){
    this.p_entrenadorestab.mostar_alerta("Error","Seleccione la fecha")
  }
  else{
    this.p_entrenadorestab.insertar("0",this.fecha_asistencia,fichaAlumno)
  }
  
 
}

}
