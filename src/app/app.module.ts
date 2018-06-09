import { AuthServiceService } from './service/auth/auth-service.service';
import { AuthGuardServiceService } from './service/auth/auth-guard-service.service';
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
import { Usuarioplist1Component } from './componentApp/usuario/usuarioplist1/usuarioplist1.component';
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
import { Usuarioview1Component } from './componentApp/usuario/usuarioview1/usuarioview1.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Usuarionew1Component } from './componentApp/usuario/usuarionew1/usuarionew1.component';
import { Usuarioedit1Component } from './componentApp/usuario/usuarioedit1/usuarioedit1.component';
import { Usuarioremove1Component } from './componentApp/usuario/usuarioremove1/usuarioremove1.component';
import { Xtipousuarioplist1Component } from './componentApp/usuario/1/tipousuario/xtipousuarioplist1/xtipousuarioplist1.component';
import { LogoutComponent } from './component/logout/logout.component';
import { Tipousuarioview1Component } from './componentApp/tipousuario/tipousuarioview1/tipousuarioview1.component';
import { Tipousuarioremove1Component } from './componentApp/tipousuario/tipousuarioremove1/tipousuarioremove1.component';
import { Tipousuarioplist1Component } from './componentApp/tipousuario/tipousuarioplist1/tipousuarioplist1.component';
import { Tipousuarionew1Component } from './componentApp/tipousuario/tipousuarionew1/tipousuarionew1.component';
import { Tipousuarioedit1Component } from './componentApp/tipousuario/tipousuarioedit1/tipousuarioedit1.component';
import { Grupoedit1Component } from './componentApp/grupo/grupoedit1/grupoedit1.component';
import { Gruporemove1Component } from './componentApp/grupo/gruporemove1/gruporemove1.component';
import { Grupoplist1Component } from './componentApp/grupo/grupoplist1/grupoplist1.component';
import { Gruponew1Component } from './componentApp/grupo/gruponew1/gruponew1.component';
import { Xusuarioplist1Component } from './componentApp/grupo/1/xusuario/xusuarioplist1/xusuarioplist1.component';
import { Xusuarioedit1Component } from './componentApp/grupo/1/xusuario/xusuarioedit1/xusuarioedit1.component';
import { Xusuarionew1Component } from './componentApp/grupo/1/xusuario/xusuarionew1/xusuarionew1.component';
import { Cursoview1Component } from './componentApp/curso/cursoview1/cursoview1.component';
import { Cursoremove1Component } from './componentApp/curso/cursoremove1/cursoremove1.component';
import { Cursoplist1Component } from './componentApp/curso/cursoplist1/cursoplist1.component';
import { Cursonew1Component } from './componentApp/curso/cursonew1/cursonew1.component';
import { Cursoedit1Component } from './componentApp/curso/cursoedit1/cursoedit1.component';
import { Centroplist1Component } from './componentApp/centro/centroplist1/centroplist1.component';
import { Centroremove1Component } from './componentApp/centro/centroremove1/centroremove1.component';
import { Centroview1Component } from './componentApp/centro/centroview1/centroview1.component';
import { Centronew1Component } from './componentApp/centro/centronew1/centronew1.component';
import { Centroedit1Component } from './componentApp/centro/centroedit1/centroedit1.component';
import { Centrosanitarioedit1Component } from './componentApp/centrosanitario/centrosanitarioedit1/centrosanitarioedit1.component';
import { Centrosanitarioplist1Component } from './componentApp/centrosanitario/centrosanitarioplist1/centrosanitarioplist1.component';
import { Centrosanitarionew1Component } from './componentApp/centrosanitario/centrosanitarionew1/centrosanitarionew1.component';
import { Centrosanitarioremove1Component } from './componentApp/centrosanitario/centrosanitarioremove1/centrosanitarioremove1.component';
import { Centrosanitarioview1Component } from './componentApp/centrosanitario/centrosanitarioview1/centrosanitarioview1.component';
import { Pacienteplist1Component } from './componentApp/paciente/pacienteplist1/pacienteplist1.component';
import { Pacienteview1Component } from './componentApp/paciente/pacienteview1/pacienteview1.component';
import { Pacienteremove1Component } from './componentApp/paciente/pacienteremove1/pacienteremove1.component';
import { TrueFalseValueDirective } from './directives/true-false-value.directive';
import { DatepickerComponent } from './component/datepicker/datepicker/datepicker.component';
import { FechaFormateadaPipe } from './pipes/fechaformateada.pipe';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionaledit1Component } from './componentApp/categoriaprofesional/categoriaprofesionaledit1/categoriaprofesionaledit1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalnew1Component } from './componentApp/categoriaprofesional/categoriaprofesionalnew1/categoriaprofesionalnew1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalplist1Component } from './componentApp/categoriaprofesional/categoriaprofesionalplist1/categoriaprofesionalplist1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalremove1Component } from './componentApp/categoriaprofesional/categoriaprofesionalremove1/categoriaprofesionalremove1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalview1Component } from './componentApp/categoriaprofesional/categoriaprofesionalview1/categoriaprofesionalview1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaview1Component } from './componentApp/circunstanciasalta/circunstanciasaltaview1/circunstanciasaltaview1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaedit1Component } from './componentApp/circunstanciasalta/circunstanciasaltaedit1/circunstanciasaltaedit1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaplist1Component } from './componentApp/circunstanciasalta/circunstanciasaltaplist1/circunstanciasaltaplist1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaremove1Component } from './componentApp/circunstanciasalta/circunstanciasaltaremove1/circunstanciasaltaremove1.component';
import { Circunstanciasaltanew1Component } from './componentApp/circunstanciasalta/circunstanciasaltanew1/circunstanciasaltanew1.component';
import { Dependenciaedit1Component } from './componentApp/dependencia/dependenciaedit1/dependenciaedit1.component';
import { Dependenciaplist1Component } from './componentApp/dependencia/dependenciaplist1/dependenciaplist1.component';
import { Dependencianew1Component } from './componentApp/dependencia/dependencianew1/dependencianew1.component';
import { Dependenciaremove1Component } from './componentApp/dependencia/dependenciaremove1/dependenciaremove1.component';
import { Dependenciaview1Component } from './componentApp/dependencia/dependenciaview1/dependenciaview1.component';
import { Destinoaltaview1Component } from './componentApp/destinoalta/destinoaltaview1/destinoaltaview1.component';
import { Destinoaltaedit1Component } from './componentApp/destinoalta/destinoaltaedit1/destinoaltaedit1.component';
import { Destinoaltanew1Component } from './componentApp/destinoalta/destinoaltanew1/destinoaltanew1.component';
import { Destinoaltaremove1Component } from './componentApp/destinoalta/destinoaltaremove1/destinoaltaremove1.component';
import { Destinoaltaplist1Component } from './componentApp/destinoalta/destinoaltaplist1/destinoaltaplist1.component';
import { Episodioplist1Component } from './componentApp/episodio/episodioplist1/episodioplist1.component';
import { Episodionew1Component } from './componentApp/episodio/episodionew1/episodionew1.component';
import { Episodioview1Component } from './componentApp/episodio/episodioview1/episodioview1.component';
import { Episodioremove1Component } from './componentApp/episodio/episodioremove1/episodioremove1.component';
import { Episodioedit1Component } from './componentApp/episodio/episodioedit1/episodioedit1.component';
import { Especialidadplist1Component } from './componentApp/especialidad/especialidadplist1/especialidadplist1.component';
import { Especialidadnew1Component } from './componentApp/especialidad/especialidadnew1/especialidadnew1.component';
import { Especialidadview1Component } from './componentApp/especialidad/especialidadview1/especialidadview1.component';
import { Especialidadremove1Component } from './componentApp/especialidad/especialidadremove1/especialidadremove1.component';
import { Especialidadedit1Component } from './componentApp/especialidad/especialidadedit1/especialidadedit1.component';
import { Facturaview1Component } from './componentApp/factura/facturaview1/facturaview1.component';
import { Facturaplist1Component } from './componentApp/factura/facturaplist1/facturaplist1.component';
import { Facturaremove1Component } from './componentApp/factura/facturaremove1/facturaremove1.component';
import { Facturaedit1Component } from './componentApp/factura/facturaedit1/facturaedit1.component';
import { Facturanew1Component } from './componentApp/factura/facturanew1/facturanew1.component';
import { Medicoview1Component } from './componentApp/medico/medicoview1/medicoview1.component';
import { Medicoplist1Component } from './componentApp/medico/medicoplist1/medicoplist1.component';
import { Medicoremove1Component } from './componentApp/medico/medicoremove1/medicoremove1.component';
import { Medicoedit1Component } from './componentApp/medico/medicoedit1/medicoedit1.component';
import { Mediconew1Component } from './componentApp/medico/mediconew1/mediconew1.component';
import { Modalidadepisodionew1Component } from './componentApp/modalidadepisodio/modalidadepisodionew1/modalidadepisodionew1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioplist1Component } from './componentApp/modalidadepisodio/modalidadepisodioplist1/modalidadepisodioplist1.component';
import { Modalidadepisodioedit1Component } from './componentApp/modalidadepisodio/modalidadepisodioedit1/modalidadepisodioedit1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioremove1Component } from './componentApp/modalidadepisodio/modalidadepisodioremove1/modalidadepisodioremove1.component';
import { Modalidadepisodioview1Component } from './componentApp/modalidadepisodio/modalidadepisodioview1/modalidadepisodioview1.component';
import { Servicioedit1Component } from './componentApp/servicio/servicioedit1/servicioedit1.component';
import { Servicioview1Component } from './componentApp/servicio/servicioview1/servicioview1.component';
import { Servicioplist1Component } from './componentApp/servicio/servicioplist1/servicioplist1.component';
import { Servicionew1Component } from './componentApp/servicio/servicionew1/servicionew1.component';
import { Servicioremove1Component } from './componentApp/servicio/servicioremove1/servicioremove1.component';
import { Sexonew1Component } from './componentApp/sexo/sexonew1/sexonew1.component';
import { Sexoedit1Component } from './componentApp/sexo/sexoedit1/sexoedit1.component';
import { Sexoview1Component } from './componentApp/sexo/sexoview1/sexoview1.component';
import { Sexoplist1Component } from './componentApp/sexo/sexoplist1/sexoplist1.component';
import { Sexoremove1Component } from './componentApp/sexo/sexoremove1/sexoremove1.component';
import { Tipodependenciaview1Component } from './componentApp/tipodependencia/tipodependenciaview1/tipodependenciaview1.component';
import { Tipodependenciaedit1Component } from './componentApp/tipodependencia/tipodependenciaedit1/tipodependenciaedit1.component';
import { Tipodependencianew1Component } from './componentApp/tipodependencia/tipodependencianew1/tipodependencianew1.component';
import { Tipodependenciaremove1Component } from './componentApp/tipodependencia/tipodependenciaremove1/tipodependenciaremove1.component';
import { Tipodependenciaplist1Component } from './componentApp/tipodependencia/tipodependenciaplist1/tipodependenciaplist1.component';
import { Tipoepisodionew1Component } from './componentApp/tipoepisodio/tipoepisodionew1/tipoepisodionew1.component';
import { Tipoepisodioedit1Component } from './componentApp/tipoepisodio/tipoepisodioedit1/tipoepisodioedit1.component';
import { Tipoepisodioview1Component } from './componentApp/tipoepisodio/tipoepisodioview1/tipoepisodioview1.component';
import { Tipoepisodioremove1Component } from './componentApp/tipoepisodio/tipoepisodioremove1/tipoepisodioremove1.component';
import { Tipoepisodioplist1Component } from './componentApp/tipoepisodio/tipoepisodioplist1/tipoepisodioplist1.component';
import { Tipopagonew1Component } from './componentApp/tipopago/tipopagonew1/tipopagonew1.component';
import { Tipopagoedit1Component } from './componentApp/tipopago/tipopagoedit1/tipopagoedit1.component';
import { Tipopagoview1Component } from './componentApp/tipopago/tipopagoview1/tipopagoview1.component';
import { Tipopagoplist1Component } from './componentApp/tipopago/tipopagoplist1/tipopagoplist1.component';
import { Tipopagoremove1Component } from './componentApp/tipopago/tipopagoremove1/tipopagoremove1.component';
import { Tiposervicioedit1Component } from './componentApp/tiposervicio/tiposervicioedit1/tiposervicioedit1.component';
import { Tiposervicioview1Component } from './componentApp/tiposervicio/tiposervicioview1/tiposervicioview1.component';
import { Tiposervicionew1Component } from './componentApp/tiposervicio/tiposervicionew1/tiposervicionew1.component';
import { Tiposervicioplist1Component } from './componentApp/tiposervicio/tiposervicioplist1/tiposervicioplist1.component';
import { Tiposervicioremove1Component } from './componentApp/tiposervicio/tiposervicioremove1/tiposervicioremove1.component';
import { ClickOutsideDirective } from './directives/clickOutSide.directive';
import { Pacientenew1Component } from './componentApp/paciente/pacientenew1/pacientenew1.component';
import { XpacienteComponent } from './componentApp/episodio/paciente/xpacienteplist/xpaciente.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ForeignkeyComponent } from './component/foreignkey/foreignkey.component';
import { XtipousuarionewComponent } from './componentApp/usuario/1/tipousuario/xtipousuarionew/xtipousuarionew.component';
import { XtipousuarioeditComponent } from './componentApp/usuario/1/tipousuario/xtipousuarioedit/xtipousuarioedit.component';
import { XtiposervicioplistComponent } from './componentApp/servicio/tiposervicio/xtiposervicioplist/xtiposervicioplist.component';
import { XtiposervicioeditComponent } from './componentApp/servicio/tiposervicio/xtiposervicioedit/xtiposervicioedit.component';
import { XtiposervicionewComponent } from './componentApp/servicio/tiposervicio/xtiposervicionew/xtiposervicionew.component';
import { XpacientenewComponent } from './componentApp/episodio/paciente/xpacientenew/xpacientenew.component';
import { XpacienteeditComponent } from './componentApp/episodio/paciente/xpacienteedit/xpacienteedit.component';
// tslint:disable-next-line:max-line-length
import { XcircunstanciasaltaplistComponent } from './componentApp/episodio/circunstanciasalta/xcircunstanciasaltaplist/xcircunstanciasaltaplist.component';
// tslint:disable-next-line:max-line-length
import { XcircunstanciasaltanewComponent } from './componentApp/episodio/circunstanciasalta/xcircunstanciasaltanew/xcircunstanciasaltanew.component';
// tslint:disable-next-line:max-line-length
import { XcircunstanciasaltaeditComponent } from './componentApp/episodio/circunstanciasalta/xcircunstanciasaltaedit/xcircunstanciasaltaedit.component';
import { XservicioplistComponent } from './componentApp/episodio/servicio/xservicioplist/xservicioplist.component';
import { XservicioeditComponent } from './componentApp/episodio/servicio/xservicioedit/xservicioedit.component';
import { XservicionewComponent } from './componentApp/episodio/servicio/xservicionew/xservicionew.component';
import { XfacturaplistComponent } from './componentApp/episodio/factura/xfacturaplist/xfacturaplist.component';
import { XfacturanewComponent } from './componentApp/episodio/factura/xfacturanew/xfacturanew.component';
import { XfacturaeditComponent } from './componentApp/episodio/factura/xfacturaedit/xfacturaedit.component';
import { XdependenciaplistComponent } from './componentApp/episodio/dependencia/xdependenciaplist/xdependenciaplist.component';
import { XdependenciaeditComponent } from './componentApp/episodio/dependencia/xdependenciaedit/xdependenciaedit.component';
import { XdependencianewComponent } from './componentApp/episodio/dependencia/xdependencianew/xdependencianew.component';
import { XmedicoplistComponent } from './componentApp/episodio/medico/xmedicoplist/xmedicoplist.component';
import { XmedicoviewComponent } from './componentApp/episodio/medico/xmedicoview/xmedicoview.component';
import { XmediconewComponent } from './componentApp/episodio/medico/xmediconew/xmediconew.component';
import { XmedicoeditComponent } from './componentApp/episodio/medico/xmedicoedit/xmedicoedit.component';
import { XtipoepisodioplistComponent } from './componentApp/episodio/tipoepisodio/xtipoepisodioplist/xtipoepisodioplist.component';
import { XtipoepisodioeditComponent } from './componentApp/episodio/tipoepisodio/xtipoepisodioedit/xtipoepisodioedit.component';
import { XtipoepisodionewComponent } from './componentApp/episodio/tipoepisodio/xtipoepisodionew/xtipoepisodionew.component';
import { XepisodioplistComponent } from './componentApp/episodio/episodio/xepisodioplist/xepisodioplist.component';
import { XepisodioeditComponent } from './componentApp/episodio/episodio/xepisodioedit/xepisodioedit.component';
import { XepisodionewComponent } from './componentApp/episodio/episodio/xepisodionew/xepisodionew.component';
import { XdestinoaltaplistComponent } from './componentApp/episodio/destinoalta/xdestinoaltaplist/xdestinoaltaplist.component';
import { XdestinoaltaeditComponent } from './componentApp/episodio/destinoalta/xdestinoaltaedit/xdestinoaltaedit.component';
import { XdestinoaltanewComponent } from './componentApp/episodio/destinoalta/xdestinoaltanew/xdestinoaltanew.component';
// tslint:disable-next-line:max-line-length
import { XmodalidadepisodioplistComponent } from './componentApp/episodio/modalidadepisodio/xmodalidadepisodioplist/xmodalidadepisodioplist.component';
// tslint:disable-next-line:max-line-length
import { XmodalidadepisodionewComponent } from './componentApp/episodio/modalidadepisodio/xmodalidadepisodionew/xmodalidadepisodionew.component';
// tslint:disable-next-line:max-line-length
import { XmodalidadepisodioeditComponent } from './componentApp/episodio/modalidadepisodio/xmodalidadepisodioedit/xmodalidadepisodioedit.component';
import { XusuarioplistComponent } from './componentApp/episodio/usuario/xusuarioplist/xusuarioplist.component';
import { XusuarioeditComponent } from './componentApp/episodio/usuario/xusuarioedit/xusuarioedit.component';
import { XusuarionewComponent } from './componentApp/episodio/usuario/xusuarionew/xusuarionew.component';


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
    Tiposervicioremove1Component,
    Pacientenew1Component,
    XpacienteComponent,
    ForeignkeyComponent,
    XtipousuarionewComponent,
    XtipousuarioeditComponent,
    XtiposervicioplistComponent,
    XtiposervicioeditComponent,
    XtiposervicionewComponent,
    XpacientenewComponent,
    XpacienteeditComponent,
    XcircunstanciasaltaplistComponent,
    XcircunstanciasaltanewComponent,
    XcircunstanciasaltaeditComponent,
    XservicioplistComponent,
    XservicioeditComponent,
    XservicionewComponent,
    XfacturaplistComponent,
    XfacturanewComponent,
    XfacturaeditComponent,
    XdependenciaplistComponent,
    XdependenciaeditComponent,
    XdependencianewComponent,
    XmedicoplistComponent,
    XmedicoviewComponent,
    XmediconewComponent,
    XmedicoeditComponent,
    XtipoepisodioplistComponent,
    XtipoepisodioeditComponent,
    XtipoepisodionewComponent,
    XepisodioplistComponent,
    XepisodioeditComponent,
    XepisodionewComponent,
    XdestinoaltaplistComponent,
    XdestinoaltaeditComponent,
    XdestinoaltanewComponent,
    XmodalidadepisodioplistComponent,
    XmodalidadepisodionewComponent,
    XmodalidadepisodioeditComponent,
    XusuarioplistComponent,
    XusuarioeditComponent,
    XusuarionewComponent,
    Grupoedit1Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    app_routing,
    BsDropdownModule.forRoot(app_routes),
    FormsModule,
    TabsModule.forRoot(),
    Angular2FontawesomeModule,
    AngularDateTimePickerModule
  ],
  providers: [
    ServiceConnService,
    SessionServerCallService,
    SessionService,
    ConstantServiceService,
    RegexService,
    SharedSpaceService,
    ToolService,
    AuthGuardServiceService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
