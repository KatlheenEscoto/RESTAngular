import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { PostComponent } from './pages/post/post.component';
import { FormPostComponent } from './pages/post/form-post.component';
import { ClienteRestComponent } from './pages/cliente-rest/cliente-rest.component';
import { FormClienteComponent } from './pages/cliente-rest/form-cliente.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'clientes_rest',
    component: ClienteRestComponent
  },
  {
    path: 'clientes_rest/form',
    component: FormClienteComponent
  },
  {
    path: 'clientes_rest/form/:id',
    component: FormClienteComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'posts/form',
    component: FormPostComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
