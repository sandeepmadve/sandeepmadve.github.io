import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExComponent } from './work-ex/work-ex.component';

const routes: Routes = [
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
  { path: 'summary', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: WorkExComponent },
  { path: 'awards', component: AwardsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
