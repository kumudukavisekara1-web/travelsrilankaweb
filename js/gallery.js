/**
 * Travel Sri Lanka - Masonry Photo Gallery & Lightbox Viewer
 */

class GalleryViewer {
  constructor(gridContainerId, lightboxModalId) {
    this.gridContainerId = gridContainerId;
    this.lightboxModalId = lightboxModalId;
    this.items = [];
    this.activeFilter = "all";
    this.currentIndex = 0;
  }

  init() {
    this.items = window.SRI_LANKA_DATA.gallery || [];
    this.renderGrid();
    this.bindEvents();
  }

  renderGrid() {
    const grid = document.getElementById(this.gridContainerId);
    if (!grid) return;

    const filtered = this.activeFilter === "all" 
      ? this.items 
      : this.items.filter(item => item.category === this.activeFilter);

    grid.innerHTML = filtered.map((item, index) => {
      // Create varied masonry layout classes
      const isTall = index % 5 === 0 || index % 7 === 0;
      const isWide = index === 2 || index === 8;
      const spanClass = isTall ? 'tall' : (isWide ? 'wide' : '');

      return `
        <div class="gallery-item ${spanClass} group relative overflow-hidden rounded-2xl cursor-pointer bg-slate-900" 
             onclick="window.GalleryInstance.openLightbox(${index})">
          <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">📍 ${item.location}</span>
            <h4 class="text-base font-serif font-bold text-white leading-tight">${item.title}</h4>
            <span class="text-xs text-slate-300 mt-1 capitalize">Category: ${item.category}</span>
          </div>

          <div class="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            🔍
          </div>
        </div>
      `;
    }).join('');
  }

  bindEvents() {
    // Filter Buttons
    const filterButtons = document.querySelectorAll(".gallery-filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        filterButtons.forEach(b => b.classList.remove("active", "bg-cyan-700", "text-white"));
        e.currentTarget.classList.add("active", "bg-cyan-700", "text-white");
        this.activeFilter = e.currentTarget.getAttribute("data-category");
        this.renderGrid();
      });
    });

    // Keyboard navigation for Lightbox
    window.addEventListener("keydown", (e) => {
      const modal = document.getElementById(this.lightboxModalId);
      if (!modal || !modal.classList.contains("active")) return;

      if (e.key === "Escape") this.closeLightbox();
      if (e.key === "ArrowLeft") this.prevImage();
      if (e.key === "ArrowRight") this.nextImage();
    });
  }

  openLightbox(index) {
    const filtered = this.activeFilter === "all" 
      ? this.items 
      : this.items.filter(item => item.category === this.activeFilter);

    if (!filtered[index]) return;

    this.currentIndex = index;
    this.updateLightboxContent(filtered[index]);

    const modal = document.getElementById(this.lightboxModalId);
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  updateLightboxContent(item) {
    const img = document.getElementById("lightbox-img");
    const title = document.getElementById("lightbox-title");
    const location = document.getElementById("lightbox-location");
    const counter = document.getElementById("lightbox-counter");

    const filtered = this.activeFilter === "all" 
      ? this.items 
      : this.items.filter(item => item.category === this.activeFilter);

    if (img) img.src = item.image;
    if (title) title.textContent = item.title;
    if (location) location.textContent = `📍 ${item.location} • Category: ${item.category}`;
    if (counter) counter.textContent = `${this.currentIndex + 1} / ${filtered.length}`;
  }

  prevImage() {
    const filtered = this.activeFilter === "all" 
      ? this.items 
      : this.items.filter(item => item.category === this.activeFilter);

    this.currentIndex = (this.currentIndex - 1 + filtered.length) % filtered.length;
    this.updateLightboxContent(filtered[this.currentIndex]);
  }

  nextImage() {
    const filtered = this.activeFilter === "all" 
      ? this.items 
      : this.items.filter(item => item.category === this.activeFilter);

    this.currentIndex = (this.currentIndex + 1) % filtered.length;
    this.updateLightboxContent(filtered[this.currentIndex]);
  }

  closeLightbox() {
    const modal = document.getElementById(this.lightboxModalId);
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

if (typeof window !== 'undefined') {
  window.GalleryViewer = GalleryViewer;
}
