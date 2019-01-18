import { ModalActualizarSucursalPage } from './modal-actualizar-sucursal/modal-actualizar-sucursal';
import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { SucursalesProvider } from '../../../providers/sucursales/sucursales';
import { URL_IMG_SUCURSAL } from '../../../app/config/url_servicios';
import { ModalCrearSucursalPage } from './../../admin/index';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-admin-sucursales',
  templateUrl: 'admin-sucursales.html',
})
export class AdminSucursalesPage {

  pushPage:any=ModalActualizarSucursalPage;
  urlimagen=URL_IMG_SUCURSAL;

  constructor(private menuCtrl:MenuController,
    private modalCtrl:ModalController,
    private p_sucursales:SucursalesProvider,
    public navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) { 
    //this.menuCtrl.toggle();
  }

  ionViewDidLoad() {
   this.p_sucursales.cargar_todos()
  }


  crear_sucursal()
  {
  let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 600
   };
  this.nativePageTransitions.fade(options);
  this.navCtrl.push(ModalCrearSucursalPage,{"userd":"danny"});
  }

}
