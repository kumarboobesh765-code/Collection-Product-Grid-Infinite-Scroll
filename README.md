# Collection Product Grid – Infinite Scroll

A **custom Shopify OS 2.0 collection page product grid** with **infinite scroll**, modern reusable product cards, full-card click navigation, and safe AJAX add-to-cart.

This setup uses **separate Liquid, CSS, and JavaScript files** for clean architecture and easy maintenance.

---

## ✨ Features

* ✅ Works **only on collection pages**
* ✅ Infinite scroll (auto loads next products)
* ✅ Full product card clickable (except Add to Cart)
* ✅ Safe AJAX Add to Cart
* ✅ Auto discount calculation
* ✅ Fake ratings (4.5 – 5 ⭐)
* ✅ Responsive grid (mobile & desktop)
* ✅ Lightweight & fast
* ✅ Shopify OS 2.0 compatible
* ✅ Clean separation of concerns (Liquid / CSS / JS)

---

## 📂 Files Included

```
sections/collection-product-grid-infinite.liquid
assets/collection-product-grid.css
assets/collection-product-grid.js
```

---

## 🚀 Installation Steps (Shopify)

Follow these steps carefully 👇

---

### **Step 1: Open Shopify Admin**

Go to
**Shopify Admin → Online Store → Themes**

---

### **Step 2: Edit Theme Code**

* Click the **three dots (⋮)** next to your active theme
* Select **Edit code**

---

### **Step 3: Create CSS File**

* Go to **Assets**
* Click **Add a new asset**
* Select **CSS**
* Name the file exactly:

```
collection-product-grid.css
```

* Paste the CSS code
* Click **Save**

---

### **Step 4: Create JavaScript File**

* Go to **Assets**
* Click **Add a new asset**
* Select **JavaScript**
* Name the file exactly:

```
collection-product-grid.js
```

* Paste the JavaScript code
* Click **Save**

---

### **Step 5: Create Section File**

* Go to **Sections**
* Click **Add a new section**
* Name the file exactly:

```
collection-product-grid-infinite.liquid
```

* Paste the Liquid section code
* Click **Save**

---

### **Step 6: Add Section to Collection Page**

* Go to **Online Store → Customize**
* Open any **Collection page**
* Click **Add section**
* Select **Collection Product Grid Infinite**
* Click **Save**

> ⚠️ This section automatically renders **only on collection pages**.

---

## ⚙️ Section Settings

* **Heading text** (editable from Theme Editor)

---

## 🧩 How It Works

* Uses Shopify’s `{% paginate %}` internally
* Fetches the next collection page via AJAX
* Appends new products when user scrolls near the bottom
* Stops loading automatically when no more pages exist

---

## 📱 Responsive Behavior

* **Mobile:** 2 products per row
* **Desktop:** 6 products per row
* Infinite scroll works smoothly on all devices

---

## 🛒 Use Cases

* Replace default collection pagination
* Anime & collectibles stores
* High-catalog Shopify stores
* Mobile-first shopping experiences
* CRO-optimized collection layouts

---

## ⚠️ Important Notes

* Designed for **collection templates only**
* Do not use Shopify pagination simultaneously
* Best used as the **primary product grid**

---

## ⭐ Support

If this section helped you, consider **starring ⭐ the repository**.
Feel free to fork, reuse, and customize it for your Shopify projects.

---
