import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SucursalesProvider } from '../../../../providers/sucursales/sucursales';
import { CategoriasProvider } from '../../../../providers/categorias/categorias';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { AdminCategoriasPage } from '../admin-categorias';
import { ModalCrearCategoriasolaPage } from '../modal-crear-categoriasola/modal-crear-categoriasola';
import { ModalCrearHorarioPage } from '../modal-crear-horario/modal-crear-horario';


@Component({
  selector: 'page-modal-actualizar-categoria',
  templateUrl: 'modal-actualizar-categoria.html',
})
export class ModalActualizarCategoriaPage {
  idsucursal_categorias:string="";
sucursal_idsucursal:string="";
categoria_idcategoria:string="";
horario_idhorario:string="";
item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_sucursales:SucursalesProvider,
    private p_categorias:CategoriasProvider,
    private nativePageTransitions:NativePageTransitions) {

    this.item=this.navParams.get('item');
    this.idsucursal_categorias=this.idsucursal_categorias;
      this.sucursal_idsucursal=this.item.idsucursal;
      this.categoria_idcategoria=this.item.idcategoria;
      this.horario_idhorario=this.item.idhorario;

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

  
  actualizar()
  {

    if(this.sucursal_idsucursal=="" ||
      this.categoria_idcategoria=="" ||
      this.horario_idhorario==""){this.p_sucursales.mostar_alerta("Error","Verifique los campos vacíos")}else{
        this.p_categorias.actualizar(
          this.idsucursal_categorias,
          this.sucursal_idsucursal,
          this.categoria_idcategoria,
          this.horario_idhorario);

        this.navCtrl.setRoot(AdminCategoriasPage);
      }
  
   
  }





}
