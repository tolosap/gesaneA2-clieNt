import { Dependenciaplist1Component } from './componentApp/dependencia/1/dependenciaplist1/dependenciaplist1.component';
import { Dependenciaedit1Component } from './componentApp/dependencia/1/dependenciaedit1/dependenciaedit1.component';
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
import { Categoriaprofesionalview1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionalview1/categoriaprofesionalview1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalplist1Component} from './componentApp/categoriaprofesional/1/categoriaprofesionalplist1/categoriaprofesionalplist1.component';
// tslint:disable-next-line:max-line-length
import {Categoriaprofesionaledit1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionaledit1/categoriaprofesionaledit1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalremove1Component } from './componentApp/categoriaprofesional/1/categoriaprofesionalremove1/categoriaprofesionalremove1.component';
// tslint:disable-next-line:max-line-length
import { Categoriaprofesionalnew1Component} from './componentApp/categoriaprofesional/1/categoriaprofesionalnew1/categoriaprofesionalnew1.component';
// ---------------CENTRO--------------
import { Centroview1Component } from './componentApp/centro/1/centroview1/centroview1.component';
import { Centroplist1Component } from './componentApp/centro/1/centroplist1/centroplist1.component';
import { Centroremove1Component } from './componentApp/centro/1/centroremove1/centroremove1.component';
// ---------------CENTRO SANITARIO--------------
import { Centrosanitarioview1Component } from './componentApp/centrosanitario/1/centrosanitarioview1/centrosanitarioview1.component';
import { Centrosanitarioplist1Component } from './componentApp/centrosanitario/1/centrosanitarioplist1/centrosanitarioplist1.component';
import { Centrosanitarioremove1Component } from './componentApp/centrosanitario/1/centrosanitarioremove1/centrosanitarioremove1.component';
// ---------------CIRCUNSTANCIAS ALTA-------------
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaview1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaview1/circunstanciasaltaview1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaedit1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaedit1/circunstanciasaltaedit1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltanew1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltanew1/circunstanciasaltanew1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaplist1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaplist1/circunstanciasaltaplist1.component';
// tslint:disable-next-line:max-line-length
import { Circunstanciasaltaremove1Component } from './componentApp/circunstanciasalta/1/circunstanciasaltaremove1/circunstanciasaltaremove1.component';
// ------------CURSO-------------
import { Cursoview1Component } from './componentApp/curso/1/cursoview1/cursoview1.component';
import { Cursoplist1Component } from './componentApp/curso/1/cursoplist1/cursoplist1.component';
import { Cursoremove1Component } from './componentApp/curso/1/cursoremove1/cursoremove1.component';
// -------------DEPENDENCIA----------
import { Dependencianew1Component } from './componentApp/dependencia/1/dependencianew1/dependencianew1.component';
import { Dependenciaremove1Component } from './componentApp/dependencia/1/dependenciaremove1/dependenciaremove1.component';
// ----------GRUPO--------------
import { Grupoview1Component } from './componentApp/grupo/1/grupoview1/grupoview1.component';
import { Grupoplist1Component } from './componentApp/grupo/1/grupoplist1/grupoplist1.component';
import { Gruporemove1Component } from './componentApp/grupo/1/gruporemove1/gruporemove1.component';
import { Gruponew1Component } from './componentApp/grupo/1/gruponew1/gruponew1.component';
import { Xusuarioplist1Component } from './componentApp/grupo/1/xusuario/xusuarioplist1/xusuarioplist1.component';
// --------------PACIENTE------------------
import { Pacienteplist1Component } from './componentApp/paciente/1/pacienteplist1/pacienteplist1.component';
import { Pacienteremove1Component } from './componentApp/paciente/1/pacienteremove1/pacienteremove1.component';
import { Pacienteview1Component } from './componentApp/paciente/1/pacienteview1/pacienteview1.component';
// ---------TIPOUSUARIO---------
import { Tipousuarioview1Component } from './componentApp/tipousuario/1/tipousuarioview1/tipousuarioview1.component';
import { Tipousuarioplist1Component } from './componentApp/tipousuario/1/tipousuarioplist1/tipousuarioplist1.component';
import { Tipousuarioremove1Component } from './componentApp/tipousuario/1/tipousuarioremove1/tipousuarioremove1.component';
import { Tipousuarioedit1Component } from './componentApp/tipousuario/1/tipousuarioedit1/tipousuarioedit1.component';
import { Tipousuarionew1Component } from './componentApp/tipousuario/1/tipousuarionew1/tipousuarionew1.component';
// ----------USUARIO----------
import { Usuarioplist1Component } from './componentApp/usuario/1/usuarioplist1/usuarioplist1.component';
import { Usuarioview1Component } from './componentApp/usuario/1/usuarioview1/usuarioview1.component';
import { Usuarioremove1Component } from './componentApp/usuario/1/usuarioremove1/usuarioremove1.component';
import { Usuarionew1Component } from './componentApp/usuario/1/usuarionew1/usuarionew1.component';
import { Usuarioedit1Component } from './componentApp/usuario/1/usuarioedit1/usuarioedit1.component';
import { Xtipousuarioplist1Component } from './componentApp/usuario/1/tipousuario/xtipousuarioplist1/xtipousuarioplist1.component';
import { Dependenciaview1Component } from './componentApp/dependencia/1/dependenciaview1/dependenciaview1.component';
import { Destinoaltaedit1Component } from './componentApp/destinoalta/1/destinoaltaedit1/destinoaltaedit1.component';
import { Destinoaltanew1Component } from './componentApp/destinoalta/1/destinoaltanew1/destinoaltanew1.component';
import { Destinoaltaplist1Component } from './componentApp/destinoalta/1/destinoaltaplist1/destinoaltaplist1.component';
import { Destinoaltaview1Component } from './componentApp/destinoalta/1/destinoaltaview1/destinoaltaview1.component';
import { Destinoaltaremove1Component } from './componentApp/destinoalta/1/destinoaltaremove1/destinoaltaremove1.component';
import { Episodioview1Component } from './componentApp/episodio/1/episodioview1/episodioview1.component';
import { Episodioremove1Component } from './componentApp/episodio/1/episodioremove1/episodioremove1.component';
import { Episodioplist1Component } from './componentApp/episodio/1/episodioplist1/episodioplist1.component';
import { Episodionew1Component } from './componentApp/episodio/1/episodionew1/episodionew1.component';
import { Episodioedit1Component } from './componentApp/episodio/1/episodioedit1/episodioedit1.component';
import { Especialidadplist1Component } from './componentApp/especialidad/1/especialidadplist1/especialidadplist1.component';
import { Especialidadview1Component } from './componentApp/especialidad/1/especialidadview1/especialidadview1.component';
import { Especialidadremove1Component } from './componentApp/especialidad/1/especialidadremove1/especialidadremove1.component';
import { Facturaplist1Component } from './componentApp/factura/1/facturaplist1/facturaplist1.component';
import { Facturaview1Component } from './componentApp/factura/1/facturaview1/facturaview1.component';
import { Facturaremove1Component } from './componentApp/factura/1/facturaremove1/facturaremove1.component';
import { Medicoplist1Component } from './componentApp/medico/1/medicoplist1/medicoplist1.component';
import { Medicoview1Component } from './componentApp/medico/1/medicoview1/medicoview1.component';
import { Medicoremove1Component } from './componentApp/medico/1/medicoremove1/medicoremove1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioplist1Component } from './componentApp/modalidadepisodio/1/modalidadepisodioplist1/modalidadepisodioplist1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioview1Component } from './componentApp/modalidadepisodio/1/modalidadepisodioview1/modalidadepisodioview1.component';
// tslint:disable-next-line:max-line-length
import { Modalidadepisodioremove1Component } from './componentApp/modalidadepisodio/1/modalidadepisodioremove1/modalidadepisodioremove1.component';
import { Servicioplist1Component } from './componentApp/servicio/1/servicioplist1/servicioplist1.component';
import { Servicioview1Component } from './componentApp/servicio/1/servicioview1/servicioview1.component';
import { Servicioremove1Component } from './componentApp/servicio/1/servicioremove1/servicioremove1.component';
import { Sexoplist1Component } from './componentApp/sexo/1/sexoplist1/sexoplist1.component';
import { Sexoview1Component } from './componentApp/sexo/1/sexoview1/sexoview1.component';
import { Sexoremove1Component } from './componentApp/sexo/1/sexoremove1/sexoremove1.component';
import { Pacientenew1Component } from './componentApp/paciente/1/pacientenew1/pacientenew1.component';
import { XpacienteComponent } from './componentApp/episodio/1/xpaciente/xpaciente.component';


