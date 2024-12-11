import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';

const routes: Routes = [
  {
  path: "Contactanos",
  component: ContactanosComponent
  },
  {
  path: "",
  component: InicioComponent
  },
  {
  path: "Ubicanos",
  component: UbicanosComponent
  },
  {
  path: "Inicio",
  component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
