
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';
import { OneSignal } from '@ionic-native/onesignal';
import { IonicStorageModule } from '@ionic/storage';
import { LoginProvider } from '../providers/login/login';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
import { AppAvailability } from '@ionic-native/app-availability';
import { HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { Camera, CameraOptions } from '@ionic-native/camera';



//admin
import { 
  AdminSucursalesPage,
  AdminbienbenidaPage,
  InicioadminPage,
  NotificacionesAdminPage,
  ModalCrearSucursalPage,
  ModalActualizarSucursalPage,
  AdminCategoriasPage,
  ModalCrearCategoriaPage,
  ModalActualizarCategoriaPage,
  ModalCrearHorarioPage,
  ModalCrearCategoriasolaPage,
  AdminEntrenadoresPage,
  ModalCrearEntrenadorPage,
  ModalCrearFichaentrenadorPage,
  AdminAlumnoPage,
  ModalCrearAlumnoPage,
  ModalCrearFichaalumnoPage,
  ModalCrearRepresentantePage, 
  ModalCategoriasAlumnoPage,
  ModalVistaAlumnosPage,
  AdminMensualidadesPage,
  MensualidadesAlumnoPage,
  MensualidadesPagoPage,
ConsultasAdminPage,
ConsultaPagosPorRepresentantePage,
ConsultaDetallePagoRepresentantePage,
ConsultaDeudoresSucursalesPage,
ConsultaDeudoresCategoriasPage,
ConsultaDeudoresDeudoresPage,
AdminMensualidadesConsultaRepresentantePage,
AdminConsultasAlumnosPage,
TabsAdminConsultaAlumnosPage } from './../pages/admin/index';

  //entrenadores
  import {MenuentrenadoresPage,
    CursosEntrenadorTabPage,
    AsistenciaEntrenadorTabPage,
    DatosEntrenadorTabPage,
    CargarAlumnosEntrenadorPage,
    BuscarAsistenciaCursoPage,
    ModalActualizarDatosEntrenadorPage
  } from './../pages/entrenadores/index';


  //representantes
  import {
   MenurepresentantesPage,
   AlumnosRepresentantetabPage,
   AsistenciAlumnosRepresentantetabPage,
   DatosAlumnosRepresentantetabPage,
   ActualizarDatosAlumnoPage,
   ConsultarAsistenciaAlumnosRepresentantesPage,
   ModalActualizarDatosRepresentantePage,
   FacturaRepresentantesPage,
   SubirimagenesRepresentantesPage
  } from './../pages/representantes/index';

  //informacion

  import {
InformacionCategoriasPage,
InformacionHorariosPage,
InformacionSucursalesPage,
InformacionTabsPage,
NoticiasInicioPage,
MapaSucursalesPage,
InformacionEntrenadoresPage
} from './../pages/informacion/index';


import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/ingresar/login/login';
import { SucursalesProvider } from '../providers/sucursales/sucursales';

//directivas
import { AutoHideDirective } from './../directives/auto-hide/auto-hide';
import { HideHeaderDirective } from './../directives/hide-header/hide-header';

//Modals
import { Config } from 'ionic-angular';

import { ModalScaleUpEnterTransition } from './../classes/scale-up-enter.transition';
import { ModalScaleUpLeaveTransition } from './../classes/scale-up-leave.transition';

import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { EntrenadoresProvider } from '../providers/entrenadores/entrenadores';
import { AlumnosProvider } from '../providers/alumnos/alumnos';
import { NotificacionesProvider } from '../providers/notificaciones/notificaciones';
import { MensualidadesProvider } from '../providers/mensualidades/mensualidades';


//pipes
import { TotalPipe } from '../pipes/total/total';
import { EntrenadorestabProvider } from '../providers/entrenadorestab/entrenadorestab';
import { RepresentantestabsProvider } from '../providers/representantestabs/representantestabs';
import { InformacionAcademiaProvider } from '../providers/informacion-academia/informacion-academia';
import { ConsultasAdminProvider } from '../providers/consultas-admin/consultas-admin';
import { AcordionComponent } from '../components/acordion/acordion';
import { InformacionAcademiaPage } from '../pages/informacion-academia/informacion-academia';




@NgModule({
  declarations: [
    MyApp,
    TotalPipe,
    HomePage,
    LoginPage,
    AdminSucursalesPage,
    AdminbienbenidaPage,
    InicioadminPage,
    ModalCrearSucursalPage,
    ModalActualizarSucursalPage,
    NotificacionesAdminPage,
    HideHeaderDirective,
    AutoHideDirective,
    AdminCategoriasPage,
    ModalCrearCategoriaPage,
    ModalActualizarCategoriaPage,
    ModalCrearHorarioPage,
    ModalCrearCategoriasolaPage,
    AdminEntrenadoresPage,
    ModalCrearEntrenadorPage,
    ModalCrearFichaentrenadorPage,
    AdminAlumnoPage,
    ModalCrearAlumnoPage,
    ModalCrearFichaalumnoPage,
    ModalCrearRepresentantePage,
    ModalCategoriasAlumnoPage,
    ModalVistaAlumnosPage,
    AdminMensualidadesPage,
    MensualidadesAlumnoPage,
    MensualidadesPagoPage,
    MenuentrenadoresPage,
    CursosEntrenadorTabPage,
    AsistenciaEntrenadorTabPage,
    DatosEntrenadorTabPage,
    CargarAlumnosEntrenadorPage,
    BuscarAsistenciaCursoPage,
    ModalActualizarDatosEntrenadorPage,
    MenurepresentantesPage,
    AlumnosRepresentantetabPage,
    AsistenciAlumnosRepresentantetabPage,
    DatosAlumnosRepresentantetabPage,
    ActualizarDatosAlumnoPage,
    ConsultarAsistenciaAlumnosRepresentantesPage,
    ModalActualizarDatosRepresentantePage,
    InformacionCategoriasPage,
    InformacionHorariosPage,
    InformacionSucursalesPage,
    InformacionTabsPage,
    NoticiasInicioPage,
    ConsultasAdminPage,
    ConsultaPagosPorRepresentantePage,
    ConsultaDetallePagoRepresentantePage,
    ConsultaDeudoresSucursalesPage,
    ConsultaDeudoresCategoriasPage,
    ConsultaDeudoresDeudoresPage,
    AdminMensualidadesConsultaRepresentantePage,
    MapaSucursalesPage,
    FacturaRepresentantesPage,
    SubirimagenesRepresentantesPage,
    InformacionEntrenadoresPage,
    AdminConsultasAlumnosPage,
    TabsAdminConsultaAlumnosPage,
    AcordionComponent,
    InformacionAcademiaPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicImageViewerModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminSucursalesPage,
    AdminbienbenidaPage,
    InicioadminPage,
    ModalCrearSucursalPage,
    ModalActualizarSucursalPage,
    NotificacionesAdminPage,
    LoginPage,
    AdminCategoriasPage,
    ModalCrearCategoriaPage,
    ModalActualizarCategoriaPage,
    ModalCrearHorarioPage,
    ModalCrearCategoriasolaPage,
    AdminEntrenadoresPage,
    ModalCrearEntrenadorPage,
    ModalCrearFichaentrenadorPage,
    AdminAlumnoPage,
    ModalCrearAlumnoPage,
    ModalCrearFichaalumnoPage,
    ModalCrearRepresentantePage,
    ModalCategoriasAlumnoPage,
    ModalVistaAlumnosPage,
    AdminMensualidadesPage,
    MensualidadesAlumnoPage,
    MensualidadesPagoPage,
    MenuentrenadoresPage,
    CursosEntrenadorTabPage,
    AsistenciaEntrenadorTabPage,
    DatosEntrenadorTabPage,
    CargarAlumnosEntrenadorPage,
    BuscarAsistenciaCursoPage,
    ModalActualizarDatosEntrenadorPage,
    MenurepresentantesPage,
    AlumnosRepresentantetabPage,
    AsistenciAlumnosRepresentantetabPage,
    DatosAlumnosRepresentantetabPage,
    ActualizarDatosAlumnoPage,
    ConsultarAsistenciaAlumnosRepresentantesPage,
    ModalActualizarDatosRepresentantePage,
    InformacionCategoriasPage,
    InformacionHorariosPage,
    InformacionSucursalesPage,
    InformacionTabsPage,
    NoticiasInicioPage,
    ConsultasAdminPage,
    ConsultaPagosPorRepresentantePage,
    ConsultaDetallePagoRepresentantePage,
    ConsultaDeudoresSucursalesPage,
    ConsultaDeudoresCategoriasPage,
    ConsultaDeudoresDeudoresPage,
    AdminMensualidadesConsultaRepresentantePage,
    MapaSucursalesPage,
    FacturaRepresentantesPage,
    SubirimagenesRepresentantesPage,
    InformacionEntrenadoresPage,
    AdminConsultasAlumnosPage,
    TabsAdminConsultaAlumnosPage,
    InformacionAcademiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PushnotificationProvider,
    LoginProvider,
    SucursalesProvider,
    NativePageTransitions,
    CategoriasProvider,
    EntrenadoresProvider,
    AlumnosProvider,
    NotificacionesProvider,
    MensualidadesProvider,
    EntrenadorestabProvider,
    RepresentantestabsProvider,
    InformacionAcademiaProvider,
    ConsultasAdminProvider,
    Geolocation,
    InAppBrowser,
    File,
    FileTransfer,
    DocumentViewer,
    Camera,
    Device,
    AppAvailability
  ]
})
export class AppModule {
  constructor(public config: Config) {
      this.setCustomTransitions();
  }

  private setCustomTransitions() {
      this.config.setTransition('modal-scale-up-leave', ModalScaleUpLeaveTransition);
      this.config.setTransition('modal-scale-up-enter', ModalScaleUpEnterTransition);
     
     
  }
}