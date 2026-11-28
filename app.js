const products = [
  {
    id: 1,
    name: "Embroidered Lawn 3-Piece",
    cat: "lawn",
    price: 2800,
    oldPrice: 4200,
    badge: "sale",
    rating: 4.8,
    reviews: 124,
    desc: "Premium unstitched embroidered lawn 3-piece suit with a matching embroidered dupatta. Breathable, lightweight fabric ideal for everyday festive wear, finished with fine thread embroidery on the shirt front.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sky Blue", hex: "#6FA8D6" },
      { name: "Maroon", hex: "#7B2D3A" },
      { name: "Mustard", hex: "#C9A227" },
      { name: "Emerald Green", hex: "#1F6E54" },
    ],
    img: "https://images.unsplash.com/photo-1756483510820-4b9302a27556?q=80&w=800&auto=format&fit=crop",
    imgPos: "center 78%",
  },
  {
    id: 2,
    name: "Bridal Chiffon Suit",
    cat: "bridal",
    price: 8500,
    oldPrice: 12000,
    badge: "popular",
    rating: 5.0,
    reviews: 89,
    desc: "Luxurious bridal chiffon suit with hand-finished gold embroidery and a flowing dupatta. Designed for walima and wedding events, offering a graceful silhouette and rich, shimmering detail throughout.",
    sizes: ["S", "M", "L", "XL", "Custom"],
    colors: [
      { name: "Gold", hex: "#C9A96E" },
      { name: "Maroon", hex: "#7B2D3A" },
      { name: "Blush Pink", hex: "#D9A6A0" },
      { name: "Emerald Green", hex: "#1F6E54" },
    ],
    img: "https://images.unsplash.com/photo-1610276347233-2ab70fc71da8?q=80&w=800&auto=format&fit=crop",
    imgPos: "center 80%",
  },
  {
    id: 3,
    name: "Casual Kurta Shalwar",
    cat: "kurta",
    price: 1400,
    oldPrice: null,
    badge: "new",
    rating: 4.6,
    reviews: 201,
    desc: "Comfortable everyday kurta and shalwar set in soft cotton blend fabric. Simple, versatile styling that works for casual outings as well as light office wear, easy to pair with any dupatta.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy Blue", hex: "#142E53" },
      { name: "Charcoal Grey", hex: "#3A3A3A" },
      { name: "Olive Green", hex: "#5B6B3E" },
      { name: "Black", hex: "#1A1A1A" },
    ],
    img: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=800&auto=format&fit=crop",
    imgPos: "center 55%",
  },
  {
    id: 4,
    name: "Kids Festive Dress",
    cat: "kids",
    price: 1800,
    oldPrice: 2500,
    badge: "sale",
    rating: 4.9,
    reviews: 67,
    desc: "Playful festive frock for little girls with soft tulle layers and delicate embroidery on the yoke. Lightweight and comfortable for all-day wear during Eid and family celebrations.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: [
      { name: "Pink", hex: "#F2A6C1" },
      { name: "Lavender", hex: "#B8A1D9" },
      { name: "Peach", hex: "#F2C9A1" },
      { name: "Mint Green", hex: "#A8D9C4" },
    ],
    img: "https://images.unsplash.com/photo-1603983616455-cf2df3a547ca?q=80&w=800&auto=format&fit=crop",
    imgPos: "center 85%",
  },
  {
    id: 5,
    name: "Khaddar Winter Suit",
    cat: "kurta",
    price: 3200,
    oldPrice: 4000,
    badge: null,
    rating: 4.7,
    reviews: 145,
    desc: "Warm khaddar winter suit in a rich earthy palette with subtle tonal embroidery. Heavier weave fabric designed to keep you comfortable through Pakistan's winter months without compromising on style.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Rust", hex: "#A5522E" },
      { name: "Khaki", hex: "#B5A17E" },
      { name: "Chocolate Brown", hex: "#4A2E1E" },
      { name: "Charcoal Grey", hex: "#3A3A3A" },
    ],
    img: "https://images.unsplash.com/photo-1605814932543-d408d14a4cea?q=80&w=800&auto=format&fit=crop",
    imgPos: "center 70%",
  },
  {
    id: 6,
    name: "Western Printed Top",
    cat: "western",
    price: 1100,
    oldPrice: 1600,
    badge: "new",
    rating: 4.5,
    reviews: 92,
    desc: "Modern western printed top in a relaxed fit with a fresh seasonal print. Pairs easily with jeans, trousers, or a long skirt — a versatile addition to a contemporary wardrobe.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Emerald Green", hex: "#1F6E54" },
      { name: "Mustard Yellow", hex: "#C9A227" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "White", hex: "#F5F2EC" },
    ],
    img: "https://images.unsplash.com/photo-1525401118492-25e0887ede8b?q=80&w=800&auto=format&fit=crop",
    imgPos: "center 72%",
  },
];

