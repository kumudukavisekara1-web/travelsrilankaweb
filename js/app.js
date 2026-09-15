/**
 * Travel Sri Lanka - Core Application Controller
 * "One Island. Endless Experiences."
 */

class AppController {
  constructor() {
    this.currentHeroIndex = 0;
    this.heroSlides = [];
    this.heroTimer = null;
    this.activeDestFilter = "all";
    this.activeActivityFilter = "all";
    this.activeBlogFilter = "all";
  }

  init() {
    this.initHeroSlider();
    this.renderDiscoveryCards();
    this.renderDestinations();
    this.renderActivities();
    this.renderExperiences();
    this.renderFoodCards();
    this.renderTravelGuide();
    this.renderSeasonGuide("January");
    this.renderTourPackages();
    this.renderBlogPosts();
    this.renderSustainablePillars();
    this.renderTestimonials();
    this.bindGlobalEvents();
    this.handleInitialHash();

    // Initialize Lucide Icons if loaded
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  /* -------------------------------------------------------------------------- */
  /* HERO SLIDER                                                                */
  /* -------------------------------------------------------------------------- */
  initHeroSlider() {
    this.heroSlides = document.querySelectorAll(".hero-slide");
    const dotsContainer = document.getElementById("hero-dots");
    if (!this.heroSlides.length || !dotsContainer) return;

    dotsContainer.innerHTML = "";
    this.heroSlides.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white'}`;
      dot.setAttribute("aria-label", `Slide ${idx + 1}`);
      dot.addEventListener("click", () => this.goToHeroSlide(idx));
      dotsContainer.appendChild(dot);
    });

