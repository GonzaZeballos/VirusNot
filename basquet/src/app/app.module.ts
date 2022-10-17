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
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
