import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: '**', component: PageNotFoundComponent},
];
