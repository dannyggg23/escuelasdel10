import { EntrenadoresProvider } from './../../../providers/entrenadores/entrenadores';
import { SucursalesProvider } from './../../../providers/sucursales/sucursales';
import { NotificacionesProvider } from './../../../providers/notificaciones/notificaciones';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-notificaciones-admin',
  templateUrl: 'notificaciones-admin.html',
})
export class NotificacionesAdminPage {
mensaje:string="";
titulo:string="";
subtitulo:string="";
sucursal_idsucursal:any=""
sucursal_categorias_idsucursal_categorias:any="";
mymodel="segment1";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private p_notificaciones:NotificacionesProvider,private p_sucursales:SucursalesProvider,
    private p_entrenadores:EntrenadoresProvider) {
  }

  ionViewDidLoad() {
    this.p_sucursales.cargar_todos();
    this.p_entrenadores.categoriashorariosucursal();
  }

  notificaciones_todos()
  {
    if(this.mensaje=="" ||
    this.titulo=="" ||
    this.subtitulo==""){this.p_notificaciones.mostar_alerta("Error","Verifique los campos vacíos")}else{
      this.p_notificaciones.todos(this.mensaje,
      this.titulo,
      this.subtitulo);
      this.navCtrl.setRoot(NotificacionesAdminPage);
    }


  }

  notificaciones_sucursal(){

     if(this.mensaje=="" ||
    this.titulo=="" ||
    this.sucursal_idsucursal=="" ||
    this.subtitulo==""){this.p_notificaciones.mostar_alerta("Error","Verifique los campos vacíos")}else{
      this.p_notificaciones.sucursal(
        this.sucursal_idsucursal,
        this.mensaje,
        this.titulo,
        this.subtitulo);
      this.navCtrl.setRoot(NotificacionesAdminPage);
    }

  }

  notificaciones_curso(){
    if(this.mensaje=="" ||
   this.titulo=="" ||
   this.sucursal_categorias_idsucursal_categorias=="" ||
   this.subtitulo==""){this.p_notificaciones.mostar_alerta("Error","Verifique los campos vacíos")}else{
     this.p_notificaciones.curso(
       this.sucursal_categorias_idsucursal_categorias,
       this.mensaje,
       this.titulo,
       this.subtitulo);
     this.navCtrl.setRoot(NotificacionesAdminPage);
   }

 }

}
