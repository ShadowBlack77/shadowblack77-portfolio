import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BanerComponent } from './components/baner/baner.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TouchComponent } from './components/touch/touch.component';
import { CvComponent } from './components/cv/cv.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  bootstrapGithub, 
  bootstrapDiscord, 
  bootstrapLinkedin, 
  bootstrapFacebook,
  bootstrapLaptop,
  bootstrapPhone,
  bootstrapDatabaseCheck,
  bootstrapCodeSlash,
  bootstrapSend,
  bootstrapShareFill
} from '@ng-icons/bootstrap-icons';

import { tdesignInternet } from '@ng-icons/tdesign-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BanerComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    CvComponent,
    TouchComponent,
    FooterComponent,
    ProjectsComponent,
    NgIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [provideIcons({ 
    bootstrapGithub, 
    bootstrapDiscord, 
    bootstrapLinkedin, 
    bootstrapFacebook, 
    bootstrapLaptop,
    bootstrapPhone,
    bootstrapDatabaseCheck,
    bootstrapCodeSlash,
    bootstrapSend,
    bootstrapShareFill,
    tdesignInternet
  })]
})
export class AppComponent {
  @ViewChild('bannerSection', { read: ElementRef, static: false }) exploreSection!: ElementRef;
  @ViewChild('aboutSection', { read: ElementRef, static: false }) aboutMeSection!: ElementRef;
  @ViewChild('serviceSection', { read: ElementRef, static: false }) servicesSection!: ElementRef;
  @ViewChild('experienceSection', { read: ElementRef, static: false }) experienceSection!: ElementRef;
  @ViewChild('projectsSection', { read: ElementRef, static: false }) projectsSection!: ElementRef;
  @ViewChild('touchSection', { read: ElementRef, static: false }) touchSection!: ElementRef;

  whatIsInView: string = 'explore';

  checkIsExploreElementInViewport() {
    const element = this.exploreSection.nativeElement;
    
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {   
      this.whatIsInView = 'explore';
    }
  }

  checkIsAboutElementInViewport() {
    const element = this.aboutMeSection.nativeElement;    
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {   
      this.whatIsInView = 'about';
    }
  }

  checkIsServicesElementInViewport() {
    try {
      const element = this.servicesSection.nativeElement.querySelector('#first-element');
      const lastElement = this.servicesSection.nativeElement.querySelector('#last-element');

      const rect = element.getBoundingClientRect();
      const lastRect = lastElement.getBoundingClientRect();

      const isInViewport = 
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      const isInLastViewport = 
        lastRect.top >= 0 &&
        lastRect.left >= 0 &&
        lastRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        lastRect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport || isInLastViewport) {
        this.whatIsInView = 'services'
      }
    } catch(err) {

    }
  }

  checkIsExperienceElementInViewport() {
    try {
      const element = this.experienceSection.nativeElement.querySelector('#experience-desc');
      const lastElement = this.experienceSection.nativeElement.querySelector('#more-experience-desc');

      const rect = element.getBoundingClientRect();
      const lastRect = lastElement.getBoundingClientRect();

      const isInViewport = 
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      const isLastInViewport = 
        lastRect.top >= 0 &&
        lastRect.left >= 0 &&
        lastRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        lastRect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport || isLastInViewport) {  
        this.whatIsInView = 'experience';
      }
    } catch(err) {

    }
  }

  checkIsProjectsElementInViewport() {
    try {
      const element = this.projectsSection.nativeElement.querySelector('#project-header');
      const lastElement = this.projectsSection.nativeElement.querySelector('#projects-btn');

      const rect = element.getBoundingClientRect();
      const lastRect = lastElement.getBoundingClientRect();

      const isInViewport = 
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      const isLastInViewport = 
        lastRect.top >= 0 &&
        lastRect.left >= 0 &&
        lastRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        lastRect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport || isLastInViewport) {  
        this.whatIsInView = 'projects';
      }
    } catch(err) {
      
    }
  }

  checkIsTouchElementInViewport() {
    const element = this.touchSection.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {  
      this.whatIsInView = 'touch';
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIsExploreElementInViewport();
    this.checkIsAboutElementInViewport();
    this.checkIsServicesElementInViewport();
    this.checkIsExperienceElementInViewport();
    this.checkIsProjectsElementInViewport();
    this.checkIsTouchElementInViewport();
  }
}
