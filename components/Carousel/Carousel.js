/**
 * Create carousel component with autosliding images that stop on mouseenter
 * 
 * @property {HTMLElement} element container element for carousel
 * @property {Array} images array of CarouselImage objects
 * @property {Object} buttons buttons to manually control carousel
 * @property {Number} current index of currently visible CarouselImage
 * */
class Carousel {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
        this.images = [...document.querySelectorAll('.carousel img')]
            .map(img => new CarouselImage(img));
        this.buttons = [...document.querySelectorAll('[class$="button"]')]
            .map(button => new CarouselButton(button));
        this.current = 0;

        this.images[this.current].show();
        this.registerEventHandlers();
        this.timer = this.autoSlide();
    }

    registerEventHandlers() {
        this.buttons.forEach(button => {
            button.element.addEventListener('click', (event) => {
                this.slideImage(button.direction);
            });
        });

        this.element.addEventListener('mouseenter', event => clearInterval(this.timer));
        this.element.addEventListener('mouseleave', event => {
            this.timer = this.autoSlide()
        });
    }

    slideImage(direction) {
        let next;
        if (direction === 'left') {
            next = (this.current < this.images.length - 1) ? this.current + 1 : 0;
        } else {
            next = (this.current > 0) ? this.current - 1 : this.images.length - 1;
        }

        this.images[this.current].hide();
        this.images[next].show();
        this.current = next;
    }

    autoSlide() {
        return setInterval(() => {
            this.slideImage('left');
        }, 2000)
    }
}

class CarouselImage {
    /**
     * 
     * @param {HTMLImageElement} img 
     */
    constructor(img) {
        this.img = img;
    }

    show() {
        this.img.style.display = 'inline-block';
    }

    hide() {
        this.img.style.display = 'none';
    }
}

class CarouselButton {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor (element) {
        this.element = element;
        this.direction = this.getButtonDirection()
    }

    getButtonDirection() {
        return this.element.className.split('-')[0];
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
