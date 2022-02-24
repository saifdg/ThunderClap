import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'',component:TestComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Auth',component:AuthComponent},



];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
