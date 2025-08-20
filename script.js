// Back to Top Button
document.querySelector(".top_link a").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Mobile menu toggle
const body = document.body;
const menu = document.getElementById("mobileMenu");
const toggleBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const backdrop = document.querySelector(".backdrop");

function openMenu() {
  body.classList.add("mobile-open");
  toggleBtn.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-hidden", "false");
}
function closeMenu() {
  body.classList.remove("mobile-open");
  toggleBtn.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
}

if (toggleBtn && menu) {
  toggleBtn.addEventListener("click", openMenu);
}
if (closeBtn) {
  closeBtn.addEventListener("click", closeMenu);
}
if (backdrop) {
  backdrop.addEventListener("click", closeMenu);
}

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && body.classList.contains("mobile-open")) closeMenu();
});
// Simple search functionality
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchCategory = document.getElementById("searchCategory");

if (searchForm) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload stop

    const query = searchInput.value.trim();
    const category = searchCategory.value;

    if (!query) {
      alert("Please enter something to search.");
      return;
    }

    // Example: redirect to a search results page (like Amazon)
    let url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    if (category !== "all") {
      url += `+${encodeURIComponent(category)}`;
    }

    window.open(url, "_blank");
  });
}
