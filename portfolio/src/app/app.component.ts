import { Component, ElementRef, ViewChild, HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('exploreSection', { read: ElementRef, static: false }) exploreSection!: ElementRef;
  @ViewChild('aboutMeSection', { read: ElementRef, static: false }) aboutMeSection!: ElementRef;
  @ViewChild('servicesSection', { read: ElementRef, static: false }) servicesSection!: ElementRef;
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
  }

  checkIsExperienceElementInViewport() {
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
  }

  checkIsProjectsElementInViewport() {
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
