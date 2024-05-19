const products = [
    {
        id: 0,
        image: 'pixel-8.jpg',
        title: 'Google Pixel 8',
        price: 62999,
    },
    {
        id: 1,
        image: 'airpods.jpg',
        title: 'Apple AirPods Pro 2',
        price: 24900,
    },
    {
        id: 2,
        image: 'soundbar.jpg',
        title: 'Xiaomi Soundbar 3.1ch',
        price:4999,
    },
    {
        id: 3,
        image: 'tv.jpg',
        title: 'Samsung Neo QLED 8K',
        price: 319990,
    },
];

let cart = [];
let total = 0;

const updateCart = () => {
    const cartItemsDiv = document.getElementById('cartItems');
    const count = document.getElementById('count');
    const totalDiv = document.getElementById('total');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = 'Your cart is empty';
        totalDiv.innerHTML = 'Rs.0.00';
        count.innerHTML = 0;
        return;
    }
    
    cartItemsDiv.innerHTML = cart.map((item, index) => {
        return `<div class='cart-item'>
                    <img class='cart-item-image' src='${item.image}' alt='${item.title}'>
                    <div>${item.title} - Rs.${item.price}</div>
                    <button class='delete-button' onclick='removeFromCart(${index})'>Delete</button>
                </div>`;
    }).join('');
    
    totalDiv.innerHTML = `Rs.${total}`;
    count.innerHTML = cart.length;
};

const addtocart = (id) => {
    const product = products[id];
    cart.push(product);
    total += product.price;
    updateCart();
};

const removeFromCart = (index) => {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
};

document.getElementById('root').innerHTML = products.map((item, i) => {
    const { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}' alt='${title}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>Rs.${price}</h2>
                <button onclick='addtocart(${i})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');
