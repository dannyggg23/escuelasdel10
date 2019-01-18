
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AdminSucursalesPage } from '../admin-sucursales';
import { SucursalesProvider } from '../../../../providers/sucursales/sucursales';


/**
 * Generated class for the ModalCrearSucursalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-modal-crear-sucursal',
  templateUrl: 'modal-crear-sucursal.html',
})
export class ModalCrearSucursalPage {
  sucursales:any[]=[];

nombre_sucursal:String="";
direrccion_ducursal:String="";
telefono_sucursal:String="";
encargado_sucursal:String="";
ciudad_idCiudad:String="";
latitud_sucursal:String="";
longitud_sucursal:String="";

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private modalCtrl:ModalController,public navCtrl: NavController, 
    public navParams: NavParams,
    private p_sucursales:SucursalesProvider) {
      this.p_sucursales.cargar_ciudades();
    console.log(this.p_sucursales.ciudades);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCrearSucursalPage');
    
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

  

insertar_datos()
  {

    if(this.nombre_sucursal=="" ||
      this.direrccion_ducursal=="" ||
      this.telefono_sucursal=="" ||
      this.encargado_sucursal=="" ||
      this.ciudad_idCiudad=="" ||
      this.latitud_sucursal=="" ||
      this.longitud_sucursal=="" ){this.p_sucursales.mostar_alerta("Error","Verifique los campos vacíos")}else{
        this.p_sucursales.insertar_producto(this.nombre_sucursal,
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
