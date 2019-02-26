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

export default makeImageTemplate;