import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiper = () => new Swiper('.swiper-container', {
  keyboard: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  css: true,
});

export default swiper;
