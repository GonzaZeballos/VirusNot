import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroEscenarioComponent } from './registro-escenario/registro-escenario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { SolicitudesPreInscripcionComponent } from './solicitudes-pre-inscripcion/solicitudes-pre-inscripcion.component';

const routes: Routes = [
  {
    path:'preInscripcion',
    component: RegistroComponent
  },
  {
    path:'registroUsuario',
    component: RegistroUsuarioComponent
  },
  {
    path:'registroEscenario',
    component: RegistroEscenarioComponent
  },
  {
    path:'solPreInscripcion',
    component: SolicitudesPreInscripcionComponent
  },
  {
    path:'Login',
    component: LoginComponent
  },
  {
    path:'Inicio',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
