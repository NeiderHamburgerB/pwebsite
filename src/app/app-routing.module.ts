import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/pages/home/home.component'
import { HomeComponent as BlogHomeComponent } from './blog/pages/home/home.component' 
import { HomeComponent as ContactHomeComponent } from './contact/pages/home/home.component' 
import { HomeComponent as ProjectsHomeComponent } from './projects-me/pages/home/home.component'
import { HomeComponent as BeersHomeComponent } from './beers/pages/home/home.component'

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'blog',
    component:BlogHomeComponent
  },
  {
    path:'projects',
    component:ProjectsHomeComponent
  },
  {
    path:'contact',
    component:ContactHomeComponent
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'beers',
    component:BeersHomeComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
