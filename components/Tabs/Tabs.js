/**
 * Tab link to filter out cards not linked to current tag
 *
 * @property {HTMLElement} tabElement
 * @property {String} tabData
 */
class TabLink {
  /**
   * Create TabLink object and initialize properties
   * 
   * @param {HTMLElement} tabElement HTML element for the TabLink object
   */
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    const selector = (this.tabData === 'all') ? '.card' : `[data-tab="${this.tabData}"]`;
    this.cards = document.querySelectorAll(selector);

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', this.selectTab.bind(this));
  }

  selectTab(){

    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
    
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()

    // Select all of the elements with the .card class on them
    // const cards = ;

    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
    
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
  }
}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = [...document.querySelectorAll('.tab')].map(tab => new TabLink(tab));