    this.startHeroTimer();
  }

  startHeroTimer() {
    if (this.heroTimer) clearInterval(this.heroTimer);
    this.heroTimer = setInterval(() => {
      this.nextHeroSlide();
    }, 6000);
  }

  goToHeroSlide(index) {
    this.heroSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    const dots = document.querySelectorAll("#hero-dots button");
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.className = "w-8 h-3 rounded-full bg-amber-400 transition-all duration-300";
      } else {
        dot.className = "w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300";
      }
    });

    this.currentHeroIndex = index;
    this.startHeroTimer();
  }

  nextHeroSlide() {
    const nextIdx = (this.currentHeroIndex + 1) % this.heroSlides.length;
    this.goToHeroSlide(nextIdx);
  }

  /* -------------------------------------------------------------------------- */
  /* QUICK DISCOVERY SECTION                                                    */
  /* -------------------------------------------------------------------------- */
  renderDiscoveryCards() {
    const container = document.getElementById("discovery-grid");
    if (!container) return;

    const categories = [
      {
        name: "Tropical Beaches",
        icon: "🏖️",
        cat: "beaches",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        desc: "1,340 km of sun-drenched golden sands, surf breaks, and coastal lagoons."
      },
      {
        name: "Wildlife & Safari",
        icon: "🐘",
        cat: "wildlife",
        img: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80",
        desc: "Highest leopard density on Earth, wild elephant herds, and blue whale super-pods."
      },
      {
        name: "Culture & Heritage",
        icon: "🏛️",
        cat: "cultural",
        img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
        desc: "8 UNESCO World Heritage Sites, 2,500 years of recorded royal history & sacred relics."
      },
      {
        name: "Misty Mountains",
        icon: "⛰️",
        cat: "mountains",
        img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
        desc: "Cool Ceylon tea estates, cloud forests, and breathtaking railway bridges."
      },
      {
        name: "Island Gastronomy",
        icon: "🍛",
        cat: "food",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        desc: "Aromatic clay pot curries, crispy egg hoppers, fiery sambols, and fresh seafood."
      },
      {
        name: "Action & Adventure",
        icon: "🏄",
        cat: "adventure",
        img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
        desc: "World-class surfing, whitewater rafting, deep ocean diving, and peak trekking."
      }
    ];

    container.innerHTML = categories.map(cat => `
      <div class="interactive-card group relative h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer" onclick="window.App.filterDestinationsByCategory('${cat.cat}')">
        <img src="${cat.img}" alt="${cat.name}" class="card-img-zoom w-full h-full object-cover">
        <div class="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-white">
          <span class="text-3xl mb-2">${cat.icon}</span>
          <h3 class="font-serif font-bold text-2xl text-white group-hover:text-amber-300 transition-colors">${cat.name}</h3>
          <p class="text-xs text-slate-200 mt-1.5 leading-relaxed line-clamp-2">${cat.desc}</p>
          <div class="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-300">
            <span>Discover More</span>
            <span class="transition-transform group-hover:translate-x-1">&rarr;</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* DESTINATIONS SECTION                                                       */
  /* -------------------------------------------------------------------------- */
  renderDestinations(searchQuery = "") {
    const container = document.getElementById("destinations-grid");
    if (!container) return;

    let items = window.SRI_LANKA_DATA.destinations;

    // Filter by Category
    if (this.activeDestFilter !== "all") {
      items = items.filter(d => d.categories.includes(this.activeDestFilter));
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(d => 
        d.name.toLowerCase().includes(q) ||
        d.province.toLowerCase().includes(q) ||
        d.shortDescription.toLowerCase().includes(q) ||
        d.mainAttractions.some(a => a.toLowerCase().includes(q))
      );
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <p class="text-4xl mb-3">🏝️</p>
          <h4 class="text-xl font-bold text-slate-700">No destinations found</h4>
          <p class="text-sm text-slate-400 mt-1">Try selecting a different category or clearing your search term.</p>
          <button onclick="window.App.resetDestFilters()" class="mt-4 bg-cyan-700 text-white font-semibold px-4 py-2 rounded-xl text-sm">
            Show All Destinations
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(dest => `
      <div class="interactive-card bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100/80 flex flex-col group">
        <!-- Card Image & Badges -->
        <div class="relative h-60 overflow-hidden">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy" class="card-img-zoom w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div class="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
            <span class="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
              📍 ${dest.province}
            </span>
          </div>

          <div class="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
            <span class="text-xs font-semibold bg-amber-400/90 text-cyan-950 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
              ⏱️ ${dest.recommendedDuration}
            </span>
            <span class="text-xs font-medium bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
              ☀️ ${dest.bestTimeToVisit}
            </span>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center justify-between gap-2 mb-1">
            <h3 class="font-serif font-bold text-2xl text-slate-900 group-hover:text-cyan-800 transition-colors">${dest.name}</h3>
          </div>
          <p class="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2.5">${dest.tagline}</p>
          <p class="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">${dest.shortDescription}</p>

          <!-- Attractions Tags -->
          <div class="mb-5 mt-auto">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Highlights</span>
            <div class="flex flex-wrap gap-1.5">
              ${dest.mainAttractions.slice(0, 3).map(att => `
                <span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-lg font-medium">✨ ${att}</span>
              `).join('')}
              ${dest.mainAttractions.length > 3 ? `<span class="text-xs text-slate-400 self-center">+${dest.mainAttractions.length - 3} more</span>` : ''}
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-4 border-t border-slate-100 flex items-center gap-2">
            <button onclick="window.App.openDestinationModal('${dest.id}')" class="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2.5 px-4 rounded-xl text-center text-sm shadow-sm transition-all flex items-center justify-center gap-2">
              <span>Explore Destination</span>
              <span>&rarr;</span>
            </button>
            <button onclick="window.App.openEnquiryModal('Destination: ${dest.name}')" class="bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold p-2.5 rounded-xl text-sm transition-colors" title="Inquire for ${dest.name}">
              📩
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterDestinationsByCategory(category) {
    this.activeDestFilter = category;
    
    // Update active tab buttons
    const tabs = document.querySelectorAll(".dest-filter-btn");
    tabs.forEach(tab => {
      if (tab.getAttribute("data-category") === category) {
        tab.classList.add("active", "bg-cyan-700", "text-white");
      } else {
        tab.classList.remove("active", "bg-cyan-700", "text-white");
      }
    });

    this.renderDestinations();
    const destSection = document.getElementById("destinations");
    if (destSection) {
      destSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  resetDestFilters() {
    this.activeDestFilter = "all";
    const searchInput = document.getElementById("destination-search-input");
    if (searchInput) searchInput.value = "";
    this.filterDestinationsByCategory("all");
  }

  /* -------------------------------------------------------------------------- */
  /* THINGS TO DO (ACTIVITIES) SECTION                                          */
  /* -------------------------------------------------------------------------- */
  renderActivities() {
    const container = document.getElementById("activities-grid");
    if (!container) return;

    let items = window.SRI_LANKA_DATA.activities;
    if (this.activeActivityFilter !== "all") {
      items = items.filter(a => a.category === this.activeActivityFilter);
    }

    container.innerHTML = items.map(act => `
      <div class="interactive-card bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group">
        <div class="relative h-52 overflow-hidden">
          <img src="${act.image}" alt="${act.title}" loading="lazy" class="card-img-zoom w-full h-full object-cover">
          <span class="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            ${act.category}
          </span>
          <span class="absolute bottom-3.5 right-3.5 bg-cyan-900/90 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
            📍 ${act.location}
          </span>
        </div>

        <div class="p-6 flex flex-col flex-1">
          <h3 class="font-serif font-bold text-xl text-slate-900 group-hover:text-cyan-800 transition-colors mb-2">${act.title}</h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-4">${act.shortDesc}</p>

          <div class="space-y-1.5 mb-5 mt-auto text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <div class="flex justify-between"><strong class="text-slate-700">Difficulty:</strong> <span>${act.difficulty}</span></div>
            <div class="flex justify-between"><strong class="text-slate-700">Duration:</strong> <span>${act.duration}</span></div>
            <div class="flex justify-between"><strong class="text-slate-700">Best Season:</strong> <span>${act.bestSeason}</span></div>
          </div>

          <button onclick="window.App.openActivityModal('${act.id}')" class="w-full bg-slate-100 hover:bg-cyan-700 hover:text-white text-cyan-900 font-bold py-2.5 px-4 rounded-xl text-sm transition-all text-center">
            View Details & Tips &rarr;
          </button>
        </div>
      </div>
    `).join('');
  }

  filterActivities(category) {
    this.activeActivityFilter = category;
    const tabs = document.querySelectorAll(".activity-filter-btn");
    tabs.forEach(tab => {
      if (tab.getAttribute("data-category") === category) {
        tab.classList.add("active", "bg-cyan-700", "text-white");
      } else {
        tab.classList.remove("active", "bg-cyan-700", "text-white");
      }
    });
    this.renderActivities();
  }

  /* -------------------------------------------------------------------------- */
  /* SRI LANKAN EXPERIENCES (STORYTELLING)                                      */
  /* -------------------------------------------------------------------------- */
  renderExperiences() {
    const container = document.getElementById("experiences-grid");
    if (!container) return;

    const experiences = window.SRI_LANKA_DATA.experiences;

    container.innerHTML = experiences.map((exp, idx) => `
      <div class="interactive-card bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}">
        <div class="md:w-1/2 relative h-72 md:h-auto overflow-hidden">
          <img src="${exp.image}" alt="${exp.title}" class="card-img-zoom w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/60 to-transparent"></div>
          <span class="absolute top-4 left-4 bg-amber-400 text-cyan-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            ${exp.tag}
          </span>
          <span class="absolute bottom-4 left-4 text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
            📍 ${exp.region}
          </span>
        </div>

        <div class="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <span class="text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">${exp.subtitle}</span>
          <h3 class="font-serif font-bold text-2xl sm:text-3xl text-slate-900 mb-4 leading-snug">${exp.title}</h3>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">${exp.description}</p>
          <div>
            <button onclick="window.App.openEnquiryModal('Experience: ${exp.title}')" class="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md">
              <span>Book This Experience</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* FOOD & CULTURE SECTION                                                     */
  /* -------------------------------------------------------------------------- */
  renderFoodCards() {
    const container = document.getElementById("food-grid");
    if (!container) return;

    const dishes = window.SRI_LANKA_DATA.foodAndCulture.dishes;

    container.innerHTML = dishes.map(dish => `
      <div class="interactive-card bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group">
        <div class="relative h-48 overflow-hidden">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy" class="card-img-zoom w-full h-full object-cover">
          <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            📍 ${dish.region}
          </span>
          <span class="absolute top-3 right-3 bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full">
            ${dish.diet}
          </span>
        </div>

        <div class="p-5 flex flex-col flex-1">
          <div class="flex items-baseline justify-between mb-1">
            <h4 class="font-serif font-bold text-lg text-slate-900">${dish.name}</h4>
          </div>
          <span class="text-xs text-teal-700 italic mb-2">Local Name: "${dish.localName}"</span>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">${dish.description}</p>
          
          <div class="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="font-semibold text-slate-700">Spice: ${dish.spiceLevel}</span>
            <span class="text-slate-500 truncate max-w-[140px]" title="${dish.pairings}">Pair: ${dish.pairings}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* TRAVEL GUIDE & "WHEN SHOULD I VISIT?"                                      */
  /* -------------------------------------------------------------------------- */
  renderTravelGuide() {
    const beforeContainer = document.getElementById("before-travel-grid");
    const getAroundContainer = document.getElementById("getting-around-grid");

    if (beforeContainer) {
      const items = window.SRI_LANKA_DATA.travelGuide.beforeYouTravel;
      beforeContainer.innerHTML = items.map(item => `
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-xl font-bold mb-4">
            📌
          </div>
          <h4 class="font-serif font-bold text-lg text-slate-900 mb-2">${item.title}</h4>
          <p class="text-sm font-semibold text-slate-700 mb-2">${item.summary}</p>
          <p class="text-xs text-slate-500 leading-relaxed">${item.details}</p>
        </div>
      `).join('');
    }

    if (getAroundContainer) {
      const trans = window.SRI_LANKA_DATA.travelGuide.gettingAround;
      getAroundContainer.innerHTML = trans.map(t => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
          <div class="h-40 overflow-hidden relative">
            <img src="${t.image}" alt="${t.type}" class="w-full h-full object-cover transition-transform group-hover:scale-105">
            <span class="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-0.5 rounded-md">
              ${t.type}
            </span>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-center">
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${t.desc}</p>
          </div>
        </div>
      `).join('');
    }
  }

  renderSeasonGuide(selectedMonth = "January") {
    const previewContainer = document.getElementById("season-guide-preview");
    if (!previewContainer) return;

    const data = window.SRI_LANKA_DATA.travelGuide.seasonMatrix.find(m => m.month.toLowerCase() === selectedMonth.toLowerCase());
    if (!data) return;

    previewContainer.innerHTML = `
      <div class="bg-linear-to-br from-cyan-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl animate-fadeIn">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-teal-700/50 gap-4 mb-6">
          <div>
            <span class="text-amber-300 text-xs font-bold uppercase tracking-wider">Seasonal Climate & Destination Intelligence</span>
            <h3 class="font-serif font-bold text-3xl text-white mt-1">Visiting Sri Lanka in ${data.month}</h3>
          </div>
          <div class="flex items-center gap-2">
            <span class="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1.5 rounded-full">
              🌡️ Avg Temp: ${data.temp}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">🌟 Prime Regions</span>
            <p class="text-sm font-semibold text-white">${data.idealCoasts}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">☀️ Overall Weather</span>
            <p class="text-sm font-semibold text-white">${data.condition}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">🏄 Best Surf Spots</span>
            <p class="text-sm font-semibold text-white">${data.surfSpot}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">🐘 Top Wildlife Sightings</span>
            <p class="text-sm font-semibold text-white">${data.wildlife}</p>
          </div>
        </div>

        <div class="bg-teal-950/60 p-4 rounded-2xl border border-teal-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <span class="text-cyan-200">💡 <strong>Pro Tip:</strong> Sri Lanka enjoys year-round tropical sunshine by alternating between its dual monsoons. There is never a wrong month to visit!</span>
          <button onclick="window.App.openEnquiryModal('Trip in ${data.month}')" class="bg-amber-400 hover:bg-amber-300 text-cyan-950 font-bold px-4 py-2 rounded-xl text-xs whitespace-nowrap shadow-sm">
            Plan My ${data.month} Trip &rarr;
          </button>
        </div>
      </div>
    `;
  }

  /* -------------------------------------------------------------------------- */
  /* TOUR PACKAGES SECTION                                                      */
  /* -------------------------------------------------------------------------- */
  renderTourPackages() {
    const container = document.getElementById("packages-grid");
    if (!container) return;

    const packages = window.SRI_LANKA_DATA.tourPackages;

    container.innerHTML = packages.map(pkg => `
      <div class="interactive-card bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group">
        <div class="relative h-60 overflow-hidden">
          <img src="${pkg.image}" alt="${pkg.name}" loading="lazy" class="card-img-zoom w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
          
          <span class="absolute top-4 left-4 bg-cyan-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
            ⏱️ ${pkg.duration}
          </span>

          <div class="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white">
            <div>
              <span class="text-xs text-slate-300 block">Starting From</span>
              <span class="text-2xl font-serif font-bold text-amber-300">${pkg.priceFrom}</span>
              <span class="text-xs text-slate-300"> / person</span>
            </div>
            <span class="text-xs bg-amber-400/90 text-cyan-950 font-bold px-2.5 py-1 rounded-md">
              Top Rated
            </span>
          </div>
        </div>

        <div class="p-6 flex flex-col flex-1">
          <h3 class="font-serif font-bold text-2xl text-slate-900 group-hover:text-cyan-800 transition-colors mb-1">${pkg.name}</h3>
          <p class="text-xs font-bold text-teal-700 uppercase tracking-wider mb-4">${pkg.tagline}</p>

          <div class="mb-4">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Destinations Included</span>
            <div class="flex flex-wrap gap-1.5">
              ${pkg.destinations.map(d => `<span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-lg font-medium">📍 ${d}</span>`).join('')}
            </div>
          </div>

          <div class="space-y-1.5 mb-6 text-xs text-slate-600">
            ${pkg.highlights.slice(0, 3).map(h => `
              <div class="flex items-start gap-1.5">
                <span class="text-teal-700 font-bold">✓</span>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>

          <div class="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
            <button onclick="window.App.openPackageModal('${pkg.id}')" class="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2.5 px-4 rounded-xl text-center text-sm shadow-sm transition-all">
              View Itinerary &rarr;
            </button>
            <button onclick="window.App.openEnquiryModal('Package: ${pkg.name}')" class="bg-amber-400 hover:bg-amber-300 text-cyan-950 font-bold px-4 py-2.5 rounded-xl text-sm transition-all">
              Book / Enquire
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* BLOG POSTS SECTION                                                         */
  /* -------------------------------------------------------------------------- */
  renderBlogPosts() {
    const container = document.getElementById("blog-grid");
    if (!container) return;

    let posts = window.SRI_LANKA_DATA.blogPosts;
    if (this.activeBlogFilter !== "all") {
      posts = posts.filter(p => p.category.toLowerCase() === this.activeBlogFilter.toLowerCase());
    }

    container.innerHTML = posts.map(post => `
      <article class="interactive-card bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group cursor-pointer" onclick="window.App.openBlogModal('${post.id}')">
        <div class="relative h-52 overflow-hidden">
          <img src="${post.image}" alt="${post.title}" loading="lazy" class="card-img-zoom w-full h-full object-cover">
          <span class="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
            ${post.category}
          </span>
          <span class="absolute bottom-3.5 right-3.5 bg-cyan-900/90 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
            ⏱️ ${post.readTime}
          </span>
        </div>

        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span>By ${post.author}</span>
            <span>•</span>
            <span>${post.date}</span>
          </div>
          <h3 class="font-serif font-bold text-xl text-slate-900 group-hover:text-cyan-800 transition-colors mb-2.5 leading-snug">${post.title}</h3>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">${post.excerpt}</p>
          <div class="mt-auto flex items-center gap-1 text-xs font-bold text-cyan-700 group-hover:text-cyan-900">
            <span>Read Article</span>
            <span>&rarr;</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  filterBlog(category) {
    this.activeBlogFilter = category;
    const tabs = document.querySelectorAll(".blog-filter-btn");
    tabs.forEach(tab => {
      if (tab.getAttribute("data-category") === category) {
        tab.classList.add("active", "bg-cyan-700", "text-white");
      } else {
        tab.classList.remove("active", "bg-cyan-700", "text-white");
      }
    });
    this.renderBlogPosts();
  }

  /* -------------------------------------------------------------------------- */
  /* SUSTAINABLE TOURISM SECTION                                                */
  /* -------------------------------------------------------------------------- */
  renderSustainablePillars() {
    const container = document.getElementById("sustainable-pillars-grid");
    if (!container) return;

    const pillars = window.SRI_LANKA_DATA.sustainablePillars;

    container.innerHTML = pillars.map(p => `
      <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-white hover:bg-white/15 transition-all">
        <div class="w-10 h-10 rounded-xl bg-amber-400 text-cyan-950 flex items-center justify-center font-bold text-lg mb-3">
          🌱
        </div>
        <h4 class="font-serif font-bold text-lg text-amber-200 mb-1.5">${p.title}</h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${p.desc}</p>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* TESTIMONIALS SECTION                                                       */
  /* -------------------------------------------------------------------------- */
  renderTestimonials() {
    const container = document.getElementById("testimonials-grid");
    if (!container) return;

    const list = window.SRI_LANKA_DATA.testimonials;

    container.innerHTML = list.map(item => `
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-100 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex text-amber-400 text-sm">
              ${'★'.repeat(item.rating)}
            </div>
            <span class="text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full">
              ${item.tripType}
            </span>
          </div>
          <p class="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-6 font-serif">
            "${item.quote}"
          </p>
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
          <img src="${item.avatar}" alt="${item.name}" class="w-11 h-11 rounded-full object-cover border-2 border-amber-300">
          <div>
            <h4 class="font-bold text-slate-900 text-sm">${item.name}</h4>
            <span class="text-xs text-slate-500">${item.flag} ${item.country} • Verified Traveler</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* -------------------------------------------------------------------------- */
  /* MODALS & POPUPS                                                            */
  /* -------------------------------------------------------------------------- */
  openDestinationModal(destId) {
    const dest = window.SRI_LANKA_DATA.destinations.find(d => d.id === destId);
    if (!dest) return;

    const modal = document.getElementById("detail-modal");
    const modalContent = document.getElementById("modal-content-slot");
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="relative">
        <div class="h-72 sm:h-96 relative overflow-hidden rounded-t-3xl">
          <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-amber-400 text-cyan-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              📍 ${dest.province}
            </span>
            <h2 class="font-serif font-bold text-3xl sm:text-4xl">${dest.name}</h2>
            <p class="text-sm text-cyan-200 mt-1">${dest.tagline}</p>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
            <div>
              <span class="text-xs text-slate-400 block font-bold uppercase">Best Season</span>
              <strong class="text-sm text-slate-800">${dest.bestTimeToVisit}</strong>
            </div>
            <div>
              <span class="text-xs text-slate-400 block font-bold uppercase">Duration</span>
              <strong class="text-sm text-slate-800">${dest.recommendedDuration}</strong>
            </div>
            <div>
              <span class="text-xs text-slate-400 block font-bold uppercase">Weather</span>
              <strong class="text-sm text-slate-800">${dest.weather}</strong>
            </div>
            <div>
              <span class="text-xs text-slate-400 block font-bold uppercase">Coordinates</span>
              <strong class="text-sm text-slate-800">${dest.lat.toFixed(2)}°N, ${dest.lng.toFixed(2)}°E</strong>
            </div>
          </div>

          <div>
            <h4 class="font-serif font-bold text-xl text-slate-900 mb-2">About ${dest.name}</h4>
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">${dest.fullDescription}</p>
          </div>

          <div>
            <h4 class="font-serif font-bold text-xl text-slate-900 mb-3">Top Attractions & Things to See</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${dest.mainAttractions.map(att => `
                <div class="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-700">
                  <span class="text-cyan-700 font-bold">✨</span>
                  <span>${att}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
            <span class="text-2xl">💡</span>
            <div>
              <strong class="text-xs font-bold text-amber-900 uppercase tracking-wider block">Insider Local Tip</strong>
              <p class="text-sm text-amber-800 mt-0.5">${dest.insiderTip}</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
            <button onclick="window.App.openEnquiryModal('Destination: ${dest.name}'); window.App.closeModal();" class="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-xl text-center shadow-md transition-all">
              Plan a Trip to ${dest.name} &rarr;
            </button>
            <button onclick="window.App.quickAddToTrip('${dest.id}'); window.App.closeModal();" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-5 rounded-xl text-sm transition-colors">
              + Add to Trip Planner
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  openActivityModal(actId) {
    const act = window.SRI_LANKA_DATA.activities.find(a => a.id === actId);
    if (!act) return;

    const modal = document.getElementById("detail-modal");
    const modalContent = document.getElementById("modal-content-slot");
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="relative">
        <div class="h-64 sm:h-80 relative overflow-hidden rounded-t-3xl">
          <img src="${act.image}" alt="${act.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-amber-400 text-cyan-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              ${act.category}
            </span>
            <h2 class="font-serif font-bold text-2xl sm:text-3xl">${act.title}</h2>
            <p class="text-sm text-cyan-200 mt-1">📍 ${act.location}</p>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed">${act.shortDesc}</p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
            <div>
              <span class="text-xs text-slate-400 block font-bold uppercase">Difficulty</span>
              <strong class="text-sm text-slate-800">${act.difficulty}</strong>
            </div>
            <div>
              <span class="text-xs text-slate-400 block font-bold uppercase">Duration</span>
              <strong class="text-sm text-slate-800">${act.duration}</strong>
            </div>
            <div>
              <span class="text-xs text-slate-400 block font-bold uppercase">Best Season</span>
              <strong class="text-sm text-slate-800">${act.bestSeason}</strong>
            </div>
          </div>

          <div>
            <h4 class="font-serif font-bold text-xl text-slate-900 mb-3">Highlights & What to Expect</h4>
            <div class="space-y-2">
              ${act.highlights.map(h => `
                <div class="flex items-start gap-2 text-sm text-slate-700">
                  <span class="text-cyan-700 font-bold">✓</span>
                  <span>${h}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100">
            <button onclick="window.App.openEnquiryModal('Activity: ${act.title}'); window.App.closeModal();" class="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all">
              Book This Activity &rarr;
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  openPackageModal(pkgId) {
    const pkg = window.SRI_LANKA_DATA.tourPackages.find(p => p.id === pkgId);
    if (!pkg) return;

    const modal = document.getElementById("detail-modal");
    const modalContent = document.getElementById("modal-content-slot");
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="relative">
        <div class="h-64 sm:h-80 relative overflow-hidden rounded-t-3xl">
          <img src="${pkg.image}" alt="${pkg.name}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
            <div>
              <span class="bg-cyan-800 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                ⏱️ ${pkg.duration}
              </span>
              <h2 class="font-serif font-bold text-2xl sm:text-3xl">${pkg.name}</h2>
              <p class="text-sm text-cyan-200 mt-1">${pkg.tagline}</p>
            </div>
            <div class="text-right">
              <span class="text-xs text-slate-300 block">Starting From</span>
              <span class="text-3xl font-serif font-bold text-amber-300">${pkg.priceFrom}</span>
            </div>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <h4 class="font-serif font-bold text-base text-slate-900 mb-2">🗺️ Daily Itinerary Outline</h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-mono">${pkg.itinerarySummary}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-serif font-bold text-lg text-emerald-800 mb-3 flex items-center gap-1.5">
                <span>✅</span> <span>What's Included</span>
              </h4>
              <div class="space-y-2">
                ${pkg.includes.map(inc => `
                  <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>${inc}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div>
              <h4 class="font-serif font-bold text-lg text-rose-800 mb-3 flex items-center gap-1.5">
                <span>❌</span> <span>What's Not Included</span>
              </h4>
              <div class="space-y-2">
                ${pkg.excludes.map(exc => `
                  <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <span class="text-rose-500 font-bold">✗</span>
                    <span>${exc}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex gap-3">
            <button onclick="window.App.openEnquiryModal('Package: ${pkg.name} (${pkg.duration})'); window.App.closeModal();" class="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-md transition-all">
              Book / Request Quote For This Tour &rarr;
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  openBlogModal(blogId) {
    const post = window.SRI_LANKA_DATA.blogPosts.find(b => b.id === blogId);
    if (!post) return;

    const modal = document.getElementById("detail-modal");
    const modalContent = document.getElementById("modal-content-slot");
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="relative">
        <div class="h-64 sm:h-80 relative overflow-hidden rounded-t-3xl">
          <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6 text-white">
            <span class="bg-amber-400 text-cyan-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              ${post.category}
            </span>
            <h2 class="font-serif font-bold text-2xl sm:text-3xl">${post.title}</h2>
            <div class="flex items-center gap-2 text-xs text-slate-300 mt-2">
              <span>By ${post.author}</span>
              <span>•</span>
              <span>${post.date}</span>
              <span>•</span>
              <span>${post.readTime}</span>
            </div>
          </div>
        </div>

        <div class="p-6 sm:p-8">
          <div class="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed">
            ${post.content}
          </div>

          <div class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl">
            <div>
              <h5 class="font-serif font-bold text-slate-900">Inspired by this article?</h5>
              <p class="text-xs text-slate-500">Let our team build an itinerary around these exact destinations.</p>
            </div>
            <button onclick="window.App.openEnquiryModal('Inquiry based on article: ${post.title}'); window.App.closeModal();" class="bg-cyan-700 hover:bg-cyan-800 text-white font-bold px-4 py-2 rounded-xl text-xs whitespace-nowrap shadow-sm">
              Plan My Trip &rarr;
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    const modal = document.getElementById("detail-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  openEnquiryModal(prefillTopic = "") {
    const modal = document.getElementById("enquiry-modal");
    if (!modal) return;

    if (prefillTopic) {
      const topicInput = document.getElementById("enquiry-package-input");
      if (topicInput) topicInput.value = prefillTopic;
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  closeEnquiryModal() {
    const modal = document.getElementById("enquiry-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  openPledgeModal() {
    const modal = document.getElementById("pledge-modal");
    if (!modal) return;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  closePledgeModal() {
    const modal = document.getElementById("pledge-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  openQuickSearch() {
    const modal = document.getElementById("quick-search-modal");
    if (!modal) return;
    modal.classList.remove("hidden");
    const input = document.getElementById("global-search-input");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 50);
      this.handleGlobalSearch("");
    }
    document.body.style.overflow = "hidden";
  }

  closeQuickSearch() {
    const modal = document.getElementById("quick-search-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  handleGlobalSearch(query) {
    const container = document.getElementById("global-search-results");
    if (!container) return;

    const q = query.trim().toLowerCase();
    if (!q) {
      container.innerHTML = `
        <div class="py-8 text-center text-slate-400 text-sm">
          Type any destination (e.g. Ella, Sigiriya), activity (e.g. Surfing, Safari), or food (e.g. Hoppers, Tea)...
        </div>
      `;
      return;
    }

    const matches = [];

    // Search destinations
    window.SRI_LANKA_DATA.destinations.forEach(d => {
      if (d.name.toLowerCase().includes(q) || d.shortDescription.toLowerCase().includes(q)) {
        matches.push({ type: "Destination", title: d.name, sub: d.province, id: d.id, action: `window.App.openDestinationModal('${d.id}')` });
      }
    });

    // Search activities
    window.SRI_LANKA_DATA.activities.forEach(a => {
      if (a.title.toLowerCase().includes(q) || a.shortDesc.toLowerCase().includes(q)) {
        matches.push({ type: "Activity", title: a.title, sub: a.location, id: a.id, action: `window.App.openActivityModal('${a.id}')` });
      }
    });

    // Search tour packages
    window.SRI_LANKA_DATA.tourPackages.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.destinations.some(d => d.toLowerCase().includes(q))) {
        matches.push({ type: "Tour Package", title: p.name, sub: `${p.duration} • ${p.priceFrom}`, id: p.id, action: `window.App.openPackageModal('${p.id}')` });
      }
    });

    // Search food
    window.SRI_LANKA_DATA.foodAndCulture.dishes.forEach(f => {
      if (f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)) {
        matches.push({ type: "Food & Culture", title: f.name, sub: `${f.region} • ${f.diet}`, id: f.id, action: `window.location.hash='#food-culture'; window.App.closeQuickSearch();` });
      }
    });

    if (matches.length === 0) {
      container.innerHTML = `<div class="py-8 text-center text-slate-400 text-sm">No results found for "${query}".</div>`;
      return;
    }

    container.innerHTML = matches.map(m => `
      <div onclick="${m.action}; window.App.closeQuickSearch();" class="p-3.5 hover:bg-slate-50 rounded-xl cursor-pointer flex items-center justify-between border-b border-slate-100 last:border-0 transition-colors">
        <div>
          <span class="text-xs font-bold text-cyan-700 uppercase tracking-wide">${m.type}</span>
          <h5 class="font-serif font-bold text-slate-900 text-base">${m.title}</h5>
          <span class="text-xs text-slate-500">${m.sub}</span>
        </div>
        <span class="text-slate-400 font-bold">&rarr;</span>
      </div>
    `).join('');
  }

  quickAddToTrip(destId) {
    const dest = window.SRI_LANKA_DATA.destinations.find(d => d.id === destId);
    if (!dest) return;
    this.showToast(`✨ ${dest.name} added to your Trip Planner wishlist!`);
    const plannerEl = document.getElementById("trip-planner");
    if (plannerEl) plannerEl.scrollIntoView({ behavior: "smooth" });
  }

  /* -------------------------------------------------------------------------- */
  /* TOAST NOTIFICATIONS                                                        */
  /* -------------------------------------------------------------------------- */
  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <span class="text-xl">${type === 'success' ? '🌴' : '✨'}</span>
      <div class="flex-1 text-sm font-medium">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      toast.style.transition = "all 0.4s ease";
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  /* -------------------------------------------------------------------------- */
  /* EVENT BINDINGS                                                             */
  /* -------------------------------------------------------------------------- */
  bindGlobalEvents() {
    // Sticky Nav Scroll effect
    const nav = document.getElementById("main-nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }
    });

    // Mobile Hamburger Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileCloseBtn = document.getElementById("mobile-drawer-close");

    mobileMenuBtn?.addEventListener("click", () => {
      mobileDrawer?.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    });

    const closeDrawer = () => {
      mobileDrawer?.classList.add("translate-x-full");
      document.body.style.overflow = "";
    };

    mobileCloseBtn?.addEventListener("click", closeDrawer);
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", closeDrawer);
    });

    // Destination Search Input Event
    const destSearchInput = document.getElementById("destination-search-input");
    destSearchInput?.addEventListener("input", (e) => {
      this.renderDestinations(e.target.value);
    });

    // Month Selector for "When Should I Visit?"
    const monthSelect = document.getElementById("season-month-selector");
    monthSelect?.addEventListener("change", (e) => {
      this.renderSeasonGuide(e.target.value);
    });

    // Global Search Input
    const globalSearchInput = document.getElementById("global-search-input");
    globalSearchInput?.addEventListener("input", (e) => {
      this.handleGlobalSearch(e.target.value);
    });

    // Keyboard Shortcuts (Cmd+K / Ctrl+K for search)
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        this.openQuickSearch();
      }
    });

    // Enquiry Form Submission
    const enquiryForm = document.getElementById("enquiry-form");
    enquiryForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: document.getElementById("enq-name")?.value,
        email: document.getElementById("enq-email")?.value,
        phone: document.getElementById("enq-phone")?.value,
        country: document.getElementById("enq-country")?.value,
        travelDates: document.getElementById("enq-dates")?.value,
        adults: parseInt(document.getElementById("enq-adults")?.value || "2", 10),
        children: parseInt(document.getElementById("enq-children")?.value || "0", 10),
        budget: document.getElementById("enq-budget")?.value,
        packageInterest: document.getElementById("enquiry-package-input")?.value || "General Tourism Enquiry",
        message: document.getElementById("enq-message")?.value
      };

      if (window.AdminCMSInstance) {
        window.AdminCMSInstance.saveEnquiry(formData);
      }

      this.closeEnquiryModal();
      this.showToast(`Ayubowan, ${formData.name}! Your enquiry has been sent. A local Sri Lanka specialist will contact you within 24 hours.`, "success");
      enquiryForm.reset();
    });

    // Newsletter Form
    const newsletterForms = document.querySelectorAll(".newsletter-form");
    newsletterForms.forEach(form => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (input && input.value) {
          if (window.AdminCMSInstance) {
            window.AdminCMSInstance.saveSubscriber(input.value);
          }
          this.showToast("🌴 Welcome to the Travel Sri Lanka family! Check your inbox for exclusive island travel guides.", "success");
          input.value = "";
        }
      });
    });

    // Pledge Form
    const pledgeForm = document.getElementById("pledge-form");
    pledgeForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("pledge-name")?.value || "Responsible Traveler";
      this.closePledgeModal();
      this.showToast(`🌱 Thank you, ${name}! You've signed the Sri Lanka Sustainable Traveler Pledge.`, "success");
    });
  }

  handleInitialHash() {
    const hash = window.location.hash;
    if (hash.startsWith("#destination=")) {
      const id = hash.replace("#destination=", "");
      setTimeout(() => this.openDestinationModal(id), 500);
    } else if (hash.startsWith("#package=")) {
      const id = hash.replace("#package=", "");
      setTimeout(() => this.openPackageModal(id), 500);
    } else if (hash === "#admin") {
      setTimeout(() => window.AdminCMSInstance?.openAdminModal(), 500);
    }
  }
}

if (typeof window !== 'undefined') {
  window.App = new AppController();
}
