import $ from 'jquery'
import 'slick-carousel/slick/slick.css'
import './block/header/header.scss'
import './block/footer/footer.scss'
import './extra/main.scss'
import { slider } from './extra/slider'

$(window).on("load", function() {
    slider();
    console.log('работает');
});