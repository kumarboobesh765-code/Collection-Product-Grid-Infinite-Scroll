(function () {
  const grid = document.getElementById("collection-product-grid");
  if (!grid) return;

  let nextPageUrl = grid.dataset.nextPage;
  let isLoading = false;

  const loader = document.getElementById("collection-infinite-loader");

  /* FAKE RATINGS */
  function applyRatings(scope = document) {
    scope.querySelectorAll(".collection-product-rating").forEach(el => {
      if (!el.dataset.value) {
        el.dataset.value =
          (Math.random() * (5 - 4.5) + 4.5).toFixed(2);
      }
    });
  }

  applyRatings();

  /* CARD CLICK */
  document.addEventListener("click", e => {
    if (e.target.closest(".js-add-to-cart")) return;

    const card = e.target.closest(".collection-product-card");
    if (card && card.dataset.url) {
      window.location.href = card.dataset.url;
    }
  });

  /* ADD TO CART */
  document.addEventListener("click", e => {
    const btn = e.target.closest(".js-add-to-cart");
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Adding...";

    fetch("/cart/add.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: btn.dataset.variant,
        quantity: 1
      })
    })
    .then(() => {
      btn.textContent = "Added ✓";
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = original;
      }, 700);
    })
    .catch(() => {
      btn.disabled = false;
      btn.textContent = original;
    });
  });

  /* LOAD MORE */
  function loadMoreProducts() {
    if (!nextPageUrl || isLoading) return;
    isLoading = true;

    if (loader) loader.style.display = "block";

    fetch(nextPageUrl)
      .then(res => res.text())
      .then(html => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const newGrid = doc.querySelector("#collection-product-grid");
        if (!newGrid) {
          nextPageUrl = null;
          return;
        }

        newGrid.querySelectorAll(".collection-product-card").forEach(card => {
          grid.appendChild(card);
        });

        applyRatings(grid);
        nextPageUrl = newGrid.dataset.nextPage;
      })
      .finally(() => {
        isLoading = false;
        if (loader) loader.style.display = "none";
      });
  }

  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 600
    ) {
      loadMoreProducts();
    }
  });

})();
