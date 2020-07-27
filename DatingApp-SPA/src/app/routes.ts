import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard  } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // home pero como ya el de hasta abajo redirecciona a '' será redireccionado a HomeComponent
    {
        path: '', // si pusieramos dummy seria localhost:4200/dummymembers como no lleva nada /members
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent }, // canActivate: [AuthGuard]
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
]