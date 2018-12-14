const root = document.createElement("div");
root.innerHTML = '<p>Hello Webpack.</p>';
const domAppp = document.querySelector('#dom-app');
domAppp.appendChild(root);
//import './style.scss';