// ===== LOCAL STORAGE HELPERS =====
const STORAGE_CART = "gulTradersCart";
const STORAGE_WISHLIST = "gulTradersWishlist";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_CART)) || [];
  } catch (e) {
    return [];
  }
}
function saveCart() {
  try {
    localStorage.setItem(STORAGE_CART, JSON.stringify(cart));
  } catch (e) {}
}
function loadWishlist() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_WISHLIST)) || [];
  } catch (e) {
    return [];
  }
}
function saveWishlist() {
  try {
    localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(wishlist));
  } catch (e) {}
}

// Cart / Wishlist state (persisted in this browser only, cleared after checkout)
let cart = loadCart();
let wishlist = loadWishlist();
let activeCategoryFilter = "all";
let activeSearchQuery = "";

// Render products
function renderProducts(filter = "all", query = "") {
  const grid = document.getElementById("productsGrid");
  let filtered = filter === "all" ? products : products.filter((p) => p.cat === filter);

  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q),
    );
  }

  if (!filtered.length) {
    grid.innerHTML = `<div class="search-no-results">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <p>No products match "${query}"</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((p) => {
      const isWished = wishlist.includes(p.id);
      return `
    <div class="product-card" data-cat="${p.cat}" onclick="openQuickView(${p.id})">
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" style="object-position:${p.imgPos || "center"}">
        ${p.badge ? `<span class="product-card-badge ${p.badge}">${p.badge === "sale" ? "Sale" : p.badge === "new" ? "New" : "Popular"}</span>` : ""}
        <div class="product-card-actions">
          <button class="product-card-action-btn" onclick="event.stopPropagation(); openQuickView(${p.id})" title="Quick View">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="product-card-action-btn wishlist-btn ${isWished ? "active" : ""}" onclick="event.stopPropagation(); toggleWishlist(${p.id})" title="Wishlist">
            <svg viewBox="0 0 24 24" fill="${isWished ? "currentColor" : "none"}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="add-cart-btn" onclick="event.stopPropagation(); quickAddToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</div>
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-rating">
          <div class="stars">
            ${[1, 2, 3, 4, 5].map((s) => `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`).join("")}
          </div>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-card-footer">
          <div class="product-price">
            <strong>Rs. ${p.price.toLocaleString()}</strong>
            ${p.oldPrice ? `<del>Rs. ${p.oldPrice.toLocaleString()}</del>` : ""}
          </div>
        </div>
      </div>
    </div>
  `;
    })
    .join("");
}

// Tab filter
function setTab(btn, tab) {
  document
    .querySelectorAll(".prod-tab")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const tabMap = { all: "all", new: "lawn", sale: "bridal", popular: "kurta" };
  activeCategoryFilter = tabMap[tab] || "all";
  renderProducts(activeCategoryFilter);
}

// Category filter (scrolls to products + filters)
function filterProducts(cat, btn) {
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  activeCategoryFilter = cat;
  renderProducts(cat);
  setTimeout(
    () =>
      document
        .getElementById("products")
        .scrollIntoView({ behavior: "smooth" }),
    100,
  );
}

function scrollToProducts(cat) {
  activeCategoryFilter = cat;
  renderProducts(cat);
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// ===== CART =====
// Each cart line is its own product + size + color combination, so the same
// product with a different size/color selection is a separate line.
function addToCart(productId, qty, size, colors) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  qty = qty || 1;
  size = size || (product.sizes && product.sizes[0]) || null;
  colors = colors || [];
  const colorKey = colors.slice().sort().join("|");

  const existing = cart.find(
    (i) =>
      i.productId === productId &&
      i.size === size &&
      (i.colors || []).slice().sort().join("|") === colorKey,
  );
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      productId,
      name: product.name,
      price: product.price,
      img: product.img,
      imgPos: product.imgPos,
      qty,
      size,
      colors,
    });
  }
  saveCart();
  updateCart();
  showToast("Added to cart — " + product.name);
  openCart();
}

// Quick-add from the card's bottom "Add to Cart" button (no size/color picker there)
function quickAddToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  addToCart(productId, 1, (product.sizes && product.sizes[0]) || null, []);
}

function updateCart() {
  const badge = document.getElementById("cartBadge");
  const total = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = total;

  const itemsEl = document.getElementById("cartItems");
  if (!cart.length) {
    itemsEl.innerHTML = `<div class="cart-empty"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><p>Your cart is empty</p></div>`;
  } else {
    itemsEl.innerHTML = cart
      .map((item, idx) => {
        const metaBits = [];
        if (item.size) metaBits.push(`Size: ${item.size}`);
        if (item.colors && item.colors.length)
          metaBits.push(`Color${item.colors.length > 1 ? "s" : ""}: ${item.colors.join(", ")}`);
        return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.img || ""}" alt="${item.name}" style="object-position:${item.imgPos || "center"}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          ${metaBits.length ? `<div class="cart-item-meta">${metaBits.join(" &middot; ")}</div>` : ""}
          <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${idx},-1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
          </div>
        </div>
      </div>
    `;
      })
      .join("");
  }

  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartTotal").textContent =
    "Rs. " + cartTotal.toLocaleString();
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  updateCart();
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
}
function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
}

