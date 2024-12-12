let cart = [];

function handleIncrease(itemId, stockId) {
    const quantityInput = document.getElementById(itemId);
    const stockInput = document.getElementById(stockId);
    if (stockInput.value > 0) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        stockInput.value = parseInt(stockInput.value) - 1;
    }
}

function handleDecrease(itemId, stockId) {
    const quantityInput = document.getElementById(itemId);
    const stockInput = document.getElementById(stockId);
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        stockInput.value = parseInt(stockInput.value) + 1;
    }
}

 function addtocart(productName, price, quantityId) {
        const quantity = parseInt(document.getElementById(quantityId).value); // Get selected quantity
        const existingCart = JSON.parse(localStorage.getItem('cart')) || []; // Fetch existing cart from localStorage
    
        // Check if the product already exists in the cart
        const existingItem = existingCart.find(item => item.name === productName);
    
        if (existingItem) {
            // If product exists, update its quantity
            existingItem.quantity += quantity;
        } else {
            // If product doesn't exist, add it as a new item
            existingCart.push({ name: productName, price, quantity });
        }
    
        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`${productName} added to cart!`);
    }

function openCartPage() {
    window.location.href = 'cart.html';
}
