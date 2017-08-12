import { Injectable } from '@angular/core';

@Injectable()
export class SliderShowService {
  translateX: string = 'translateX(0px)';
  slides: any[] = [
    { active: true, url: 'assets/image/04.jpg' },
    { active: false, url: 'assets/image/08.jpg' },
    { active: false, url: 'assets/image/06.jpg' },
    { active: false, url: 'assets/image/01.jpg' },
  ]
check: boolean = false;
  constructor() { }
  
  getPosition() {
    return this.slides.findIndex(slide => slide.active);
  }
  
  setTranslateX() {
    this.translateX = `translateX(-${this.getPosition() * 25}%)`
  }
  
  go(slide){
    let currentSlide = this.slides[this.getPosition()]
    currentSlide.active = false
    slide.active = true;
    this.setTranslateX()
  }
  
  next() {
    let currentSlide = this.slides[this.getPosition()]
    let nextSlide = this.slides[this.getPosition() + 1]
    if (nextSlide) {
      currentSlide.active = false;
      nextSlide.active = true;
    }
     if(!nextSlide && this.check){
      console.log('!nextSlide');
      let nextSlide = this.slides[this.getPosition() * 0];
      currentSlide.active = false;
      nextSlide.active = true;
    }
    this.setTranslateX()
  }
  
  previous() {
    let currentSlide = this.slides[this.getPosition()]
    let previousSlide = this.slides[this.getPosition() - 1]
    if (previousSlide) {
      currentSlide.active = false
      previousSlide.active = true
    }
     if(!previousSlide && this.check){
      console.log('!nextSlide');
      let sliderLenght = this.slides.length - 1;
      let previousSlide = this.slides[this.getPosition() + sliderLenght];
      currentSlide.active = false;
      previousSlide.active = true;
    }
    this.setTranslateX()
  }
  
  infinite(){
   this.check = !this.check
  }
}