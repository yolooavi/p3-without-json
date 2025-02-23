import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importujemy RouterModule
import { routes } from './app.routes';  // Importujemy konfigurację routingu

import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TablaComponent } from './tabla/tabla.component';
import { DondeComponent } from './donde/donde.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    TablaComponent,
    DondeComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {} 