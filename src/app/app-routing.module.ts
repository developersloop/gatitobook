import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const modules = [
//   'home'
// ]
// type lazyLoadModule = (nameModule: string) => any

// const loadChildren: lazyLoadModule = (nameModule: string = 'home') => {
//   let prefixModule: string = ''

//   if (modules.includes(nameModule)) prefixModule = nameModule.charAt(0).toUpperCase() + nameModule.slice(1) + 'Module'

//   return import(`./home/home.module`)
//     .then(module => module.HomeModule)
// }

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'list-animals',
    loadChildren: () => import('./animais/animais.module').then(module => module.AnimaisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
