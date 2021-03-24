import RenderContainers from './controllers/render-containers';
import dataToFill from './controllers/pages-data';

(() => {
  const informativeSliderButtons = document.querySelectorAll('.informative-slider-title-button');
  const aboutUsButton = document.getElementById('about-us');
  const ourWorkButton = document.getElementById('our-work');

  informativeSliderButtons.forEach((button) => {
    button.addEventListener('click', () => RenderContainers.informativeSlider(button, dataToFill.informativeSlider));
  });

  aboutUsButton.addEventListener('click', (event) => {
    event.preventDefault();
    RenderContainers.articleComponent(dataToFill.aboutUs);
  });

  ourWorkButton.addEventListener('click', (event) => {
    event.preventDefault();
    RenderContainers.articleComponent(dataToFill.ourWork);
  });
})();
