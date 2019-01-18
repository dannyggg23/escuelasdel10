import { TabsAdminConsultaAlumnosPage } from './tabs-admin-consulta-alumnos/tabs-admin-consulta-alumnos';
import { ConsultasAdminProvider } from './../../../providers/consultas-admin/consultas-admin';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-admin-consultas-alumnos',
  templateUrl: 'admin-consultas-alumnos.html',
})
export class AdminConsultasAlumnosPage {
  pushPage:any=TabsAdminConsultaAlumnosPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_consultasAdmin:ConsultasAdminProvider) {
  }

  ionViewDidLoad() {
   this.p_consultasAdmin.alumnos_nombre=[];
  }


  getItems(ev:any){
    const val = ev.target.value;
    console.log(val);
    this.p_consultasAdmin.busquedaAlumnosNombre(val);
  }

}
