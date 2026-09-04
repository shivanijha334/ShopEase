document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty 🛒</h2>
                <p>Add some products to your cart.</p>
            </div>
        `;

        cartCount.innerText = "0";
        updateSummary(cart);
        return;
    }


    let totalQuantity = 0;


    cart.forEach((product, index) => {

        const quantity = product.quantity || 1;

        totalQuantity += quantity;


        // IMAGE FIX
        let image = product.image;

        if (!image) {
            image = "https://via.placeholder.com/100?text=Product";
        }

        // Fix local image paths if necessary
        if (image.startsWith("./")) {
            image = image.substring(2);
        }


        const itemTotal =
            Number(product.price || 0) * quantity;


        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <img
                src="${image}"
                class="cart-image"
                alt="${product.name || "Product"}"
                onerror="this.src='https://via.placeholder.com/100?text=Product'"
            >

            <div class="cart-info">

                <h3>${product.name || "Product"}</h3>

                <div class="cart-price">
                    ₹${Number(product.price || 0).toLocaleString("en-IN")}
                </div>

            </div>


            <div class="quantity-box">

                <button onclick="decreaseQuantity(${index})">
                    −
                </button>

                <span>${quantity}</span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

            </div>


            <div class="item-total">

                ₹${itemTotal.toLocaleString("en-IN")}

            </div>


            <button
                class="remove-btn"
                onclick="removeItem(${index})"
                title="Remove"
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(item);

    });


    cartCount.innerText = totalQuantity;

    updateSummary(cart);
}



function increaseQuantity(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity =
        (cart[index].quantity || 1) + 1;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
}



function decreaseQuantity(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if ((cart[index].quantity || 1) > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
}



function removeItem(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
}



function updateSummary(cart) {

    let subtotal = 0;

    cart.forEach(product => {

        subtotal +=
            Number(product.price || 0) *
            (product.quantity || 1);

    });


    const shipping = 0;

    const discount = 0;

    const total =
        subtotal + shipping - discount;


    document.getElementById("subtotal").innerText =
        "₹" + subtotal.toLocaleString("en-IN");

    document.getElementById("shipping").innerText =
        "₹" + shipping.toLocaleString("en-IN");

    document.getElementById("discount").innerText =
        "-₹" + discount.toLocaleString("en-IN");

    document.getElementById("total").innerText =
        "₹" + total.toLocaleString("en-IN");
}



function goToCheckout() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    window.location.href = "checkout.html";
}