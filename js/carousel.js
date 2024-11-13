class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.slide');
        this.dots = container.querySelectorAll('.dot');
        this.currentIndex = 0;

        this.showSlide(this.currentIndex);

        // Add event listeners to arrows
        container.querySelector('.left-arrow').addEventListener('click', () => this.previousSlide());
        container.querySelector('.right-arrow').addEventListener('click', () => this.nextSlide());

        // Add event listeners to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.currentSlide(index));
        });
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            this.dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                this.dots[i].classList.add('active');
            }
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    previousSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    currentSlide(index) {
        this.currentIndex = index;
        this.showSlide(this.currentIndex);
    }
}
