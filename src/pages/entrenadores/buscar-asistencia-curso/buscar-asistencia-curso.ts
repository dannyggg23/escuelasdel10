import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntrenadorestabProvider } from '../../../providers/entrenadorestab/entrenadorestab';


@Component({
  selector: 'page-buscar-asistencia-curso',
  templateUrl: 'buscar-asistencia-curso.html',
})
export class BuscarAsistenciaCursoPage {

  item:any=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private p_entrenadorestab:EntrenadorestabProvider) {
     
      this.item=this.navParams.get('item');
     // console.log(this.item);
      
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad BuscarAsistenciaCursoPage');
  }


  getItems(ev:any){
    const val = ev.target.value;
   // console.log(val);
    this.p_entrenadorestab.cargar_AsistenciaAlumnosCursos(this.item.idsucursal_categorias,val);
  }

}
