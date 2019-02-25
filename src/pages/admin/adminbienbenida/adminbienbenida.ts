import { AdminConsultasAlumnosPage } from './../admin-consultas-alumnos/admin-consultas-alumnos';

import { AdminAlumnoPage } from './../admin-alumno/admin-alumno';
import { AdminEntrenadoresPage } from './../admin-entrenadores/admin-entrenadores';
import { AdminCategoriasPage } from './../admin-categorias/admin-categorias';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { InicioadminPage } from '../inicioadmin/inicioadmin';
import { NotificacionesAdminPage } from './../notificaciones-admin/notificaciones-admin';
import { AdminSucursalesPage } from '../admin-sucursales/admin-sucursales';
import { AdminMensualidadesPage } from '../admin-mensualidades/admin-mensualidades';
import { HomePage } from '../../home/home';
import { URL_IMG_USUARIO } from '../../../app/config/url_servicios';
import { ConsultasAdminPage } from '../consultas-admin/consultas-admin';


@Component({
  selector: 'page-adminbienbenida',
  templateUrl: 'adminbienbenida.html',
})
export class AdminbienbenidaPage {
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;

  imgadmin:any;

  rootPage:any=InicioadminPage;

  NotificacionesAdminPage:any=NotificacionesAdminPage;
  AdminSucursalesPage:any=AdminSucursalesPage;
  AdminCategoriasPage:any=AdminCategoriasPage;
  AdminEntrenadoresPage:any=AdminEntrenadoresPage;
  AdminAlumnoPage:any=AdminAlumnoPage;
  AdminMensualidadesPage:any=AdminMensualidadesPage;
  ConsultasAdminPage:any=ConsultasAdminPage;
  InicioadminPage:any=InicioadminPage;
  AdminConsultasAlumnosPage:any=AdminConsultasAlumnosPage;
  nombreUsuario:any="";
  imagenUsuario:any=URL_IMG_USUARIO;
  email_usuario:any="";
  celular_usuario:any="";
  NoticiasAdminPage:any="NoticiasAdminPage";
  ImagenesAppAdminPage:any="ImagenesAppAdminPage";
  item:any;
  params:any;


  constructor(private storage:Storage,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl :AlertController,
    private menuCtrl:MenuController) 
    
    {
    this.storage.get('usuario').then((val)=>{
      this.item=val;
      this.nombreUsuario=val.nombre_usuario;
      this.imagenUsuario=this.imagenUsuario+val.imagen_usuario;
      this.email_usuario=val.email_usuario;
      this.celular_usuario=val.celular_usuario;
     // this.imagenUsuario=this.imagenUsuario+val.imagen_usuario;
     // console.log("usuario :"+this.nombreUsuario);
     // console.log("imagen :"+this.imagenUsuario);
      });
  }

  ionViewDidLoad() {

  //  this.params=this.navParams.get('item');
  //  if(this.params==1)
  //  {
  //   this.openPage(AdminMensualidadesPage);
  //  }else if(this.params==2)
  //  {
  //   this.openPage(AdminAlumnoPage);
  //  }
  //  else if(this.params==3){
  //   this.openPage(NotificacionesAdminPage)
  //  }
  //  else if(this.params==4){
  //   this.openPage(ConsultasAdminPage)
  //  }
   
   }
  
  openPage(page){
  
      this.rootPage=page;
      this.menuCtrl.close();
     
      
  }

  
  cerra_sesion(){
    let alert = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: 'Está seguro de cerrar la sesión?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ACEPTAR',
          handler: () => {
            this.storage.remove('usuario').then(()=>{
              this.navCtrl.setRoot(HomePage);
            });
          }
        }
      ]
    });
    alert.present();
  }

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }
  menuItemHandler1(): void {
    this.showSubmenu1 = !this.showSubmenu1;
  }
}
