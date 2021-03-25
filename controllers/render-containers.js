import removeChildContainer from '../utils/remove-child-container';

export default class RenderContainers {
  static informativeSlider(data, dataToFill) {
    const img1 = document.getElementById('informative-slider-article-img-left');
    const img2 = document.getElementById('informative-slider-article-img-right');
    const text = document.getElementById('informative-slider-article-text');

    img1.src = dataToFill[data.id].image1;
    img2.src = dataToFill[data.id].image2;
    text.innerText = dataToFill[data.id].text;
  }

  static articleComponent(data) {
    removeChildContainer('root-container');

    const container = document.createElement('main');
    const descriptionContainer = document.createElement('article');
    const textContainer = document.createElement('div');
    const title = document.createElement('h2');
    const text = document.createElement('p');
    const img = document.createElement('img');

    container.id = 'root-container';
    descriptionContainer.id = 'article-container';
    textContainer.className = 'article-text-container';
    text.className = 'article-text';
    title.className = 'article-title';
    title.innerText = data.title;
    text.innerText = data.text;
    img.src = data.img;
    img.alt = data.alt;
    img.className = 'article-logo';

    textContainer.appendChild(title);
    textContainer.appendChild(text);
    descriptionContainer.appendChild(textContainer);
    descriptionContainer.appendChild(img);
    container.appendChild(descriptionContainer);
    document.querySelector('body').insertBefore(container, document.querySelector('footer'));
  }

  static titleFullTextComponent(data) {
    const container = document.createElement('section');
    const text = document.createElement('p');
    const title = document.createElement('h2');

    container.id = 'title-full-text-container';
    text.className = 'title-full-text-paragraph';
    title.className = 'article-title';
    title.innerText = data.teamTitle || data.workTitle;
    text.innerText = data.teamText || data.workText;

    container.appendChild(title);
    container.appendChild(text);
    document.querySelector('#root-container').appendChild(container);
  }
}
