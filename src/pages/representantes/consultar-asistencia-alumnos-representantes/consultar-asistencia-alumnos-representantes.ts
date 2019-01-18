import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RepresentantestabsProvider } from '../../../providers/representantestabs/representantestabs';


@Component({
  selector: 'page-consultar-asistencia-alumnos-representantes',
  templateUrl: 'consultar-asistencia-alumnos-representantes.html',
})
export class ConsultarAsistenciaAlumnosRepresentantesPage {

  alumnos:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_representantestab:RepresentantestabsProvider) {
  }

  ionViewDidLoad() {
    this.alumnos=this.navParams.get("item");
    console.log(this.alumnos.idalumno);
    this.p_representantestab.cargar_AsistenciaAlumnosRepresentante(this.alumnos.idalumno);
  }

}
