document.getElementById('getStartedBtn').addEventListener('click', function() {
    alert('Thank you for your interest! Stay tuned for more updates.');
});
<script>
    // Initialize cart as an empty array
    let cart = [];

    // Function to add an item to the cart
    function addToCart(product) {
        cart.push(product); // Add product to cart
        alert(product + ' has been added to your cart!'); // Alert user
        updateCartCount(); // Update the cart count display
    }

    // Function to update the displayed cart count
    function updateCartCount() {
        const cartCount = document.getElementById('cartCount'); // Get cart count element
        cartCount.textContent = cart.length; // Set text content to current cart length
    }

    // Function to show the cart items
    function showCart() {
        const cartItems = cart.map(item => `<li>${item}</li>`).join(''); // Create a list of items
        const clearButton = '<button onclick="clearCart()">Clear Cart</button>'; // Clear cart button
        const cartContent = cart.length > 0 
            ? 'Cart Items:\n' + cartItems + '\n\n' + clearButton 
            : 'Your cart is empty.'; // Check if cart is empty
        
        alert(cartContent); // Show cart items in an alert
    }

    // Function to clear the cart
    function clearCart() {
        cart = []; // Reset the cart to an empty array
        updateCartCount(); // Update the cart count display
        alert('Your cart has been cleared.'); // Alert user
    }
</script>
