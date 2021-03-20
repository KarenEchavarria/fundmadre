import removeChildContainer from '../utils/remove-child-container';
import dataToFill from './pages-data';

export default class RenderContainers {
  static informativeSlider(data) {
    const img1 = document.getElementById('informative-slider-article-img-left');
    const img2 = document.getElementById('informative-slider-article-img-right');
    const text = document.getElementById('informative-slider-article-text');

    img1.src = dataToFill[data.id].image1;
    img2.src = dataToFill[data.id].image2;
    text.innerText = dataToFill[data.id].text;
  }

  static aboutUsPage(event) {
    event.preventDefault();

    removeChildContainer('root-container');

    const container = document.createElement('main');
    const descriptionContainer = document.createElement('article');
    const textContainer = document.createElement('div');
    const title = document.createElement('h2');
    const text = document.createElement('p');
    const img = document.createElement('img');

    container.id = 'root-container';
    descriptionContainer.id = 'about-us-container';
    textContainer.className = 'about-us-text-container';
    title.innerText = dataToFill.aboutUsTitle;
    text.innerText = dataToFill.aboutUsText;
    img.src = dataToFill.aboutUsImg;
    img.alt = dataToFill.aboutUsAlt;

    textContainer.appendChild(title);
    textContainer.appendChild(text);
    descriptionContainer.appendChild(textContainer);
    descriptionContainer.appendChild(img);
    container.appendChild(descriptionContainer);
    document.querySelector('body').insertBefore(container, document.querySelector('footer'));

    console.log('the end of render');
  }
}
