import $ from 'jquery' //vendor-js
import 'slick-carousel/slick/slick.css' //vendor-css
import { slider } from './slider' //js
import ymaps from './ymaps';

$(document).on("load", function() {
    slider();
    ymaps();
});