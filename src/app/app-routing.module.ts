import { EventsComponent } from './events/events.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:EventsComponent},
  {path:'user',component:UserComponent},
  {path:'me',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
