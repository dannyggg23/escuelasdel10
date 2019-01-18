import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EntrenadorestabProvider } from '../../../providers/entrenadorestab/entrenadorestab';
import { Storage } from '@ionic/storage';
import { URL_IMG_SUCURSAL } from '../../../app/config/url_servicios';
import { CargarAlumnosEntrenadorPage } from '..';


@Component({
  selector: 'page-cursos-entrenador-tab',
  templateUrl: 'cursos-entrenador-tab.html',
})
export class CursosEntrenadorTabPage {

  pushpage:any=CargarAlumnosEntrenadorPage;

  urlimagen:any=URL_IMG_SUCURSAL;

  identrenador:any="";
  item:any=[];

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
