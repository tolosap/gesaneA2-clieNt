import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LicenseComponent } from './component/license/license.component';
import { HomeComponent } from './component/home/home.component';
import { SessionService } from './service/session.service';
import { LoginComponent } from './component/login/login.component';

import { Usuarioplist1Component } from './componentApp/usuario/1/usuarioplist1/usuarioplist1.component';
import { Usuarioview1Component } from './componentApp/usuario/1/usuarioview1/usuarioview1.component';
import { Usuarioremove1Component } from './componentApp/usuario/1/usuarioremove1/usuarioremove1.component';
import { Usuarionew1Component } from './componentApp/usuario/1/usuarionew1/usuarionew1.component';
import { Usuarioedit1Component } from './componentApp/usuario/1/usuarioedit1/usuarioedit1.component';
import { Xtipousuarioplist1Component } from './componentApp/usuario/1/tipousuario/xtipousuarioplist1/xtipousuarioplist1.component';
import { Tipousuarioview1Component } from './componentApp/tipousuario/tipousuarioview1/tipousuarioview1.component';
import { Tipousuarioplist1Component } from './componentApp/tipousuario/tipousuarioplist1/tipousuarioplist1.component';
import { Tipousuarioremove1Component } from './componentApp/tipousuario/tipousuarioremove1/tipousuarioremove1.component';
import { Tipousuarioedit1Component } from './componentApp/tipousuario/tipousuarioedit1/tipousuarioedit1.component';
import { Tipousuarionew1Component } from './componentApp/tipousuario/tipousuarionew1/tipousuarionew1.component';



import { LogoutComponent } from './component/logout/logout.component';

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
    { path: 'usuario/1/tipousuario/plistx/:id/:page/:rpp', component: Xtipousuarioplist1Component},
    // ---------TIPOUSUARIO-----------
    { path: 'tipousuario/1/plist/:page/:rpp', component: Tipousuarioplist1Component},
    { path: 'tipousuario/1/view/:id', component: Tipousuarioview1Component},
    { path: 'tipousuario/1/remove/:id', component: Tipousuarioremove1Component},
    { path: 'tipousuario/1/edit/:id', component: Tipousuarioedit1Component},
    { path: 'tipousuario/1/new', component: Tipousuarionew1Component},
    /*{ path: '/logout', component: LogoutComponent },
    { path: '/passchange', component: PasschangeComponent },*/
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
];


export const app_routing = RouterModule.forRoot(app_routes);

