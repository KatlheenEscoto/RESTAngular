import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { PostComponent } from './pages/post/post.component';
import { FormPostComponent } from './pages/post/form-post.component';


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
