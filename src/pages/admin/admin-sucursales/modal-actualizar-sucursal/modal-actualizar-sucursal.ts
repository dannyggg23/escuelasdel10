import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SucursalesProvider } from '../../../../providers/sucursales/sucursales';
import { AdminSucursalesPage } from '../admin-sucursales';



@Component({
  selector: 'page-modal-actualizar-sucursal',
  templateUrl: 'modal-actualizar-sucursal.html',
})
export class ModalActualizarSucursalPage {

nombre_sucursal:String="";
direrccion_ducursal:String="";
telefono_sucursal:String="";
encargado_sucursal:String="";
ciudad_idCiudad:String="";
latitud_sucursal:String="";
longitud_sucursal:String="";
idsucursal:String="";
item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativePageTransitions: NativePageTransitions,
    private p_sucursales:SucursalesProvider) {
      
    this.p_sucursales.cargar_ciudades();
    console.log(this.p_sucursales.ciudades);
    this.item=this.navParams.get('item');
    console.log(this.item);

this.nombre_sucursal=this.item.nombre_sucursal;
this.direrccion_ducursal=this.item.direrccion_ducursal;
this.telefono_sucursal=this.item.telefono_sucursal;
this.encargado_sucursal=this.item.encargado_sucursal;
this.ciudad_idCiudad=this.item.ciudad_idCiudad;
this.latitud_sucursal=this.item.latitud_sucursal;
this.longitud_sucursal=this.item.longitud_sucursal;
this.idsucursal=this.item.idsucursal;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalActualizarSucursalPage');
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20,
      };
 
      this.nativePageTransitions.slide(options);
      this.navCtrl.pop();
    } else {
      let options: NativeTransitionOptions = {
        duration: 700
      };
      this.nativePageTransitions.drawer(options);
      this.navCtrl.setRoot(AdminSucursalesPage);
    }
  }

  

  actualizar()
  {

    if(this.nombre_sucursal=="" ||
      this.direrccion_ducursal=="" ||
      this.telefono_sucursal=="" ||
      this.encargado_sucursal=="" ||
      this.ciudad_idCiudad=="" ||
      this.latitud_sucursal=="" ||
      this.longitud_sucursal=="" ){this.p_sucursales.mostar_alerta("Error","Verifique los campos vacíos")}else{
        this.p_sucursales.actualizar_producto(
          this.idsucursal,
          this.nombre_sucursal,
          this.direrccion_ducursal,
          this.telefono_sucursal,
          this.encargado_sucursal,
          this.ciudad_idCiudad,
          this.latitud_sucursal,
          this.longitud_sucursal);
        this.navCtrl.setRoot(AdminSucursalesPage);
      }
  
   
  }

}
