import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
/**
 * Generated class for the MapaCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-categorias',
  templateUrl: 'mapa-categorias.html',
})
export class MapaCategoriasPage {
  item:any=[];
  nombre_sucursal:any="";
  latitud_sucursal:any="";
  longitud_sucursal:any="";
  categorias:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item=this.navParams.get("item");
    this.nombre_sucursal=this.item.nombre_sucursal;
    this.latitud_sucursal=this.item.latitud_sucursal;
    this.longitud_sucursal=this.item.longitud_sucursal;
    this.categorias=this.item.nombre_categoria;

    
  }

  ionViewDidLoad() {
    this.loadmap();
  }


  loadmap() {

    var map = leaflet.map('map').setView([this.latitud_sucursal, this.longitud_sucursal], 13);

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
    }).addTo(map);

    leaflet.marker([this.latitud_sucursal, this.longitud_sucursal]).addTo(map)
        .bindPopup(this.categorias)
    .openPopup();
  
  }

}
