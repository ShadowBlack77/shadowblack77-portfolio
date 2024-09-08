import { AfterViewInit, Component, HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  isMenuOpen: boolean = false;

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('.component-section');

    const navHeaderLinks = document.querySelectorAll('.nav-link-header');
    const navAsideLinks = document.querySelectorAll('.nav-link-aside');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => this.setActiveHeaderLink(index, navHeaderLinks),
        onEnterBack: () => this.setActiveHeaderLink(index, navHeaderLinks)
      })
    });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => this.setActiveAsideLink(index, navAsideLinks),
        onEnterBack: () => this.setActiveAsideLink(index, navAsideLinks)
      })
    });

    gsap.to('.fade-in-about', {
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1
    });

    gsap.fromTo('.fade-in-experience', {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.fade-in-experience',
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });

    gsap.fromTo('.fade-in-contact', {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.fade-in-contact',
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });
  }

  setActiveHeaderLink(index: number, navLinks: NodeListOf<Element>) {
    navLinks.forEach(link => link.classList.remove('active-header-link'));
    navLinks[index].classList.add('active-header-link');
  }

  setActiveAsideLink(index: number, navLinks: NodeListOf<Element>) {
    navLinks.forEach(link => link.classList.remove('active-aside-link'));
    navLinks[index].classList.add('active-aside-link');
  }

  public expandSideMenu(): void {
    if (!this.isMenuOpen) {
      gsap.to('.aside-navbar-menu', {
        translateX: '0vw',
        duration: 0.5,
        ease: 'power2.in'
      });

      gsap.to(".bar:nth-child(1)", { 
        top: 8, 
        duration: 0.3,
        ease: 'power2.InOut'
      })
        .then(() => {
          gsap.to(".bar:nth-child(1)", { 
            rotation: 45, 
            duration: 0.3,
            ease: 'power2.InOut'
          })
        });
      gsap.to(".bar:nth-child(2)", { 
        opacity: 0,
        duration: 0.3,
        ease: 'power2.InOut'
      });
      gsap.to(".bar:nth-child(3)", { 
        top: -8,
        duration: 0.3,
        ease: 'power2.InOut'
      })
        .then(() => {
          gsap.to(".bar:nth-child(3)", {
            rotation: -45,  
            duration: 0.3,
            ease: 'power2.InOut'
          });
        });
    } else {
      gsap.to('.aside-navbar-menu', {
        translateX: '-100vw',
        duration: 0.5,
        ease: 'power2.Out'
      });

      gsap.to(".bar:nth-child(1)", { 
        rotation: 0, 
        duration: 0.3,
        ease: 'power2.InOut'
      })
        .then(() => {
          gsap.to(".bar:nth-child(1)", { 
            top: 0, 
            duration: 0.3,
            ease: 'power2.InOut'
          });
        });
      gsap.to(".bar:nth-child(2)", {
        opacity: 1, 
        duration: 0.3,
        ease: 'power2.InOut'
      });
      gsap.to(".bar:nth-child(3)", { 
        rotation: 0, 
        duration: 0.3,
        ease: 'power2.InOut'
      })
        .then(() => {
          gsap.to(".bar:nth-child(3)", { 
            top: 0, 
            duration: 0.3,
            ease: 'power2.InOut'
          });
        });
    }

    this.isMenuOpen = !this.isMenuOpen
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    if (this.isMenuOpen) {
      if (!event.target || !(event.target as HTMLElement).closest('.aside-navbar-menu') && !(event.target as HTMLElement).closest('.ham-box')) {
        gsap.to('.aside-navbar-menu', {
          translateX: '-100vw',
          duration: 0.5,
          ease: 'power2.Out'
        });
  
        gsap.to(".bar:nth-child(1)", { 
          rotation: 0, 
          duration: 0.3,
          ease: 'power2.InOut'
        })
          .then(() => {
            gsap.to(".bar:nth-child(1)", { 
              top: 0, 
              duration: 0.3,
              ease: 'power2.InOut'
            });
          });
        gsap.to(".bar:nth-child(2)", {
          opacity: 1, 
          duration: 0.3,
          ease: 'power2.InOut'
        });
        gsap.to(".bar:nth-child(3)", { 
          rotation: 0, 
          duration: 0.3,
          ease: 'power2.InOut'
        })
          .then(() => {
            gsap.to(".bar:nth-child(3)", { 
              top: 0, 
              duration: 0.3,
              ease: 'power2.InOut'
            });
          });
  
        this.isMenuOpen = false;
      }
    }
  }

  @HostListener('document:scroll')
  onScorll() {
    if (this.isMenuOpen) {
      gsap.to('.aside-navbar-menu', {
        translateX: '-100vw',
        duration: 0.5,
        ease: 'power2.Out'
      });
  
      gsap.to(".bar:nth-child(1)", { 
        rotation: 0, 
        duration: 0.3,
        ease: 'power2.InOut'
      })
        .then(() => {
          gsap.to(".bar:nth-child(1)", { 
            top: 0, 
            duration: 0.3,
            ease: 'power2.InOut'
          });
        });
      gsap.to(".bar:nth-child(2)", {
        opacity: 1, 
        duration: 0.3,
        ease: 'power2.InOut'
      });
      gsap.to(".bar:nth-child(3)", { 
        rotation: 0, 
        duration: 0.3,
        ease: 'power2.InOut'
      })
        .then(() => {
          gsap.to(".bar:nth-child(3)", { 
            top: 0, 
            duration: 0.3,
            ease: 'power2.InOut'
          });
        });
  
      this.isMenuOpen = false;
    }
  }
}
