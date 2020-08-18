import { Routes, RouterModule }  from '@angular/router';
import { NgModule } from '@angular/core';
//Components
import { VisaoComponent } from "./visao/visao.component";
import { BemVindoComponent } from "./bem-vindo/bem-vindo.component";


import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'bemvindo',component: BemVindoComponent},
    {path: '',component: VisaoComponent},    
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })

export class AppRoutingModule{};
export const routingComponents = [BemVindoComponent,VisaoComponent];