// ===== CHECKOUT (Name/Address/Phone form -> structured WhatsApp message) =====
function openCheckoutInfo() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }
  document.getElementById("checkoutInfoOverlay").classList.add("open");
  document.getElementById("checkoutInfoModal").classList.add("open");
}

function closeCheckoutInfo(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById("checkoutInfoOverlay").classList.remove("open");
  document.getElementById("checkoutInfoModal").classList.remove("open");
}

function submitCheckoutInfo() {
  const name = document.getElementById("coName").value.trim();
  const address = document.getElementById("coAddress").value.trim();
  const phone = document.getElementById("coPhone").value.trim();

  if (!name || !address || !phone) {
    showToast("Please fill in your name, address and phone number");
    return;
  }

  const lines = [];
  lines.push("Hi Gul Traders! I'd like to order:");
  lines.push("");
  lines.push(`Name: ${name}`);
  lines.push(`Address: ${address}`);
  lines.push(`Phone: ${phone}`);
  lines.push("");
  lines.push("*Order*");

  let total = 0;
  cart.forEach((item, i) => {
    const lineTotal = item.price * item.qty;
    total += lineTotal;
    const bits = [`Qty: ${item.qty}`];
    if (item.size) bits.push(`Size: ${item.size}`);
    if (item.colors && item.colors.length)
      bits.push(`Color${item.colors.length > 1 ? "s" : ""}: ${item.colors.join(", ")}`);
    const calc =
      item.qty > 1
        ? `${item.price.toLocaleString()} x ${item.qty} = ${lineTotal.toLocaleString()}`
        : `${lineTotal.toLocaleString()}`;
    lines.push(`${i + 1}. ${item.name}, ${bits.join(", ")} = ${calc}`);
  });

  lines.push("");
  lines.push(`Total Bill: Rs. ${total.toLocaleString()}`);

  const message = lines.join("\n");
  const phoneNumber = "923232432344";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  // Cart is only persisted until checkout is actually initiated
  cart = [];
  saveCart();
  updateCart();
  closeCheckoutInfo();
  closeCart();
  document.getElementById("coName").value = "";
  document.getElementById("coAddress").value = "";
  document.getElementById("coPhone").value = "";
}

// ===== WISHLIST =====
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  const product = products.find((p) => p.id === id);
  if (idx === -1) {
    wishlist.push(id);
    showToast("Added to wishlist — " + (product ? product.name : ""));
  } else {
    wishlist.splice(idx, 1);
    showToast("Removed from wishlist");
  }
  saveWishlist();
  updateWishlistBadge();
  renderProducts(activeCategoryFilter, activeSearchQuery);
  if (document.getElementById("wishlistSidebar").classList.contains("open")) {
    renderWishlistPanel();
  }
  if (document.getElementById("qvOverlay").classList.contains("open")) {
    syncQuickViewWishlistBtn();
  }
}

