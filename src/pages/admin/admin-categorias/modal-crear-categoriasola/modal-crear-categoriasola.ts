import { CategoriasProvider } from './../../../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AdminCategoriasPage } from '../admin-categorias';


@Component({
  selector: 'page-modal-crear-categoriasola',
  templateUrl: 'modal-crear-categoriasola.html',
})
export class ModalCrearCategoriasolaPage {

  nombre_categoria:String="";
descripcion_categoria:String="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativePageTransitions:NativePageTransitions,
    private p_categorias:CategoriasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCrearCategoriasolaPage');
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


  insertar_categoria()
  {
    if(this.nombre_categoria=="" ||
      this.descripcion_categoria=="" ){this.p_categorias.mostar_alerta("Error","Verifique los campos vacíos")}else{
      this.p_categorias.insertar_categoria(this.nombre_categoria,
      this.descripcion_categoria)
      this.navCtrl.setRoot(AdminCategoriasPage);
      }
  
   
  }

}
