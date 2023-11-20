import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { HoraCorrerScreenComponent } from './screens/hora-correr-screen/hora-correr-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { PantallaJuegoScreenComponent } from './screens/pantalla-juego-screen/pantalla-juego-screen.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { PerfilUsuarioScreenComponent } from './screens/perfil-usuario-screen/perfil-usuario-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full'},
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  { path: 'juego-terminado', component: JuegoTerminadoScreenComponent, pathMatch: 'full'},
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full'},
  { path: 'hora-correr', component: HoraCorrerScreenComponent, pathMatch: 'full'},
  { path: 'nuevo-look', component: NuevoLookScreenComponent, pathMatch: 'full'},
  { path: 'pantalla-juego', component: PantallaJuegoScreenComponent, pathMatch: 'full'},
  { path: 'politica-privacidad', component: PoliticaPrivacidadScreenComponent, pathMatch: 'full'},
  { path: 'terminos-condiciones', component: TerminosCondicionesScreenComponent, pathMatch: 'full'},
  { path: 'perfil-usuario', component: PerfilUsuarioScreenComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
