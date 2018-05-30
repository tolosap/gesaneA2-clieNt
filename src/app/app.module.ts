import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { app_routing, app_routes } from './app.routes';
import { FooterComponent } from './component/footer/footer.component';
import { LicenseComponent } from './component/license/license.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router/src/router_module';
import { Usuarioplist1Component } from './componentApp/usuario/1/usuarioplist1/usuarioplist1.component';
import { ServiceConnService } from './service/service-conn.service';
import { SessionServerCallService } from './service/session-server-call.service';
import { SessionService } from './service/session.service';
import { ConstantServiceService } from './service/constant-service.service';
import { RegexService } from './service/regex.service';
import { SharedSpaceService } from './service/shared-space.service';
import { ToolService } from './service/tool.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserXhr } from '@angular/http';
import { HttpModule } from '@angular/http/src/http_module';
import { CplistinfoComponent } from './component/plist/cplistinfo/cplistinfo.component';
import { CplistpaginationComponent } from './component/plist/cplistpagination/cplistpagination/cplistpagination.component';
import { CplistrppComponent } from './component/plist/cplistrpp/cplistrpp/cplistrpp.component';
import { CplistvisiblefieldsComponent } from './component/plist/cplistvisiblefields/cplistvisiblefields/cplistvisiblefields.component';
import { PlistheaderComponent } from './component/plist/plistheader/plistheader/plistheader.component';
import { HeaderComponent } from './component/header/header/header.component';
import { GetForeignDescPipe } from './pipes/foreignObj.pipe';
import { ClipStringPipe } from './pipes/clipString.pipe';
import { BooleanizePipe } from './pipes/booleanize.pipe';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LoginComponent } from './component/login/login.component';
import { Usuarioview1Component } from './componentApp/usuario/1/usuarioview1/usuarioview1.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Usuarionew1Component } from './componentApp/usuario/1/usuarionew1/usuarionew1.component';
import { Usuarioedit1Component } from './componentApp/usuario/1/usuarioedit1/usuarioedit1.component';
import { Usuarioremove1Component } from './componentApp/usuario/1/usuarioremove1/usuarioremove1.component';
import { Xtipousuarioplist1Component } from './componentApp/usuario/1/tipousuario/xtipousuarioplist1/xtipousuarioplist1.component';
import { LogoutComponent } from './component/logout/logout.component';
import { Tipousuarioview1Component } from './componentApp/tipousuario/1/tipousuarioview1/tipousuarioview1.component';
import { Tipousuarioremove1Component } from './componentApp/tipousuario/1/tipousuarioremove1/tipousuarioremove1.component';
import { Tipousuarioplist1Component } from './componentApp/tipousuario/1/tipousuarioplist1/tipousuarioplist1.component';
import { Tipousuarionew1Component } from './componentApp/tipousuario/1/tipousuarionew1/tipousuarionew1.component';
import { Tipousuarioedit1Component } from './componentApp/tipousuario/1/tipousuarioedit1/tipousuarioedit1.component';
import { Grupoview1Component } from './componentApp/grupo/1/grupoview1/grupoview1.component';
import { Gruporemove1Component } from './componentApp/grupo/1/gruporemove1/gruporemove1.component';
import { Grupoplist1Component } from './componentApp/grupo/1/grupoplist1/grupoplist1.component';
import { Gruponew1Component } from './componentApp/grupo/1/gruponew1/gruponew1.component';
import { Xusuarioplist1Component } from './componentApp/grupo/1/xusuario/xusuarioplist1/xusuarioplist1.component';
import { Xusuarioedit1Component } from './componentApp/grupo/1/xusuario/xusuarioedit1/xusuarioedit1.component';
import { Xusuarionew1Component } from './componentApp/grupo/1/xusuario/xusuarionew1/xusuarionew1.component';
import { Cursoview1Component } from './componentApp/curso/1/cursoview1/cursoview1.component';
import { Cursoremove1Component } from './componentApp/curso/1/cursoremove1/cursoremove1.component';
import { Cursoplist1Component } from './componentApp/curso/1/cursoplist1/cursoplist1.component';
import { Cursonew1Component } from './componentApp/curso/1/cursonew1/cursonew1.component';
import { Cursoedit1Component } from './componentApp/curso/1/cursoedit1/cursoedit1.component';
import { Centroplist1Component } from './componentApp/centro/1/centroplist1/centroplist1.component';
import { Centroremove1Component } from './componentApp/centro/1/centroremove1/centroremove1.component';
import { Centroview1Component } from './componentApp/centro/1/centroview1/centroview1.component';
import { Centronew1Component } from './componentApp/centro/1/centronew1/centronew1.component';
import { Centroedit1Component } from './componentApp/centro/1/centroedit1/centroedit1.component';
import { Centrosanitarioedit1Component } from './componentApp/centrosanitario/1/centrosanitarioedit1/centrosanitarioedit1.component';
import { Centrosanitarioplist1Component } from './componentApp/centrosanitario/1/centrosanitarioplist1/centrosanitarioplist1.component';
import { Centrosanitarionew1Component } from './componentApp/centrosanitario/1/centrosanitarionew1/centrosanitarionew1.component';
import { Centrosanitarioremove1Component } from './componentApp/centrosanitario/1/centrosanitarioremove1/centrosanitarioremove1.component';
import { Centrosanitarioview1Component } from './componentApp/centrosanitario/1/centrosanitarioview1/centrosanitarioview1.component';
import { Pacienteplist1Component } from './componentApp/paciente/1/pacienteplist1/pacienteplist1.component';
import { Pacienteview1Component } from './componentApp/paciente/1/pacienteview1/pacienteview1.component';
import { Pacienteremove1Component } from './componentApp/paciente/1/pacienteremove1/pacienteremove1.component';
import { TrueFalseValueDirective } from './directives/true-false-value.directive';
import { DatepickerComponent } from './component/datepicker/datepicker/datepicker.component';
import { FechaFormateadaPipe } from './pipes/fechaformateada.pipe';
import { Categoriaprofesionaledit1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionaledit1/categoriaprofesionaledit1.component';
import { Categoriaprofesionalnew1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionalnew1/categoriaprofesionalnew1.component';
import { Categoriaprofesionalplist1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionalplist1/categoriaprofesionalplist1.component';
import { Categoriaprofesionalremove1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionalremove1/categoriaprofesionalremove1.component';
import { Categoriaprofesionalview1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionalview1/categoriaprofesionalview1.component';
import { Circunstanciasaltaview1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaview1/circunstanciasaltaview1.component';
import { Circunstanciasaltaedit1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaedit1/circunstanciasaltaedit1.component';
import { Circunstanciasaltaplist1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaplist1/circunstanciasaltaplist1.component';
import { Circunstanciasaltaremove1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaremove1/circunstanciasaltaremove1.component';
import { Circunstanciasaltanew1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltanew1/circunstanciasaltanew1.component';
import { Dependenciaedit1Component } from './componentApp/dependencia/1/dependenciaedit1/dependenciaedit1.component';
import { Dependenciaplist1Component } from './componentApp/dependencia/1/dependenciaplist1/dependenciaplist1.component';
import { Dependencianew1Component } from './componentApp/dependencia/1/dependencianew1/dependencianew1.component';
import { Dependenciaremove1Component } from './componentApp/dependencia/1/dependenciaremove1/dependenciaremove1.component';
import { Dependenciaview1Component } from './componentApp/dependencia/1/dependenciaview1/dependenciaview1.component';
import { Destinoaltaview1Component } from './componentApp/destinoalta/1/destinoaltaview1/destinoaltaview1.component';
import { Destinoaltaedit1Component } from './componentApp/destinoalta/1/destinoaltaedit1/destinoaltaedit1.component';
import { Destinoaltanew1Component } from './componentApp/destinoalta/1/destinoaltanew1/destinoaltanew1.component';
import { Destinoaltaremove1Component } from './componentApp/destinoalta/1/destinoaltaremove1/destinoaltaremove1.component';
import { Destinoaltaplist1Component } from './componentApp/destinoalta/1/destinoaltaplist1/destinoaltaplist1.component';
import { Episodioplist1Component } from './componentApp/episodio/1/episodioplist1/episodioplist1.component';
import { Episodionew1Component } from './componentApp/episodio/1/episodionew1/episodionew1.component';
import { Episodioview1Component } from './componentApp/episodio/1/episodioview1/episodioview1.component';
import { Episodioremove1Component } from './componentApp/episodio/1/episodioremove1/episodioremove1.component';
import { Episodioedit1Component } from './componentApp/episodio/1/episodioedit1/episodioedit1.component';
import { Especialidadplist1Component } from './componentApp/especialidad/1/especialidadplist1/especialidadplist1.component';
import { Especialidadnew1Component } from './componentApp/especialidad/1/especialidadnew1/especialidadnew1.component';
import { Especialidadview1Component } from './componentApp/especialidad/1/especialidadview1/especialidadview1.component';
import { Especialidadremove1Component } from './componentApp/especialidad/1/especialidadremove1/especialidadremove1.component';
import { Especialidadedit1Component } from './componentApp/especialidad/1/especialidadedit1/especialidadedit1.component';
import { Facturaview1Component } from './componentApp/factura/1/facturaview1/facturaview1.component';
import { Facturaplist1Component } from './componentApp/factura/1/facturaplist1/facturaplist1.component';
import { Facturaremove1Component } from './componentApp/factura/1/facturaremove1/facturaremove1.component';
import { Facturaedit1Component } from './componentApp/factura/1/facturaedit1/facturaedit1.component';
import { Facturanew1Component } from './componentApp/factura/1/facturanew1/facturanew1.component';
import { Medicoview1Component } from './componentApp/medico/1/medicoview1/medicoview1.component';
import { Medicoplist1Component } from './componentApp/medico/1/medicoplist1/medicoplist1.component';
import { Medicoremove1Component } from './componentApp/medico/1/medicoremove1/medicoremove1.component';
import { Medicoedit1Component } from './componentApp/medico/1/medicoedit1/medicoedit1.component';
import { Mediconew1Component } from './componentApp/medico/1/mediconew1/mediconew1.component';
import { Modalidadepisodionew1Component } from './componentApp/modalidadepisodio/1/modalidadepisodionew1/modalidadepisodionew1.component';
import { Modalidadepisodioplist1Component } from './componentApp/modalidadepisodio/1/modalidadepisodioplist1/modalidadepisodioplist1.component';
import { Modalidadepisodioedit1Component } from './componentApp/modalidadepisodio/1/modalidadepisodioedit1/modalidadepisodioedit1.component';
import { Modalidadepisodioremove1Component } from './componentApp/modalidadepisodio/1/modalidadepisodioremove1/modalidadepisodioremove1.component';
import { Modalidadepisodioview1Component } from './componentApp/modalidadepisodio/1/modalidadepisodioview1/modalidadepisodioview1.component';
import { Servicioedit1Component } from './componentApp/servicio/1/servicioedit1/servicioedit1.component';
import { Servicioview1Component } from './componentApp/servicio/1/servicioview1/servicioview1.component';
import { Servicioplist1Component } from './componentApp/servicio/1/servicioplist1/servicioplist1.component';
import { Servicionew1Component } from './componentApp/servicio/1/servicionew1/servicionew1.component';
import { Servicioremove1Component } from './componentApp/servicio/1/servicioremove1/servicioremove1.component';
import { Sexonew1Component } from './componentApp/sexo/1/sexonew1/sexonew1.component';
import { Sexoedit1Component } from './componentApp/sexo/1/sexoedit1/sexoedit1.component';
import { Sexoview1Component } from './componentApp/sexo/1/sexoview1/sexoview1.component';
import { Sexoplist1Component } from './componentApp/sexo/1/sexoplist1/sexoplist1.component';
import { Sexoremove1Component } from './componentApp/sexo/1/sexoremove1/sexoremove1.component';
import { Tipodependenciaview1Component } from './componentApp/tipodependencia/1/tipodependenciaview1/tipodependenciaview1.component';
import { Tipodependenciaedit1Component } from './componentApp/tipodependencia/1/tipodependenciaedit1/tipodependenciaedit1.component';
import { Tipodependencianew1Component } from './componentApp/tipodependencia/1/tipodependencianew1/tipodependencianew1.component';
import { Tipodependenciaremove1Component } from './componentApp/tipodependencia/1/tipodependenciaremove1/tipodependenciaremove1.component';
import { Tipodependenciaplist1Component } from './componentApp/tipodependencia/1/tipodependenciaplist1/tipodependenciaplist1.component';
import { Tipoepisodionew1Component } from './componentApp/tipoepisodio/1/tipoepisodionew1/tipoepisodionew1.component';
import { Tipoepisodioedit1Component } from './componentApp/tipoepisodio/1/tipoepisodioedit1/tipoepisodioedit1.component';
import { Tipoepisodioview1Component } from './componentApp/tipoepisodio/1/tipoepisodioview1/tipoepisodioview1.component';
import { Tipoepisodioremove1Component } from './componentApp/tipoepisodio/1/tipoepisodioremove1/tipoepisodioremove1.component';
import { Tipoepisodioplist1Component } from './componentApp/tipoepisodio/1/tipoepisodioplist1/tipoepisodioplist1.component';
import { Tipopagonew1Component } from './componentApp/tipopago/1/tipopagonew1/tipopagonew1.component';
import { Tipopagoedit1Component } from './componentApp/tipopago/1/tipopagoedit1/tipopagoedit1.component';
import { Tipopagoview1Component } from './componentApp/tipopago/1/tipopagoview1/tipopagoview1.component';
import { Tipopagoplist1Component } from './componentApp/tipopago/1/tipopagoplist1/tipopagoplist1.component';
import { Tipopagoremove1Component } from './componentApp/tipopago/1/tipopagoremove1/tipopagoremove1.component';
import { Tiposervicioedit1Component } from './componentApp/tiposervicio/1/tiposervicioedit1/tiposervicioedit1.component';
import { Tiposervicioview1Component } from './componentApp/tiposervicio/1/tiposervicioview1/tiposervicioview1.component';
import { Tiposervicionew1Component } from './componentApp/tiposervicio/1/tiposervicionew1/tiposervicionew1.component';
import { Tiposervicioplist1Component } from './componentApp/tiposervicio/1/tiposervicioplist1/tiposervicioplist1.component';
import { Tiposervicioremove1Component } from './componentApp/tiposervicio/1/tiposervicioremove1/tiposervicioremove1.component';
import { ClickOutsideDirective } from './directives/clickOutSide.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LicenseComponent,
    HomeComponent,
    Usuarioplist1Component,
    CplistinfoComponent,
    CplistpaginationComponent,
    CplistrppComponent,
    CplistvisiblefieldsComponent,
    PlistheaderComponent,
    TrueFalseValueDirective,
    ClickOutsideDirective,
    HeaderComponent,
    GetForeignDescPipe,
    ClipStringPipe,
    BooleanizePipe,
    FechaFormateadaPipe,
    LoginComponent,
    Usuarioview1Component,
    Usuarionew1Component,
    Usuarioedit1Component,
    Usuarioremove1Component,
    Xtipousuarioplist1Component,
    LogoutComponent,
    Tipousuarioview1Component,
    Tipousuarioremove1Component,
    Tipousuarioplist1Component,
    Tipousuarionew1Component,
    Tipousuarioedit1Component,
    Grupoview1Component,
    Gruporemove1Component,
    Grupoplist1Component,
    Gruponew1Component,
    Xusuarioplist1Component,
    Xusuarioedit1Component,
    Xusuarionew1Component,
    Cursoview1Component,
    Cursoremove1Component,
    Cursoplist1Component,
    Cursonew1Component,
    Cursoedit1Component,
    Centroplist1Component,
    Centroremove1Component,
    Centroview1Component,
    Centronew1Component,
    Centroedit1Component,
    Centrosanitarioedit1Component,
    Centrosanitarioplist1Component,
    Centrosanitarionew1Component,
    Centrosanitarioremove1Component,
    Centrosanitarioview1Component,
    Pacienteplist1Component,
    Pacienteview1Component,
    Pacienteremove1Component,
    DatepickerComponent,
    Categoriaprofesionaledit1Component,
    Categoriaprofesionalnew1Component,
    Categoriaprofesionalplist1Component,
    Categoriaprofesionalremove1Component,
    Categoriaprofesionalview1Component,
    Circunstanciasaltaview1Component,
    Circunstanciasaltaedit1Component,
    Circunstanciasaltaplist1Component,
    Circunstanciasaltaremove1Component,
    Circunstanciasaltanew1Component,
    Dependenciaedit1Component,
    Dependenciaplist1Component,
    Dependencianew1Component,
    Dependenciaremove1Component,
    Dependenciaview1Component,
    Destinoaltaview1Component,
    Destinoaltaedit1Component,
    Destinoaltanew1Component,
    Destinoaltaremove1Component,
    Destinoaltaplist1Component,
    Episodioplist1Component,
    Episodionew1Component,
    Episodioview1Component,
    Episodioremove1Component,
    Episodioedit1Component,
    Especialidadplist1Component,
    Especialidadnew1Component,
    Especialidadview1Component,
    Especialidadremove1Component,
    Especialidadedit1Component,
    Facturaview1Component,
    Facturaplist1Component,
    Facturaremove1Component,
    Facturaedit1Component,
    Facturanew1Component,
    Medicoview1Component,
    Medicoplist1Component,
    Medicoremove1Component,
    Medicoedit1Component,
    Mediconew1Component,
    Modalidadepisodionew1Component,
    Modalidadepisodioplist1Component,
    Modalidadepisodioedit1Component,
    Modalidadepisodioremove1Component,
    Modalidadepisodioview1Component,
    Servicioedit1Component,
    Servicioview1Component,
    Servicioplist1Component,
    Servicionew1Component,
    Servicioremove1Component,
    Sexonew1Component,
    Sexoedit1Component,
    Sexoview1Component,
    Sexoplist1Component,
    Sexoremove1Component,
    Tipodependenciaview1Component,
    Tipodependenciaedit1Component,
    Tipodependencianew1Component,
    Tipodependenciaremove1Component,
    Tipodependenciaplist1Component,
    Tipoepisodionew1Component,
    Tipoepisodioedit1Component,
    Tipoepisodioview1Component,
    Tipoepisodioremove1Component,
    Tipoepisodioplist1Component,
    Tipopagonew1Component,
    Tipopagoedit1Component,
    Tipopagoview1Component,
    Tipopagoplist1Component,
    Tipopagoremove1Component,
    Tiposervicioedit1Component,
    Tiposervicioview1Component,
    Tiposervicionew1Component,
    Tiposervicioplist1Component,
    Tiposervicioremove1Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    app_routing,
    BsDropdownModule.forRoot(app_routes),
    FormsModule,
    TabsModule.forRoot(),
    Angular2FontawesomeModule
  ],
  providers: [
    ServiceConnService,
    SessionServerCallService,
    SessionService,
    ConstantServiceService,
    RegexService,
    SharedSpaceService,
    ToolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
