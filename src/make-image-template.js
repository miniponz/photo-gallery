function makeImageTemplate(image) {
    let imageClass = "";
    if(image.horns < 2) {
        imageClass = 'tiny';
    }
    else if(image.horns === 2) {
        imageClass = 'medium';
    }
    else if(image.horns > 2) {
        imageClass = 'large';
    }
    const html = `            
    <li class="${imageClass}">
        <h2>${image.title}</h2>
        <img src="${image.url}">
    </li>`;


    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

export default makeImageTemplate;