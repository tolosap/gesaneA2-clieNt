import { AuthServiceService } from './service/auth/auth-service.service';
import { AuthGuardServiceService as RoleGuard } from './service/auth/auth-guard-service.service';
import { Dependenciaplist1Component } from './componentApp/dependencia/dependenciaplist1/dependenciaplist1.component';
import { Dependenciaedit1Component } from './componentApp/dependencia/dependenciaedit1/dependenciaedit1.component';
import { RouterModule, Routes } from '@angular/router';

// ********************** COMPONENTES GENERALES *************************
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LicenseComponent } from './component/license/license.component';
import { HomeComponent } from './component/home/home.component';
import { SessionService } from './service/session.service';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';

// ********************* COMPONENTES APP ************************
// ---------------CATEGORIA PROFESIONAL-------------
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalview1Component } from './componentApp/categoriaprofesional/categoriaprofesionalview1/categoriaprofesionalview1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalplist1Component} from './componentApp/categoriaprofesional/categoriaprofesionalplist1/categoriaprofesionalplist1.component';
// tslint:disable-next-line:max-line-length
import {Categoriaprofesionaledit1Component } from './componentApp/categoriaprofesional/categoriaprofesionaledit1/categoriaprofesionaledit1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalremove1Component } from './componentApp/categoriaprofesional/categoriaprofesionalremove1/categoriaprofesionalremove1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalnew1Component} from './componentApp/categoriaprofesional/categoriaprofesionalnew1/categoriaprofesionalnew1.component';
// ---------------CENTRO--------------
import { Centroview1Component } from './componentApp/centro/centroview1/centroview1.component';
import { Centroplist1Component } from './componentApp/centro/centroplist1/centroplist1.component';
import { Centroremove1Component } from './componentApp/centro/centroremove1/centroremove1.component';
// ---------------CENTRO SANITARIO--------------
import { Centrosanitarioview1Component } from './componentApp/centrosanitario/centrosanitarioview1/centrosanitarioview1.component';
import { Centrosanitarioplist1Component } from './componentApp/centrosanitario/centrosanitarioplist1/centrosanitarioplist1.component';
import { Centrosanitarioremove1Component } from './componentApp/centrosanitario/centrosanitarioremove1/centrosanitarioremove1.component';
// ---------------CIRCUNSTANCIAS ALTA-------------
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaview1Component } from './componentApp/circunstanciasalta/circunstanciasaltaview1/circunstanciasaltaview1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaedit1Component } from './componentApp/circunstanciasalta/circunstanciasaltaedit1/circunstanciasaltaedit1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltanew1Component } from './componentApp/circunstanciasalta/circunstanciasaltanew1/circunstanciasaltanew1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaplist1Component } from './componentApp/circunstanciasalta/circunstanciasaltaplist1/circunstanciasaltaplist1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaremove1Component } from './componentApp/circunstanciasalta/circunstanciasaltaremove1/circunstanciasaltaremove1.component';
// ------------CURSO-------------
import { Cursoview1Component } from './componentApp/curso/cursoview1/cursoview1.component';
import { Cursoplist1Component } from './componentApp/curso/cursoplist1/cursoplist1.component';
import { Cursoremove1Component } from './componentApp/curso/cursoremove1/cursoremove1.component';
// -------------DEPENDENCIA----------
import { Dependencianew1Component } from './componentApp/dependencia/dependencianew1/dependencianew1.component';
import { Dependenciaremove1Component } from './componentApp/dependencia/dependenciaremove1/dependenciaremove1.component';
// ----------GRUPO--------------
import { Grupoedit1Component } from './componentApp/grupo/grupoedit1/grupoedit1.component';
import { Grupoplist1Component } from './componentApp/grupo/grupoplist1/grupoplist1.component';
import { Gruporemove1Component } from './componentApp/grupo/gruporemove1/gruporemove1.component';
import { Gruponew1Component } from './componentApp/grupo/gruponew1/gruponew1.component';
import { Xusuarioplist1Component } from './componentApp/grupo/1/xusuario/xusuarioplist1/xusuarioplist1.component';
// --------------PACIENTE------------------
import { Pacienteplist1Component } from './componentApp/paciente/pacienteplist1/pacienteplist1.component';
import { Pacienteremove1Component } from './componentApp/paciente/pacienteremove1/pacienteremove1.component';
import { Pacienteview1Component } from './componentApp/paciente/pacienteview1/pacienteview1.component';
// ---------TIPOUSUARIO---------
import { Tipousuarioview1Component } from './componentApp/tipousuario/tipousuarioview1/tipousuarioview1.component';
import { Tipousuarioplist1Component } from './componentApp/tipousuario/tipousuarioplist1/tipousuarioplist1.component';
import { Tipousuarioremove1Component } from './componentApp/tipousuario/tipousuarioremove1/tipousuarioremove1.component';
import { Tipousuarioedit1Component } from './componentApp/tipousuario/tipousuarioedit1/tipousuarioedit1.component';
import { Tipousuarionew1Component } from './componentApp/tipousuario/tipousuarionew1/tipousuarionew1.component';
// ----------USUARIO----------
import { Usuarioplist1Component } from './componentApp/usuario/usuarioplist1/usuarioplist1.component';
import { Usuarioview1Component } from './componentApp/usuario/usuarioview1/usuarioview1.component';
import { Usuarioremove1Component } from './componentApp/usuario/usuarioremove1/usuarioremove1.component';
import { Usuarionew1Component } from './componentApp/usuario/usuarionew1/usuarionew1.component';
import { Usuarioedit1Component } from './componentApp/usuario/usuarioedit1/usuarioedit1.component';
import { Xtipousuarioplist1Component } from './componentApp/usuario/1/tipousuario/xtipousuarioplist1/xtipousuarioplist1.component';
import { Dependenciaview1Component } from './componentApp/dependencia/dependenciaview1/dependenciaview1.component';
import { Destinoaltaedit1Component } from './componentApp/destinoalta/destinoaltaedit1/destinoaltaedit1.component';
import { Destinoaltanew1Component } from './componentApp/destinoalta/destinoaltanew1/destinoaltanew1.component';
import { Destinoaltaplist1Component } from './componentApp/destinoalta/destinoaltaplist1/destinoaltaplist1.component';
import { Destinoaltaview1Component } from './componentApp/destinoalta/destinoaltaview1/destinoaltaview1.component';
import { Destinoaltaremove1Component } from './componentApp/destinoalta/destinoaltaremove1/destinoaltaremove1.component';
import { Episodioview1Component } from './componentApp/episodio/episodioview1/episodioview1.component';
import { Episodioremove1Component } from './componentApp/episodio/episodioremove1/episodioremove1.component';
import { Episodioplist1Component } from './componentApp/episodio/episodioplist1/episodioplist1.component';
import { Episodionew1Component } from './componentApp/episodio/episodionew1/episodionew1.component';
import { Episodioedit1Component } from './componentApp/episodio/episodioedit1/episodioedit1.component';
import { Especialidadplist1Component } from './componentApp/especialidad/especialidadplist1/especialidadplist1.component';
import { Especialidadview1Component } from './componentApp/especialidad/especialidadview1/especialidadview1.component';
import { Especialidadremove1Component } from './componentApp/especialidad/especialidadremove1/especialidadremove1.component';
import { Facturaplist1Component } from './componentApp/factura/facturaplist1/facturaplist1.component';
import { Facturaview1Component } from './componentApp/factura/facturaview1/facturaview1.component';
import { Facturaremove1Component } from './componentApp/factura/facturaremove1/facturaremove1.component';
import { Medicoplist1Component } from './componentApp/medico/medicoplist1/medicoplist1.component';
import { Medicoview1Component } from './componentApp/medico/medicoview1/medicoview1.component';
import { Medicoremove1Component } from './componentApp/medico/medicoremove1/medicoremove1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioplist1Component } from './componentApp/modalidadepisodio/modalidadepisodioplist1/modalidadepisodioplist1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioview1Component } from './componentApp/modalidadepisodio/modalidadepisodioview1/modalidadepisodioview1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioremove1Component } from './componentApp/modalidadepisodio/modalidadepisodioremove1/modalidadepisodioremove1.component';
import { Servicioplist1Component } from './componentApp/servicio/servicioplist1/servicioplist1.component';
import { Servicioview1Component } from './componentApp/servicio/servicioview1/servicioview1.component';
import { Servicioremove1Component } from './componentApp/servicio/servicioremove1/servicioremove1.component';
import { Sexoplist1Component } from './componentApp/sexo/sexoplist1/sexoplist1.component';
import { Sexoview1Component } from './componentApp/sexo/sexoview1/sexoview1.component';
import { Sexoremove1Component } from './componentApp/sexo/sexoremove1/sexoremove1.component';
import { Pacientenew1Component } from './componentApp/paciente/pacientenew1/pacientenew1.component';
import { XpacienteComponent } from './componentApp/episodio/paciente/xpacienteplist/xpaciente.component';
import { Tipopagoplist1Component } from './componentApp/tipopago/tipopagoplist1/tipopagoplist1.component';
import { Tipopagoview1Component } from './componentApp/tipopago/tipopagoview1/tipopagoview1.component';
import { Tipopagoremove1Component } from './componentApp/tipopago/tipopagoremove1/tipopagoremove1.component';
import { Tipopagoedit1Component } from './componentApp/tipopago/tipopagoedit1/tipopagoedit1.component';
import { Tipopagonew1Component } from './componentApp/tipopago/tipopagonew1/tipopagonew1.component';


