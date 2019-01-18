
import { EntrenadoresProvider } from './../../../../providers/entrenadores/entrenadores';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AdminEntrenadoresPage } from '../admin-entrenadores';


@Component({
  selector: 'page-modal-crear-entrenador',
  templateUrl: 'modal-crear-entrenador.html',
})
export class ModalCrearEntrenadorPage {
cedula_entrenador:string="";
nombre_entrenador:string="";
direccion_entrenador:string="";
email_entrenador:string="";
telefono_entrenador:string="";
celular_entrenador:string="";
genero_entrenador:string="";
titulo_entrenador:string="";
fechanacimiento_entrenador:string="";
idsucursal_categorias:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private nativePageTransitions:NativePageTransitions, private p_entrenadores:EntrenadoresProvider,private loadingCtrl:LoadingController) {
  
  
    }

  ionViewDidLoad() {
    this.p_entrenadores.cargar_categoriasdisponibles();
    
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
      this.navCtrl.setRoot(AdminEntrenadoresPage);
    }
  }

  

  insertar_datos()
  {

    if(this.cedula_entrenador=="" ||
      this.nombre_entrenador=="" ||
      this.genero_entrenador=="" ||
      this.titulo_entrenador=="" ||
      this.fechanacimiento_entrenador=="" ||
      this.idsucursal_categorias=="")
      
      {this.p_entrenadores.mostar_alerta("Error","Verifique los campos vacíos")}else{

        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
      
        loading.present(); 

        this.p_entrenadores.insertar(this.cedula_entrenador,
          this.nombre_entrenador,
          this.direccion_entrenador,
          this.email_entrenador,
          this.telefono_entrenador,
          this.celular_entrenador,
          this.genero_entrenador,
          this.titulo_entrenador,
          this.fechanacimiento_entrenador,
          this.idsucursal_categorias
        );

      
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.setRoot(AdminEntrenadoresPage);
        }, 5000);
      }
  }

}
