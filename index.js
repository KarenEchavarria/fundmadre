import RenderContainers from './controllers/render-containers';

(() => {
  const informativeSliderButtons = document.querySelectorAll('.informative-slider-title-button');
  const aboutUsButton = document.getElementById('about-us');

  informativeSliderButtons.forEach((button) => {
    button.addEventListener('click', () => RenderContainers.informativeSlider(button));
  });

  aboutUsButton.addEventListener('click', RenderContainers.aboutUsPage);
})();
