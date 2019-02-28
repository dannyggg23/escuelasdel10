import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformacionAcademiaProvider } from '../../../providers/informacion-academia/informacion-academia';


@Component({
  selector: 'page-informacion-horarios',
  templateUrl: 'informacion-horarios.html',
})
export class InformacionHorariosPage {

  pushPage:any="MapaCategoriasPage";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private p_infromacion:InformacionAcademiaProvider) {
  }

  ionViewDidLoad() {
 
  }

  getItems(ev:any){
    const val = ev.target.value;
    console.log(val);
    this.p_infromacion.BuscarSubcategorias(val);
  
  }

}
