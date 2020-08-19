import { Routes, RouterModule }  from '@angular/router';

//Components
import { VisaoComponent } from "./visao/visao.component";
import { BemVindoComponent } from "./bem-vindo/bem-vindo.component";


import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: 'bemvindo',component: BemVindoComponent},
    {path: '',component: VisaoComponent},    
]

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
