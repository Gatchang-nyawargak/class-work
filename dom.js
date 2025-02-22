const container = document.getElementById('container')
console.log('');
console.log('parent',container.parentElement);
console.log('nextSibling',container.nextElementSibling);
console.log('previusSibling',container.previousElementSibling);
console.log('childern',container.children);
console.log('firstchild',container.firstElementChild);
console.log('lastchild',container.lastElementChild);

const html = document.documentElement;
console.log(html);
console.log('body',document.body);

// Updating DOM

const heading = document.getElementById('heading')
heading.innerHTML = 'Introduction to DOM Manipulation';
heading.style.color='red'

// CREATE DOM
const textChild= document.createElement('p');
container.appendChild(textChild);
textChild.innerHTML = 'This is the new child'

//DELETE DOM
heading.remove()

const button = document.getElementById('button');
button.style.border= 'none';
button.style.padding = "10px 15px";
button.style.borderRadius = '5px';
button.style.cursor = "pointer";
button.style.background = '#0096FF';
button.style.color = '#ffffff';

button.addEventListener('click',function(){
    button.innerHTML='Clicked';
    button.style.background = '#50C878'
}
) ;
