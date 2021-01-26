import $ from "jquery";
import "slick-carousel";

const slider = function() {
    $('.present-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        appendArrows: '.present-slider__arrows',
        prevArrow: '<button class="arrow-prev">НАЗАД</button>',
        nextArrow: '<button class="arrow-next">СЛЕД</button>'
    })
}
export default slider