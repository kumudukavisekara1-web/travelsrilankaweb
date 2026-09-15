/**
 * Travel Sri Lanka - Interactive Dynamic Trip Planner
 */

class TripPlanner {
  constructor() {
    this.itineraryContainer = document.getElementById("itinerary-output");
    this.form = document.getElementById("trip-planner-form");
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.generateItinerary();
    });

    // Auto generate an initial 7-day highlight on page load if container exists
    setTimeout(() => {
      this.generateItinerary();
    }, 400);
  }

  getFormData() {
    const duration = parseInt(document.querySelector('input[name="duration"]:checked')?.value || "7", 10);
    const style = document.querySelector('input[name="travel_style"]:checked')?.value || "midrange";
    const selectedInterests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);

    return { duration, style, interests: selectedInterests };
  }

  generateItinerary() {
    const { duration, style, interests } = this.getFormData();

    // Generate days according to duration and interest weights
    const itinerary = this.buildSmartItinerary(duration, style, interests);
    this.renderItinerary(itinerary, duration, style, interests);
  }

  buildSmartItinerary(days, style, interests) {
    // Curated day templates for modular composition
    const dayModules = {
      colombo_arrival: {
        title: "Arrival in Colombo & Galle Face Sunset",
        destination: "Colombo",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
        activities: ["Private Airport pickup & transfer to hotel", "Stroll along Galle Face Green for sunset isso wade street snacks", "Explore Gangaramaya Temple & Old Dutch Hospital precinct", "Welcome dinner at Ministry of Crab or seafood bistro"],
        travelTime: "40 min from Airport via Expressway",
        overnight: "Colombo (Oceanfront Hotel / Heritage Boutique)"
      },
      sigiriya_palace: {
        title: "Ancient Wonder of Sigiriya Lion Rock",
        destination: "Sigiriya / Cultural Triangle",
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
        activities: ["Ascend 5th-century Sigiriya Rock Fortress in morning light", "Admire ancient frescoes and Mirror Wall inscriptions", "Traditional bullock cart village lunch served in clay pots", "Sunset climb up Pidurangala Rock for 360° views"],
        travelTime: "3.5 hrs scenic drive from Colombo",
        overnight: "Sigiriya / Habarana Eco-Lodge"
      },
      dambulla_kandy: {
        title: "Golden Cave Temples & Sacred City of Kandy",
        destination: "Dambulla & Kandy",
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=600&q=80",
        activities: ["Explore UNESCO Dambulla Golden Rock Cave Temples with 150+ statues", "Visit Matale Spice Garden for fresh cinnamon & vanilla", "Witness the sacred evening drumming puja at Temple of the Tooth", "Kandyan traditional dance & fire-walking performance"],
        travelTime: "2.5 hrs scenic drive",
        overnight: "Kandy (Hillside Boutique Hotel overlooking lake)"
      },
      kandy_nuwaraeliya: {
        title: "Misty Tea Plantations & Highland Waterfalls",
        destination: "Nuwara Eliya (Little England)",
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
        activities: ["Scenic drive through Ramboda Falls & cascading tea valleys", "Guided Ceylon tea plucking & vintage factory master tasting", "Colonial high tea at The Grand Hotel", "Stroll around Lake Gregory and Victoria Park gardens"],
        travelTime: "2.5 hrs winding mountain ascent",
        overnight: "Nuwara Eliya (Colonial Heritage Manor)"
      },
      blue_train_ella: {
        title: "World's Most Scenic Blue Train to Ella",
        destination: "Ella",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
        activities: ["Board the iconic Blue Train from Nanu Oya to Ella through cloud forests", "Photograph Demodara Nine Arches Bridge from the tea trails", "Hike Little Adam's Peak at golden sunset", "Dinner at vibrant bohemian cafes in Ella town"],
        travelTime: "3 hrs picturesque train journey",
        overnight: "Ella (Valley-view Mountain Resort)"
      },
      ella_hiking_waterfalls: {
        title: "Ella Rock Trek & Diyaluma Waterfall Pools",
        destination: "Ella",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
        activities: ["Morning trek up Ella Rock overlooking Ella Gap", "Swim in the natural infinity pools at the top of Diyaluma Falls", "Visit ancient Ravana Cave & Ravana Waterfall", "Flying Ravana Mega Zipline over emerald tea valleys"],
        travelTime: "Local exploration",
        overnight: "Ella"
      },
      yala_safari: {
        title: "Wild Leopard & Elephant Safari in Yala",
        destination: "Yala National Park",
        image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80",
        activities: ["Descent from mountains to Southern scrub jungle plains", "Check-in to luxury safari glamping tents near park borders", "Afternoon 4x4 open-top game drive tracking leopards, sloth bears & wild elephants", "Campfire barbecue under starlit tropical skies"],
        travelTime: "2.5 hrs descent to southern coast",
        overnight: "Yala (Luxury Safari Glamping / Eco Lodge)"
      },
      mirissa_whales_beach: {
        title: "Blue Whale Expedition & Coconut Tree Hill",
        destination: "Mirissa & Weligama",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        activities: ["Early morning ethical Blue Whale & dolphin sailing safari", "Sunrise / Sunset photo session at Coconut Tree Hill", "Afternoon surf lesson in gentle Weligama Bay", "Candlelit fresh grilled seafood dinner directly on Mirissa beach"],
        travelTime: "1.5 hrs along scenic southern coastline",
        overnight: "Mirissa / Weligama (Beachfront Boutique)"
      },
      galle_fort_heritage: {
        title: "Colonial Galle Dutch Fort & Departure",
        destination: "Galle Fort & Airport",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
        activities: ["Morning walking tour of 17th-century Galle Fort ramparts and lighthouse", "Artisan boutique shopping for Ceylon sapphires, linen & spices", "Watch traditional stilt fishermen along the coast", "Fast direct transfer via Southern Expressway to Colombo Airport for departure"],
        travelTime: "2 hrs via Southern Expressway to Airport",
        overnight: "Departure Flight"
      },
      arugam_bay_surf: {
        title: "East Coast Surfing & Lagoon Wild Safari",
        destination: "Arugam Bay",
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
        activities: ["Dawn surf session on world-class right hand point break", "Kottukal Lagoon boat safari spotting crocodiles & exotic waterbirds", "Sunset climbing at Elephant Rock", "Beachfront pizza, live acoustic music and bonfire"],
        travelTime: "3.5 hrs from Ella",
        overnight: "Arugam Bay (Bohemian Beach Shack / Surf Resort)"
      },
      trincomalee_pigeon_island: {
        title: "Pigeon Island Coral Snorkeling & Koneswaram",
        destination: "Trincomalee & Nilaveli",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
        activities: ["Speedboat to Pigeon Island Marine National Park", "Snorkel live coral gardens with sea turtles and harmless reef sharks", "Visit Swami Rock cliff-top Koneswaram Hindu Temple", "Relax on powder white sands of Nilaveli Beach"],
        travelTime: "2.5 hrs from Sigiriya",
        overnight: "Nilaveli Beach Resort"
      },
      jaffna_northern_culture: {
        title: "Northern Jaffna Tamil Heritage & Crab Feast",
        destination: "Jaffna",
        image: "https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=600&q=80",
        activities: ["Admire golden gopurams of Nallur Kandaswamy Kovil", "Ferry expedition to remote Delft Island wild horses", "Taste legendary fiery Jaffna Crab Curry & Rio Ice Cream", "Wander star-shaped Jaffna Dutch Fort overlooking the lagoon"],
        travelTime: "Scenic Northern Expressway / Train",
        overnight: "Jaffna Heritage Hotel"
      }
    };

    const itinerary = [];

    // Assemble based on days
    if (days <= 3) {
      itinerary.push(dayModules.colombo_arrival);
      itinerary.push(dayModules.sigiriya_palace);
      itinerary.push(dayModules.galle_fort_heritage);
    } else if (days <= 5) {
      itinerary.push(dayModules.colombo_arrival);
      itinerary.push(dayModules.sigiriya_palace);
      itinerary.push(dayModules.dambulla_kandy);
      itinerary.push(dayModules.mirissa_whales_beach);
      itinerary.push(dayModules.galle_fort_heritage);
    } else if (days <= 7) {
      itinerary.push(dayModules.colombo_arrival);
      itinerary.push(dayModules.sigiriya_palace);
      itinerary.push(dayModules.dambulla_kandy);
      itinerary.push(dayModules.kandy_nuwaraeliya);
      itinerary.push(dayModules.blue_train_ella);
      itinerary.push(dayModules.yala_safari);
      itinerary.push(dayModules.galle_fort_heritage);
    } else if (days <= 10) {
      itinerary.push(dayModules.colombo_arrival);
      itinerary.push(dayModules.sigiriya_palace);
      itinerary.push(dayModules.dambulla_kandy);
      itinerary.push(dayModules.kandy_nuwaraeliya);
      itinerary.push(dayModules.blue_train_ella);
      itinerary.push(dayModules.ella_hiking_waterfalls);
      itinerary.push(dayModules.yala_safari);
      itinerary.push(dayModules.mirissa_whales_beach);
      itinerary.push(dayModules.galle_fort_heritage);
      itinerary.push({
        title: "South Coast Coastal Bliss & Departure",
        destination: "Bentota & Colombo Airport",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        activities: ["Ayurvedic couples herbal massage by the sea", "Madu River mangrove boat safari & fish therapy", "Bawa's Lunuganga tropical estate garden tour", "Comfortable airport transfer"],
        travelTime: "1.5 hrs to Airport",
        overnight: "Departure Flight"
      });
    } else {
      // 14+ Days Grand Explorer
      itinerary.push(dayModules.colombo_arrival);
      itinerary.push(dayModules.jaffna_northern_culture);
      itinerary.push(dayModules.trincomalee_pigeon_island);
      itinerary.push(dayModules.sigiriya_palace);
      itinerary.push(dayModules.dambulla_kandy);
      itinerary.push(dayModules.kandy_nuwaraeliya);
      itinerary.push(dayModules.blue_train_ella);
      itinerary.push(dayModules.ella_hiking_waterfalls);
      itinerary.push(dayModules.arugam_bay_surf);
      itinerary.push(dayModules.yala_safari);
      itinerary.push(dayModules.mirissa_whales_beach);
      itinerary.push(dayModules.galle_fort_heritage);
    }

    return itinerary;
  }

  renderItinerary(itinerary, days, style, interests) {
    if (!this.itineraryContainer) return;

    const styleName = {
      budget: "Budget Explorer",
      midrange: "Comfort & Boutique",
      luxury: "Luxury Private",
      adventure: "Adventure & Thrill",
      family: "Family Friendly",
      honeymoon: "Romantic Honeymoon",
      wildlife: "Wildlife Specialist",
      culture: "Cultural Immersion"
    }[style] || "Curated Island Tour";

    const interestsTags = interests.map(i => `<span class="bg-cyan-900/10 text-cyan-800 text-xs px-2.5 py-1 rounded-full font-medium capitalize">✨ ${i}</span>`).join(' ');

    let html = `
      <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 animate-fadeIn">
        <!-- Header Banner -->
        <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">✨ Custom Generated Itinerary</span>
              <span class="bg-teal-100 text-teal-900 text-xs font-bold px-3 py-1 rounded-full">${days} Days / ${days - 1} Nights</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              The ${days}-Day Sri Lanka ${styleName} Route
            </h3>
            <p class="text-slate-500 text-sm mt-1">Optimized travel times, must-see heritage monuments, wildlife drives, and scenic train transfers.</p>
            <div class="flex flex-wrap gap-1.5 mt-3">${interestsTags}</div>
          </div>

          <div class="flex items-center gap-2.5 no-print">
            <button onclick="window.print()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2">
              🖨️ Print / PDF
            </button>
            <button onclick="window.TripPlannerInstance.bookThisItinerary('${days}-Day ${styleName}')" class="bg-cyan-700 hover:bg-cyan-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md transition-all flex items-center gap-2">
              Book This Trip &rarr;
            </button>
          </div>
        </div>

        <!-- Route Visualization Map Bar -->
        <div class="bg-slate-50 rounded-2xl p-4 mb-8 border border-slate-200/60 overflow-x-auto">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">🗺️ Travel Route Circuit:</span>
          <div class="flex items-center gap-2 text-xs font-semibold text-slate-700 min-w-max">
            ${itinerary.map((day, idx) => `
              <span class="bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">${day.destination}</span>
              ${idx < itinerary.length - 1 ? `<span class="text-cyan-700 font-bold">&rarr;</span>` : ''}
            `).join('')}
          </div>
        </div>

        <!-- Timeline Steps -->
        <div class="relative pl-6 sm:pl-8 space-y-8">
          <div class="timeline-stem"></div>
          
          ${itinerary.map((day, index) => `
            <div class="relative flex flex-col lg:flex-row gap-6 bg-slate-50/70 hover:bg-slate-50 p-5 rounded-2xl border border-slate-200/70 transition-all">
              <!-- Timeline Dot -->
              <div class="absolute -left-9 sm:-left-11 top-5 w-7 h-7 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                ${index + 1}
              </div>

              <!-- Day Image -->
              <div class="lg:w-1/3 rounded-xl overflow-hidden h-48 sm:h-52 relative group shrink-0">
                <img src="${day.image}" alt="${day.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                <span class="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  Day ${index + 1}
                </span>
                <span class="absolute bottom-2.5 right-2.5 bg-cyan-900/85 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md">
                  📍 ${day.destination}
                </span>
              </div>

              <!-- Day Content -->
              <div class="lg:w-2/3 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <h4 class="text-lg sm:text-xl font-serif font-bold text-slate-900">${day.title}</h4>
                  </div>
                  
                  <div class="space-y-2 mt-3">
                    ${day.activities.map(act => `
                      <div class="flex items-start gap-2 text-sm text-slate-700">
                        <span class="text-cyan-700 font-bold shrink-0">✓</span>
                        <span>${act}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div class="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                  <span>🚗 <strong>Transfer:</strong> ${day.travelTime}</span>
                  <span>🏨 <strong>Stay:</strong> ${day.overnight}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Call to Action Footer -->
        <div class="mt-10 bg-linear-to-r from-cyan-900 to-teal-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl no-print">
          <div>
            <h4 class="text-xl font-serif font-bold text-amber-200">Want to customize this exact itinerary?</h4>
            <p class="text-sm text-cyan-100 mt-1">Our Sri Lankan travel specialists will adjust hotels, dates, vehicle types, and activities to your exact preferences with zero booking fees.</p>
          </div>
          <button onclick="window.TripPlannerInstance.bookThisItinerary('${days}-Day Custom ${styleName}')" class="bg-amber-400 hover:bg-amber-300 text-cyan-950 font-bold px-6 py-3.5 rounded-xl text-sm shrink-0 shadow-lg transition-all transform hover:scale-105">
            Request Free Custom Quote
          </button>
        </div>
      </div>
    `;

    this.itineraryContainer.innerHTML = html;
  }

  bookThisItinerary(itineraryName) {
    // Open Contact Modal and prefill
    if (window.App) {
      window.App.openEnquiryModal(`Custom Itinerary: ${itineraryName}`);
    }
  }
}

if (typeof window !== 'undefined') {
  window.TripPlanner = TripPlanner;
}
