import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
//Componentes
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { FooterAppComponent } from './partials/footer-app/footer-app.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { HoraCorrerScreenComponent } from './screens/hora-correr-screen/hora-correr-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { PantallaJuegoScreenComponent } from './screens/pantalla-juego-screen/pantalla-juego-screen.component';
import { PerfilUsuarioScreenComponent } from './screens/perfil-usuario-screen/perfil-usuario-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    HeaderAppComponent,
    LeftSidebarComponent,
    FooterAppComponent,
    JuegoTerminadoScreenComponent,
    BasesPromocionScreenComponent,
    HoraCorrerScreenComponent,
    NuevoLookScreenComponent,
    PoliticaPrivacidadScreenComponent,
    TerminosCondicionesScreenComponent,
    PantallaJuegoScreenComponent,
    PerfilUsuarioScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
