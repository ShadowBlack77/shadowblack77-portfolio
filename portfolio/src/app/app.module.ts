import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CvComponent } from './components/cv/cv.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TouchComponent } from './components/touch/touch.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExploreComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    CvComponent,
    ProjectsComponent,
    TouchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
