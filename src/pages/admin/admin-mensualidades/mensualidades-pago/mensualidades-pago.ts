import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MensualidadesProvider } from '../../../../providers/mensualidades/mensualidades';
import { AdminMensualidadesPage } from '../admin-mensualidades';

@Component({
  selector: 'page-mensualidades-pago',
  templateUrl: 'mensualidades-pago.html',
})
export class MensualidadesPagoPage {
representante_idrepresentante:any="";
ficha_alumno_idficha_alumno:any="";
usuario_idusuario:any="";
fecha:any="";
tipo_documento:any="Factura";
serie_comprobante:any="";
num_comprobante:any="";
impuesto:any="12";
productos_servicios_idproductos_servicios:any="";
precio_pago:number;
numero_meses_pago:number=1;
descuento_pago:number;
total:any;
item:any=[];
servicio:any;
subtotal:number=0;
nombre_productos_servicios:any;

factura:any[];


  constructor(private storage: Storage,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private p_mensualidades:MensualidadesProvider,) {


  //alumno
   this.item= this.navParams.get('item');
    this.representante_idrepresentante=this.item.idrepresentante;
    this.ficha_alumno_idficha_alumno=this.item.idficha_alumno;
    this.descuento_pago=this.item.descuento_ficha_alumno;

    //servicio

    this.servicio=this.navParams.get("servicio");
    this.productos_servicios_idproductos_servicios=this.servicio.idproductos_servicios;
    this.precio_pago=this.servicio.precio_productos_servicios;
    this.nombre_productos_servicios=this.servicio.nombre_productos_servicios;
   

  // console.log("representante :"+this.usuario_idusuario);
  // console.log("ficha alumno :"+this.usuario_idusuario);

  if(this.item.inscripcion==1 && this.servicio.idproductos_servicios==2)
  {
    p_mensualidades.mostar_alerta("ALERTA","El alumno ya pago la inscripción");
    this.navCtrl.pop();
  }
  
  //usuario
  this.storage.get('usuario').then((val)=>{
  this.usuario_idusuario=val.idusuario;
  console.log("usuario :"+this.usuario_idusuario);
  });



  }

  ionViewDidLoad() {
   
  this.p_mensualidades.cargar_datosFactura().then(data=>{

    console.log(this.p_mensualidades.factura[0]);
      this.num_comprobante=this.p_mensualidades.factura[0].numero_factura;
      this.fecha=this.p_mensualidades.factura[0].fecha_actual;
      this.serie_comprobante=this.p_mensualidades.factura[0].serie_factura
  });

  

  
  }



onKeyPressed(event:any){
  const val = event.target.value;
  console.log(val);
   
}

  insertar_datos(){

    if(this.usuario_idusuario=="" ||
    this.fecha=="" ||
    this.tipo_documento=="" ||
    this.serie_comprobante=="" ||
    this.num_comprobante=="" ||
    this.productos_servicios_idproductos_servicios=="" ||
    this.total==""
   )
   {
     this.p_mensualidades.mostar_alerta("Error","Verifique los campos vacíos")}else{

      this.total=(((this.precio_pago*this.numero_meses_pago)*0.12)+(this.precio_pago*this.numero_meses_pago))-(((this.precio_pago*this.numero_meses_pago)*this.descuento_pago)/100);
    
      this.subtotal=this.precio_pago*this.numero_meses_pago
    
      //let descuento:number=(((this.numero_meses_pago*this.precio_pago)*this.descuento_pago)/100);
    
    
     console.log(this.precio_pago);
     
    
      this.p_mensualidades.insertar_pago
      (this.representante_idrepresentante,
        this.usuario_idusuario,
        this.fecha,
        this.total,
        this.tipo_documento,
        this.serie_comprobante,
        this.num_comprobante,
        this.impuesto,
        this.ficha_alumno_idficha_alumno,
        this.numero_meses_pago,
        this.precio_pago,
        this.descuento_pago,
        this.productos_servicios_idproductos_servicios,
        this.subtotal)
      this.navCtrl.setRoot(AdminMensualidadesPage);
    }
  }

}
