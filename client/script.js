console.log("ShopEase Loaded");


// ================= ADD TO CART =================

function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {

        existing.quantity = (existing.quantity || 1) + 1;
        existing.image = image;
        existing.price = price;

    } else {

        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " Added To Cart");
}



// ================= WISHLIST =================

function addToWishlist(name) {

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.includes(name)) {

        wishlist.push(name);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert(name + " added to wishlist ❤️");

    } else {

        alert(name + " is already in wishlist ❤️");

    }
}



// ================= LOAD PRODUCTS =================

fetch("http://localhost:5000/api/products")

.then(res => res.json())

.then(products => {

    const list =
        document.getElementById("product-list");

    if (!list) return;

    list.innerHTML = "";


    products.forEach(product => {

        list.innerHTML += `

        <div class="card">

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div
                    class="heart"
                    onclick="addToWishlist('${product.name}')"
                >
                    <i class="fa-solid fa-heart"></i>
                </div>

            </div>


            <div class="rating">

                ⭐ ${product.rating || 4.5}

            </div>


            <h3>
                ${product.name}
            </h3>


            <p>
                ₹${Number(product.price).toLocaleString("en-IN")}
            </p>


            <button
                onclick="addToCart(
                    '${product.name}',
                    ${product.price},
                    '${product.image}'
                )"
            >

                Add To Cart

            </button>

        </div>

        `;

    });

})

.catch(err => {

    console.log("Product Error:", err);

});