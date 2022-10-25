const p = document.createElement('p');
content.classList.add('red');
content.textContent = 'Hey I’m red!';

const h3 = document.createElement('h3');
content.classList.add('blue');
content.textContent = 'I’m a blue h3!';

const div = document.createElement('div');
content.classList.add('red');
content.textContent = 'I’m a blue h3!';

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
div.style.cssText = "background-color: pink"
container.appendChild(content);