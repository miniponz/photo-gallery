import './html-equal.js';
import makeImageTemplate from '../src/make-image-template.js';

const test = QUnit.test;
QUnit.module('templates');


test('function makes template from list of images', assert => {
    //arrange
    const image = {
        keyword: 'narwhal',
        description: 'Not as fierce as I look',
        horns: 1,
        title: 'firey dragon',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg'
    };

    //act
    const dom = makeImageTemplate(image);

    //assert   
    assert.htmlEqual(dom, `            
    <li class="tiny narwhal">
        <h2>firey dragon</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg">
        <p>Not as fierce as I look</p>
    </li>`
    );
});