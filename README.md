# Travel Sri Lanka — "One Island. Endless Experiences."

A modern, professional, visually attractive, and interactive tourism web platform promoting **Sri Lanka as a world-class travel destination**.

---

## 🌟 Key Features

### 1. Cinematic Hero & Brand Identity
- **Brand Name:** Travel Sri Lanka
- **Tagline:** *"One Island. Endless Experiences."*
- **Hero Carousel:** 4 high-resolution cinematic slides showcasing Sigiriya Lion Rock, Ella Nine Arches Bridge, Mirissa beaches, and Yala wildlife safaris.
- **Key Island Stats:** UNESCO World Heritage Sites (8), Coastline (1,340 km), Protected National Parks (26), Year-round Sunshine (365 days).

### 2. Quick Discovery Category Cards
- 6 interactive categories: 🏖️ Beaches, 🐘 Wildlife, 🏛️ Culture & Heritage, ⛰️ Mountains & Tea, 🍛 Island Gastronomy, 🏄 Action & Adventure.

### 3. Dynamic Destinations Guide
- 12+ featured destinations: **Colombo, Kandy, Ella, Galle, Sigiriya, Nuwara Eliya, Yala, Mirissa, Arugam Bay, Jaffna, Trincomalee, Anuradhapura**.
- Category filtering: All, Beaches, Cultural, Wildlife, Mountains, Adventure, City, Romantic, Family.
- Live search bar.
- Interactive modal with full destination overview, coordinates, weather, highlights, insider tips, and direct enquiry hooks.

### 4. Interactive Activity Explorer (Things to Do)
- Filterable activities: Surfing, Wildlife Safari, Blue Whale Watching, Highland Trekking, Diving & Coral Snorkeling, Ancient Temple Visits, Ceylon Tea Trails, Village Cooking Classes, Whitewater Rafting, and Ayurvedic Wellness.
- Difficulty levels, duration, season, location, and safety guidelines.

### 5. "Experience Sri Lanka Like a Local"
- Immersive storytelling cards covering the Kandy-to-Ella blue train, Minneriya Elephant Gathering, stilt fishermen, Adam's Peak sunrise, Galle Fort twilight strolls, and Ceylon tea plucking.

### 6. Food & Culture ("Taste the Island")
- Detailed culinary showcase: Sri Lankan Rice & Curry, Egg & Plain Hoppers, Kottu Roti, String Hoppers with Kiri Hodi, Pol Sambol, Lamprais, Jaffna Crab Curry, Sour Fish Ambul Thiyal, Watalappam, and Single Estate Ceylon Tea.
- Dietary flags (Vegan, Vegetarian, Seafood), spice levels (🌶️), and regional origins.

### 7. Travel Guide & Interactive "When Should I Visit?" Tool
- **Before You Travel:** ETA/eVisa details, currency (LKR), weather & monsoons, safety & Tourist Police 24/7 hotline (1912), SIM/eSIM, electricity/plugs, and temple dress code etiquette.
- **Getting Around:** Scenic trains, chauffeured AC cars, three-wheelers (tuk-tuks), express highway buses.
- **Interactive Season Matrix:** Select any month (Jan - Dec) to get real-time regional weather, surf spot conditions, and wildlife encounter recommendations.

### 8. Dynamic Trip Planner & Custom Itinerary Generator
- Filter by duration (3, 5, 7, 10, 14, 21+ days), travel style (Budget, Mid-range, Luxury, Adventure, Family, Honeymoon, Wildlife, Culture), and interests.
- Generates a day-by-day visual timeline with travel times, route circuit, stay recommendations, and print/PDF export.

### 9. Tour Packages
- Sri Lanka Highlights (7D/6N), Tropical Beach Escape (5D/4N), Wildlife Safari Odyssey (6D/5N), Cultural Heritage Tour (8D/7N), Hill Country & Tea Trails (5D/4N), Romantic Honeymoon Sri Lanka (10D/9N).
- Inclusions/exclusions and instant booking inquiry prefilling.

### 10. Interactive Leaflet.js Map
- Custom Sri Lanka map with interactive emoji markers.
- Filter by Beaches, Wildlife, Culture, Mountains.
- Synchronized sidebar preview card with direct deep-links.

### 11. Travel Blog & Insights
- Filterable articles covering top destinations, food guides, packing tips, first-time visitor guidelines, and sustainable tourism.

### 12. Sustainable Tourism ("Travel Better. Leave a Positive Impact.")
- 7 Core Pillars of responsible tourism in Sri Lanka.
- Interactive "Responsible Traveler Pledge" modal.

### 13. Masonry Photo Gallery & Lightbox
- High-res photo gallery with category tabs and a touch/keyboard-friendly full-screen Lightbox viewer (ESC, Left, Right arrows).

### 14. Contact & Trip Enquiry System
- Multi-field inquiry form with validation, emergency hotline (1912), official Colombo office location, and direct WhatsApp chat.
- Inquiries are stored in `localStorage` and managed inside the CMS Admin Portal.

### 15. Built-in CMS / Admin Portal
- Accessible via the footer link or `#admin` URL hash.
- Overview metrics, inquiries manager with status updates (New, Contacted, Confirmed), CSV export, destination management, and newsletter subscriber tracking.

---

## 🚀 How to Run and View the Project

1. Simply double-click or open `index.html` in any web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. No installation or build steps are required.
3. The website utilizes Tailwind CSS, Leaflet.js, and curated royalty-free Unsplash photography over CDN.

---

## 📁 File Structure

```
c:/Users/terra/Desktop/MANIKE/manike web/
├── index.html              # Main single-page application with all full sections & modals
├── README.md               # Documentation & project guide
├── css/
│   └── styles.css          # Custom styling, typography, tropical palette, animations & glassmorphism
└── js/
    ├── data.js             # Core dataset for destinations, activities, culinary dishes, packages, blog, itineraries
    ├── map.js              # Leaflet.js interactive Sri Lanka map with custom markers & popup previews
    ├── planner.js          # Interactive dynamic trip planner & custom itinerary generator
    ├── gallery.js          # Masonry photo gallery & interactive modal lightbox
    ├── admin.js            # Admin / CMS portal for managing content, enquiries & newsletter leads
    └── app.js              # Core application router, filters, search, mobile menu, animations, toasts
```

---

## 🎨 Design System

- **Primary Colors:** Ocean Blue (`#007791`), Deep Navy (`#083344`), Tropical Emerald (`#1B4D3E`), Jungle Green (`#2D6A4F`)
- **Accent Colors:** Warm Sand (`#E9C46A`), Amber Gold (`#D4A373`), Sunset Terracotta (`#E76F51`)
- **Typography:** *Playfair Display* (Editorial headings) + *Plus Jakarta Sans* (Clean, modern UI text)
