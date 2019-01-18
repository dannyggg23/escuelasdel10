import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SucursalesProvider } from '../../../providers/sucursales/sucursales';
import { URL_IMG_SUCURSAL } from '../../../app/config/url_servicios';

import { MapaSucursalesPage } from '..';



@Component({
  selector: 'page-informacion-sucursales',
  templateUrl: 'informacion-sucursales.html',
})
export class InformacionSucursalesPage {

  //@ViewChild('map') mapContainer: ElementRef;
  pushPage:any=MapaSucursalesPage;
  urlimagen:any=URL_IMG_SUCURSAL;
  map: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private p_sucursales:SucursalesProvider) {
  }

  ionViewDidLoad() {
    this.p_sucursales.cargar_todos();
    //this.loadmap();
  }

  ionViewDidEnter()
  {
    
  }

  // loadmap() {
  //   this.map = leaflet.map("map").fitWorld();
  //   leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attributions: 'www.tphangout.com',
  //     maxZoom: 18
  //   }).addTo(this.map);
  // }

}
