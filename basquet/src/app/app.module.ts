import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './registro/header/header.component';
import { CabeceraComponent } from './registro/cabecera/cabecera.component';
import { BodyComponent } from './registro/body/body.component';
import { FooterComponent } from './registro/footer/footer.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { BodyRUComponent } from './registro-usuario/body-ru/body-ru.component';
import { HeaderRUComponent } from './registro-usuario/header-ru/header-ru.component';
import { FooterRUComponent } from './registro-usuario/footer-ru/footer-ru.component';
import { CabeceraRuComponent } from './registro-usuario/cabecera-ru/cabecera-ru.component';
import { RegistroEscenarioComponent } from './registro-escenario/registro-escenario.component';
import { SolicitudesPreInscripcionComponent } from './solicitudes-pre-inscripcion/solicitudes-pre-inscripcion.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { BodyREComponent } from './registro-escenario/body-re/body-re.component';
import { CabeceraREComponent } from './registro-escenario/cabecera-re/cabecera-re.component';
import { FooterREComponent } from './registro-escenario/footer-re/footer-re.component';
import { HeaderREComponent } from './registro-escenario/header-re/header-re.component';
import { CabeceraPIComponent } from './solicitudes-pre-inscripcion/cabecera-pi/cabecera-pi.component';
import { HeaderPIComponent } from './solicitudes-pre-inscripcion/header-pi/header-pi.component';
import { BodyPIComponent } from './solicitudes-pre-inscripcion/body-pi/body-pi.component';
import { FooterPIComponent } from './solicitudes-pre-inscripcion/footer-pi/footer-pi.component';
import { HeaderINComponent } from './inicio/header-in/header-in.component';
import { CabeceraINComponent } from './inicio/cabecera-in/cabecera-in.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HeaderComponent,
    CabeceraComponent,
    BodyComponent,
    FooterComponent,
    RegistroUsuarioComponent,
    BodyRUComponent,
    HeaderRUComponent,
    FooterRUComponent,
    CabeceraRuComponent,
    RegistroEscenarioComponent,
    SolicitudesPreInscripcionComponent,
    LoginComponent,
    InicioComponent,
    BodyREComponent,
    CabeceraREComponent,
    FooterREComponent,
    HeaderREComponent,
    CabeceraPIComponent,
    HeaderPIComponent,
    BodyPIComponent,
    FooterPIComponent,
    HeaderINComponent,
    CabeceraINComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
