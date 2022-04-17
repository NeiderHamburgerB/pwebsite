import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CardProjectComponent } from './components/card-project/card-project.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardProjectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsMeModule { }
