import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EntrenadorestabProvider } from '../../../providers/entrenadorestab/entrenadorestab';
import { Storage } from '@ionic/storage';
import { URL_IMG_SUCURSAL } from '../../../app/config/url_servicios';
import { BuscarAsistenciaCursoPage } from '../buscar-asistencia-curso/buscar-asistencia-curso';

@Component({
  selector: 'page-asistencia-entrenador-tab',
  templateUrl: 'asistencia-entrenador-tab.html',
})
export class AsistenciaEntrenadorTabPage {
  
  urlimagen:any=URL_IMG_SUCURSAL;
  pushpage:any=BuscarAsistenciaCursoPage;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private p_entrenadorestab:EntrenadorestabProvider,
    private storage:Storage) {
      
    }
  

  ionViewDidLoad() {

        this.storage.get('entrenador').then((data)=>{
          this.p_entrenadorestab.cargar_cursosEntrenador(data.identrenador);
         })
    
      }


}
