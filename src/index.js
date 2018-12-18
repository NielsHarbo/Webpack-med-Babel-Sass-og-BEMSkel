const root = document.createElement("div");
root.innerHTML = '<p>Hello Webpack.</p>';
const domAppp = document.querySelector('#dom-app');
domAppp.appendChild(root);
const openers = document.querySelectorAll('.opener');
for (let i = 0; i < openers.length; i++) {
  openers[i].addEventListener('click', function() {
    this.parentElement.classList.toggle('expanded');
  });
}
//import './style.scss';