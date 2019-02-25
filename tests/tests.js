import './html-equal.js';

const test = QUnit.test;
QUnit.module('templates');

function makeImageTemplate(image) {
    const html = `            
    <li>
        <h2>${image.title}</h2>
        <img src="${image.url}">
    </li>`

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}





test('function makes template from list of images', assert => {
    //arrange
    const image = {
        title: 'firey dragon',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg'
    }

    //act
    const dom = makeImageTemplate(image);

    //assert   
    assert.htmlEqual(dom, `            
    <li>
        <h2>firey dragon</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg">
    </li>`
    );
});