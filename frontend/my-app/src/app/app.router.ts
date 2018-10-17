import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    {
        path:"",
        component: ShowDataComponent,
    },
    {
        path:"**",
        component: PagenotfoundComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}