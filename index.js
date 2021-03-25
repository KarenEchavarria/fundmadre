import RenderContainers from './controllers/render-containers';
import dataToFill from './controllers/pages-data';
import swiper from './controllers/swiper';

(() => {
  swiper();

  const informativeSliderButtons = document.querySelectorAll('.informative-slider-title-button');
  const aboutUsButton = document.getElementById('about-us');
  const ourWorkButton = document.getElementById('our-work');

  informativeSliderButtons.forEach((button) => {
    button.addEventListener('click', () => RenderContainers.informativeSlider(button, dataToFill.informativeSlider));
  });

  aboutUsButton.addEventListener('click', (event) => {
    event.preventDefault();
    RenderContainers.articleComponent(dataToFill.aboutUs);
    RenderContainers.titleFullTextComponent(dataToFill.aboutUs);
  });

  ourWorkButton.addEventListener('click', (event) => {
    event.preventDefault();
    RenderContainers.articleComponent(dataToFill.ourWork);
    RenderContainers.titleFullTextComponent(dataToFill.ourWork);
  });
})();
