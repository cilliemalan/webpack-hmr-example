import reactlogo from './content/react.svg';

function component() {
    var element = document.createElement('div');
    element.innerHTML = "Hello world!";

    var logo = new Image();
    logo.src = reactlogo;
    element.appendChild(logo);

    return element;
}

document.body.appendChild(component());