import { RouterModule, Routes } from '@angular/router';
// ----------------COMPONENTES GENERALES-------------
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LicenseComponent } from './component/license/license.component';
import { HomeComponent } from './component/home/home.component';
import { SessionService } from './service/session.service';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';

// ---------------COMPONENTES APP ----------------
// ----------USUARIO----------
import { Usuarioplist1Component } from './componentApp/usuario/1/usuarioplist1/usuarioplist1.component';
import { Usuarioview1Component } from './componentApp/usuario/1/usuarioview1/usuarioview1.component';
import { Usuarioremove1Component } from './componentApp/usuario/1/usuarioremove1/usuarioremove1.component';
import { Usuarionew1Component } from './componentApp/usuario/1/usuarionew1/usuarionew1.component';
import { Usuarioedit1Component } from './componentApp/usuario/1/usuarioedit1/usuarioedit1.component';
import { Xtipousuarioplist1Component } from './componentApp/usuario/1/tipousuario/xtipousuarioplist1/xtipousuarioplist1.component';
// ---------TIPOUSUARIO---------
import { Tipousuarioview1Component } from './componentApp/tipousuario/1/tipousuarioview1/tipousuarioview1.component';
import { Tipousuarioplist1Component } from './componentApp/tipousuario/1/tipousuarioplist1/tipousuarioplist1.component';
import { Tipousuarioremove1Component } from './componentApp/tipousuario/1/tipousuarioremove1/tipousuarioremove1.component';
import { Tipousuarioedit1Component } from './componentApp/tipousuario/1/tipousuarioedit1/tipousuarioedit1.component';
import { Tipousuarionew1Component } from './componentApp/tipousuario/1/tipousuarionew1/tipousuarionew1.component';
// ----------GRUPO--------------
import { Grupoview1Component } from './componentApp/grupo/1/grupoview1/grupoview1.component';
import { Grupoplist1Component } from './componentApp/grupo/1/grupoplist1/grupoplist1.component';
import { Gruporemove1Component } from './componentApp/grupo/1/gruporemove1/gruporemove1.component';
import { Gruponew1Component } from './componentApp/grupo/1/gruponew1/gruponew1.component';
import { Xusuarioplist1Component } from './componentApp/grupo/1/xusuario/xusuarioplist1/xusuarioplist1.component';
// ------------CURSO-------------
import { Cursoview1Component } from './componentApp/curso/1/cursoview1/cursoview1.component';
import { Cursoplist1Component } from './componentApp/curso/1/cursoplist1/cursoplist1.component';
import { Cursoremove1Component } from './componentApp/curso/1/cursoremove1/cursoremove1.component';
// ---------------CENTRO--------------
import { Centroview1Component } from './componentApp/centro/1/centroview1/centroview1.component';
import { Centroplist1Component } from './componentApp/centro/1/centroplist1/centroplist1.component';
import { Centroremove1Component } from './componentApp/centro/1/centroremove1/centroremove1.component';
// ---------------CENTRO SANITARIO--------------
import { Centrosanitarioview1Component } from './componentApp/centrosanitario/1/centrosanitarioview1/centrosanitarioview1.component';
import { Centrosanitarioplist1Component } from './componentApp/centrosanitario/1/centrosanitarioplist1/centrosanitarioplist1.component';
import { Centrosanitarioremove1Component } from './componentApp/centrosanitario/1/centrosanitarioremove1/centrosanitarioremove1.component';

export const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'license', component: LicenseComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
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



    /*{ path: '/logout', component: LogoutComponent },
    { path: '/passchange', component: PasschangeComponent },*/
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
];


export const app_routing = RouterModule.forRoot(app_routes);

