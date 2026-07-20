const products = [
  {id:1, name:"Embroidered Lawn 3-Piece", cat:"lawn", price:2800, oldPrice:4200, badge:"sale", rating:4.8, reviews:124,
   svg:`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="260" fill="#f0ebe4"/>
     <ellipse cx="100" cy="40" rx="18" ry="22" fill="#FDBF8A"/>
     <path d="M82 38 Q84 20 100 16 Q116 20 118 38 Q122 32 120 46 Q114 36 100 38 Q86 36 80 46 Q78 32 82 38Z" fill="#8B5E3C"/>
     <rect x="94" y="62" width="12" height="14" rx="4" fill="#FDBF8A"/>
     <path d="M70 76 Q100 68 130 76 L136 160 Q118 156 100 158 Q82 156 64 160Z" fill="#7FADC8"/>
     <path d="M82 96 Q100 104 118 96 Q118 114 100 122 Q82 114 82 96Z" fill="#c9a84c" opacity="0.5"/>
     <circle cx="100" cy="132" r="5" fill="#c9a84c" opacity="0.4"/>
     <path d="M70 76 L46 128 Q52 132 58 128 L74 86Z" fill="#7FADC8"/>
     <path d="M130 76 L154 128 Q148 132 142 128 L126 86Z" fill="#7FADC8"/>
     <path d="M64 158 L72 240 Q84 244 92 240 L100 172 L108 240 Q116 244 128 240 L136 158Z" fill="#e8e4e0"/>
   </svg>`},
  {id:2, name:"Bridal Chiffon Suit", cat:"bridal", price:8500, oldPrice:12000, badge:"popular", rating:5.0, reviews:89,
   svg:`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="260" fill="#fdf5e6"/>
     <ellipse cx="100" cy="38" rx="18" ry="22" fill="#e8c97a"/>
     <path d="M82 35 Q84 18 100 14 Q116 18 118 35 Q122 28 120 44 Q112 34 100 36 Q88 34 80 44 Q78 28 82 35Z" fill="#5C3D2E"/>
     <circle cx="100" cy="16" r="7" fill="#5C3D2E"/>
     <rect x="93" y="59" width="14" height="14" rx="4" fill="#e8c97a"/>
     <path d="M68 73 Q100 65 132 73 L142 170 Q118 164 100 166 Q82 164 58 170Z" fill="#c9a84c" opacity="0.85"/>
     <path d="M84 90 Q100 100 116 90" stroke="#fff" stroke-width="1.5" fill="none"/>
     <circle cx="100" cy="105" r="8" fill="rgba(255,255,255,0.3)"/>
     <path d="M88 105 L112 105 M100 93 L100 117" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
     <path d="M68 73 L40 135 Q46 140 54 136 L72 84Z" fill="#c9a84c" opacity="0.85"/>
     <path d="M132 73 L160 135 Q154 140 146 136 L128 84Z" fill="#c9a84c" opacity="0.85"/>
     <path d="M58 168 L46 245 Q64 252 80 248 L100 180 L120 248 Q136 252 154 245 L142 168Z" fill="#e8d5a0" opacity="0.8"/>
   </svg>`},
  {id:3, name:"Casual Kurta Shalwar", cat:"kurta", price:1400, oldPrice:null, badge:"new", rating:4.6, reviews:201,
   svg:`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="260" fill="#eef2f7"/>
     <ellipse cx="100" cy="40" rx="18" ry="22" fill="#FDBF8A"/>
     <path d="M82 38 Q84 20 100 16 Q116 20 118 38 Q122 30 118 46 Q112 36 100 38 Q88 36 82 46 Q78 30 82 38Z" fill="#4A3728"/>
     <rect x="94" y="61" width="12" height="14" rx="4" fill="#FDBF8A"/>
     <path d="M72 75 Q100 67 128 75 L134 165 Q116 161 100 163 Q84 161 66 165Z" fill="#142E53"/>
     <line x1="100" y1="75" x2="100" y2="162" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
     <path d="M86 88 Q100 95 114 88" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" fill="none"/>
     <path d="M72 75 L48 128 Q54 132 60 128 L76 85Z" fill="#142E53"/>
     <path d="M128 75 L152 128 Q146 132 140 128 L124 85Z" fill="#142E53"/>
     <path d="M66 163 L74 245 Q88 248 96 244 L100 174 L104 244 Q112 248 126 245 L134 163Z" fill="#c9d6e8"/>
   </svg>`},
  {id:4, name:"Kids Festive Dress", cat:"kids", price:1800, oldPrice:2500, badge:"sale", rating:4.9, reviews:67,
   svg:`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="260" fill="#fef9f0"/>
     <ellipse cx="100" cy="44" rx="16" ry="19" fill="#FDBF8A"/>
     <path d="M84 42 Q86 26 100 22 Q114 26 116 42 Q120 36 117 50 Q111 40 100 42 Q89 40 83 50 Q80 36 84 42Z" fill="#8B5E3C"/>
     <rect x="94" y="62" width="12" height="12" rx="4" fill="#FDBF8A"/>
     <path d="M76 74 Q100 66 124 74 L116 150 Q100 155 84 150Z" fill="#FF8FAB"/>
     <path d="M76 74 L60 110 Q66 113 72 110 L80 83Z" fill="#FF8FAB"/>
     <path d="M124 74 L140 110 Q134 113 128 110 L120 83Z" fill="#FF8FAB"/>
     <path d="M76 118 Q100 115 124 118 L132 210 Q100 218 68 210Z" fill="#FFB3C6"/>
     <circle cx="100" cy="90" r="5" fill="rgba(255,255,255,0.6)"/>
     <path d="M88 90 Q100 96 112 90" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none"/>
   </svg>`},
  {id:5, name:"Khaddar Winter Suit", cat:"kurta", price:3200, oldPrice:4000, badge:null, rating:4.7, reviews:145,
   svg:`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="260" fill="#f2ede8"/>
     <ellipse cx="100" cy="40" rx="18" ry="22" fill="#e8c97a"/>
     <path d="M82 37 Q84 20 100 16 Q116 20 118 37 Q122 30 118 46 Q112 36 100 38 Q88 36 82 46 Q78 30 82 37Z" fill="#5C3D2E"/>
     <rect x="94" y="61" width="12" height="14" rx="4" fill="#e8c97a"/>
     <path d="M68 75 Q100 67 132 75 L138 168 Q118 164 100 166 Q82 164 62 168Z" fill="#8B5E3C"/>
     <path d="M86 88 Q100 96 114 88" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" fill="none"/>
     <path d="M86 104 L114 104" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
     <path d="M68 75 L42 135 Q48 140 56 136 L72 86Z" fill="#8B5E3C"/>
     <path d="M132 75 L158 135 Q152 140 144 136 L128 86Z" fill="#8B5E3C"/>
     <path d="M62 166 L70 248 Q86 252 96 247 L100 178 L104 247 Q114 252 130 248 L138 166Z" fill="#c4a882"/>
   </svg>`},
  {id:6, name:"Western Printed Top", cat:"western", price:1100, oldPrice:1600, badge:"new", rating:4.5, reviews:92,
   svg:`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
     <rect width="200" height="260" fill="#f0f4f0"/>
     <ellipse cx="100" cy="40" rx="18" ry="22" fill="#FDBF8A"/>
     <path d="M82 38 Q84 20 100 16 Q116 20 118 38 Q122 30 118 46 Q112 36 100 38 Q88 36 82 46 Q78 30 82 38Z" fill="#2C3E50"/>
     <rect x="94" y="61" width="12" height="14" rx="4" fill="#FDBF8A"/>
     <path d="M72 75 Q100 67 128 75 L124 160 Q100 164 76 160Z" fill="#27ae60" opacity="0.85"/>
     <path d="M72 75 L50 120 Q56 124 62 120 L76 84Z" fill="#27ae60" opacity="0.85"/>
     <path d="M128 75 L150 120 Q144 124 138 120 L124 84Z" fill="#27ae60" opacity="0.85"/>
     <circle cx="85" cy="100" r="6" fill="rgba(255,255,255,0.3)"/>
     <circle cx="100" cy="110" r="4" fill="rgba(255,255,255,0.25)"/>
     <circle cx="115" cy="98" r="5" fill="rgba(255,255,255,0.3)"/>
     <path d="M76 158 L80 240 Q96 244 100 240 L104 240 Q108 244 120 240 L124 158Z" fill="#1a5c36" opacity="0.8"/>
   </svg>`},
];

