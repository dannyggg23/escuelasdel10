
import { EntrenadoresProvider } from './../../../../providers/entrenadores/entrenadores';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AdminEntrenadoresPage } from '../admin-entrenadores';

@Component({
  selector: 'page-modal-crear-fichaentrenador',
  templateUrl: 'modal-crear-fichaentrenador.html',
})
export class ModalCrearFichaentrenadorPage {

entrenador_identrenador:string="";
idsucursal_categorias:string="";


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private p_entrenadores:EntrenadoresProvider,
     private nativePageTransitions:NativePageTransitions,
     private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    this.p_entrenadores.cargar_categoriasdisponibles().then(()=>{
      this.p_entrenadores.cargar_entrenadores();
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
        this.navCtrl.setRoot(AdminEntrenadoresPage);
      }
    }
  
    
  
    insertar_datos()
    {
      if(this.entrenador_identrenador=="" ||
        this.idsucursal_categorias=="" )
        {this.p_entrenadores.mostar_alerta("Error","Verifique los campos vacíos")}else
        {

          let loading = this.loadingCtrl.create({
            content: 'Please wait...'
          });
        
          loading.present();
        this.p_entrenadores.insertar_ficha(this.entrenador_identrenador,this.idsucursal_categorias)

        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.setRoot(AdminEntrenadoresPage);
        }, 5000);
        }
    }
  }


