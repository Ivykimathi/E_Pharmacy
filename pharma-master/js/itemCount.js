  // Call the updateCartItemCount function on every page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartItemCount();
});
  // Retrieve cart items from local storage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to calculate total price
function calculateTotalPrice() {
   var totalPrice = 0;
   cart.forEach(function(item) {
      totalPrice += item.price * item.quantity;
   });
   return totalPrice.toFixed(2); // Round to 2 decimal places
}

// Function to calculate total number of items
function calculateTotalItems() {
   var totalItems = 0;
   cart.forEach(function(item) {
      totalItems += item.quantity;
   });
   return totalItems;
}

// Update total price and total items display
function updateCartTotal() {
   var total = calculateTotalPrice();
   var totalItems = calculateTotalItems();
   document.getElementById('total').innerText = '$' + total;
   document.getElementById('totalItems').innerText = totalItems;
}
// Update cart item count display
function updateCartItemCount() {
  var cartItemCount = calculateTotalItems();
  document.getElementById('cartItemCount').innerText = cartItemCount;
}

// Call the updateCartTotal function to initially update the display
updateCartTotal();