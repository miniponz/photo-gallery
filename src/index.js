import images from '../data/images.js';
import makeImageTemplate from './make-image-template.js';
const imageList = document.getElementById('image-list');

images.forEach(image => {
    const dom = makeImageTemplate(image);
    imageList.appendChild(dom);
});