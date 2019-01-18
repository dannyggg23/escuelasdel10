import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RepresentantestabsProvider } from '../../../providers/representantestabs/representantestabs';
import { Storage } from '@ionic/storage';
import { URL_IMG_ALUMNOS } from '../../../app/config/url_servicios';
import { ConsultarAsistenciaAlumnosRepresentantesPage } from '..';



@Component({
  selector: 'page-asistenci-alumnos-representantetab',
  templateUrl: 'asistenci-alumnos-representantetab.html',
})
export class AsistenciAlumnosRepresentantetabPage {
  pushpage:any=ConsultarAsistenciaAlumnosRepresentantesPage;
  urlimagen=URL_IMG_ALUMNOS;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_representantestab:RepresentantestabsProvider,private storage:Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('representante').then((data)=>{
      console.log(data.cedula_representante);
      this.p_representantestab.cargar_alumnosRepresentante(data.idrepresentante);
    })
  }

}