function updateWishlistBadge() {
  const badge = document.getElementById("wishlistBadge");
  if (badge) badge.textContent = wishlist.length;
}

function renderWishlistPanel() {
  const itemsEl = document.getElementById("wishlistItems");
  const items = products.filter((p) => wishlist.includes(p.id));
  if (!items.length) {
    itemsEl.innerHTML = `<div class="cart-empty"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><p>Your wishlist is empty</p></div>`;
    return;
  }
  itemsEl.innerHTML = items
    .map(
      (p) => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${p.img}" alt="${p.name}" style="object-position:${p.imgPos || "center"}"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">Rs. ${p.price.toLocaleString()}</div>
        <div class="cart-item-qty">
          <button class="qty-btn wishlist-remove-btn" onclick="toggleWishlist(${p.id})" title="Remove">✕</button>
          <button class="qty-btn wishlist-tocart-btn" onclick="quickAddToCart(${p.id})" title="Add to cart">+Cart</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function openWishlist() {
  renderWishlistPanel();
  document.getElementById("wishlistSidebar").classList.add("open");
  document.getElementById("wishlistOverlay").classList.add("open");
}
function closeWishlist() {
  document.getElementById("wishlistSidebar").classList.remove("open");
  document.getElementById("wishlistOverlay").classList.remove("open");
}

// ===== QUICK VIEW MODAL =====
let qvCurrentProduct = null;
let qvSelectedSize = null;
let qvSelectedColors = [];
let qvQty = 1;

function openQuickView(id) {
  const p = products.find((pr) => pr.id === id);
  if (!p) return;
  qvCurrentProduct = p;
  qvSelectedSize = p.sizes && p.sizes.length ? p.sizes[0] : null;
  qvSelectedColors = [];
  qvQty = 1;

  document.getElementById("qvMedia").innerHTML =
    `<img src="${p.img}" alt="${p.name}" title="Click to enlarge" style="width:100%;height:100%;object-fit:cover;object-position:${p.imgPos || "center"};cursor:zoom-in" onclick="event.stopPropagation(); openLightbox('${p.img}')">`;
  document.getElementById("qvCat").textContent =
    p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
  document.getElementById("qvName").textContent = p.name;
  document.getElementById("qvRating").innerHTML = `
    <div class="stars">${[1, 2, 3, 4, 5].map(() => `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`).join("")}</div>
    <span class="rating-count">${p.rating} (${p.reviews} reviews)</span>
  `;
  document.getElementById("qvPrice").innerHTML =
    `Rs. ${p.price.toLocaleString()}` +
    (p.oldPrice ? ` <del>Rs. ${p.oldPrice.toLocaleString()}</del>` : "");
  document.getElementById("qvDesc").textContent = p.desc || "";
  document.getElementById("qvSizeList").innerHTML = (p.sizes || [])
    .map(
      (s, i) =>
        `<button class="qv-size-chip ${i === 0 ? "active" : ""}" onclick="qvSelectSize(this,'${s}')">${s}</button>`,
    )
    .join("");

  document.getElementById("qvColorList").innerHTML = (p.colors || [])
    .map(
      (c) =>
        `<button class="qv-color-chip" data-color="${c.name}" onclick="qvToggleColor(this,'${c.name.replace(/'/g, "\\'")}')" title="${c.name}">
          <span class="qv-color-dot" style="background:${c.hex}"></span>
          <span class="qv-color-name">${c.name}</span>
        </button>`,
    )
    .join("");

  document.getElementById("qvQtyNum").textContent = qvQty;

  const addBtn = document.getElementById("qvAddBtn");
  addBtn.onclick = () => {
    addToCart(p.id, qvQty, qvSelectedSize, qvSelectedColors.slice());
    closeQuickView();
  };

  syncQuickViewWishlistBtn();

  document.getElementById("qvOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function qvSelectSize(btn, size) {
  document
    .querySelectorAll(".qv-size-chip")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  qvSelectedSize = size;
}

function qvToggleColor(btn, name) {
  const idx = qvSelectedColors.indexOf(name);
  if (idx === -1) {
    qvSelectedColors.push(name);
    btn.classList.add("active");
  } else {
    qvSelectedColors.splice(idx, 1);
    btn.classList.remove("active");
  }
}

function qvChangeQty(delta) {
  qvQty = Math.max(1, qvQty + delta);
  document.getElementById("qvQtyNum").textContent = qvQty;
}

function qvToggleWishlist() {
  if (qvCurrentProduct) toggleWishlist(qvCurrentProduct.id);
}

function syncQuickViewWishlistBtn() {
  const btn = document.getElementById("qvWishlistBtn");
  if (!btn || !qvCurrentProduct) return;
  const isWished = wishlist.includes(qvCurrentProduct.id);
  btn.classList.toggle("active", isWished);
}

function closeQuickView(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById("qvOverlay").classList.remove("open");
  document.body.style.overflow = "";
  qvCurrentProduct = null;
}

// Mobile menu
function toggleMenu() {
  const overlay = document.getElementById("mobileOverlay");
  const ham = document.getElementById("hamburger");
  overlay.classList.toggle("open");
  ham.classList.toggle("active");
}
function closeMenu() {
  document.getElementById("mobileOverlay").classList.remove("open");
  document.getElementById("hamburger").classList.remove("active");
}
function closeMobileOnBg(e) {
  if (e.target.classList.contains("overlay-bg") || e.target === e.currentTarget)
    closeMenu();
}

// ===== LIVE SEARCH =====
function openSearch() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  const overlay = document.getElementById("searchOverlay");
  overlay.classList.add("open");
  setTimeout(() => document.getElementById("searchInput").focus(), 350);
}

function closeSearch() {
  document.getElementById("searchOverlay").classList.remove("open");
  const input = document.getElementById("searchInput");
  input.value = "";
  activeSearchQuery = "";
  renderProducts(activeCategoryFilter);
}

function liveSearch(value) {
  activeSearchQuery = value;
  if (!value.trim()) {
    renderProducts(activeCategoryFilter);
  } else {
    renderProducts("all", value);
  }
}

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    document.getElementById("searchOverlay").classList.contains("open")
  ) {
    closeSearch();
  }
});

