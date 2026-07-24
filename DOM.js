
// const title = document.querySelector('.main-heading');

// title.style.color = 'red';

// // console.log(title)

// const listItems = document.querySelectorAll('.list-items');
// for(i = 0; i < listItems.length; i++){
// listItems[i].style.fontSize = 'Srem';
// }

// Creating Element

const ul = document.querySelector('ul');
const li = document.querySelector('li');
// Adding Element
ul.append(li)
// Modifying Element

li.innerText = 'X-man';

// Modifying Attributes abd class

li.classList.add('list-items')

console.log(li.classList.contains('list-items'));

// Remove Element

li.remove();







