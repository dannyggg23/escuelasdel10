import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MensualidadesProvider } from '../../../providers/mensualidades/mensualidades';
import { ConsultaPagosPorRepresentantePage } from './consulta-pagos-por-representante/consulta-pagos-por-representante';
import { SucursalesProvider } from '../../../providers/sucursales/sucursales';
import { URL_IMG_SUCURSAL } from '../../../app/config/url_servicios';
import { ConsultaDeudoresCategoriasPage } from './consulta-deudores-categorias/consulta-deudores-categorias';


@Component({
  selector: 'page-consultas-admin',
  templateUrl: 'consultas-admin.html',
})
export class ConsultasAdminPage {
  url_sucursales=URL_IMG_SUCURSAL;
  mymodel="segment1";
  pushPage=ConsultaPagosPorRepresentantePage;
  pushPageCategorias:any=ConsultaDeudoresCategoriasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_mensualidades:MensualidadesProvider,
    private p_sucursales:SucursalesProvider) {
  }

  ionViewDidLoad() {

    this.p_sucursales.cargar_todos().then(()=>{
      this.p_mensualidades.representantes=[];
    })
  
  }

  getItems(ev:any){
    const val = ev.target.value;
    console.log(val);
    this.p_mensualidades.cargar_representante(val);
  }

}
