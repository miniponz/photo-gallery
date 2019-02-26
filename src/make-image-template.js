function makeImageTemplate(image) {
    let hornClass = " ";
    if(image.horns < 2) {
        hornClass = 'tiny';
    }
    else if(image.horns === 2) {
        hornClass = 'medium';
    }
    else if(image.horns > 2) {
        hornClass = 'large';
    }

    // let narwhal = " ";
    // if(image.keyword === 'narwhal'){
    //     narwhal = 'narwhal';
    // }

    const html = `            
    <li class="${hornClass} ${image.keyword}">
        <h2>${image.title}</h2>
        <img src="${image.url}">
        <p>${image.description}</p>
    </li>`;


    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}

export default makeImageTemplate;