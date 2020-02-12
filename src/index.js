import './scss/style.scss';
import 'bootstrap';
import jQuery from 'jquery';

jQuery('#year').text(new Date().getFullYear());

jQuery('body').scrollspy({target: '#main-nav'});

jQuery('#main-nav a').on('click', function(event) {
    if (this.hash !== '') { 
        event.preventDefault();
        const hash = this.hash;
        jQuery('html, body').animate({
            scrollTop: jQuery(hash).offset().top
        }, 900, () => {
            window.location.hash = hash;
        });
    }
});