// Toast
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  document.getElementById("toastMsg").textContent = msg;
  document.getElementById("toast").classList.add("show");
  toastTimer = setTimeout(
    () => document.getElementById("toast").classList.remove("show"),
    3000,
  );
}

// Newsletter
function subscribeNewsletter() {
  const email = document.getElementById("newsEmail").value;
  if (!email || !email.includes("@")) {
    showToast("Please enter a valid email");
    return;
  }
  showToast("Subscribed successfully!");
  document.getElementById("newsEmail").value = "";
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 80);
});

// Init
renderProducts();
updateCart();
updateWishlistBadge();

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const speed = target / 15;

  const updateCounter = () => {
    count += speed;

    if (count < target) {
      counter.innerText = Math.floor(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter(entry.target);

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

counters.forEach((counter) => {
  observer.observe(counter);
});
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const bar = document.getElementById("loaderBar");
  const txt = document.getElementById("loaderPct");
  // No preloader markup yet — waiting on design confirmation. Skip quietly if absent.
  if (!loader || !bar || !txt) return;
  let pct = 0;
  const iv = setInterval(function () {
    pct += Math.random() * 18 + 6;
    if (pct >= 100) {
      pct = 100;
      clearInterval(iv);
    }
    bar.style.width = pct + "%";
    txt.textContent = Math.floor(pct) + "%";
    if (pct === 100) {
      setTimeout(function () {
        loader.classList.add("hide");
        document.body.style.overflow = "";
        if (typeof initEntranceAnimations === "function") initEntranceAnimations();
      }, 200);
    }
  }, 160);
});

// ===== SCROLL LOCK: page scroll stops while a panel/modal is open =====
function syncScrollLock() {
  const open = document.querySelector(
    ".cart-sidebar.open, .checkout-info-modal.open, .qv-overlay.open, .img-lightbox.open",
  );
  document.body.style.overflow = open ? "hidden" : "";
}
["openCart", "closeCart", "openWishlist", "closeWishlist", "openCheckoutInfo", "closeCheckoutInfo", "openQuickView", "closeQuickView"].forEach((name) => {
  const orig = window[name];
  if (typeof orig !== "function") return;
  window[name] = function (...args) {
    const result = orig.apply(this, args);
    syncScrollLock();
    return result;
  };
});

// ===== IMAGE LIGHTBOX =====
function openLightbox(src) {
  document.getElementById("imgLightboxImg").src = src;
  document.getElementById("imgLightbox").classList.add("open");
  syncScrollLock();
}
function closeLightbox() {
  document.getElementById("imgLightbox").classList.remove("open");
  syncScrollLock();
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.getElementById("imgLightbox").classList.contains("open")) {
    closeLightbox();
  }
});

