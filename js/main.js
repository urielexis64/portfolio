$(document).ready(function() {

    AOS.init({
        duration: 1000
    });

    let $btns = $('.project-area .button-group button');

    $btns.click(function(e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    //Owl Carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    });

    //On Scroll Animation (F O L L O W  M E)
    const callback = function(entries) {
        entries.forEach(entry => {
            entry.target.classList.toggle("is-visible");
        });
    };

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".show-on-scroll");
    targets.forEach(function(target) {
        observer.observe(target);
    });

    //Sticky Navigation Menu
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            });
        }
    }
    navbarFixed();
});