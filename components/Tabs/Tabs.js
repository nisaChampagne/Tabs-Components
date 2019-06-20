
// class TabLink {
//   constructor(element) {
//     // Assign this.element to the passed in DOM element

//     this.element = element;

//     // console.log(this.element);
    
//     // Get the custom data attribute on the Link

//     this.data = this.element.dataset.tab;
//     // console.log(this.data); ///shows 1,2,3,4


//     this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
//     // console.log(this.item);/// shows  tabs 1-4 and tab item description 1-4

//     // Using the custom data attribute get the associated Item element
//     this.itemElement = new TabItem(this.item);
//     // console.log(this.itemElement);
    
//     // Using the Item element, create a new instance of the TabItem class
//     // this.tabItem;
    
//     // Add a click event listener on this instance, calling the select method on click

//     this.element.addEventListener('click', () => this.select());

//   };

//   select() {
//     // Get all of the elements with the tabs-link class
//     const links = document.querySelectorAll('.tabs-link');

//     // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//     links.forEach(link => link.classList.remove('tabs-link-selected'));

//     // Add a class named "tabs-link-selected" to this link
//     this.element.classList.add('tabs-link-selected');
    
//     // Call the select method on the item associated with this link
//     this.itemElement.select();
//   }
// }

// class TabItem {
//   constructor(element) {
//     // Assign this.element to the passed in element
//     this.element = element;
//   }

//   select() {
//     // Select all ".tabs-item" elements from the DOM
//     const items = document.querySelectorAll('.tabs-item');
//     // Remove the class "tabs-item-selected" from each element

//     items.forEach(item => item.classList.remove('tabs-item-selected'));

//     // Add a class named "tabs-item-selected" to this element
//     this.element.classList.add('tabs-item-selected');
//   }
// }

// /* START HERE: 

// - Select all classes named ".tabs-link" and assign that value to the links variable

// - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

// // - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

// */


/////THIS IS WHERE IT STARTS




class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element

    this.element = element;

    // console.log(this.element);// SHOWS MY FULL TABS-LINK FROM DIV TO DIV
    
    // Get the custom data attribute on the Link

    this.data = this.element.dataset.tab;
    // console.log(this.data); ///SHOWS THE NUMBER WITHIN THE DATA-TAB ON EACH TAB I.E 12345678


    this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    // console.log(this.item);///  SHOWS DATA-TAB, INNER TAB TITLE AND DESCRIPTION


    // Using the custom data attribute get the associated Item element
    
    this.itemElement = new TabItem(this.item);
    // console.log(this.itemElement);//// SHOWS THE NEW TABITEM AS AN ELEMENT/OBJECT TO WHERE WE CAN ADD THE ADDEVENTLISTENER
  
    
    // Add a click event listener on this instance, calling the select method on click

    this.element.addEventListener('click', () => this.select());

  };

  select() {////an action within TabLink

    // Get all of the elements with the tabs-link class
    
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
   
    links.forEach(link => link.classList.remove('tabs-link-selected'));
////when you click from 1 -2 it will honor the red color and show as if it wasn't selected. If you comment this out it will show everything as selected forever.


    // Add a class named "tabs-link-selected" to this link

    this.element.classList.add('tabs-link-selected');
////when you comment this out it doesnt show the selected item when you click on it. keeping it in the code will show which tab you select.

    
    // Call the select method on the item associated with this link
    this.itemElement.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {///an action within TabItem when clicking the tabs
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element

    items.forEach(item => item.classList.remove('tabs-item-selected'));

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/////THIS SELECTS MY TABS
const links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));
// console.log(links);//// shows my tablink/buttons