// Cart state
let cart = [];

// Render products
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.cat === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-cat="${p.cat}">
      <div class="product-card-img">
        ${p.svg}
        ${p.badge ? `<span class="product-card-badge ${p.badge}">${p.badge === 'sale' ? 'Sale' : p.badge === 'new' ? 'New' : 'Popular'}</span>` : ''}
        <div class="product-card-actions">
          <button class="product-card-action-btn" onclick="addToCart('${p.name}', ${p.price})" title="Add to Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button class="product-card-action-btn" title="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="add-cart-btn" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</div>
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-rating">
          <div class="stars">
            ${[1,2,3,4,5].map(s => `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`).join('')}
          </div>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-card-footer">
          <div class="product-price">
            <strong>Rs. ${p.price.toLocaleString()}</strong>
            ${p.oldPrice ? `<del>Rs. ${p.oldPrice.toLocaleString()}</del>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Tab filter
function setTab(btn, tab) {
  document.querySelectorAll('.prod-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const tabMap = { all: 'all', new: 'lawn', sale: 'bridal', popular: 'kurta' };
  renderProducts(tabMap[tab] || 'all');
}

// Category filter (scrolls to products + filters)
function filterProducts(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
  setTimeout(() => document.getElementById('products').scrollIntoView({behavior:'smooth'}), 100);
}

function scrollToProducts(cat) {
  renderProducts(cat);
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
}

// Cart
function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty++;
  else cart.push({name, price, qty:1});
  updateCart();
  showToast('Added to cart — ' + name);
  openCart();
}

function updateCart() {
  const badge = document.getElementById('cartBadge');
  const total = cart.reduce((s,i) => s + i.qty, 0);
  badge.textContent = total;
  
  const itemsEl = document.getElementById('cartItems');
  if (!cart.length) {
    itemsEl.innerHTML = `<div class="cart-empty"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><p>Your cart is empty</p></div>`;
  } else {
    itemsEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <div class="cart-item-img">
          <svg viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25" cy="12" rx="8" ry="9" fill="#e8c97a"/>
            <path d="M17 21 Q25 18 33 21 L35 55 Q25 57 15 55Z" fill="#142E53"/>
          </svg>
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${idx},-1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  const cartTotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = 'Rs. ' + cartTotal.toLocaleString();
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

// Mobile menu
function toggleMenu() {
  const overlay = document.getElementById('mobileOverlay');
  const ham = document.getElementById('hamburger');
  overlay.classList.toggle('open');
  ham.classList.toggle('active');
}
function closeMenu() {
  document.getElementById('mobileOverlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');
}
function closeMobileOnBg(e) {
  if (e.target.classList.contains('overlay-bg') || e.target === e.currentTarget) closeMenu();
}

// Search (placeholder)
function toggleSearch() {
  showToast('Search feature coming soon!');
}

// Toast
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toast').classList.add('show');
  toastTimer = setTimeout(() => document.getElementById('toast').classList.remove('show'), 3000);
}

// Newsletter
function subscribeNewsletter() {
  const email = document.getElementById('newsEmail').value;
  if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
  showToast('Subscribed successfully!');
  document.getElementById('newsEmail').value = '';
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Init
renderProducts();
updateCart();

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 15;

    const updateCounter = () => {

        count += speed;

        if(count < target){
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target + "+";
        }

    };

    updateCounter();
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});

counters.forEach(counter => {
    observer.observe(counter);
});
window.addEventListener('load', function(){
  let pct = 0;
  const bar = document.getElementById('loaderBar');
  const txt = document.getElementById('loaderPct');
  const iv = setInterval(function(){
    pct += Math.random()*18 + 6;
    if(pct >= 100){ pct = 100; clearInterval(iv); }
    bar.style.width = pct + '%';
    txt.textContent = Math.floor(pct) + '%';
    if(pct === 100){
      setTimeout(function(){
        document.getElementById('loader').classList.add('hide');
        document.body.style.overflow = '';
        initEntranceAnimations();
      }, 200);
    }
  }, 160);
});