// ===== SCROLL REVEAL (fade up / left-right), skipped when reduced motion is on =====
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealObserver = "IntersectionObserver" in window && !reduceMotion
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target;
            el.classList.add("is-in");
            revealObserver.unobserve(el);
            // Clean up after the animation so hover/transform styles are not overridden later
            setTimeout(() => {
              el.classList.remove("js-reveal", "up", "from-left", "from-right", "is-in");
              el.style.transitionDelay = "";
            }, 1100);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )
  : null;

function applyReveal(selector, dir, stagger) {
  if (!revealObserver) return;
  document.querySelectorAll(selector).forEach((el, i) => {
    if (el.dataset.rv) return;
    el.dataset.rv = "1";
    const d = dir === "alt" ? (i % 2 === 0 ? "from-left" : "from-right") : dir;
    el.classList.add("js-reveal", d);
    if (stagger) el.style.transitionDelay = (i % 3) * 90 + "ms";
    revealObserver.observe(el);
  });
}

function setupReveal() {
  applyReveal("#categories .section-header", "up");
  applyReveal("#categories .cat-card", "up", true);
  applyReveal("#products .section-header", "up");
  applyReveal("#about .about-visual", "from-left");
  applyReveal("#about .about-content", "from-right");
  applyReveal("#facilities .section-header", "up");
  applyReveal("#deals .section-header", "up");
  applyReveal("#deals .deal-card", "alt", true);
  applyReveal("#reviews .section-header", "up");
  applyReveal("#reviews .review-card", "up", true);
  applyReveal("#productsGrid .product-card", "alt");
}

// Product grid re-renders on search/filter, so tag the new cards too
const _renderProductsOrig = window.renderProducts;
window.renderProducts = function (...args) {
  const result = _renderProductsOrig.apply(this, args);
  applyReveal("#productsGrid .product-card", "alt");
  updateAutoHover();
  return result;
};

setupReveal();

// ===== AUTO-HOVER on touch devices =====
// Only the middle cards among those visible on screen get the hover look:
// 1 or 2 visible -> the first one; 3 -> middle + last; 4+ -> skip the first and last.
const touchDevice = window.matchMedia("(hover: none)").matches;
let autoHoverFrame = 0;

function pickAutoHoverIndexes(n) {
  if (n <= 0) return [];
  if (n <= 2) return [0];
  if (n === 3) return [1, 2];
  const picks = [];
  for (let i = 1; i <= n - 2; i++) picks.push(i);
  return picks;
}

// Very thin horizontal band across the middle of the screen (not visible to the user).
// Only cards whose box crosses this band are candidates for auto-hover.
function updateAutoHover() {
  if (!touchDevice) return;
  const cards = [...document.querySelectorAll("#productsGrid .product-card")];
  cards.forEach((c) => c.classList.remove("auto-hover"));
  const mid = window.innerHeight / 2;
  const half = Math.max(6, window.innerHeight * 0.012);
  const bandTop = mid - half;
  const bandBottom = mid + half;
  const inBand = cards
    .map((el) => ({ el, r: el.getBoundingClientRect() }))
    .filter((o) => o.r.height > 0 && o.r.top <= bandBottom && o.r.bottom >= bandTop)
    .sort((a, b) => (Math.abs(a.r.top - b.r.top) < 40 ? a.r.left - b.r.left : a.r.top - b.r.top))
    .map((o) => o.el);
  pickAutoHoverIndexes(inBand.length).forEach((i) => inBand[i].classList.add("auto-hover"));
}

function scheduleAutoHover() {
  if (autoHoverFrame) return;
  autoHoverFrame = requestAnimationFrame(() => {
    autoHoverFrame = 0;
    updateAutoHover();
  });
}

if (touchDevice) {
  window.addEventListener("scroll", scheduleAutoHover, { passive: true });
  window.addEventListener("resize", scheduleAutoHover);
  updateAutoHover();
}