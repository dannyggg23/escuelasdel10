import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RepresentantestabsProvider } from '../../../providers/representantestabs/representantestabs';
import { MenurepresentantesPage } from '../menurepresentantes/menurepresentantes';


@Component({
  selector: 'page-actualizar-datos-alumno',
  templateUrl: 'actualizar-datos-alumno.html',
})
export class ActualizarDatosAlumnoPage {
item:any=[];

idalumno:any="";
cedula_alumno:any="";
nombre_alumno:any="";
genero_alumno:any="";
representante_idrepresentante:any="";
tipo_sangre_alumno:any="";
escuela_alumno:any="";
fecha_nacimiento:any="";
posicion_alumno:any="";
peso_alumno:any="";
talla_alumno:any="";
informacion_alumno:any="";

  constructor(private loadingCtrl:LoadingController,public navCtrl: NavController,
     public navParams: NavParams,private p_representantestab:RepresentantestabsProvider) {
    
    this.item=this.navParams.get('item');
     this.idalumno=this.item.idalumno;
     this.cedula_alumno=this.item.cedula_alumno;
     this.nombre_alumno=this.item.nombre_alumno;
     this.genero_alumno=this.item.genero_alumno;
     this.representante_idrepresentante=this.item.representante_idrepresentante;
     this.tipo_sangre_alumno=this.item.tipo_sangre_alumno;
     this.escuela_alumno=this.item.escuela_alumno;
     this.fecha_nacimiento=this.item.fecha_nacimiento;
     this.posicion_alumno=this.item.posicion_alumno;
     this.peso_alumno=this.item.peso_alumno;
     this.talla_alumno=this.item.talla_alumno;
     this.informacion_alumno=this.item.informacion_alumno;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualizarDatosAlumnoPage');
  }

  insertar_datos(){
if(this.idalumno=="" ||
this.cedula_alumno=="" ||
this.nombre_alumno=="" ||
this.genero_alumno=="" ||
this.representante_idrepresentante=="" ||
this.tipo_sangre_alumno=="" ||
this.escuela_alumno=="" ||
this.fecha_nacimiento=="" ||
this.posicion_alumno=="" ||
this.peso_alumno=="" ||
this.talla_alumno=="" ||
this.informacion_alumno=="" 
)
{
  this.p_representantestab.mostar_alerta("Error","Verifique los campos vacios");
}
else
{
  this.p_representantestab.insertar_alumno(
  this.idalumno,
  this.cedula_alumno,
  this.nombre_alumno,
  this.genero_alumno,
  this.representante_idrepresentante,
  this.tipo_sangre_alumno,
  this.escuela_alumno,
  this.fecha_nacimiento,
  this.posicion_alumno,
  this.peso_alumno,
  this.talla_alumno,
  this.informacion_alumno);

  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    this.navCtrl.setRoot(MenurepresentantesPage);
    loading.dismiss();
  }, 3000);


  
}
}

}
