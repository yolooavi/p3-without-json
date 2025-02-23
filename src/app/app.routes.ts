import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TablaComponent } from './tabla/tabla.component';
import { DondeComponent } from './donde/donde.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'donde', component: DondeComponent },
  { path: 'formulario', component: FormularioComponent },
];