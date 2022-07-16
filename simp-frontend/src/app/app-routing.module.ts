import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user-list', component: UserListComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'update-user/:userId', component: UpdateUserComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'register-user', component: RegisterUserComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