export const app_routes: Routes = [
    // ----------GENERAL---------
    { path: 'home', component: HomeComponent },
    { path: 'license', component: LicenseComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    // -----------CATEGORIA PROFESIONAL-----------
    { path: 'categoriaprofesional/:profile/plist/:page/:rpp',
     component: Categoriaprofesionalplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'categoriaprofesional/:profile/view/:id',
     component: Categoriaprofesionalview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'categoriaprofesional/:profile/remove/:id',
     component: Categoriaprofesionalremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'categoriaprofesional/:profile/edit/:id',
     component: Categoriaprofesionaledit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'categoriaprofesional/:profile/new',
     component: Categoriaprofesionalnew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // -----------USUARIO-----------
    { path: 'usuario/:profile/plist/:page/:rpp',
    component: Usuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'usuario/:profile/view/:id',
     component: Usuarioview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,4,5' }},
    { path: 'usuario/:profile/remove/:id',
     component: Usuarioremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'usuario/:profile/edit/:id',
     component: Usuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'usuario/:profile/new',
     component: Usuarionew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'usuario/:profile/xtipousuario/plistx/:id/:page/:rpp',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'usuario/:profile/xtipousuario/newx/',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'usuario/:profile/xtipousuario/editx/:id/',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ---------TIPO USUARIO-----------
    { path: 'tipousuario/:profile/plist/:page/:rpp',
     component: Tipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'tipousuario/:profile/view/:id',
     component: Tipousuarioview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'tipousuario/:profile/remove/:id',
     component: Tipousuarioremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'tipousuario/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'tipousuario/:profile/new',
     component: Tipousuarionew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ---------GRUPO---------------
    { path: 'grupo/:profile/plist/:page/:rpp',
     component: Grupoplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'grupo/:profile/view/:id',
     component: Grupoedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'grupo/:profile/remove/:id',
     component: Gruporemove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'grupo/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'grupo/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'grupo/:profile/xusuario/plistx/:id/:page/:rpp',
     component: Xusuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ------------CURSO---------------
    { path: 'curso/:profile/plist/:page/:rpp',
     component: Cursoplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'curso/:profile/view/:id',
     component: Cursoview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'curso/:profile/remove/:id',
     component: Cursoremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'curso/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'curso/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'curso/:profile/xusuario/plistx/:id/:page/:rpp',
     component: Xusuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ------------CENTRO-------------
    { path: 'centro/:profile/plist/:page/:rpp',
     component: Centroplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centro/:profile/view/:id',
     component: Centroview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'centro/:profile/remove/:id',
     component: Centroremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centro/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centro/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centro/:profile/xusuario/plistx/:id/:page/:rpp',
     component: Xusuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ------------CENTRO SANITARIO-------------
    { path: 'centrosanitario/:profile/plist/:page/:rpp',
     component: Centrosanitarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centrosanitario/:profile/view/:id',
     component: Centrosanitarioview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'centrosanitario/:profile/remove/:id',
     component: Centrosanitarioremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centrosanitario/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centrosanitario/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'centrosanitario/:profile/xusuario/plistx/:id/:page/:rpp',
     component: Xusuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------PACIENTES-----------------
    { path: 'paciente/:profile/plist/:page/:rpp',
     component: Pacienteplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'paciente/:profile/view/:id',
     component: Pacienteview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'paciente/:profile/remove/:id',
     component: Pacienteremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4' }},
    { path: 'paciente/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4' }},
    { path: 'paciente/:profile/new',
     component: Pacientenew1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4' }},
    { path: 'paciente/:profile/xusuario/plistx/:id/:page/:rpp',
     component: Xusuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4' }},

    // ----------------DEPENDENCIA-----------------
    { path: 'dependencia/:profile/plist/:page/:rpp',
     component: Dependenciaplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4' }},
    { path: 'dependencia/:profile/view/:id',
     component: Dependenciaview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'dependencia/:profile/remove/:id',
     component: Dependenciaremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3' }},
    { path: 'dependencia/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3' }},
    { path: 'dependencia/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3' }},

    // ----------------DESTINO ALTA-----------------
    { path: 'destinoalta/:profile/plist/:page/:rpp',
     component: Destinoaltaplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'destinoalta/:profile/view/:id',
     component: Destinoaltaview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'destinoalta/:profile/remove/:id',
     component: Destinoaltaremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'destinoalta/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'destinoalta/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------EPISODIO-----------------
    { path: 'episodio/:profile/plist/:page/:rpp',
     component: Episodioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/view/:id',
     component: Episodioview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,4' }},
    { path: 'episodio/:profile/remove/:id',
     component: Episodioremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xcircunsalta
    { path: 'episodio/:profile/xcircunstanciasalta/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1,3,4' }},
    { path: 'episodio/:profile/xcircunstanciasalta/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xcircunstanciasalta/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xservicio
    { path: 'episodio/:profile/xservicio/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xservicio/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xservicio/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xpaciente
    { path: 'episodio/:profile/xpaciente/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1,4' }},
    { path: 'episodio/:profile/xpaciente/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,4' }},
    { path: 'episodio/:profile/xpaciente/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,4' }},
    // xfactura
    { path: 'episodio/:profile/xfactura/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xfactura/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xfactura/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xdependencia
    { path: 'episodio/:profile/xdependencia/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xdependencia/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xdependencia/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xmedico
    { path: 'episodio/:profile/xmedico/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xmedico/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xmedico/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xtipoepisodio
    { path: 'episodio/:profile/xtipoepisodio/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xtipoepisodio/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xtipoepisodio/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xepisodio
    { path: 'episodio/:profile/xepisodio/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1,4' }},
    { path: 'episodio/:profile/xepisodio/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,4' }},
    { path: 'episodio/:profile/xepisodio/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,4' }},
    // xdestinoalta
    { path: 'episodio/:profile/xdestinoalta/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xdestinoalta/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xdestinoalta/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xmodalidadepisodio
    { path: 'episodio/:profile/xmodalidadepisodio/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xmodalidadepisodio/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xmodalidadepisodio/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    // xusuario
    { path: 'episodio/:profile/xusuario/plistx/:id/:page/:rpp',
     component: XpacienteComponent, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xusuario/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'episodio/:profile/xusuario/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------ESPECIALIDAD-----------------
    { path: 'especialidad/:profile/plist/:page/:rpp',
     component: Especialidadplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'especialidad/:profile/view/:id',
     component: Especialidadview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'especialidad/:profile/remove/:id',
     component: Especialidadremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'especialidad/:profile/edit/:id', component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'especialidad/:profile/new', component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------FACTURA-----------------
    { path: 'factura/:profile/plist/:page/:rpp', component: Facturaplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'factura/:profile/view/:id', component: Facturaview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'factura/:profile/remove/:id', component: Facturaremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'factura/:profile/edit/:id', component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'factura/:profile/new', component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------MEDICO-----------------
    { path: 'medico/:profile/plist/:page/:rpp', component: Medicoplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3' }},
    { path: 'medico/:profile/view/:id', component: Medicoview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'medico/:profile/remove/:id', component: Medicoremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3' }},
    { path: 'medico/:profile/edit/:id', component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3' }},
    { path: 'medico/:profile/new', component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3' }},

    // ----------------MODALIDAD EPISODIO-----------------
    { path: 'modalidadepisodio/:profile/plist/:page/:rpp',
     component: Modalidadepisodioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'modalidadepisodio/:profile/view/:id',
     component: Modalidadepisodioview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'modalidadepisodio/:profile/remove/:id',
     component: Modalidadepisodioremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'modalidadepisodio/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'modalidadepisodio/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------SERVICIO-----------------
    { path: 'servicio/:profile/plist/:page/:rpp',
     component: Servicioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'servicio/:profile/view/:id',
     component: Servicioview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'servicio/:profile/remove/:id',
     component: Servicioremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'servicio/:profile/edit/:id',
     component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'servicio/:profile/new',
     component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'servicio/:profile/xtiposervicio/plistx/:id/:page/:rpp',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'servicio/:profile/xtiposervicio/newx',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'servicio/:profile/xtiposervicio/editx/:id',
     component: Xtipousuarioplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------SEXO-----------------
    { path: 'sexo/:profile/plist/:page/:rpp', component: Sexoplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'sexo/:profile/view/:id', component: Sexoview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'sexo/:profile/remove/:id', component: Sexoremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'sexo/:profile/edit/:id', component: Tipousuarioedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'sexo/:profile/new', component: Gruponew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // ----------------CIRCUNSTANCIAS ALTA----------------
    { path: 'circunstanciasalta/:profile/plist/:page/:rpp',
     component: Circunstanciasaltaplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'circunstanciasalta/:profile/view/:id',
     component: Circunstanciasaltaview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'circunstanciasalta/:profile/remove/:id',
     component: Circunstanciasaltaremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'circunstanciasalta/:profile/edit/:id',
     component: Circunstanciasaltaedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'circunstanciasalta/:profile/new',
     component: Circunstanciasaltanew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

     // ----------------TIPO PAGO----------------
    { path: 'tipopago/:profile/plist/:page/:rpp',
     component: Tipopagoplist1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'tipopago/:profile/view/:id',
     component: Tipopagoview1Component, canActivate: [RoleGuard], data: { expectedRole: '1,3,4,5' }},
    { path: 'tipopago/:profile/remove/:id',
     component: Tipopagoremove1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'tipopago/:profile/edit/:id',
     component: Tipopagoedit1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},
    { path: 'tipopago/:profile/new',
     component: Tipopagonew1Component, canActivate: [RoleGuard], data: { expectedRole: '1' }},

    // { path: '/passchange', component: PasschangeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
];


export const app_routing = RouterModule.forRoot(app_routes);

