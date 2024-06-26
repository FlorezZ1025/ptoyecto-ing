import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';
import { MisContratosComponent } from './components/mis-contratos/mis-contratos.component';
import { NuevoContratistaComponent } from './components/nuevo-contratista/nuevo-contratista.component';

export const routes: Routes = [
    {
        path: '' , component: HomeComponent },
    {   path: 'login', component:LoginComponent},
    {   path: 'about', component:AboutInfoComponent},
    {   path: 'user', component:UserComponent},
    {   path: 'mis-contratos', component: MisContratosComponent},
    {   path: 'nuevo-contrato',  component: NuevoContratistaComponent}

];
