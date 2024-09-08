import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.fromTo('.title-project-fade-in', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.title-project-fade-in',
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });

    gsap.fromTo('.first-project-fade-in', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.first-project-fade-in',
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });

    gsap.fromTo('.second-project-fade-in', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.second-project-fade-in',
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });

    gsap.fromTo('.thrith-project-fade-in', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.thrith-project-fade-in',
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });

    gsap.fromTo('.fourth-project-fade-in', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      scrollTrigger: {
        trigger: '.fourth-project-fade-in',
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });
  }
}
