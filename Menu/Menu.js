/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>
// The function takes an array as its only argument.

function createMenuComponent(arr) {
  const menuComponent = document.createElement("div");
  menuComponent.classList.add("menu");
  const itemList = document.createElement("ul");
  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
  arr.forEach(el => {
    const newItem = document.createElement("li");
    newItem.textContent = el;
    itemList.appendChild(newItem);
  });
  menuComponent.appendChild(itemList);
  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  menuButton = document.getElementsByClassName('menu-button')[0];
  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener('click', event => {
    menuComponent.classList.toggle('menu--open');
  });
  // Step 5: return the menu component.
  return menuComponent
}
const pageHeader = document.getElementsByClassName("header")[0];
  // Step 6: add the menu component to the DOM.
pageHeader.appendChild(createMenuComponent(menuItems));
