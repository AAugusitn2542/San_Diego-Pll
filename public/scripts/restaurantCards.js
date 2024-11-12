/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

 function deleteRestaurantCard(button) {
// Traverse from the button to the card (its parent elements) and remove it
const restaurantCard = button.closest('.restaurant-item');
restaurantCard.remove();  // Remove the card from the DOM
}
            
document.addEventListener('DOMContentLoaded', () => {
                
});