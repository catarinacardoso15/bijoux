import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ItemsComponent } from './page/plasbijoux-items/items/items.component';
import { PlasbijouxItemsComponent } from './page/plasbijoux-items/plasbijoux-items.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'items',

    component: PlasbijouxItemsComponent,
    children: [{ path: ':id', component: ItemsComponent }],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