export const app_routes: Routes = [
    // ----------GENERAL---------
    { path: 'home', component: HomeComponent },
    { path: 'license', component: LicenseComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    // -----------CATEGORIA PROFESIONAL-----------
    { path: 'categoriaprofesional/1/plist/:page/:rpp', component: Categoriaprofesionalplist1Component},
    { path: 'categoriaprofesional/1/view/:id', component: Categoriaprofesionalview1Component},
    { path: 'categoriaprofesional/1/remove/:id', component: Categoriaprofesionalremove1Component},
    { path: 'categoriaprofesional/1/edit/:id', component: Categoriaprofesionaledit1Component},
    { path: 'categoriaprofesional/1/new', component: Categoriaprofesionalnew1Component},
    // -----------USUARIO-----------
    { path: 'usuario/1/plist/:page/:rpp', component: Usuarioplist1Component},
    { path: 'usuario/1/view/:id', component: Usuarioview1Component},
    { path: 'usuario/1/remove/:id', component: Usuarioremove1Component},
    { path: 'usuario/1/edit/:id', component: Usuarioedit1Component},
    { path: 'usuario/1/new', component: Usuarionew1Component},
    { path: 'usuario/1/xtipousuario/plistx/:id/:page/:rpp', component: Xtipousuarioplist1Component},
    // ---------TIPO USUARIO-----------
    { path: 'tipousuario/1/plist/:page/:rpp', component: Tipousuarioplist1Component},
    { path: 'tipousuario/1/view/:id', component: Tipousuarioview1Component},
    { path: 'tipousuario/1/remove/:id', component: Tipousuarioremove1Component},
    { path: 'tipousuario/1/edit/:id', component: Tipousuarioedit1Component},
    { path: 'tipousuario/1/new', component: Tipousuarionew1Component},
    // ---------GRUPO---------------
    { path: 'grupo/1/plist/:page/:rpp', component: Grupoplist1Component},
    { path: 'grupo/1/view/:id', component: Grupoview1Component},
    { path: 'grupo/1/remove/:id', component: Gruporemove1Component},
    // { path: 'grupo/1/edit/:id', component: Tipousuarioedit1Component},
    { path: 'grupo/1/new', component: Gruponew1Component},
    { path: 'grupo/1/xusuario/plistx/:id/:page/:rpp', component: Xusuarioplist1Component},
    // ------------CURSO---------------
    { path: 'curso/1/plist/:page/:rpp', component: Cursoplist1Component},
    { path: 'curso/1/view/:id', component: Cursoview1Component},
    { path: 'curso/1/remove/:id', component: Cursoremove1Component},
    // { path: 'curso/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'curso/1/new', component: Gruponew1Component},
    // { path: 'curso/1/xusuario/plistx/:id/:page/:rpp', component: Xusuarioplist1Component},
    // ------------CENTRO-------------
    { path: 'centro/1/plist/:page/:rpp', component: Centroplist1Component},
    { path: 'centro/1/view/:id', component: Centroview1Component},
    { path: 'centro/1/remove/:id', component: Centroremove1Component},
    // { path: 'curso/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'curso/1/new', component: Gruponew1Component},
    // { path: 'curso/1/xusuario/plistx/:id/:page/:rpp', component: Xusuarioplist1Component},
    // ------------CENTRO SANITARIO-------------
    { path: 'centrosanitario/1/plist/:page/:rpp', component: Centrosanitarioplist1Component},
    { path: 'centrosanitario/1/view/:id', component: Centrosanitarioview1Component},
    { path: 'centrosanitario/1/remove/:id', component: Centrosanitarioremove1Component},
    // { path: 'curso/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'curso/1/new', component: Gruponew1Component},
    // { path: 'curso/1/xusuario/plistx/:id/:page/:rpp', component: Xusuarioplist1Component},
    // ----------------PACIENTES-----------------
    { path: 'paciente/1/plist/:page/:rpp', component: Pacienteplist1Component},
    { path: 'paciente/1/view/:id', component: Pacienteview1Component},
    { path: 'paciente/1/remove/:id', component: Pacienteremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    { path: 'paciente/1/new', component: Pacientenew1Component},
    // { path: 'paciente/1/xusuario/plistx/:id/:page/:rpp', component: Xusuarioplist1Component},
    // ----------------DEPENDENCIA-----------------
    { path: 'dependencia/1/plist/:page/:rpp', component: Dependenciaplist1Component},
    { path: 'dependencia/1/view/:id', component: Dependenciaview1Component},
    { path: 'dependencia/1/remove/:id', component: Dependenciaremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------DESTINO ALTA-----------------
    { path: 'destinoalta/1/plist/:page/:rpp', component: Destinoaltaplist1Component},
    { path: 'destinoalta/1/view/:id', component: Destinoaltaview1Component},
    { path: 'destinoalta/1/remove/:id', component: Destinoaltaremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------EPISODIO-----------------
    { path: 'episodio/1/plist/:page/:rpp', component: Episodioplist1Component},
    { path: 'episodio/1/view/:id', component: Episodioview1Component},
    { path: 'episodio/1/remove/:id', component: Episodioremove1Component},
    { path: 'episodio/1/xpaciente/plistx/:id/:page/:rpp', component: XpacienteComponent},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------ESPECIALIDAD-----------------
    { path: 'especialidad/1/plist/:page/:rpp', component: Especialidadplist1Component},
    { path: 'especialidad/1/view/:id', component: Especialidadview1Component},
    { path: 'especialidad/1/remove/:id', component: Especialidadremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------FACTURA-----------------
    { path: 'factura/1/plist/:page/:rpp', component: Facturaplist1Component},
    { path: 'factura/1/view/:id', component: Facturaview1Component},
    { path: 'factura/1/remove/:id', component: Facturaremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------MEDICO-----------------
    { path: 'medico/1/plist/:page/:rpp', component: Medicoplist1Component},
    { path: 'medico/1/view/:id', component: Medicoview1Component},
    { path: 'medico/1/remove/:id', component: Medicoremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------MODALIDAD EPISODIO-----------------
    { path: 'modalidadepisodio/1/plist/:page/:rpp', component: Modalidadepisodioplist1Component},
    { path: 'modalidadepisodio/1/view/:id', component: Modalidadepisodioview1Component},
    { path: 'modalidadepisodio/1/remove/:id', component: Modalidadepisodioremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------SERVICIO-----------------
    { path: 'servicio/1/plist/:page/:rpp', component: Servicioplist1Component},
    { path: 'servicio/1/view/:id', component: Servicioview1Component},
    { path: 'servicio/1/remove/:id', component: Servicioremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},
    // ----------------SEXO-----------------
    { path: 'sexo/1/plist/:page/:rpp', component: Sexoplist1Component},
    { path: 'sexo/1/view/:id', component: Sexoview1Component},
    { path: 'sexo/1/remove/:id', component: Sexoremove1Component},
    // { path: 'paciente/1/edit/:id', component: Tipousuarioedit1Component},
    // { path: 'paciente/1/new', component: Gruponew1Component},


    // { path: '/passchange', component: PasschangeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
];


export const app_routing = RouterModule.forRoot(app_routes);

