import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';

export const routes: Routes = [
    {
        path: '' , component: HomeComponent },
    {   path: 'login', component:LoginComponent},
    {   path: 'contratos', component: ContratosComponent},
    {   path: 'about', component:AboutInfoComponent},
    {   path: '**',  redirectTo:''}

];
