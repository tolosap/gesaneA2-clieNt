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
    HeaderComponent, GetForeignDescPipe, ClipStringPipe, BooleanizePipe,
    LoginComponent, Usuarioview1Component, Usuarionew1Component,
    Usuarioedit1Component, Usuarioremove1Component, Xtipousuarioplist1Component,
    LogoutComponent, Tipousuarioview1Component, Tipousuarioremove1Component, Tipousuarioplist1Component,
    Tipousuarionew1Component, Tipousuarioedit1Component, Grupoview1Component, Gruporemove1Component,
    Grupoplist1Component, Gruponew1Component, Xusuarioplist1Component, Xusuarioedit1Component,
    Xusuarionew1Component, Cursoview1Component, Cursoremove1Component, Cursoplist1Component,
    Cursonew1Component, Cursoedit1Component, Centroplist1Component, Centroremove1Component, Centroview1Component, Centronew1Component, Centroedit1Component, Centrosanitarioedit1Component, Centrosanitarioplist1Component, Centrosanitarionew1Component, Centrosanitarioremove1Component, Centrosanitarioview1Component
  ],
  imports: [HttpClientModule, BrowserModule, app_routing,
     BsDropdownModule.forRoot(app_routes), FormsModule, TabsModule.forRoot(),
     Angular2FontawesomeModule],
  providers: [
    ServiceConnService,
    SessionServerCallService,
    SessionService,
    ConstantServiceService,
    RegexService,
    SharedSpaceService,
    ToolService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
