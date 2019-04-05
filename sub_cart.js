"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Dylan Kelley
   Date:   4.4.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

/// Event listener that runs the setupCart() function when the page is loaded.
window.addEventListener("load", setupCart);

// Func: Adds the addItem(e) function to each element with the class name of "addButton".
function setupCart() {
      // Var: Creates a variable to store elements with the class name of "addButton".
      var addButtons = document.getElementsByClassName("addButton");

      // For: Loop that adds the addItem(e) function to each element on click.
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("click", addItem);
      }
}
// Func: Adds items to the shopping cart on the page.
function addItem(e) {
      // Var: Variables to store the description of the food item, and the ID of the food item.
      var foodItem = e.target.nextElementSibling;
      var foodID = foodItem.id;

      // Var: A copy of the foodItem element and all of its descendants.
      var foodDescription = foodItem.cloneNode(true);

      // Var: Reference to the shopping cart stored in an aside element with the ID “cart” 
      var cartBox = document.querySelector("aside#cart");

      // Var: Boolean variable to be set to true if the order is a duplicate order.
      var duplicateOrder = false;

      // For: Loops through the element child nodes of cartBox, and for each node determines whether the ID of the element node equals foodID.
      for (var i = 0; i < cartBox.childNodes.length; i++) {
            // If: If the ID of the element node equals foodID, sets the value of duplicateOrder to true and increases the value of the first element child of node by 1 to indicate an additional order.
            if (cartBox.childNodes[i].id === foodID) {
                  duplicateOrder = true;
                  cartBox.childNodes[i].firstChild.textContent++;
            }
      }

      // If: Tests whether the value of duplicateOrder is still false.
      if (!duplicateOrder) {
            // Var: Creates a span element node.
            var orderCount = document.createElement("span");

            /// Sets the text content of the node to "1".
            orderCount.textContent = "1";

            /// Inserts orderCount as the first child of the foodDescription node structure.
            foodDescription.insertBefore(orderCount, foodDescription.firstChild);

            /// Appends foodDescription to cartBox as a new product order.
            cartBox.appendChild(foodDescription);
      }
}