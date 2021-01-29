import $ from 'jquery' //vendor-js
import 'slick-carousel/slick/slick.css' //vendor-css
import slider from './slider' //js
import ymaps from './ymaps' //js

$(function() {
    slider();
    ymaps();
    console.log('Работает.');
});