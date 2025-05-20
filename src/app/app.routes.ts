import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { SampleComponent } from './feature/sample/sample.component';
import { MathComponent } from './feature/math/math.component';
import { UserManagementComponent } from './feature/user-management/user-management.component';
import { UserDetailComponent } from './feature/user-detail/user-detail.component';
import { UserListComponent } from './feature/user-list/user-list.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, 
    { path: 'sample', component: SampleComponent },
    { path: 'math', component: MathComponent },
    { path: 'users', component: UserManagementComponent, children:[
        { path: '', redirectTo: '/users/list', pathMatch: 'full'},
        { path: 'detail', component: UserDetailComponent },
        { path: 'list', component: UserListComponent },
        { path: '**', redirectTo: '/sample', pathMatch: 'full' },
    ] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
