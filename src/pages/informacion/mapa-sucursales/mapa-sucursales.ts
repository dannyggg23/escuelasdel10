import { Component,ViewChild,ElementRef } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';


@Component({
  selector: 'page-mapa-sucursales',
  templateUrl: 'mapa-sucursales.html',
})
export class MapaSucursalesPage {
  @ViewChild('map') mapContainer: ElementRef;
  map:any;
  item:any=[];
  nombre_sucursal:any="";
  latitud_sucursal:any="";
  longitud_sucursal:any="";
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item=this.navParams.get("item");
    this.nombre_sucursal=this.item.nombre_sucursal;
    this.latitud_sucursal=this.item.latitud_sucursal;
    this.longitud_sucursal=this.item.longitud_sucursal;

  }

  ionViewDidLoad() {
   this.loadmap();
  }

  loadmap() {

    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({setView: true, maxZoom: 18});
    leaflet.marker([this.latitud_sucursal,this.longitud_sucursal],{
      title: this.nombre_sucursal
    }).addTo(this.map)

    
    // this.map.locate({
    //   setView: true,
    //   maxZoom: 15
    // }).on('locationfound', (e) => {
    //   let markerGroup = leaflet.featureGroup();
    //   let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
    //     alert('Marker clicked');
    //   })
    //   markerGroup.addLayer(marker);
    //   this.map.addLayer(markerGroup);
    //   }).on('locationerror', (err) => {
    //     alert(err.message);
    // })
 
  
  }

}
