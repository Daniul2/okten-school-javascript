const now = Date.now();
let price = parseInt(localStorage.getItem('price')) || 100;
const last = parseInt(localStorage.getItem('lastTime')) || 0;

if (last && now - last >= 10000) {
    price += 10;
}

localStorage.setItem('price', price);
localStorage.setItem('lastTime', now);
document.getElementById('price').textContent = price + ' грн';
