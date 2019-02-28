import { InformacionAcademiaProvider } from './../../../providers/informacion-academia/informacion-academia';
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
  idsucursal:string="";
  categorias:string="";
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private p_informacion:InformacionAcademiaProvider) {

    this.item=this.navParams.get("item");
    this.nombre_sucursal=this.item.nombre_sucursal;
    this.latitud_sucursal=this.item.latitud_sucursal;
    this.longitud_sucursal=this.item.longitud_sucursal;
    this.longitud_sucursal=this.item.longitud_sucursal;
    this.idsucursal=this.item.idsucursal;
  }

  ionViewDidLoad() {
    this.p_informacion.listarHorarioCatego(this.idsucursal).then(()=>{
      console.log(this.p_informacion.horariosSucurs.length);
      for(let i=0;i<=this.p_informacion.horariosSucurs.length-1;i++){
        this.categorias=this.categorias+"->>"+this.p_informacion.horariosSucurs[i].nombre_categoria+" - "+this.p_informacion.horariosSucurs[i].nombre+" - "+this.p_informacion.horariosSucurs[i].hora_inicio+" : "+this.p_informacion.horariosSucurs[i].hora_fin+";     ";
        console.log(this.categorias);
      }

       this.loadmap();
    })
   

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
