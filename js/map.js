/**
 * Travel Sri Lanka - Interactive Map Component (Leaflet.js)
 */

class SriLankaMap {
  constructor(mapContainerId, sidePanelContainerId) {
    this.mapContainerId = mapContainerId;
    this.sidePanelContainerId = sidePanelContainerId;
    this.map = null;
    this.markers = [];
    this.activeFilter = "all";
    this.selectedDestination = null;
  }

  init() {
    const mapElement = document.getElementById(this.mapContainerId);
    if (!mapElement) return;

    // Center on Sri Lanka
    this.map = L.map(this.mapContainerId, {
      center: [7.8731, 80.7718],
      zoom: 7.5,
      minZoom: 7,
      maxZoom: 14,
      scrollWheelZoom: false
    });

    // Elegant base map tiles (CartoDB Positron / OpenStreetMap)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    this.renderMarkers();
    this.bindEvents();

    // Select the first destination as default side panel preview
    if (window.SRI_LANKA_DATA && window.SRI_LANKA_DATA.destinations.length > 0) {
      this.selectDestination(window.SRI_LANKA_DATA.destinations[0]);
    }
  }

  getCategoryIcon(category) {
    switch (category) {
      case "beaches": return "🏖️";
      case "wildlife": return "🐘";
      case "mountains": return "⛰️";
      case "cultural": return "🏛️";
      case "adventure": return "🏄";
      case "city": return "🏙️";
      default: return "📍";
    }
  }

  renderMarkers() {
    // Clear existing markers
    this.markers.forEach(m => this.map.removeLayer(m));
    this.markers = [];

    const destinations = window.SRI_LANKA_DATA.destinations;

    destinations.forEach(dest => {
      // Check filter
      if (this.activeFilter !== "all" && !dest.categories.includes(this.activeFilter)) {
        return;
      }

      const iconEmoji = this.getCategoryIcon(dest.categories[0]);

      // Custom HTML Marker Icon
      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `
          <div class="custom-map-marker w-9 h-9 text-base transition-transform hover:scale-125" id="map-pin-${dest.id}">
            ${iconEmoji}
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -20]
      });

      const marker = L.marker([dest.lat, dest.lng], { icon: customIcon }).addTo(this.map);

      // Interactive Popup
      const popupHtml = `
        <div class="w-64 bg-white rounded-xl overflow-hidden font-sans shadow-lg text-left">
          <img src="${dest.thumbnail}" alt="${dest.name}" class="w-full h-28 object-cover">
          <div class="p-3">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wide">${dest.province}</span>
            <h4 class="font-serif font-bold text-slate-900 text-lg leading-tight mt-0.5">${dest.name}</h4>
            <p class="text-xs text-slate-600 mt-1 line-clamp-2">${dest.shortDescription}</p>
            <div class="mt-2.5 flex items-center justify-between">
              <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">⏱️ ${dest.recommendedDuration}</span>
              <button onclick="window.App.openDestinationModal('${dest.id}')" class="text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 px-3 py-1 rounded-lg transition-colors">
                Explore &rarr;
              </button>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 280, closeButton: true });

      marker.on('click', () => {
        this.selectDestination(dest);
      });

      this.markers.push(marker);
    });
  }

  selectDestination(dest) {
    this.selectedDestination = dest;
    const panel = document.getElementById(this.sidePanelContainerId);
    if (!panel) return;

    panel.innerHTML = `
      <div class="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col h-full animate-fadeIn">
        <div class="relative rounded-xl overflow-hidden mb-4 h-48 group">
          <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          <span class="absolute top-3 right-3 bg-cyan-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
            📍 ${dest.province}
          </span>
        </div>
        
        <div class="flex items-center justify-between mb-1">
          <h3 class="text-2xl font-serif font-bold text-slate-900">${dest.name}</h3>
          <span class="text-sm font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            ☀️ ${dest.bestTimeToVisit}
          </span>
        </div>

        <p class="text-teal-700 text-xs font-semibold uppercase tracking-wider mb-2">${dest.tagline}</p>
        <p class="text-slate-600 text-sm mb-4 leading-relaxed">${dest.shortDescription}</p>

        <div class="mb-4">
          <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Must-See Highlights</h5>
          <div class="flex flex-wrap gap-1.5">
            ${dest.mainAttractions.map(att => `<span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-lg font-medium">✨ ${att}</span>`).join('')}
          </div>
        </div>

        <div class="mt-auto pt-4 border-t border-slate-100 flex gap-2">
          <button onclick="window.App.openDestinationModal('${dest.id}')" class="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2.5 px-4 rounded-xl text-center text-sm shadow-sm transition-all">
            Full Destination Guide &rarr;
          </button>
          <button onclick="window.App.quickAddToTrip('${dest.id}')" class="bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold px-3 py-2.5 rounded-xl text-sm transition-all" title="Add to Trip Planner">
            + Add to Planner
          </button>
        </div>
      </div>
    `;

    // Center map smoothly to destination
    if (this.map) {
      this.map.panTo([dest.lat, dest.lng], { animate: true, duration: 0.8 });
    }
  }

  filterMarkers(category) {
    this.activeFilter = category;
    this.renderMarkers();
  }

  bindEvents() {
    const filterButtons = document.querySelectorAll(".map-filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        filterButtons.forEach(b => b.classList.remove("active", "bg-cyan-700", "text-white"));
        e.currentTarget.classList.add("active", "bg-cyan-700", "text-white");
        const cat = e.currentTarget.getAttribute("data-category");
        this.filterMarkers(cat);
      });
    });
  }
}

if (typeof window !== 'undefined') {
  window.SriLankaMap = SriLankaMap;
}
