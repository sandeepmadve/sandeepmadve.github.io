import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkillsComponent } from './skills/skills.component';
import { TrainingComponent } from './training/training.component';
import { WorkExComponent } from './work-ex/work-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    SkillsComponent,
    AwardsComponent,
    EducationComponent,
    TrainingComponent,
    WorkExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
