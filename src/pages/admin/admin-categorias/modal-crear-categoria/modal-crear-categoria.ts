import { AdminCategoriasPage } from './../admin-categorias';
import { CategoriasProvider } from './../../../../providers/categorias/categorias';
import { SucursalesProvider } from './../../../../providers/sucursales/sucursales';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-modal-crear-categoria',
  templateUrl: 'modal-crear-categoria.html',
})
export class ModalCrearCategoriaPage {

sucursal_idsucursal:string="";
categoria_idcategoria:string="";
horario_idhorario:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_sucursales:SucursalesProvider,
    private p_categorias:CategoriasProvider,
    private nativePageTransitions:NativePageTransitions) {
    
  }

  ionViewDidLoad() {
    this.p_sucursales.cargar_todos().then(()=>{
      this.p_categorias.cargar_horarios().then(()=>{
        this.p_categorias.cargar_categoriassolas()
      })
    });
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
      this.navCtrl.setRoot(AdminCategoriasPage);
    }
  }

  

  insertar_datos()
  {

    if(this.sucursal_idsucursal=="" ||
      this.categoria_idcategoria=="" ||
      this.horario_idhorario==""){this.p_sucursales.mostar_alerta("Error","Verifique los campos vacíos")}else{
        this.p_categorias.insertar(this.sucursal_idsucursal,
          this.categoria_idcategoria,
          this.horario_idhorario);

        this.navCtrl.setRoot(AdminCategoriasPage);
      }
  
   
  }

}
