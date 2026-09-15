/**
 * Travel Sri Lanka - Core Dataset
 * "One Island. Endless Experiences."
 */

const SRI_LANKA_DATA = {
  brand: {
    name: "Travel Sri Lanka",
    tagline: "One Island. Endless Experiences.",
    subheading: "Explore golden beaches, ancient kingdoms, misty mountains, incredible wildlife, and unforgettable island experiences.",
    emergencyHotline: "1912 (Tourist Police 24/7)",
    officialEmail: "info@travelsrilanka.island",
    officeLocation: "03 Galle Face Terrace, Colombo 00300, Sri Lanka",
    phone: "+94 11 242 6900 / +94 77 123 4567"
  },

  destinations: [
    {
      id: "sigiriya",
      name: "Sigiriya",
      tagline: "The Lion Rock Citadel & Ancient Marvel",
      categories: ["cultural", "history", "adventure", "family"],
      province: "Central / Matale District",
      lat: 7.9570,
      lng: 80.7603,
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
      shortDescription: "An ancient 5th-century palace fortress perched atop a dramatic 200-meter granite monolith, featuring world-famous frescoes, water gardens, and lion's paw gate.",
      fullDescription: "Rising dramatically 200 meters above the central plains, Sigiriya (Lion Rock) is Sri Lanka's most iconic UNESCO World Heritage Site. Built by King Kashyapa in the 5th century AD, it combines jaw-dropping engineering, magnificent water gardens, mirror walls inscribed with ancient poetry, and vibrant celestial maiden frescoes. Climb the spiral stairs through the colossal carved Lion's Paws to the summit for 360-degree views of emerald jungle canopy.",
      bestTimeToVisit: "December to April",
      recommendedDuration: "1 - 2 Days",
      mainAttractions: ["Lion's Paw Staircase", "Frescoes of the Maidens", "Water Gardens & Moats", "Pidurangala Rock Sunrise", "Sigiriya Archaeological Museum"],
      activities: ["Rock Fortress Climbing", "Pidurangala Sunrise Hike", "Hot Air Ballooning in Kandalama", "Village Bullock Cart & Lake Tour"],
      insiderTip: "Climb Pidurangala Rock at 5:15 AM for a breathtaking sunrise view of Sigiriya Rock itself glowing in the morning golden light.",
      weather: "Warm & Tropical (28°C - 33°C)"
    },
    {
      id: "ella",
      name: "Ella",
      tagline: "Misty Mountains, Tea Country & Iconic Bridges",
      categories: ["mountains", "adventure", "romantic", "nature"],
      province: "Uva Province / Badulla",
      lat: 6.8667,
      lng: 81.0466,
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80",
      shortDescription: "A laid-back hill country town surrounded by cloud-forests, emerald tea estates, cascading waterfalls, and the world-famous Nine Arches Bridge.",
      fullDescription: "Nestled high in the central highlands, Ella is a paradise for hikers, nature lovers, and travelers seeking cool mountain air. The town is famous for the architectural masterpiece of Nine Arches Bridge where the blue train glides over misty valleys, the epic vantage point of Ella Rock, Little Adam's Peak, and refreshing natural plunge pools at Diyaluma and Ravana Falls.",
      bestTimeToVisit: "January to May",
      recommendedDuration: "2 - 3 Days",
      mainAttractions: ["Nine Arches Bridge", "Little Adam's Peak", "Ella Rock Trek", "Ravana Falls & Ravana Cave", "Diyaluma Waterfall Upper Pools"],
      activities: ["Watching the Blue Train at Nine Arches", "Tea Factory Guided Tasting", "Zip-lining over tea hills (Flying Ravana)", "Café hopping & cooking classes"],
      insiderTip: "Check the local train schedule at Ella station to photograph the iconic blue train crossing Nine Arches Bridge precisely at 9:20 AM or 11:45 AM.",
      weather: "Cool & Pleasant (18°C - 25°C)"
    },
    {
      id: "galle",
      name: "Galle",
      tagline: "Colonial Fort, Cobblestone Streets & Ocean Vistas",
      categories: ["cultural", "beaches", "romantic", "city", "history"],
      province: "Southern Province",
      lat: 6.0535,
      lng: 80.2210,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
      shortDescription: "A UNESCO-listed 16th-century Portuguese and Dutch fortress town boasting stylish boutiques, heritage ramparts, lighthouse, and vibrant seaside bistros.",
      fullDescription: "Galle Fort is a living, breathing historical wonder on the southwest coast. Within its sturdy granite ramparts lies a timeless labyrinth of Dutch-colonial villas, artisan jewelry ateliers, chic gelato shops, centuries-old churches, and the iconic white lighthouse framed by palm trees. The ramparts provide the finest sunset viewing spot on the southern coast as ocean waves crash against the stone walls.",
      bestTimeToVisit: "November to April",
      recommendedDuration: "1 - 2 Days",
      mainAttractions: ["Galle Fort Lighthouse", "Dutch Reformed Church", "Flag Rock Bastion", "Maritime Archaeology Museum", "Pedlar Street Boutiques"],
      activities: ["Sunset Walk on Ramparts", "Gem & Jewelry Shopping", "Art Gallery Browsing", "Boutique Café Hopping", "Nearby Unawatuna Beach Surfing"],
      insiderTip: "Walk along the western ramparts near Flag Rock around 5:30 PM to watch local cliff divers and enjoy the ocean sunset.",
      weather: "Tropical & Breezy (27°C - 31°C)"
    },
    {
      id: "kandy",
      name: "Kandy",
      tagline: "Sacred Relics, Royal Lakes & Kandyan Heritage",
      categories: ["cultural", "history", "mountains", "family"],
      province: "Central Province",
      lat: 7.2906,
      lng: 80.6337,
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=600&q=80",
      shortDescription: "The cultural soul of Sri Lanka, home to the sacred Temple of the Tooth Relic, serene Kandy Lake, royal botanical gardens, and traditional Kandyan dancing.",
      fullDescription: "Surrounded by misty green hills and centered on a peaceful artificial lake, Kandy was the last royal capital of ancient Sri Lankan kings. The sacred Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) holds the country's most venerated Buddhist relic. Visitors also cherish the world-renowned Royal Botanical Gardens in Peradeniya with giant bamboo and orchid houses, plus colorful evening cultural drum dances.",
      bestTimeToVisit: "December to April & July/August (Esala Perahera)",
      recommendedDuration: "2 Days",
      mainAttractions: ["Temple of the Sacred Tooth Relic", "Royal Botanical Gardens Peradeniya", "Kandy Lake Walkway", "Bahirawakanda Giant Buddha", "Ceylon Tea Museum"],
      activities: ["Witnessing the Sacred Puja Ceremony", "Kandyan Cultural Dance & Fire Walking", "Boarding the Mainline Train to Ella", "Spice Garden Tour"],
      insiderTip: "Wear modest white clothing covering shoulders and knees when visiting the Temple of the Tooth, and attend the 6:30 PM evening drumming puja.",
      weather: "Mild & Temperate (22°C - 28°C)"
    },
    {
      id: "yala",
      name: "Yala National Park",
      tagline: "World's Highest Leopard Density & Wild Safari",
      categories: ["wildlife", "adventure", "nature", "family"],
      province: "Southern & Uva Province",
      lat: 6.3725,
      lng: 81.5175,
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80",
      shortDescription: "Sri Lanka's premier safari destination boasting dense populations of Sri Lankan leopards, wild elephants, sloth bears, spotted deer, and saltwater crocodiles.",
      fullDescription: "Spanning over 978 square kilometers where dry scrub forest meets the Indian Ocean, Yala is renowned globally for having one of the highest densities of leopards on Earth. Open-top 4x4 safaris traverse lagoons, sand dunes, and thorn forest to encounter wild elephant herds, elusive sloth bears, crocodiles basking on river banks, and over 215 bird species.",
      bestTimeToVisit: "February to June (Dry season provides best leopard sightings)",
      recommendedDuration: "1 - 2 Days",
      mainAttractions: ["Block 1 Safari Trail", "Sithulpawwa Rock Temple", "Patanangala Beach", "Kikiliyawila Lagoon", "Manik Ganga River"],
      activities: ["4x4 Dawn & Dusk Game Drives", "Glamping in Luxury Safari Tents", "Birdwatching Tours", "Wildlife Photography"],
      insiderTip: "Book a full-day or double safari (early morning 5:30 AM and late afternoon 3:00 PM) for the highest chance of spotting the elusive Sri Lankan leopard.",
      weather: "Warm & Dry (29°C - 34°C)"
    },
    {
      id: "mirissa",
      name: "Mirissa",
      tagline: "Golden Sands, Blue Whales & Vibrant Coastal Vibe",
      categories: ["beaches", "wildlife", "adventure", "romantic"],
      province: "Southern Province",
      lat: 5.9483,
      lng: 80.4578,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      shortDescription: "A crescent-shaped tropical beach haven famous for blue whale watching expeditions, Coconut Tree Hill, beginner-friendly surf, and beachfront seafood grills.",
      fullDescription: "Mirissa is the quintessential tropical paradise on Sri Lanka's south coast. Fringed by swaying coconut palms, its turquoise bay is world-famous as one of the best locations on the planet to see the colossal Blue Whale and playful spinner dolphins. By day, climb Coconut Tree Hill and surf gentle waves; by night, dine on candlelit tables right on the sand with freshly caught seafood.",
      bestTimeToVisit: "November to April",
      recommendedDuration: "2 - 4 Days",
      mainAttractions: ["Coconut Tree Hill", "Mirissa Main Beach & Parrot Rock", "Secret Beach Mirissa", "Mirissa Harbour", "Weligama Bay Surf"],
      activities: ["Ethical Blue Whale & Dolphin Watching", "Sunset Photography at Coconut Tree Hill", "Surfing Lessons", "Snorkeling with Sea Turtles in Polhena"],
      insiderTip: "Visit Coconut Tree Hill early in the morning around 6:30 AM to beat the crowd and capture surreal sunrise photos overlooking the ocean.",
      weather: "Warm & Tropical (28°C - 32°C)"
    },
    {
      id: "nuwara-eliya",
      name: "Nuwara Eliya",
      tagline: "Little England, Pure Ceylon Tea & Misty Waterfalls",
      categories: ["mountains", "romantic", "cultural", "nature"],
      province: "Central Province",
      lat: 6.9497,
      lng: 80.7891,
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
      shortDescription: "Known as 'Little England', this high-altitude highland city features lush emerald tea plantations, Tudor mansions, Lake Gregory, and cool alpine weather.",
      fullDescription: "Perched at 1,868 meters above sea level beneath Mount Pedro, Nuwara Eliya is the capital of Sri Lanka's tea industry. With crisp mountain air, manicured English gardens, red-brick post offices, and rolling valleys carpeted in manicured tea bushes, it offers a refreshing contrast to the tropical lowlands. Tour historic tea factories, take high tea in heritage colonial hotels, and hike to Horton Plains World's End.",
      bestTimeToVisit: "February to May & August to September",
      recommendedDuration: "2 Days",
      mainAttractions: ["Pedro & Damro Tea Estates", "Lake Gregory & Victoria Park", "Horton Plains & World's End", "Colonial Post Office (1894)", "Lovers Leap Waterfall"],
      activities: ["High Tea at The Grand Hotel", "Tea Plucking & Tasting Experience", "Horton Plains 9km Trail Hike", "Swan Boat rides on Lake Gregory"],
      insiderTip: "Bring a light warm jacket as evening temperatures in Nuwara Eliya can drop to 10°C - 14°C.",
      weather: "Cool & Crisp (12°C - 20°C)"
    },
    {
      id: "arugam-bay",
      name: "Arugam Bay",
      tagline: "World-Class Surfing, Bohemian Cafes & Wild East Coast",
      categories: ["beaches", "adventure", "wildlife"],
      province: "Eastern Province / Ampara",
      lat: 6.8436,
      lng: 81.8347,
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
      shortDescription: "Ranked among the top 10 surf spots in the world, Arugam Bay offers legendary right-hand point breaks, bohemian beach shacks, and wild lagoons with elephants.",
      fullDescription: "On the sun-drenched eastern coast, Arugam Bay is a mecca for international surfers and free spirits. The legendary Main Point produces consistent, glassy right-hand point breaks from May to October. Beyond surfing, the surrounding landscape is untouched nature: spot wild elephants wandering by Panama tank, kayak through Kottukal lagoon, and watch the sun rise over the Indian Ocean.",
      bestTimeToVisit: "May to October (Peak East Coast Season)",
      recommendedDuration: "3 - 5 Days",
      mainAttractions: ["Main Point & Baby Point Surf", "Elephant Rock Sunset", "Panama & Kumana National Park", "Kottukal Lagoon", "Muhudu Maha Viharaya Temple"],
      activities: ["Surfing for Beginners & Pros", "Sunset climbing on Elephant Rock", "Lagoon Safari with Mangroves & Crocs", "Kumana Bird & Leopard Safari"],
      insiderTip: "When the southwest of Sri Lanka gets rain in June-September, Arugam Bay has perfect sunny blue skies and prime surf swells.",
      weather: "Sunny & Warm (29°C - 34°C)"
    },
    {
      id: "colombo",
      name: "Colombo",
      tagline: "Vibrant Capital, Colonial Charm & Urban Culinary Hub",
      categories: ["city", "cultural", "food", "family"],
      province: "Western Province",
      lat: 6.9271,
      lng: 79.8612,
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
      shortDescription: "The energetic oceanfront metropolis blending modern skyscrapers, colonial Dutch hospital precincts, vibrant Pettah bazaar, and Michelin-caliber seafood dining.",
      fullDescription: "Sri Lanka's oceanfront commercial capital is a dynamic gateway where past meets future. Stroll along the ocean breeze on Galle Face Green while snacking on crispy isso wade (prawn fritters), explore the sensory overload of Pettah's spice markets, admire Gangaramaya Temple's eclectic artifacts, and dine at Asia's 50 Best restaurants like Ministry of Crab in the restored 17th-century Old Dutch Hospital.",
      bestTimeToVisit: "November to April",
      recommendedDuration: "1 - 2 Days",
      mainAttractions: ["Galle Face Green", "Gangaramaya Temple & Seema Malaka", "Old Dutch Hospital Precinct", "Pettah Floating Market & Red Mosque", "National Museum of Colombo"],
      activities: ["Sunset Street Food at Galle Face", "Tuk-Tuk City Safari & Architecture Tour", "Fine Dining at Ministry of Crab", "Art & Souvenir Shopping at Barefoot & Laksala"],
      insiderTip: "Visit the stunning candy-striped Jami Ul-Alfar Mosque (Red Mosque) in Pettah before noon for vibrant photography and vibrant bazaar energy.",
      weather: "Tropical Maritime (27°C - 32°C)"
    },
    {
      id: "jaffna",
      name: "Jaffna",
      tagline: "Northern Tamil Heritage, Golden Kovils & Island Forts",
      categories: ["cultural", "history", "food"],
      province: "Northern Province",
      lat: 9.6615,
      lng: 80.0255,
      image: "https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1621849400072-f554417f7051?auto=format&fit=crop&w=600&q=80",
      shortDescription: "The heart of Sri Lanka's northern Tamil culture, featuring towering Hindu gopurams, Dutch fortresses, unique palmyra cuisine, and remote causeway islands.",
      fullDescription: "Distinct in language, cuisine, and atmosphere, Jaffna in the far north is a captivating cultural treasure. Marvel at the soaring gold gopurams of Nallur Kandaswamy Kovil, wander the massive star-shaped Jaffna Fort overlooking the lagoon, take a scenic ferry to Delft Island to see wild horses and baobab trees, and savor legendary Jaffna Crab Curry cooked with roasted curry powder and fresh coconut milk.",
      bestTimeToVisit: "December to April",
      recommendedDuration: "2 - 3 Days",
      mainAttractions: ["Nallur Kandaswamy Temple", "Jaffna Fort & Clock Tower", "Delft Island & Wild Horses", "Nagadeepa Purana Viharaya", "Keerimalai Sacred Springs"],
      activities: ["Attending the Nallur Kovil Evening Ceremony", "Tasting authentic Jaffna Crab Curry & Rio Ice Cream", "Ferry trip to remote Delft Island", "Casuarina Beach Swimming"],
      insiderTip: "Do not miss the legendary Rio Ice Cream parlour near Nallur Kovil for their signature Sundaes and tropical fruit flavors.",
      weather: "Warm & Sun-drenched (28°C - 34°C)"
    },
    {
      id: "trincomalee",
      name: "Trincomalee",
      tagline: "Crystal Bays, Koneswaram Temple & Marine Sanctuaries",
      categories: ["beaches", "wildlife", "cultural", "adventure"],
      province: "Eastern Province",
      lat: 8.5874,
      lng: 81.2152,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      shortDescription: "Home to one of the world's finest natural deep-water harbors, cliff-top Koneswaram Temple, crystal Nilaveli beaches, and Pigeon Island coral reefs.",
      fullDescription: "Trincomalee on the northeast coast combines spiritual grandeur with pristine beaches. Nilaveli Beach offers powder-soft white sand and calm turquoise waters, while offshore Pigeon Island National Park is Sri Lanka's premier spot to snorkel with blacktip reef sharks and sea turtles. Perched on Swami Rock overlooking the ocean is the ancient Koneswaram Hindu temple.",
      bestTimeToVisit: "April to October",
      recommendedDuration: "2 - 3 Days",
      mainAttractions: ["Nilaveli & Uppuveli Beaches", "Pigeon Island National Marine Park", "Koneswaram Temple on Swami Rock", "Fort Frederick & Wild Deer", "Kanniya Hot Springs"],
      activities: ["Snorkeling with Sharks & Turtles at Pigeon Island", "East Coast Blue & Sperm Whale Watching", "Exploring Swami Rock cliff-top temple", "Scuba diving coral wrecks"],
      insiderTip: "Take an early 8:00 AM boat to Pigeon Island before the midday sun to enjoy crystal clear visibility across the live coral gardens.",
      weather: "Sunny & Warm (29°C - 35°C)"
    },
    {
      id: "anuradhapura",
      name: "Anuradhapura",
      tagline: "Cradle of Civilization, Giant Stupas & Sacred Bo Tree",
      categories: ["cultural", "history"],
      province: "North Central Province",
      lat: 8.3114,
      lng: 80.4037,
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=600&q=80",
      shortDescription: "An ancient royal capital founded in 4th century BC, with mammoth white dagobas, monastic ruins, and the world's oldest historically documented tree (Jaya Sri Maha Bodhi).",
      fullDescription: "As the first ancient capital of Sri Lanka that flourished for over 1,300 years, Anuradhapura is one of the grandest archaeological treasures in Asia. Immense stupas such as Ruwanwelisaya and Jetavanaramaya (once the third tallest structure in the ancient world after the Pyramids of Giza) dominate the horizon. Devotees from across the globe gather around Jaya Sri Maha Bodhi, planted in 288 BC.",
      bestTimeToVisit: "November to April",
      recommendedDuration: "1 - 2 Days",
      mainAttractions: ["Ruwanwelisaya Stupa", "Jaya Sri Maha Bodhi Tree", "Jetavanaramaya Dagoba", "Twin Ponds (Kuttam Pokuna)", "Isurumuniya Rock Temple & Lovers Sculpture"],
      activities: ["Bicycle tour of ancient ruins", "Evening candle lighting ceremony at Ruwanwelisaya", "Photography of stone moonstones & guardstones", "Mihintale pilgrimage summit"],
      insiderTip: "Rent a bicycle to explore the vast sacred city ruins peacefully in the early morning breeze.",
      weather: "Dry Zone Warm (28°C - 33°C)"
    }
  ],

  activities: [
    {
      id: "surf-coasts",
      title: "Surfing Tropical Point Breaks",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Ride world-class right-hand waves in Arugam Bay, or gentle beginner rollers in Weligama and Hiriketiya.",
      difficulty: "All Levels (Beginner to Pro)",
      duration: "2 - 4 Hours",
      location: "Weligama, Arugam Bay, Midigama, Hikkaduwa",
      bestSeason: "Nov - Apr (South/West) | May - Oct (East Coast)",
      highlights: ["Consistent tropical warm water (no wetsuit needed)", "Licensed ISA surf instructors & affordable board rentals", "Vibrant beachfront surf cafes and sunset sessions"]
    },
    {
      id: "wildlife-safari",
      title: "Jeep Safaris & Wildlife Encounters",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Track elusive leopards, wild elephant herds, sloth bears, and endemic birds in open-top 4x4 jeeps.",
      difficulty: "Easy",
      duration: "3.5 - 7 Hours",
      location: "Yala, Wilpattu, Udawalawe, Minneriya",
      bestSeason: "Year-Round (Best Feb - Oct)",
      highlights: ["World's highest density of Sri Lankan leopards in Yala", "Spectacular Minneriya Great Elephant Gathering in dry season", "Over 400 species of resident and migratory birds"]
    },
    {
      id: "blue-whale-watching",
      title: "Blue Whale & Dolphin Marine Expeditions",
      category: "wildlife",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Sail into the deep Indian Ocean trench to witness the largest creature on Earth along with playful acrobatic spinner dolphins.",
      difficulty: "Easy",
      duration: "3 - 5 Hours",
      location: "Mirissa (South) & Trincomalee (East)",
      bestSeason: "Nov - Apr (Mirissa) | May - Sep (Trincomalee)",
      highlights: ["Ethical boat operators certified with marine safety", "High encounter rate for Blue Whales, Sperm Whales, and Bryde's Whales", "Pods of hundreds of leaping spinner dolphins"]
    },
    {
      id: "highland-hiking",
      title: "Epic Highland Trekking & Peaks",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Hike through mist-shrouded cloud forests, sheer drops at World's End, and holy pilgrimages atop Adam's Peak.",
      difficulty: "Moderate to Challenging",
      duration: "3 - 8 Hours",
      location: "Ella, Horton Plains, Knuckles Range, Adam's Peak",
      bestSeason: "Dec - May (Peak season for Adam's Peak)",
      highlights: ["Jaw-dropping panoramic views at World's End 870m cliff drop", "Sacred night climb of Adam's Peak to witness the shadow of the summit", "Knuckles Mountain Range UNESCO biodiversity trails"]
    },
    {
      id: "diving-snorkeling",
      title: "Coral Reef Diving & Shipwreck Exploration",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Immerse yourself in vibrant coral gardens, swim with harmless blacktip sharks, and explore historical sea wrecks.",
      difficulty: "Beginner to Advanced (PADI)",
      duration: "2 - 4 Hours",
      location: "Pigeon Island, Hikkaduwa, Unawatuna, Kalpitiya",
      bestSeason: "Nov - Apr (West/South) | May - Oct (East Coast)",
      highlights: ["Pigeon Island National Marine Park live coral reef", "Historic British aircraft carrier HMS Hermes wreck in Batticaloa", "Certified PADI dive centers with modern equipment"]
    },
    {
      id: "ancient-temples",
      title: "Sacred Temple Visits & Cultural Rituals",
      category: "culture",
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Experience ancient Buddhist and Hindu rituals, sacred relics, temple murals, and lotus flower offerings.",
      difficulty: "Easy",
      duration: "2 - 3 Hours",
      location: "Kandy, Sigiriya/Dambulla, Anuradhapura, Polonnaruwa, Jaffna",
      bestSeason: "Year-Round",
      highlights: ["Temple of the Sacred Tooth Relic evening drumming ceremony", "Dambulla Golden Cave Temples with 150+ Buddha statues", "Awe-inspiring golden gopurams of Nallur Kovil in Jaffna"]
    },
    {
      id: "ceylon-tea-experience",
      title: "Ceylon Tea Trail & Master Tasting",
      category: "nature",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Walk alongside traditional tea pluckers in emerald estates, discover century-old British rolling machinery, and taste pure Single Estate Ceylon teas.",
      difficulty: "Easy",
      duration: "2 - 3 Hours",
      location: "Nuwara Eliya, Ella, Haputale, Kandy",
      bestSeason: "Year-Round",
      highlights: ["Hands-on 'two leaves and a bud' plucking workshop", "Factory tour explaining withering, rolling, fermenting, and grading", "Professional tea cupping session comparing BOP, Pekoe, and Silver Tips"]
    },
    {
      id: "village-cooking-class",
      title: "Authentic Village Cooking & Spice Gardens",
      category: "culture",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Pick organic vegetables from a village farm, grind fresh Ceylon cinnamon and spices on a traditional stone, and cook in clay pots over firewood.",
      difficulty: "Easy & Delicious",
      duration: "3 Hours",
      location: "Habarana, Ella, Kandy, Galle",
      bestSeason: "Year-Round",
      highlights: ["Learn how to extract first & second press coconut milk from fresh coconuts", "Cook 5 different curries with seasonal herbs and clay pots", "Enjoy a festive feast served on traditional banana leaves"]
    },
    {
      id: "whitewater-rafting",
      title: "Whitewater Rafting & Jungle Canyoning",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Conquer grade 2 to 4 rapids on the scenic Kelani River surrounded by lush rainforest, filming location of 'The Bridge on the River Kwai'.",
      difficulty: "Moderate",
      duration: "3 Hours",
      location: "Kitulgala",
      bestSeason: "Year-Round (Best May - Dec)",
      highlights: ["Exhilarating 5km rapid run with licensed safety kayakers", "Jungle stream confidence jumping and natural water sliding", "Fresh riverside lunch with local village hospitality"]
    },
    {
      id: "ayurveda-wellness",
      title: "Holistic Ayurveda & Yoga Rejuvenation",
      category: "nature",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Restore mind and body through 5,000-year-old traditional Sri Lankan herbal medicine, Shirodhara oil treatments, and sunrise yoga overlooking the sea.",
      difficulty: "Relaxing",
      duration: "1 - 7 Days",
      location: "Bentota, Tangalle, Kandy, Wadduwa",
      bestSeason: "Year-Round",
      highlights: ["Personalized body constitution (Dosha) consultations with certified Ayurvedic doctors", "Shirodhara warm herbal oil forehead drip therapy", "Daily oceanfront sunrise and sunset mindfulness meditation"]
    }
  ],

  experiences: [
    {
      id: "scenic-blue-train",
      title: "The Legendary Kandy to Ella Train Journey",
      subtitle: "Voted one of the most picturesque railway journeys on Earth",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80",
      description: "Lean out the open doorways as the iconic bright blue train winds through high-altitude pine forests, plunging waterfalls, and cascading emerald tea carpets. Passing over the engineering marvel of Nine Arches Bridge, this 6-hour train journey captures the romantic soul of travel.",
      tag: "Iconic Experience",
      region: "Central Highlands"
    },
    {
      id: "elephant-gathering",
      title: "The Great Minneriya Elephant Gathering",
      subtitle: "The largest meeting of Asian elephants anywhere in the world",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1000&q=80",
      description: "During the dry season from July to October, up to 300 wild elephants congregate around the ancient Minneriya water reservoir. Watch elephant matriarchs guide playful calves, young bulls tussle, and herds socialize in an awe-inspiring natural spectacle.",
      tag: "Wildlife Spectacle",
      region: "Cultural Triangle"
    },
    {
      id: "stilt-fishermen",
      title: "Sunset Stilt Fishermen of the South Coast",
      subtitle: "A centuries-old poetic fishing tradition found only in Sri Lanka",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      description: "Along the coastal shallows of Weligama, Ahangama, and Koggala, fishermen balance skillfully on single wooden poles embedded into coral reefs. Silhouetted against pastel pink and fiery orange sunsets, it is an unforgettable cultural sight.",
      tag: "Living Heritage",
      region: "Southern Coast"
    },
    {
      id: "adams-peak-sunrise",
      title: "Sacred Sunrise Pilgrimage atop Adam's Peak (Sri Pada)",
      subtitle: "Climbing through the clouds to witness the sacred triangular shadow",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80",
      description: "Ascend 5,500 illuminated stone steps through the night alongside pilgrims chanting ancient hymns. Reach the 2,243m summit just as dawn breaks, revealing a breathtaking sea of clouds and the mysterious optical phenomenon of the mountain's perfect triangular shadow.",
      tag: "Spiritual Adventure",
      region: "Sabaragamuwa Highlands"
    },
    {
      id: "galle-fort-twilight",
      title: "Twilight Stroll Across Colonial Galle Fort Ramparts",
      subtitle: "Centuries of maritime history meeting ocean breezes and art",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80",
      description: "As the afternoon tropical heat softens, walk along 400-year-old coral-stone battlements. Watch children fly vibrant kites, wave at local cliff jumpers, and stroll down cobblestone lanes lined with Dutch villas, boutique art galleries, and candlelit courtyard restaurants.",
      tag: "Living History",
      region: "Southern Coast"
    },
    {
      id: "tea-plucking-trail",
      title: "Handcrafting Pure Ceylon Tea with Estate Masters",
      subtitle: "From mist-kissed hillside leaf to the world's most celebrated brew",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80",
      description: "Strap on a traditional wicker basket and walk among dew-drenched tea bushes with expert local pluckers. Learn the art of selecting the prized two leaves and a bud, watch century-old British copper rollers in action, and finish with a refined high-tea tasting.",
      tag: "Sensory Journey",
      region: "Nuwara Eliya"
    }
  ],

  foodAndCulture: {
    intro: "Sri Lankan cuisine is a vibrant, aromatic feast of island spices, fresh coconut milk, tropical fruits, and ocean-fresh seafood, refined over millennia at the crossroads of maritime silk road trading routes.",
    dishes: [
      {
        id: "rice-curry",
        name: "Sri Lankan Rice & Curry",
        localName: "Bhat Saha Maaluwa",
        region: "Island-wide",
        diet: "Vegetarian / Vegan / Non-Veg options",
        spiceLevel: "🌶️🌶️🌶️ Medium-Hot",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        description: "The quintessential national staple: a mound of fragrant red or white rice surrounded by 5 to 7 contrasting curries (dhal, spiced jackfruit, beetroot, gotukola sambol, chicken/fish, and crispy papadums).",
        pairings: "Pol Sambol and sweet mango chutney"
      },
      {
        id: "egg-hoppers",
        name: "Egg & Plain Hoppers",
        localName: "Appa / Bithtara Appa",
        region: "Central & Western",
        diet: "Vegetarian & Egg",
        spiceLevel: "🌶️🌶️ Mild to Spicy (depending on sambol)",
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=600&q=80",
        description: "Bowl-shaped crispy fermented rice-flour and coconut-milk pancakes with a soft, pillowy center, often baked with a fresh farm egg in the middle.",
        pairings: "Spicy Lunu Miris (chili-onion relish) & Seeni Sambol (caramelized onion relish)"
      },
      {
        id: "kottu-roti",
        name: "Kottu Roti (Street Food King)",
        localName: "Kottu",
        region: "Colombo & Island-wide",
        diet: "Non-Veg & Vegetarian",
        spiceLevel: "🌶️🌶️🌶️ Spicy & Savory",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        description: "The rhythmic heartbeat of Sri Lankan street dining! Flaky Godamba flatbread chopped furiously on a sizzling iron griddle with crunchy vegetables, eggs, spices, and rich curry sauce.",
        pairings: "A squeeze of fresh lime and cold ginger beer"
      },
      {
        id: "string-hoppers",
        name: "String Hoppers with Kiri Hodi",
        localName: "Idiyappam",
        region: "Island-wide",
        diet: "Vegan Friendly",
        spiceLevel: "🌶️ Mild & Comforting",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        description: "Delicate steamed rice noodle nests woven into airy discs, traditionally served for breakfast and dinner alongside mild turmeric-infused coconut milk gravy (Kiri Hodi) and coconut sambol.",
        pairings: "Kiri Hodi and spicy Pol Sambol"
      },
      {
        id: "pol-sambol",
        name: "Fresh Coconut Pol Sambol",
        localName: "Pol Sambol",
        region: "Island-wide",
        diet: "Vegan",
        spiceLevel: "🌶️🌶️🌶️ Fiery & Fresh",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        description: "A beloved island condiment crafted by stone-grinding freshly grated coconut with dry red chilies, shallots, lime juice, sea salt, and a hint of Maldive fish.",
        pairings: "Perfect with bread, hoppers, string hoppers, and rice"
      },
      {
        id: "lamprais",
        name: "Lamprais (Dutch Burgher Delicacy)",
        localName: "Lump Rice",
        region: "Colombo Dutch Heritage",
        diet: "Meat (Mixed Meats)",
        spiceLevel: "🌶️🌶️ Aromatic & Rich",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        description: "A celebrated colonial heritage parcel consisting of ghee-cooked stock rice, mixed meat curry, frikkadels (Dutch meatballs), blachan (shrimp paste), and brinjal moju, wrapped in a banana leaf and slow-baked.",
        pairings: "Pickled shallots and ash plantain"
      },
      {
        id: "jaffna-crab-curry",
        name: "Spicy Jaffna Crab Curry",
        localName: "Kakuluwo Curry",
        region: "Northern Province / Jaffna",
        diet: "Seafood Feast",
        spiceLevel: "🌶️🌶️🌶️🌶️ Extra Spicy",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
        description: "Fresh lagoon or sea crab simmered in a dark, robust curry sauce made with roasted Jaffna spice blend, toasted cumin, curry leaves, and rich coconut cream.",
        pairings: "Warm roast bread or steamed Jaffna red rice"
      },
      {
        id: "ambul-thiyal",
        name: "Sour Fish Ambul Thiyal",
        localName: "Malu Ambul Thiyal",
        region: "Southern Coast (Galle & Matara)",
        diet: "Seafood",
        spiceLevel: "🌶️🌶️ Tart, Peppery & Rich",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        description: "A traditional southern preservation dish where firm cubes of tuna or seer fish are slow-simmered in clay pots with crushed black pepper, spices, and dried goraka (garcinia) creating a tangy, dark glaze.",
        pairings: "Pol Roti and Dhal Curry"
      },
      {
        id: "watalappam",
        name: "Watalappam (Spiced Coconut Custard)",
        localName: "Watalappam",
        region: "Sri Lankan Malay & Island-wide",
        diet: "Vegetarian Sweet",
        spiceLevel: "🍯 Sweet & Spiced",
        image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=600&q=80",
        description: "A silky steamed dessert pudding crafted from rich coconut milk, dark Kitul kithul palm jaggery, eggs, fragrant cardamom, nutmeg, and crowned with toasted cashew nuts.",
        pairings: "Freshly brewed hot Ceylon black tea"
      },
      {
        id: "ceylon-tea",
        name: "World-Renowned Ceylon Tea",
        localName: "Thee",
        region: "Central Hill Country (Nuwara Eliya, Dimbula, Uva)",
        diet: "Vegan / Beverage",
        spiceLevel: "☕ Delicate, Aromatic & Floral",
        image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
        description: "Universally acknowledged as the finest black tea in the world, hand-picked in high-altitude mountain estates. Ranging from bright golden Nuwara Eliya Pekoe to full-bodied low-grown Ruhuna blends.",
        pairings: "Traditional ginger cookies or jaggery cubes"
      }
    ]
  },

  travelGuide: {
    beforeYouTravel: [
      {
        icon: "file-text",
        title: "Visa & Entry Requirements",
        summary: "Most international travelers require an approved Electronic Travel Authorization (ETA / eVisa) prior to arrival. Passports must have at least 6 months validity.",
        details: "Apply online easily at official government portals before boarding. 30-day tourist visas are typically granted and can be extended in Colombo if you wish to stay longer."
      },
      {
        icon: "dollar-sign",
        title: "Currency & Payments",
        summary: "The official currency is the Sri Lankan Rupee (LKR). ATMs are widely available across all major cities and tourist areas.",
        details: "Credit cards (Visa/Mastercard) are accepted in hotels, upscale restaurants, and major supermarkets. Keep cash (small rupee notes) for tuk-tuks, local fruit stalls, and village shops."
      },
      {
        icon: "sun",
        title: "Monsoons & Weather",
        summary: "Sri Lanka has two distinct monsoon seasons, meaning there is ALWAYS sunshine and perfect beach weather on one side of the island.",
        details: "South & West Coasts (Galle, Bentota, Mirissa) & Hill Country are best Nov–Apr. East Coast (Arugam Bay, Trincomalee, Passikudah) is glorious May–Oct."
      },
      {
        icon: "shield-check",
        title: "Safety & Emergency (1912)",
        summary: "Sri Lanka is one of the friendliest and safest travel destinations in Asia for solo travelers, couples, and families.",
        details: "Official 24/7 Tourist Police Hotline: 1912. Standard emergency ambulance service (Suwa Seriya) is reached by dialing 1990."
      },
      {
        icon: "wifi",
        title: "SIM Cards & High-Speed Internet",
        summary: "Ultra-cheap 4G/5G Tourist SIM cards and eSIMs are readily available at Bandaranaike International Airport (CMB) arrival hall.",
        details: "Major reliable telecom providers are Dialog, Mobitel, and Airtel. Package deals start around $5–$10 USD for 20GB–50GB data."
      },
      {
        icon: "zap",
        title: "Electricity & Plugs",
        summary: "Standard voltage is 230V, 50Hz. Plug types are mainly Type G (UK 3-pin standard) and Type D (round 3-pin).",
        details: "Modern hotels feature universal multi-plug sockets. Bringing a universal travel adapter is recommended."
      },
      {
        icon: "heart",
        title: "Cultural Etiquette & Temples",
        summary: "Dress respectfully when visiting sacred temples: cover shoulders and knees, and remove footwear and hats before entering.",
        details: "Wearing white or light colors to Buddhist temples is traditional. Do not pose with your back turned directly to a Buddha statue for photographs."
      }
    ],

    gettingAround: [
      {
        type: "Scenic Trains",
        icon: "train",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=500&q=80",
        desc: "The world-famous Main Line (Colombo–Kandy–Nanu Oya–Ella–Badulla) and Coastal Line offer unforgettable scenic vistas at incredibly affordable fares. Reserve 1st/2nd class observation cars in advance."
      },
      {
        type: "Private Chauffeured Cars",
        icon: "car",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=500&q=80",
        desc: "Hiring a private air-conditioned vehicle with an English-speaking tourist chauffeur is the most comfortable, flexible way to see the island. Rates are very reasonable and include fuel."
      },
      {
        type: "Three-Wheelers (Tuk-Tuks)",
        icon: "navigation",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80",
        desc: "The quintessential Sri Lankan short-distance transport! In Colombo and major cities, use apps like PickMe and Uber for transparent meter fares. Elsewhere, agree on a price before hopping in."
      },
      {
        type: "Express Highway Buses",
        icon: "truck",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        desc: "Air-conditioned luxury express buses run seamlessly along the Southern Expressway (connecting Colombo Airport directly to Galle and Matara in under 2 hours)."
      }
    ],

    seasonMatrix: [
      { month: "January", idealCoasts: "South & West Coasts, Hill Country, Cultural Triangle", condition: "Superb (Peak Season)", temp: "28°C - 31°C", surfSpot: "Weligama, Midigama, Hikkaduwa", wildlife: "Yala Leopards, Mirissa Blue Whales, Sinharaja Birds" },
      { month: "February", idealCoasts: "South & West Coasts, Central Highlands, Cultural Triangle", condition: "Superb & Sunny (Dry everywhere)", temp: "29°C - 32°C", surfSpot: "Mirissa, Hiriketiya, Galle", wildlife: "Peak Blue Whale season in Mirissa, Yala Safari" },
      { month: "March", idealCoasts: "All regions, perfect for complete island circuit", condition: "Excellent & Warm", temp: "30°C - 33°C", surfSpot: "South Coast & East Coast transition", wildlife: "High leopard visibility, Dolphin super-pods" },
      { month: "April", idealCoasts: "Central Highlands & Island-wide (Sinhala & Tamil New Year)", condition: "Warm & Festive", temp: "31°C - 34°C", surfSpot: "Arugam Bay season begins", wildlife: "Wilpattu & Bundala national parks" },
      { month: "May", idealCoasts: "East Coast (Trincomalee, Arugam Bay, Passikudah)", condition: "East Coast Season Peak", temp: "30°C - 34°C", surfSpot: "Arugam Bay Main Point", wildlife: "Pigeon Island marine snorkeling with sharks" },
      { month: "June", idealCoasts: "East Coast & Northern Jaffna peninsula", condition: "East Coast Glorious Sun", temp: "30°C - 34°C", surfSpot: "Arugam Bay, Elephant Rock, Pottuvil", wildlife: "Minneriya Elephant gathering starts" },
      { month: "July", idealCoasts: "East Coast, Cultural Triangle & Kandy (Esala Perahera)", condition: "Great (Dry Central/East)", temp: "29°C - 33°C", surfSpot: "Arugam Bay World Surf Competitions", wildlife: "Minneriya Great Elephant Gathering peak" },
      { month: "August", idealCoasts: "East Coast, Kandy & Cultural Triangle", condition: "Cultural Peak & East Coast Sun", temp: "29°C - 33°C", surfSpot: "East Coast breaks & Nilaveli", wildlife: "Hundreds of elephants at Minneriya" },
      { month: "September", idealCoasts: "East Coast & North Central cultural plains", condition: "Sunny East Coast & Warm", temp: "29°C - 32°C", surfSpot: "Arugam Bay & Whiskey Point", wildlife: "Elephant Gathering & Wilpattu Safari" },
      { month: "October", idealCoasts: "Transition month, great for cultural sites & wellness", condition: "Inter-monsoonal showers & green lush scenery", temp: "28°C - 31°C", surfSpot: "Reef breaks calming, ideal for wellness retreats", wildlife: "Migratory birds arriving from Siberia" },
      { month: "November", idealCoasts: "South & West Coasts starting glorious dry season", condition: "South Coast Season Begins", temp: "28°C - 31°C", surfSpot: "Hikkaduwa, Kabalana, Weligama", wildlife: "Mirissa Whale watching restarts" },
      { month: "December", idealCoasts: "South & West Coasts, Hill Country (Festive peak)", condition: "Peak Tropical Sunshine", temp: "28°C - 31°C", surfSpot: "South Coast prime swells", wildlife: "Blue Whales, Yala Leopards, Udawalawe Elephants" }
    ]
  },

  tourPackages: [
    {
      id: "sri-lanka-highlights",
      name: "Sri Lanka Highlights",
      duration: "7 Days / 6 Nights",
      tagline: "The Classic Island Circuit",
      priceFrom: "$649",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      destinations: ["Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle"],
      highlights: ["Climb 5th-century Sigiriya Rock", "Temple of the Tooth Relic puja", "Scenic Kandy-Ella blue train ride", "Yala Leopard & Elephant Safari", "Galle Dutch Fort sunset walk"],
      includes: ["6 Nights luxury/boutique hotel accommodation", "Daily breakfast & dinner", "Private A/C vehicle with English chauffeur", "Reserved train tickets Kandy to Ella", "All national park entry fees & 4x4 safari jeep", "Airport pickup & drop-off"],
      excludes: ["International flights", "Travel insurance", "Personal expenses & alcoholic drinks"],
      itinerarySummary: "Day 1: Arrival & Sigiriya | Day 2: Dambulla Caves & Kandy | Day 3: Kandy to Nuwara Eliya | Day 4: Scenic Train to Ella | Day 5: Yala Safari | Day 6: Galle Fort | Day 7: Colombo & Departure"
    },
    {
      id: "tropical-beach-escape",
      name: "Tropical Beach & Coastal Escape",
      duration: "5 Days / 4 Nights",
      tagline: "Sun, Surf, Whales & Coconut Palms",
      priceFrom: "$489",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      destinations: ["Bentota", "Galle Fort", "Mirissa", "Hiriketiya"],
      highlights: ["Blue Whale watching in Mirissa", "Surfing gentle waves in Weligama", "Sunset cocktails at Coconut Tree Hill", "Water sports on the Bentota lagoon", "Romantic candlelight dinner on the sand"],
      includes: ["4 Nights beachfront resort stay", "Daily tropical breakfast", "Mirissa whale watching boat excursion", "1x Private surf lesson with gear", "Private coastal transfers"],
      excludes: ["International airfare", "Visa fees", "Gratuities"],
      itinerarySummary: "Day 1: Colombo Airport to Bentota Beach | Day 2: Galle Fort & Weligama Bay | Day 3: Mirissa Blue Whale Safari & Coconut Tree Hill | Day 4: Hiriketiya Bay relaxation | Day 5: Coastal Expressway to Colombo"
    },
    {
      id: "wildlife-safari-odyssey",
      name: "Grand Wildlife & Safari Odyssey",
      duration: "6 Days / 5 Nights",
      tagline: "Leopards, Elephants, Whales & Rain Forests",
      priceFrom: "$720",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
      destinations: ["Udawalawe", "Yala National Park", "Mirissa", "Sinharaja Rainforest"],
      highlights: ["Double safari in Yala National Park", "Udawalawe Elephant Transit Home feeding", "Sinharaja UNESCO Virgin Rainforest guided trek", "Mirissa marine mammal ocean safari", "Luxury safari glamping under starry skies"],
      includes: ["5 Nights luxury eco-lodge & glamping tents", "All meals included during safaris", "Dedicated expert wildlife naturalist guide", "Exclusive 4x4 open safari jeeps", "Park permits & boat tickets"],
      excludes: ["Camera fees if applicable", "Personal tips for trackers"],
      itinerarySummary: "Day 1: Arrival to Udawalawe | Day 2: Udawalawe Elephant Safari & Transfer to Yala | Day 3: Yala Full Day Leopard Safari | Day 4: Sinharaja Rainforest Bird Trek | Day 5: Mirissa Whale Watching | Day 6: Departure"
    },
    {
      id: "cultural-heritage-tour",
      name: "Ancient Kingdoms & Cultural Heritage",
      duration: "8 Days / 7 Nights",
      tagline: "UNESCO Wonders, Sacred Cities & Royal Relics",
      priceFrom: "$790",
      image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80",
      destinations: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla", "Kandy"],
      highlights: ["Anuradhapura 2,000-year-old stupas", "Polonnaruwa royal palace & Gal Vihara granite statues", "Sigiriya Lion Rock sunrise", "Dambulla Golden Rock Cave murals", "Kandy sacred Tooth Relic and Esala traditions"],
      includes: ["7 Nights heritage hotel stays", "Daily breakfast & traditional dinners", "Official cultural triangle entrance tickets", "Licensed archaeological tour guide", "Comfortable private AC transportation"],
      excludes: ["International flights", "Personal shopping"],
      itinerarySummary: "Day 1: Colombo to Anuradhapura | Day 2: Anuradhapura Sacred City | Day 3: Polonnaruwa Ancient Capital | Day 4: Sigiriya & Minneriya Safari | Day 5: Dambulla Caves to Kandy | Day 6: Kandy Botanical Gardens & Dance | Day 7: Pinnawala & Colombo | Day 8: Departure"
    },
    {
      id: "hill-country-tea-trails",
      name: "Hill Country & Tea Trails Experience",
      duration: "5 Days / 4 Nights",
      tagline: "Misty Peaks, Waterfalls & British Colonial Grandeur",
      priceFrom: "$520",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      destinations: ["Kandy", "Nuwara Eliya", "Horton Plains", "Ella"],
      highlights: ["Scenic highland mainline train voyage", "High tea at historic colonial estate", "World's End cliff hike in Horton Plains", "Nine Arches Bridge & Little Adam's Peak", "Ceylon tea plucking with estate workers"],
      includes: ["4 Nights colonial bungalow & boutique hill stays", "Daily gourmet breakfast", "Horton Plains National Park permit & guide", "Reserved train tickets", "Tea factory VIP tasting tour"],
      excludes: ["Alcoholic beverages", "Travel insurance"],
      itinerarySummary: "Day 1: Kandy to Nuwara Eliya via Ramboda Falls | Day 2: Horton Plains & World's End | Day 3: Scenic Train to Ella & Nine Arches Bridge | Day 4: Ella Rock & Ravana Waterfalls | Day 5: Return to Colombo"
    },
    {
      id: "romantic-sri-lanka",
      name: "Romantic Honeymoon Island Escape",
      duration: "10 Days / 9 Nights",
      tagline: "Private Villas, Ocean Sunsets & Mountain Romance",
      priceFrom: "$1,150",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      destinations: ["Negombo", "Sigiriya", "Kandy", "Ella", "Yala Safari Glamping", "Galle Fort & Tangalle"],
      highlights: ["Private candlelit beach dinners under the stars", "Scenic train ride in first class", "Couples Ayurvedic herbal spa massage", "Private luxury safari in Yala", "Sunset champagne cruise in Galle"],
      includes: ["9 Nights 5-star luxury boutique & private pool villa stays", "Daily gourmet breakfast & 3 private candlelit dinners", "Bottle of sparkling wine & honeymoon cake on arrival", "Private luxury Mercedes/Sedan with executive chauffeur", "All experiences & spa vouchers"],
      excludes: ["International airfare", "Personal tips"],
      itinerarySummary: "Day 1: Romantic Arrival in Negombo | Day 2-3: Sigiriya & Village Lake Sunset | Day 4: Kandy Culture & Royal Gardens | Day 5-6: Misty Ella & Nine Arches Bridge | Day 7: Luxury Safari Glamping in Yala | Day 8-9: Secluded Tangalle/Galle Fort Villas | Day 10: Departure"
    }
  ],

  blogPosts: [
    {
      id: "10-places-must-visit",
      title: "10 Places You Must Visit in Sri Lanka in 2026",
      category: "Destinations",
      readTime: "6 min read",
      author: "Niroshan Perera",
      date: "August 15, 2026",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
      excerpt: "From the majestic heights of Sigiriya Rock to the azure surf breaks of Arugam Bay, here are the 10 unforgettable places that define the Pearl of the Indian Ocean.",
      content: `
        <p class="mb-4">Few islands in the world pack as much diversity into a compact area as Sri Lanka. In a single week, you can climb ancient 5th-century sky palaces, track leopards through scrub jungle, sip fresh Ceylon tea in cool mountain mist, and surf warm tropical waves along palm-fringed coastlines.</p>
        <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">1. Sigiriya Rock Fortress</h3>
        <p class="mb-4">Rising 200 meters above the central jungle, King Kashyapa's 5th-century citadel is an architectural and artistic marvel. Climb through the colossal Lion's Paws to the flat summit for breathtaking 360-degree views.</p>
        <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">2. Ella and the Nine Arches Bridge</h3>
        <p class="mb-4">Ella is the heart of Sri Lanka's trekking culture. Watching the bright blue train glide over the stone arches of Demodara Nine Arches Bridge surrounded by cloud-forest is pure magic.</p>
        <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">3. Galle Fort</h3>
        <p class="mb-4">Founded by the Portuguese in 1588 and fortified by the Dutch, Galle Fort is an enchanting pedestrian-only enclave filled with gelato shops, jewelry workshops, and historic seaside ramparts.</p>
        <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">4. Yala National Park</h3>
        <p class="mb-4">With the highest concentration of leopards in the world, Yala offers world-class wildlife safari adventures right on the edge of the Indian Ocean.</p>
        <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">5. Mirissa Beach & Coconut Tree Hill</h3>
        <p class="mb-4">Whether you want to witness giant Blue Whales or photograph sunset silhouettes under swaying palm trees, Mirissa is south coast perfection.</p>
      `
    },
    {
      id: "ultimate-sri-lankan-food-guide",
      title: "The Ultimate Sri Lankan Food Guide: 12 Dishes You Must Taste",
      category: "Food",
      readTime: "8 min read",
      author: "Dilani Senanayake",
      date: "August 10, 2026",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      excerpt: "A sensory exploration of Ceylon spices, fiery coconut sambols, crispy egg hoppers, and fragrant clay-pot curries that will enchant your palate.",
      content: `
        <p class="mb-4">Sri Lankan cuisine is one of the world's best-kept culinary secrets. Rooted in fresh coconut milk, fiery red chilies, freshly roasted cinnamon, cardamom, and fragrant curry leaves, every meal is an orchestra of flavor.</p>
        <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">The Anatomy of a Sri Lankan Rice & Curry</h3>
        <p class="mb-4">A standard island lunch is never just one curry. It is a colorful banquet centered around steaming rice, accompanied by creamy red lentil dhal, spiced green jackfruit (polos), tempered beetroot, crispy papadum, and fresh gotukola sambol.</p>
        <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Hoppers: The Island's Favorite Breakfast & Dinner</h3>
        <p class="mb-4">Made from fermented rice flour and coconut milk, hoppers are cooked in small wok-like pans, resulting in crispy lace-like edges and a soft crumpet-like center, especially delicious when topped with a steamed egg.</p>
      `
    },
    {
      id: "best-beaches-sri-lanka",
      title: "Best Beaches in Sri Lanka: Where to Surf, Swim & Unwind",
      category: "Travel Tips",
      readTime: "5 min read",
      author: "Julian Vance",
      date: "August 02, 2026",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      excerpt: "From secluded horseshoe coves in Hiriketiya to the endless white sands of Nilaveli, discover the ultimate guide to Sri Lanka's 1,340 km of coastline.",
      content: `
        <p class="mb-4">With 1,340 kilometers of tropical coastline, Sri Lanka is ringed with golden sands. Because the island experiences two different monsoon cycles, you can always find crystal clear turquoise waters and sunshine any month of the year.</p>
        <p class="mb-4"><strong>Hiriketiya Bay:</strong> A trendy horseshoe bay where lush jungle meets gentle surf, dotted with artisan bakeries and beach bars.</p>
        <p class="mb-4"><strong>Nilaveli & Uppuveli:</strong> Calm, crystal-clear east coast waters perfect for swimming and snorkeling around Pigeon Island.</p>
        <p class="mb-4"><strong>Arugam Bay:</strong> The undisputed surf capital of Asia with endless right-hand point breaks and bohemian vibes.</p>
      `
    },
    {
      id: "first-timer-guide-sri-lanka",
      title: "A First-Time Visitor's Guide to Sri Lanka: Everything You Need to Know",
      category: "Travel Tips",
      readTime: "7 min read",
      author: "Maya Lin",
      date: "July 28, 2026",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
      excerpt: "Practical advice on visas, currency, train tickets, etiquette at sacred temples, tipping, and how to get around without stress.",
      content: `
        <p class="mb-4">Planning your first trip to Sri Lanka? Here is the essential handbook to help you navigate your journey with ease and confidence.</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Visa:</strong> Apply for your online ETA/eVisa before departure.</li>
          <li><strong>Cash vs Card:</strong> Keep small rupee cash notes handy for tuk-tuks, fresh king coconuts, and rural village dining.</li>
          <li><strong>Temple Etiquette:</strong> Always wear clothing covering your shoulders and knees, and remove hats/shoes before entering Buddhist & Hindu sites.</li>
          <li><strong>Train Booking:</strong> Reserved seats on the Kandy to Ella train open 30 days in advance and sell out quickly, so book ahead!</li>
        </ul>
      `
    },
    {
      id: "sustainable-travel-sri-lanka",
      title: "Sustainable Tourism: How to Travel Sri Lanka Responsibly",
      category: "Sustainable Tourism",
      readTime: "5 min read",
      author: "Dr. Kanishka Alwis",
      date: "July 20, 2026",
      image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
      excerpt: "Simple ways to reduce your plastic footprint, support ethical wildlife safaris, empower local communities, and preserve ancient cultural heritage.",
      content: `
        <p class="mb-4">Sri Lanka is home to extraordinary biodiversity and delicate ecosystems. By making conscious travel decisions, visitors can directly help conserve wildlife and empower local communities.</p>
        <p class="mb-4">Support community-owned homestays, refuse single-use plastic bottles by using refillable flasks, choose safari operators who respect distance from wildlife, and hire certified local guides.</p>
      `
    }
  ],

  testimonials: [
    {
      name: "Sophie & Oliver Beaumont",
      country: "United Kingdom",
      flag: "🇬🇧",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      tripType: "Couples Honeymoon (10 Days)",
      rating: 5,
      quote: "Sri Lanka took our breath away from day one. The scenic blue train ride through Ella, waking up to elephants in Yala, and the warm smiles of everyone we met made this the best trip of our lives!"
    },
    {
      name: "Marcus & Elena Weber",
      country: "Germany",
      flag: "🇩🇪",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      tripType: "Wildlife & Culture (14 Days)",
      rating: 5,
      quote: "The combination of ancient history in Sigiriya and wild safari in Yala was extraordinary. The food was so bursting with flavor, especially the fresh hoppers and Jaffna crab curry. We are already planning our return!"
    },
    {
      name: "Liam O'Connor",
      country: "Australia",
      flag: "🇦🇺",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      tripType: "Surf & Adventure (8 Days)",
      rating: 5,
      quote: "The surf breaks in Arugam Bay and Weligama are world-class! Super warm water, friendly locals, and cheap delicious food. Traveling around in tuk-tuks with my board strapped to the roof was unforgettable."
    },
    {
      name: "Claire & David Dubois",
      country: "France",
      flag: "🇫🇷",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      tripType: "Family Vacation (12 Days)",
      rating: 5,
      quote: "Traveling with two young kids can be daunting, but Sri Lanka was welcoming, safe, and magical. The children loved the elephant gathering in Minneriya and swimming with sea turtles in Mirissa."
    }
  ],

  gallery: [
    { id: 1, title: "Sigiriya Lion Rock in Morning Mist", category: "culture", location: "Sigiriya", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80" },
    { id: 2, title: "Blue Train on Demodara Nine Arches Bridge", category: "mountains", location: "Ella", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80" },
    { id: 3, title: "Tropical Coconut Tree Hill at Golden Hour", category: "beaches", location: "Mirissa", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
    { id: 4, title: "Wild Sri Lankan Leopard in Yala", category: "wildlife", location: "Yala National Park", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80" },
    { id: 5, title: "Colonial Galle Fort Lighthouse & Palms", category: "culture", location: "Galle", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80" },
    { id: 6, title: "Emerald Tea Plantation Valleys", category: "mountains", location: "Nuwara Eliya", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80" },
    { id: 7, title: "Surfing Right-Hand Point Breaks", category: "adventure", location: "Arugam Bay", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80" },
    { id: 8, title: "Sacred Temple of the Tooth Relic", category: "culture", location: "Kandy", image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80" },
    { id: 9, title: "Snorkeling Coral Reefs with Sea Turtles", category: "wildlife", location: "Pigeon Island", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80" },
    { id: 10, title: "Authentic Ceylon Spiced Rice & Curry Feast", category: "food", location: "Central Province", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80" },
    { id: 11, title: "Stilt Fishermen Silhouetted at Sunset", category: "culture", location: "Weligama", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
    { id: 12, title: "Colombo Oceanfront Skyline & Galle Face", category: "city", location: "Colombo", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80" }
  ],

  sustainablePillars: [
    { icon: "users", title: "Support Local Communities", desc: "Dine at family-owned eateries, buy directly from local artisans, and hire licensed resident tuk-tuk drivers and village guides." },
    { icon: "home", title: "Stay in Eco & Locally Owned Stays", desc: "Choose eco-certified lodges, boutique heritage homestays, and hotels that invest in local staff and green energy." },
    { icon: "shield", title: "Protect Wildlife & Ethical Safaris", desc: "Never feed or touch wild animals. Choose safari drivers who maintain respectful distances and turn off engines near wildlife." },
    { icon: "trash-2", title: "Reduce Single-Use Plastics", desc: "Carry a reusable water flask and cloth tote bag. Support beach cleanup initiatives across Sri Lanka's coastal towns." },
    { icon: "landmark", title: "Respect Sacred & Cultural Sites", desc: "Dress modestly covering knees and shoulders, remove hats and shoes, and seek permission before photographing monks and devotees." },
    { icon: "compass", title: "Hire Certified Local Guides", desc: "Enrich your journey and support local livelihoods by choosing certified Sri Lanka Tourism Development Authority (SLTDA) guides." },
    { icon: "sun", title: "Marine & Coral Reef Conservation", desc: "Use mineral reef-safe sunscreen, avoid stepping on living coral reefs, and choose licensed whale watching operators." }
  ]
};

// Export to window for browser access
if (typeof window !== 'undefined') {
  window.SRI_LANKA_DATA = SRI_LANKA_DATA;
}
