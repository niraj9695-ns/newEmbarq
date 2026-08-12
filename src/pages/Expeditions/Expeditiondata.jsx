// data/expeditions.js
 import mapImage from "../../assets/expedition/Vector.webp"; 

//georgia
// import heroImage from "../../assets/expedition/Georgia.webp";
// import routeMap from "../../assets/expedition/newgeorgia.jpeg";
// import routeMapMobile from "../../assets/expedition/newgeorgia.jpeg";
// import expeditionBg from "../../assets/expedition/georgiabg.webp";
//k2k2026-4
// import heroImage4 from "../../assets/expedition/K2K.webp";
// import routeMap4 from "../../assets/expedition/india.jpeg";
// import routeMapMobile4 from "../../assets/expedition/india.jpeg";
// import expeditionBg4 from "../../assets/expedition/k2kbg.webp";//same
//scotland
// import heroImage5 from "../../assets/expedition/Scotland.webp";
// import routeMap5 from "../../assets/expedition/newscotland.jpeg";
// import routeMapMobile5 from "../../assets/expedition/newscotland.jpeg";
// import expeditionBg5 from "../../assets/expedition/scotlandbg.webp";//same

//Kashmir to Kanyakumari-6
import heroImage6 from "../../assets/expedition/Romania.webp";
import routeMap6 from "../../assets/expedition/newromania.jpeg";
import routeMapMobile6 from "../../assets/expedition/newromania.jpeg";
import expeditionBg6 from "../../assets/expedition/romaniabg.webp";
//romania-1
import heroImage1 from "../../assets/expedition/Romania.webp";
import routeMap1 from "../../assets/expedition/newromania.jpeg";
import routeMapMobile1 from "../../assets/expedition/newromania.jpeg";
import expeditionBg1 from "../../assets/expedition/romaniabg.webp";
//Punjab & Himachal-7
import heroImage7 from "../../assets/expedition/Romania.webp";
import routeMap7 from "../../assets/expedition/newromania.jpeg";
import routeMapMobile7 from "../../assets/expedition/newromania.jpeg";
import expeditionBg7 from "../../assets/expedition/romaniabg.webp";
//Kyrgyzstan-8
import heroImage8 from "../../assets/expedition/Romania.webp";
import routeMap8 from "../../assets/expedition/newromania.jpeg";
import routeMapMobile8 from "../../assets/expedition/newromania.jpeg";
import expeditionBg8 from "../../assets/expedition/romaniabg.webp";
//Mizoram-9
import heroImage9 from "../../assets/expedition/Romania.webp";
import routeMap9 from "../../assets/expedition/newromania.jpeg";
import routeMapMobile9 from "../../assets/expedition/newromania.jpeg";
import expeditionBg9 from "../../assets/expedition/romaniabg.webp";
//New Zealand-10
import heroImage10 from "../../assets/expedition/Romania.webp";
import routeMap10 from "../../assets/expedition/newromania.jpeg";
import routeMapMobile10 from "../../assets/expedition/newromania.jpeg";
import expeditionBg10 from "../../assets/expedition/romaniabg.webp";
//south korea-2
import heroImage2 from "../../assets/expedition/South Korea.webp";
import routeMap2 from "../../assets/expedition/newskorea.jpeg";
import routeMapMobile2 from "../../assets/expedition/newskorea.jpeg";
import expeditionBg2 from "../../assets/expedition/SouthKoreabg.webp";
//finland-3y
import heroImage3 from "../../assets/expedition/Finland.webp";
import routeMap3 from "../../assets/expedition/newfinland.jpeg";
import routeMapMobile3 from "../../assets/expedition/newfinland.jpeg";
import expeditionBg3 from "../../assets/expedition/finlandbg.webp";//same

export const expeditions = {
  // NEW Expedition - Kashmir to Kanyakumari - 6
  kashmirtokanyakumari: {
    hero: {
      title: "Kashmir to Kanyakumari",
      subtitle: "One nation. Endless landscapes.",
      badge: "All Women",
      description:
        "An epic all-women self-drive road trip from Kashmir to Kanyakumari, covering 3,700 km across 9 states and 11 cities, with scenic drives through mountains, plains and South India, along with rich cultural experiences, local flavours and memorable moments of camaraderie and exploration.",
      bgImage: heroImage6,
      mapImage: mapImage,
    },

    about: {
      destination: "Kashmir to Kanyakumari",
      duration: "13 Days / 12 Nights",
      cost: "INR 2.25 Lacs per person ",
      travelDates: "7th March to 19th March, 2027",
      vehicle: "Rental SUV with Fuel",
      distance: "Approx. 3700 km",
    },

    route: {
      desktop: routeMap6,
      mobile: routeMapMobile6,
    },

    itinerary: [
      {
        day: 1,
        title: "ARRIVAL IN SRINAGAR",
        description: `Arrive in Seoul and transfer to the hotel using private transport.
          The day is kept relaxed to settle in and prepare for the journey ahead.`,
      },
      {
        day: 2,
        title: "GRAND BEGINNING: FLAG-OFF ON INTERNATIONAL WOMEN’S DAY",
        description: `Amidst the breathtaking backdrop of Kashmir's majestic valleys, we set forth with a spectacular flag-off, marking the beginning of an extraordinary expedition from the
crown of India to its southernmost gem, Kanyakumari. This unparalleled journey
promises to celebrate the spirit of adventure, camaraderie, and empowerment.
Day 1 unfolds with a mesmerizing drive through serpentine mountain roads, each turn
revealing awe-inspiring vistas as we descend towards Katra. Awaiting us there is an
exclusive, grand surprise event—curated to ignite excitement and set an unforgettable
tone for this iconic odyssey.`,
      },
      {
        day: 3,
        title: "KATRA TO CHANDIGARH, 410 KMS",
        description: `Day 2 takes us deeper into the heart of India as we journey southward toward the vibrant
city of Chandigarh. The drive offers a striking contrast of landscapes, transitioning from
the verdant hills of Katra to the expansive plains of Punjab.
Chandigarh, a city synonymous with resilience and prosperity, welcomes us with its
rich cultural heritage and warm Punjabi hospitality. Here, we pause to soak in the
local essence, with moments of rest and rejuvenation preparing us for the
adventure that lies ahead.`,
      },
      {
        day: 4,
        title: "CHANDIGARH TO DELHI, 270 KMS",
        description: `As we depart from Chandigarh, the city of industrial prowess and vibrant culture, the
road stretches out ahead, promising a day of immersive travel experiences. The drive is
punctuated by the sights of sprawling green fields, quaint roadside dhabas offering
irresistible flavours of Punjab, and bustling towns that echo the region's thriving energy.
Reaching Delhi, the city of grandeur and grit, we are greeted by a skyline that seamlessly
blends historic monuments with modern marvels. Here, the pulse of the drive shifts to the
beat of this dynamic metropolis.`,
      },
      {
        day: 5,
        title: "NEW DELHI TO GWALIOR (VIA AGRA), 300 KMS",
        description: `The drive to Gwalior is a journey through the heart of India, offering glimpses of its
rich cultural tapestry. The route transitions from the vibrant chaos of urban Delhi to
the serene landscapes of Madhya Pradesh, via Agra.
Arriving in Gwalior, we are welcomed by its historic aura, with Gwalior Fort and timeless
stories waiting to be explored, marking the perfect end to another memorable day on
the road.`,
      },
      {
        day: 6,
        title: "GWALIOR",
        description: `Enjoy a relaxed day in Gwalior. Spend the day strolling through the magnificent city.`,
      },
      {
        day: 7,
        title: "GWALIOR TO JABALPUR (VIA JHANSI), 460 KMS",
        description: `The journey from Gwalior to Jabalpur unveils the raw beauty of Central India, as we
traverse lush landscapes, winding roads, and quaint settlements that echo the
region's rustic charm.
As we approach Jabalpur, the scenery transforms, hinting at the city’s natural allure
and cultural significance. This drive also marks the halfway point on this incredible K2K
journey, with another fabulous day on the road, another chapter in our unforgettable
journey!`,
      },
      {
        day: 8,
        title: "JABALPUR TO NAGPUR, 300 KMS",
        description: `Leaving behind the tranquil charm of Jabalpur, we embark on a scenic drive to
Nagpur, the Orange City of India. The route meanders through lush greenery, dotted
with dense forests and small villages, offering an immersive experience of Central
India's vibrant landscape. En route, local delicacies and the occasional roadside stalls
selling fresh produce add a delightful flavour to the journey. The geographical heart of
India, Nagpur sets the stage for another captivating leg of this remarkable expedition.`,
      },
      {
        day: 9,
        title: "NAGPUR TO HYDERABAD, 490 KMS",
        description: `As we leave Nagpur behind, the landscape shifts to open highways bordered by
rocky outcrops and occasional bursts of greenery. The drive is punctuated by the
charm of small towns and local eateries, where the flavours of Maharashtra and
Telangana intermingle.
Approaching Hyderabad, the City of Pearls, the skyline transforms with its unique e
transforms with its unique blend of ancient heritage and modern innovation. From the
towering Charminar to the bustling tech hubs, Hyderabad welcomes us with
delectable cuisine. The Nizam city sets the perfect tone for the next big day of the
drive as we now move towards the southern leg of the drive.`,
      },
      {
        day: 10,
        title: "HYDERABAD TO BENGALURU, 550 KMS",
        description: `As we bid farewell to Hyderabad, a city steeped in history and culture, the journey
ahead unfolds across a picturesque tapestry of South India. The drive is marked by
smooth, well-maintained highways that stretch alongside sprawling farmlands, their
vibrant greens punctuated by rugged rocky hillocks—a quintessential feature of
Telangana's landscape. The destination, Bengaluru—the famed Garden City—awaits
with its unique blend of modern innovation and timeless tradition. Known for its
pleasant climate, bustling tech corridors, and rich cultural heritage, Bengaluru greets
us with its dynamic energy. This 550-kilometer journey, the longest single-day drive of
the expedition, is as challenging as it is rewarding, reflecting the resilience and
camaraderie of the women. It’s a day that pushes boundaries while celebrating the spirit
of exploration, culminating in the vibrant embrace of one of India’s most iconic cities.`,
      },
      {
        day: 11,
        title: "BENGALURU TO MADURAI, 475 KMS",
        description: `A journey through the heart of South India. This day’s drive reveals a rich tapestry of
landscapes and cultural treasures with every passing mile. Departing from Bengaluru’s
cool breezes and urban energy, the road leads us into Tamil Nadu’s picturesque expanse
—a land of coconut groves swaying in the breeze, rolling hills, and tranquil countryside. As
we drive into this sacred city, a profound realisation dawns that we have championed an
extraordinary 4,000-kilometre journey, and with the blessings of Shree Meenakshi Amma
Devi, we stand just one day away from crafting a subtle yet momentous chapter of
history. This day, like the city itself, is a celebration of perseverance, unity, and the
triumph of the spirit of every woman on this epic drive.`,
      },
      {
        day: 12,
        title: "MADURAI TO KANYAKUMARI & THIRUVANANTHAPURAM, 335 KMS",
        description: `Today marks the final leg of our extraordinary journey as we drive from Madurai to
Kanyakumari and Thiruvananthapuram, the southernmost tip of the Indian
subcontinent. This journey offers a stunning fusion of natural beauty, spiritual
significance, and coastal charm—allowing each of us to not only immerse in the
surroundings but also reflect on the incredible distance we've traveled together, both
physically and emotionally. As we pause to reflect on the miles covered and the shared
experiences, Kanyakumari feels like more than just a destination. It is a testament to our
resilience, unity, and the unwavering spirit of exploration that has guided us all. Here,
where the earth meets the ocean, we prepare to create lasting memories in this sacred
land, closing the chapter on a journey that will forever remain in our hearts.`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg6,

      inclusions: [
        "Recced Route",
        "Stay on Twin Sharing basis",
        "All Meals",
        "Rental SUV with Fuel",
        "Fuel Cost",
        "Embarq Lead and Support Car",
        "Support Team",
        "Fun-filled engagement activities throughout the drive",
        "Taxes",
      ],

      exclusions: [
        "Travel cost to reach Srinagar, where the drive starts from and departure from Trivandrum once the drive ends and personal insurance",
        "Personal expenses and any incidentals like tips, laundry, room service, porter service etc",
        "Alcoholic beverages",
        "Actual cost incurred towards repair-work, if required",
        "Expenses arising out of unforeseen circumstances",
      ],
    },
  },

  //Romania -1

  romania: {
    hero: {
      title: "Romania",
      subtitle: "The Unseen Carpathians",
      badge: "All Women",
      description:
        "A premium all-women self-drive road expedition through Romania’s Carpathian heartland, revealing one of Europe’s least explored driving destinations. From iconic alpine highways and medieval citadels to Saxon villages, forests, and deep wilderness, this journey is designed for travellers who value unhurried roads, dramatic scenery, and places that reward taking the long way around.",
      bgImage: heroImage1,
      mapImage: mapImage,
    },

    about: {
      destination: "Romania",
      duration: "9 Days / 8 Nights",
      cost: " USD 5,000.00 per head",
      travelDates: "20th June to 28th June, 2026",
      vehicle: "Toyota RAV4 or similar (self-drive rental)",
      distance: "Approx. 740 km",
    },

    route: {
      desktop: routeMap1,
      mobile: routeMapMobile1,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Bucharest",
        description: `Arrive in Romania’s capital and ease into the journey.
          The day is kept light and flexible, allowing time to rest after travel or explore Bucharest’s historic streets and cafés at your own pace.`,
      },
      {
        day: 2,
        title: "Bucharest to Sibiu via Transfăgărășan (264 km)",
        description: `Leave the city behind and head north onto one of Europe’s most iconic mountain roads. 
          The Transfăgărășan climbs into the Făgăraș Mountains with sweeping curves, tunnels, and panoramic viewpoints. 
          A relaxed picnic near the alpine section sets the pace before descending into Transylvania and reaching Sibiu by evening. 
          A day defined entirely by the road.`,
      },
      {
        day: 3,
        title: "Sibiu to Cund (76 km)",
        description: `Drive deeper into rural Transylvania, where rolling fields and forests replace city life. 
          Near the village of Cund, enjoy a local experience rooted in the landscape, followed by a hands-on culinary session using regional ingredients. 
          The afternoon is intentionally slow, offering time to absorb the stillness of the countryside.`,
      },
      {
        day: 4,
        title: "Sighișoara and the Transylvanian Hills (76 km)",
        description: `Arrive in Sighișoara, one of Europe’s best-preserved medieval citadels, where cobbled streets and fortified walls tell stories of centuries past. 
          Later, explore the surrounding countryside on e-bikes, moving through villages, meadows, and open hills at an unhurried pace.`,
      },
      {
        day: 5,
        title: "Cund to Brașov via Viscri (155 km)",
        description: `Drive through Saxon Transylvania with a stop at Viscri, a UNESCO-listed village known for its fortified church and timeless rural character. 
          Simple homes, uneven streets, and open landscapes offer a glimpse into a way of life that has endured for generations.
          By evening, arrive in Brașov, set against forested hills and medieval squares.`,
      },
      {
        day: 6,
        title: "Brașov and Bran (30 km)",
        description: `Leave paved roads behind for a guided off-road experience through forest tracks and elevated clearings, reaching viewpoints rarely accessed by conventional vehicles.
          As evening approaches, visit Bran after hours, experiencing the site in a quieter, more atmospheric setting before continuing into the mountains.`,
      },
      {
        day: 7,
        title: " Sinaia and the Wild",
        description: `Begin the day with Romania’s royal history at Peleș Castle, set against a dramatic mountain backdrop. 
          Later, shift focus to nature with a guided wildlife observation experience from a forest hide, following strict ethical and safety practices. 
          A day shaped by history, landscape, and silence.`,
      },
      {
        day: 8,
        title: "Return to Bucharest via Slănic Prahova (140 km)",
        description: `Leave the mountains behind and drive south to one of Romania’s most striking natural spaces—an expansive underground salt mine with a scale unlike anything above ground. 
          From here, continue back to Bucharest for a relaxed final evening.`,
      },
      {
        day: 9,
        title: "Departure",
        description: `After breakfast, transfer to the airport and depart with memories of a lesser-known Europe discovered at driving pace.`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg1,

      inclusions: [
        "Recced, hand-picked driving routes",
        "Self-drive car rentals (Toyota RAV4 or similar)",
        "Fuel for the car",
        "All exclusive stays on twin sharing basis",
        "All meals during the expedition",
        "All internal sightseeing and experiences",
        "Local guide and Embarq support team throughout the journey",
      ],

      exclusions: [
        "International air tickets and visa",
        "Individual insurance and documentation costs",
        "Refundable security deposit for rental car",
        "All personal expenses not mentioned in inclusions",
        "Any cost arising out of unforeseen circumstances",
        "TCS as applicable",
      ],
    },
  },

  // NEW Expedition - Punjab & Himachal -7
  punjabandhimachal: {
    hero: {
      title: "Punjab & Himachal",
      subtitle: "Himalayan roads. Soulful escapes.",
      badge: "All Women",
      description:
        "A soulful all-women self-drive journey through Punjab and Himachal Pradesh, beginning in vibrant Amritsar and winding through the lush tea gardens of Palampur to the peaceful Tirthan Valley. The trip combines scenic Himalayan drives, boutique stays, village experiences, local cuisine and immersive moments amidst the mountains.",
      bgImage: heroImage7,
      mapImage: mapImage,
    },

    about: {
      destination: "Amritsar, Palampur, Tirthan Valley & Chandigarh.",
      duration: "6 Days / 5 Nights",
      cost: "INR 1,15,000 per person",
      travelDates: "4th September – 9th September 2026",
      vehicle: "Self - Drive SUV — Thar or Similar",
      distance: "Approx. 638 KM",
    },

    route: {
      desktop: routeMap7,
      mobile: routeMapMobile7,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Amritsar",
        description: `Arrive in Amritsar, visit the Golden Temple and Jallianwala Bagh, enjoy local cuisine and experience the festive spirit of Janmashtami.`,
      },
      {
        day: 2,
        title: "Amritsar → Palampur",
        description: `Drive from Punjab into the Himalayan valleys, passing tea gardens, mountain views and winding roads to Palampur.`,
      },
      {
        day: 3,
        title: "Palampur Day Break",
        description: `Enjoy a relaxed day with mountain picnics, tea estate visits, village walks and stunning sunsets against the Dhauladhar ranges.`,
      },
      {
        day: 4,
        title: "Palampur → Tirthan Valley",
        description: `Drive through scenic mountain roads, pine forests and Himalayan villages before settling into a riverside retreat in Tirthan Valley.`,
      },
      {
        day: 5,
        title: "Tirthan Valley Day Break",
        description: `Explore the Himalayan National Park, savour authentic Pahadi cuisine and relax beside crystal-clear rivers surrounded by cedar forests and snow-capped peaks.`,
      },
      {
        day: 6,
        title: "Tirthan Valley → Chandigarh",
        description: `Enjoy the final scenic drive descending from the mountains towards Chandigarh, concluding the expedition`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg7,

      inclusions: [
        "Recced routes",
        "All stays on twin-sharing basis",
        "Self-drive SUV — Thar or Similar",
        "Fuel for the car",
        "All meals and breaks",
        "All internal sightseeing and travel mentioned in the itinerary",
        "Inner Line Permits throughout the drive",
        "Lead and support car ",
        "Taxes",
      ],

      exclusions: [
        "Travel to Amritsar and from Chandigarh",
        "Individual insurance",
        "All personal expenses not mentioned",
        "Any cost arising out of unforeseen circumstances",
        "Refundable security deposit for rental car",
      ],
    },
  },

  // NEW Expedition - Kyrgyzstan-8
  kyrgyzstan: {
    hero: {
      title: "Kyrgyzstan",
      subtitle: "Mountain landscapes, alpine lakes.",
      badge: "All Women",
      description:
        "Discover the hidden beauty of Kyrgyzstan, from snow-capped mountains, turquoise alpine lakes and stunning gorges to vast grasslands and glacial rivers. Follow the ancient Silk Route, combining paved and off-road drives through spectacular mountain passes, while experiencing the rich nomadic culture through horse games, carpet weaving, yurt stays, folklore and a visit to the historic Tash Rabat Caravanserai.",
      bgImage: heroImage8,
      mapImage: mapImage,
    },

    about: {
      destination: "Bishkek, Issyk-Kul, Karakol, Naryn & Tash Rabat. ",
      duration: "8 Days / 7 Nights",
      cost: " USD 2,700 per head",
      travelDates: "12th to 19th September, 2026",
      vehicle: "Self-Drive SUV – Toyota 4Runner",
      distance: "Approx. 1,485KM",
    },

    route: {
      desktop: routeMap8,
      mobile: routeMapMobile8,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Bishkek",
        description: `Arrive in Bishkek, meet the Embarq guide, transfer to Hotel Plaza and enjoy `,
      },
      {
        day: 2,
        title: "Bishkek → Cholpon Ata",
        description: `Drive to Cholpon Ata, enjoy traditional Kyrgyz horse games and spend a relaxed afternoon by Lake Issyk-Kul.`,
      },
      {
        day: 3,
        title: "Cholpon Ata → Karakol",
        description: `Drive to Karakol through the Grigorievskoye Gorge and explore the Dungan Mosque and ancient wooden Orthodox Church`,
      },
      {
        day: 4,
        title: "Karakol → Balykchy",
        description: `Drive along Lake Issyk-Kul and visit a local eagle hunter for a unique cultural experience.`,
      },
      {
        day: 5,
        title: "Balykchy → Naryn",
        description: `Drive through the scenic Japak Bel Pass and experience altitudes of over 3,000 metres`,
      },
      {
        day: 6,
        title: "Naryn → Bishkek",
        description: `Return to Bishkek, experience traditional carpet weaving and folk music, and enjoy a farewell dinner with fellow travellers.`,
      },
      {
        day: 7,
        title: "Depart for India from Bishkek",
        description: `Travel to the airport and board your flight to India after your Kyrgyzstan expedition.`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg2,

      inclusions: [
        "All stays",
        "All meals",
        "Self-driven SUV (Toyota 4Runner)",
        "Fuel for the car",
        "Embark lead car and end of trail support vehicle",
        "Breakdown and medical assistance",
        "Local tour guides",
        "Airport transfers in Bishkek",
      ],

      exclusions: [
        "International air tickets",
        "Visa support and visa charges",
        "Individual insurance & documentation costs like travel & medical insurance",
        "International driving permit",
        "All personal expenses",
        "Any cost arising out of unforeseen circumstances",
        "Refundable deposit of USD 400 per car",
        "TCS as applicable",
      ],
    },
  },

  // NEW Expedition - Mizoram - 9
  mizoram: {
    hero: {
      title: "Mizoram ",
      subtitle: "Misty mountains. Hidden horizons.",
      badge: "All Women",
      description:
        "An all-women self-drive expedition through Mizoram, exploring its scenic mountain roads, lush landscapes, villages and waterfalls.The journey includes visits to Aizawl, Thenzawl, Lunglei and Champhai, along with Rhi Dil Lake near the Myanmar border. Experience Mizoram’s rich local culture and spend an evening with the Assam Rifles – Sentinels of the North East.",
      bgImage: heroImage9,
      mapImage: mapImage,
    },

    about: {
      destination: "Aizawl, Thenzawl, Lunglei & Champhai.",
      duration: "9 Days / 8 Nights",
      cost: "INR 1,45,000 per person",
      travelDates: "10th October – 18th October 2026",
      vehicle: "Self-Drive SUV Rental with Fuel",
      distance: "Approx. 520 KM",
    },

    route: {
      desktop: routeMap9,
      mobile: routeMapMobile9,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Aizawl",
        description: `Arrive in Aizawl, meet the Assam Rifles, attend the briefing session and enjoy dinner.`,
      },
      {
        day: 2,
        title: "Aizawl Local Sightseeing",
        description: `Explore Durtlang Hills View Point, Reiek Tlang and Bara Bazar, followed by a cultural program and dinner.`,
      },
      {
        day: 3,
        title: "Aizawl → Thenzawl",
        description: `Drive to Thenzawl, visiting Sialsuk Village and Vantawng/Tuirihiau Falls en route.`,
      },
      {
        day: 4,
        title: "Thenzawl → Lunglei",
        description: `Drive through cool pine-covered hills to Lunglei, Mizoram’s second-largest town, followed by an evening cultural program.`,
      },
      {
        day: 5,
        title: "Lunglei → Thenzawl",
        description: `Drive back to Thenzawl to explore eastern Mizoram and spend the evening experiencing the lifestyle of the Assam Rifles`,
      },
      {
        day: 6,
        title: "Lunglei → Champhai:",
        description: `Take an early start towards Champhai, known as the “Rice Bowl of Mizoram” for its lush green paddy fields.`,
      },
      {
        day: 7,
        title: "Champhai Day Break",
        description: `Visit Rhi Dil Lake near the Myanmar border and spend the evening with the locals.`,
      },
      {
        day: 8,
        title: "Champhai → Aizawl",
        description: `Complete the final drive back to Aizawl and celebrate the journey with a gala dinner`,
      },
      {
        day: 9,
        title: "Depart from Aizawl",
        description: `Fly out from Aizawl after completing the Mizoram expedition.`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg9,

      inclusions: [
        "Recced routes",
        "All stays on twin-sharing basis",
        "Self-drive SUV rental and fuel for the car",
        "All meals and breaks",
        "All internal sightseeing and travel mentioned in the itinerary",
        "Inner Line Permits throughout the drive",
        "Lead and support car",
        "Taxes",
      ],

      exclusions: [
        "Travel to and from Aizawl",
        "All personal expenses not mentioned",
        "Any cost arising out of unforeseen circumstances",
        "Refundable security deposit for rental car",
      ],
    },
  },

  // NEW Expedition - New Zealand - 10
  newzealand: {
    hero: {
      title: "New Zealand",
      subtitle: "Glacial roads. Untamed beauty.",
      badge: "All Women",
      description:
        "Explore New Zealand’s breathtaking landscapes, from Auckland’s volcanic surroundings and Rotorua’s geothermal wonders to Lake Taupō, Kaikōura’s coastal beauty and Franz Josef’s glaciers. The journey continues through the Southern Alps to Queenstown and Milford Sound, combining scenic drives, wildlife, culture and unforgettable wilderness experiences.",
      bgImage: heroImage10,
      mapImage: mapImage,
    },

    about: {
      destination:
        "Auckland, Rotorua, Lake Taupō, Wellington, Kaikōura, Franz Josef, Queenstown & Milford Sound.",
      duration: "12 Days / 11 Nights",
      cost: "USD 7,500 — 2 people in 1 car , USD 6,500 — 4 people in 1 car",
      travelDates: "27th September – 8th October 2026",
      vehicle: "Mitsubishi Outlander or Similar",
      // distance: "",
    },

    route: {
      desktop: routeMap10,
      mobile: routeMapMobile10,
    },

    itinerary: [
      {
        day: 1,
        title: "Auckland Arrival",
        description: `Arrive into Auckland, a vibrant harbour city framed by volcanic hills and sparkling waterfronts. Pick up your self-drive vehicles and ease into the journey with a relaxed evening along the marin`,
      },
      {
        day: 2,
        title: "Auckland → Rotorua",
        description: `Drive through lush Waikato farmland and rolling green hills toward Rotorua’s steaming geothermal landscapes. Experience glow worm caves and an immersive Māori evening with cultural storytelling, cuisine, and geysers under the night sky.`,
      },
      {
        day: 3,
        title: "Rotorua → Lake Taupō",
        description: `A scenic drive past forests and volcanic terrain leads to Lake Taupō, a vast crater lake with striking blue waters. Unwind in natural hot springs or explore lakeside viewpoints and nearby cascading falls.`,
      },
      {
        day: 4,
        title: "Lake Taupō → Wellington",
        description: `Journey through the dramatic Tongariro volcanic plateau with stark, cinematic landscapes before descending to the Kapiti Coast. Arrive in Wellington, a charming harbour city known for its artsy vibe and coastal beauty.`,
      },
      {
        day: 5,
        title: "Wellington → Kaikōura",
        description: `Sail across the Cook Strait through the breathtaking Marlborough Sounds, then drive a stunning coastal highway. Reach Kaikōura where mountains meet the ocean – Get set for an exceptional whale watching experience!`,
      },
      {
        day: 6,
        title: "Kaikōura → Franz Josef Glacier",
        description: `An epic West Coast drive unfolds with rugged beaches, dense rainforests, and towering Southern Alps. Arrive in Franz Josef, a remote alpine village set against dramatic glacier landscapes.`,
      },
      {
        day: 7,
        title: "Franz Josef Glacier",
        description: `A day to absorb the raw beauty of ice and mountains, surrounded by pristine wilderness. Optional helicopter flights offer unforgettable aerial views and snow landings on the glacier.`,
      },
      {
        day: 8,
        title: "Franz Josef → Queenstown",
        description: `Drive through the spectacular Haast Pass with waterfalls, rivers, and dense forest corridors. Stop at the charming gold rush town of Arrowtown before arriving at the adventure capital of the world - Queenstown by Lake Wakatipu.`,
      },
      {
        day: 9,
        title: "Queenstown",
        description: `Explore the Central Otago wine region set against dramatic mountain backdrops with a curated tasting experience. The afternoon is free to soak in Queenstown’s lakeside charm or vibrant café culture.`,
      },
      {
        day: 10,
        title: "Milford Sound Excursion",
        description: `Take a breathtaking flight over the Southern Alps to Milford Sound, followed by a serene fjord cruise. Expect towering cliffs, cascading waterfalls, and mirror-like waters in one of the world’s most dramatic landscapes.`,
      },
      {
        day: 11,
        title: "Queenstown",
        description: `A flexible day to experience Queenstown your way - from adrenaline adventures to scenic gondola rides. Alternatively, unwind by the lake or indulge in a spa experience with alpine views.`,
      },
      {
        day: 12,
        title: "Departure",
        description: `Bid farewell to New Zealand’s stunning landscapes as you transfer to the airport. Depart with memories of an extraordinary journey through diverse terrains and unforgettable experiences.`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg10,

      inclusions: [
        "All stays (on twin sharing)",
        "All Meals",
        "Car Rental (Mitsubishi Outlander)",
        "or Similar",
        "Fuel for the car",
        "Embarq Lead and Support Car",
        "Airport Transfers",
      ],

      exclusions: [
        "Flight Tickets And Visa Charges",
        "Individual Insurance & Documentation Cost like",
        "travel and medical Insurance",
        "All Personal Expenses",
        "Any Cost Arising Out of Unforeseen Circumstances",
        "Refundable Security Deposit For Car Rental",
        "TCS as Applicable",
      ],
    },
  },

  //South Korea - 2

  southkorea: {
    hero: {
      title: "South Korea",
      subtitle: "Perfect roads. Mountains curves.",
      badge: "All Women",
      description:
        "A premium all-women self-drive road expedition through South Korea, combining some of the world’s most perfectly engineered roads with mountain curves, coastal light, ancient temples, and vibrant cities. From the energy of Seoul to forested national parks, historic villages, and the southern coast, this journey is designed around driving pleasure, cultural depth, and immersive local experiences.",
      bgImage: heroImage2,
      mapImage: mapImage,
    },

    about: {
      destination: "South Korea",
      duration: "9 Days / 8 Nights",
      cost: " USD 6,500.00 per head",
      travelDates: "21st November to 29th November, 2026",
      vehicle: "Hyundai Santa Fe or similar (self-drive rental)",
      distance: "Approx. 1,940 km",
    },

    route: {
      desktop: routeMap2,
      mobile: routeMapMobile2,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Seoul",
        description: `Arrive in Seoul and transfer to the hotel using private transport.
          The day is kept relaxed to settle in and prepare for the journey ahead.`,
      },
      {
        day: 2,
        title: "Seoul Sightseeing",
        description: `Visit the Demilitarized Zone (DMZ), one of the world’s most heavily guarded borders, with access to infiltration tunnels, observation points, and museums that document this complex chapter of history.
          Explore Gyeongbokgung Palace and experience Seoul’s royal heritage through interactions with palace guards.
          Walk along the Seoul Wall, passing through the alleys and murals of Ihwa Mural Village, before visiting the iconic Dongdaemun Design Plaza (DDP), blending tradition with contemporary architecture.
          End the day at Gwangjang Market, one of Seoul’s oldest traditional markets, alive with street food, music, cafés, and late-night energy.`,
      },
      {
        day: 3,
        title: "Seoul to Sokcho (245 km)",
        description: `Begin the driving journey, leaving the city behind and following the Han River with views of the Taebaek Mountains.
          The road winds through forested slopes and long tunnels, leading to the edges of Seoraksan National Park, a UNESCO-designated Biosphere Reserve known for dramatic rock formations, dense forests, wildlife, and hot springs.
          Visit the historic Naksansa Temple, with over 1,300 years of history dating back to the Silla Kingdom.`,
      },
      {
        day: 4,
        title: "Sokcho to Andong (330 km)",
        description: `Descend from the Taebaek Mountains into countryside dotted with palm trees and fishing villages.
          Visit Hahoe Village, the “village surrounded by water,” a beautifully preserved traditional settlement offering a glimpse into Korea’s past through its houses, cobbled streets, and landscapes.
          Spend the evening in Maenggae Village, followed by a visit to a distinctive Korean brewery that reimagines age-old fermentation methods, and enjoy a private dinner prepared with regional ingredients and traditional techniques.`,
      },
      {
        day: 5,
        title: "Andong to Gyeongju (200 km)",
        description: `Drive along the Nakdong River as the landscape transitions from farmland to historic heartland.
          Arrive in Gyeongju, once the capital of the Silla Kingdom, where temples, pagodas, and stone lanterns appear at every turn.
          Visit Bulguksa Temple, a UNESCO World Heritage Site, and the Seokguram Grotto, followed by an evening musical experience at a traditional Hanok house.`,
      },
      {
        day: 6,
        title: "Gyeongju to Busan (190 km)",
        description: `Drive south to Busan, a major port city on Korea’s southeastern coast.
          Explore the vibrant city, including Haedong Yonggungsa Temple, dramatically set by the sea, and the bustling Gukje and Jagalchi markets, where coastal culture and daily life come alive.`,
      },
      {
        day: 7,
        title: "Busan to Beopjusa (180 km)",
        description: `En route, visit Yangdong Village, South Korea’s largest and best-preserved traditional clan village.
          Arrive at Beopjusa Temple, set deep within the mountains of Songnisan National Park.
          Experience a unique Temple Stay, waking to temple bells and chants echoing through ancient forests, and walking paths shaped by centuries of reflection, mindfulness, and tradition.`,
      },
      {
        day: 8,
        title: "Beopjusa to Seoul (420 km)",
        description: `Begin the return drive to Seoul, a day shaped by long scenic stretches, rustic landscapes, and cultural reflections from the journey.
          Arrive in Seoul by evening for a relaxed final night.`,
      },
      {
        day: 9,
        title: "Departure from Seoul",
        description: `Transfer to the airport for your return flight.
          Depart South Korea with memories of exceptional roads, layered history, coastal light, and deeply immersive experiences.`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg2,

      inclusions: [
        "Recced, hand-picked driving routes",
        "Self-drive car rentals (Toyota RAV4 or similar)",
        "Fuel for the car",
        "All exclusive stays on twin sharing basis",
        "All meals during the expedition",
        "All internal sightseeing and experiences",
        "Local guide and Embarq support team throughout the journey",
      ],

      exclusions: [
        "International air tickets and visa",
        "Individual insurance and documentation costs",
        "Refundable security deposit for rental car",
        "All personal expenses not mentioned in inclusions",
        "Any cost arising out of unforeseen circumstances",
        "TCS as applicable",
      ],
    },
  },

  //Finland - 3

  finland: {
    hero: {
      title: "Finland ",
      subtitle: "Arctic Winter Self-Drive Expedition",
      badge: "All Women",
      description:
        "A premium winter self-drive expedition through Finland, journeying from the design-forward capital of Helsinki into the deep Arctic landscapes of Lapland. This expedition blends frozen forests, snowbound highways, ice-covered seas, and immersive Arctic experiences — from driving through Nordic postcard-perfect scenery to floating on the frozen Gulf of Bothnia and chasing the Northern Lights in Rovaniemi.",
      bgImage: heroImage3,
      mapImage: mapImage,
    },

    about: {
      destination: "South Korea",
      duration: "9 Days / 8 Nights",
      cost: " USD 6,500.00 per head",
      travelDates: "21st November to 29th November, 2026",
      vehicle: "Toyota RAV or similar",
      distance: "Approx. 1,940 km",
    },

    route: {
      desktop: routeMap3,
      mobile: routeMapMobile3,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Helsinki",
        description:
          "Arrive in Helsinki and transfer to the hotel.The day is kept relaxed to settle in and prepare for the winter journey ahead.",
      },
      {
        day: 2,
        title: "Helsinki Sightseeing",
        description: `Enjoy a guided sightseeing tour of Helsinki.
          Visit the city’s iconic harbours, Senate Square, the Lutheran Cathedral, Parliament Building, Finlandia Hall, and the Sibelius Monument, gaining insight into Finland’s history, design sensibility, and cultural rhythm.`,
      },
      {
        day: 3,
        title: "Helsinki to Jyväskylä (270 km)",
        description: `Let the adventure begin as you take to your own wheels for one of Finland’s most spectacular winter drives.
          Wind through snow-blanketed forests and frozen lakes glinting in low winter light, passing small Nordic towns where smoke curls gently from chimneys.
          A classic Nordic postcard comes alive as you experience the calm, beauty, and scale of Finland’s winter landscapes.`,
      },
      {
        day: 4,
        title: "Jyväskylä to Kemi (450 km)",
        description: `Drive north into Lapland as the landscape becomes increasingly raw and elemental.
          Frozen rivers run parallel to the road, wide and white, while reindeer may appear at the roadside, unhurried and completely at home in the Arctic stillness.
          As you approach the Bothnian Bay, forests thin, horizons widen, and Kemi emerges quietly — shaped by ice, sea, and northern light.`,
      },
      {
        day: 5,
        title: "Kemi to Rovaniemi (120 km)",
        description: `Begin the day with one of Finland’s most extraordinary winter experiences — an Icebreaker Cruise on the frozen waters of the Gulf of Bothnia.
          Watch as the mighty Sampo crushes thick sea ice beneath its hull. 
          When the ship halts, experience the unforgettable thrill of floating on the frozen sea in thermal survival suits.
          If conditions allow, step out onto the ice itself, feeling it creak beneath your boots as you take in the vast Arctic expanse.After this exhilarating experience, drive onwards to Rovaniemi.`,
      },
      {
        day: 6 & 7,
        title: " Rovaniemi (Lapland Experience)",
        description: `Spend two immersive days in the heart of Lapland.
          Visit the magical Santa Claus Village, cross the legendary Arctic Circle, and race through snowy forests on a husky safari, followed by a warming barbecue.
          Enjoy a once-in-a-lifetime dinner at an ice hotel, and venture out on guided night tours in search of the elusive Northern Lights dancing across the polar sky.
          Stay at an exquisite Lappish resort, complete with a private sauna and wide windows framing the open Arctic skies — designed for slow, restorative moments in deep winter.`,
      },

      {
        day: 8,
        title: "Rovaniemi to Helsinki (Flight)",
        description: `Bid farewell to Lapland and fly back to Helsinki.A day to reflect on Arctic landscapes, frozen roads, and unforgettable winter experiences.`,
      },
      {
        day: 9,
        title: "Departure from Helsinki",
        description: `Transfer to the airport and fly out of Helsinki, carrying memories of one of the world’s most extraordinary winter journeys.`,
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg3,

      inclusions: [
        "Recced, hand-picked driving routes",
        "Self-drive car rentals (Toyota RAV4 or similar)",
        "Fuel for the car",
        "All exclusive stays on twin sharing basis",
        "All meals during the expedition",
        "All internal sightseeing and experiences",
        "Local guide and Embarq support team throughout the journey",
      ],

      exclusions: [
        "International travel to and from Helsinki/Finland and visa charges",
        "Any additional stay, sightseeing, or transfers",
        "Refundable security deposit for the rental vehicle",
        "Individual insurance and documentation costs",
        "International Driving Permit",
        "All personal and incidental expenses not mentioned",
        "Any cost arising out of unforeseen circumstances",
        "TCS as applicable",
      ],
    },
  },

  //georgia
  // georgia: {
  //   hero: {
  //     title: "Georgia",
  //     subtitle: "Mountain passes. Offbeat routes.",
  //     badge: "All Women",
  //     description:
  //       "A premium all-women self-drive road expedition through Georgia, covering historic cities, wine regions, dramatic mountain passes, alpine terrain, lush canyons, coastal landscapes, and mineral-rich valleys. The journey blends scenic driving, cultural immersion, and convoy-supported self-drive freedom, curated and led by the Embarq co-founder.",
  //     bgImage: heroImage,
  //     mapImage: mapImage,
  //   },

  //   about: {
  //     destination: "Georgia",
  //     duration: "9 Days / 8 Nights",
  //     cost: "USD 4,000.00 per head",
  //     travelDates: "8th August to 16th August, 2026",
  //     vehicle: "Toyota RAV4 or similar (self-drive rental)",
  //     distance: "Approx. 1,845 km",
  //   },

  //   route: {
  //     desktop: routeMap,
  //     mobile: routeMapMobile,
  //   },

  //   itinerary: [
  //     {
  //       day: 1,
  //       title: "Arrival in Tbilisi",
  //       description:
  //         `Arrive in Georgia’s capital, Tbilisi, where your journey begins.
  //         Transfer to the hotel and ease into the city’s unique blend of old-world charm and modern vibrancy.
  //         The day is kept relaxed to recover from travel and prepare for the road journey ahead.`,
  //       // details: "Transfer to hotel...",
  //     },
  //     {
  //       day: 2,
  //       title: "Tbilisi to Kakheti to Tbilisi (350 km)",
  //       description:
  //         `Drive from Tbilisi to the Kakheti wine region via the scenic Gombori Pass, passing through picturesque villages framed by the Caucasus Mountains.
  //         Experience Georgia’s 8,000-year-old winemaking tradition with a private wine tasting, including the unique qvevri (underground clay pot) ageing method.
  //         Visit Sighnaghi, the “City of Love,” perched high above the Alazani Valley, and enjoy leisurely moments with sweeping vineyard views before returning to Tbilisi.`,
  //       // details: "Visit Old Town...",
  //     },
  //     {
  //       day: 3,
  //       title: "Tbilisi to Gudauri via Gergeti (160 km + 4×4 drive)",
  //       description:
  //         `Begin the mountain journey towards Gudauri with stops at iconic landmarks including Jvari Church and the ancient capital of Mtskheta.
  //         Pause at the Friendship Monument before a thrilling 4×4 ascent to Gergeti Trinity Church, dramatically located at 2,170 metres with commanding views of Mount Kazbeg.
  //         A day defined by alpine roads, historic sites, and high-altitude landscapes.`,
  //       // details:
  //       //   "Stop at Ananuri Fortress and arrive in Kazbegi for stunning mountain views.",
  //     },
  //     {
  //       day: 4,
  //       title: "Gudauri to Kutaisi (350 km)",
  //       description:
  //         `Explore the historic Ananuri Fortress, once home to Georgian dukes, set against a stunning riverside backdrop.
  //         Continue towards Uplistsikhe, the ancient rock-hewn cave town known as the “Fortress of God,” carved into stone over 3,000 years ago.
  //         Drive onward to Kutaisi, transitioning from mountain terrain to western Georgia’s cultural heartland.`,
  //       // details:
  //       //   "Hike or drive to this iconic church with breathtaking views of Mount Kazbek.",
  //     },
  //     {
  //       day: 5,
  //       title: "Kutaisi Day Break (320 km)",
  //       description:
  //         `Set out to explore the dramatic Okatse and Martvili Canyons, known for their untamed beauty, waterfalls, and suspended walkways.
  //         Visit the enchanting Prometheus Cave, walking through illuminated tunnels filled with stalactites, stalagmites, underground rivers, and lakes.
  //         A day immersed in Georgia’s natural wonders, both above and below ground.`,
  //       // details:
  //       //   "Enjoy scenic drives and optional activities in this mountain resort town.",
  //     },
  //     {
  //       day: 6,
  //       title: "Kutaisi to Batumi (180 km)",
  //       description:
  //         `Drive towards the Black Sea coast and arrive in Batumi, Georgia’s vibrant seaside city.
  //         Stroll along the lively promenade, explore local landmarks, and unwind in the relaxed coastal atmosphere.
  //         Optional time to visit the Botanical Gardens, offering panoramic views and diverse flora.`,
  //       // details:
  //       //   "Visit traditional wineries and taste Georgian wines made in ancient qvevri clay vessels.",
  //     },
  //     {
  //       day: 7,
  //       title: "Batumi to Borjomi (325 km)",
  //       description:
  //         `Depart Batumi and head inland towards Borjomi, renowned for its naturally carbonated mineral water sourced from the Borjomi Gorge.
  //         Arrive at a serene resort set within a coniferous forest, offering a slower pace and a deep connection with nature.
  //         The day blends scenic driving with wellness and relaxation.`,
  //       // details:
  //       //   "Walk through the town of love with beautiful views over Alazani Valley.",
  //     },
  //     {
  //       day: 8,
  //       title: "Borjomi to Tbilisi (160 km)",
  //       description:
  //         `Enjoy a scenic return drive to Tbilisi, transitioning from forested landscapes back into the capital’s urban energy
  //         Spend the day exploring historic sites, vibrant markets, and cultural pockets of the city.
  //         A fitting final drive that brings together history, culture, and the joy of the open road.`,
  //       // details:
  //       //   "Last-minute shopping and farewell dinner before your journey home.",
  //     },
  //     {
  //       day: 9,
  //       title: "Departure from Tbilisi",
  //       description:
  //         `Check out from the hotel and transfer for your onward flight.
  //         Depart Georgia carrying memories of mountain passes, coastal roads, historic towns, and a truly immersive self-drive journey.`,
  //       // details:
  //       //   "Last-minute shopping and farewell dinner before your journey home.",
  //     },
  //   ],

  //   inclusionExclusion: {
  //     bgImage: expeditionBg,

  //     inclusions: [
  //       "Recced, hand-picked driving routes",
  //       "Self-drive car rentals (Toyota RAV4 or similar)",
  //       "Fuel for the car",
  //       "All exclusive stays on twin sharing basis",
  //       "All meals during the expedition",
  //       "All internal sightseeing and experiences",
  //       "Local guide and Embarq support team throughout the journey",
  //     ],

  //     exclusions: [
  //       "International air tickets and visa",
  //       "Individual insurance and documentation costs",
  //       "Refundable security deposit for rental car",
  //       "All personal expenses not mentioned in inclusions",
  //       "Any cost arising out of unforeseen circumstances",
  //       "TCS as applicable",
  //     ],
  //   },
  // },
  // K2K 2026 - 4

  //   k2k2026: {
  //     hero: {
  //       title: "K2K 2026",
  //       subtitle: "Kutch to Kibithoo Self-Drive Expedition",
  //       badge: "All Women",
  //       description:
  //         "Covering India’s westernmost to easternmost drivable points, it is set to become one of the largest all-women self-drive expeditions ever undertaken in India, symbolising unity, courage, and the limitless potential of women on the move",
  //       bgImage: heroImage4,
  //       mapImage: mapImage,
  //     },
  //     about: {
  //       destination: "Kutch, Gujarat to Kibithoo, Arunachal Pradesh",
  //       duration: "19 Days / 18 Nights",
  //       cost: "INR 235,000/- Per head",
  //       travelDates: "8th March to 28th March 2026",
  //       vehicle: "Self-drive - Citroën and Jeep SUVs",
  //       distance: "Approx. 4800 km",
  //     },

  //     route: {
  //       desktop: routeMap4,
  //       mobile: routeMapMobile4,
  //     },

  //     itinerary: [
  //       {
  //         day: 1,
  //         title: "Arrival in Bhuj",
  //         description:
  //           `Evening: Briefing and Dinner`,
  //       },
  //       {
  //         day: 2,
  //         title: "Bhuj → Dholavira",
  //         description:
  //           `Distance: 60 km`,
  //       },
  //       {
  //         day: 3,
  //         title: "Dholavira → Mount Abu",
  //         description:
  //           `Distance: 362 km`,
  //       },
  //       {
  //         day: 4,
  //         title: "Mount Abu → Jaipur/Ajmer",
  //         description:
  //           `Distance: 514 km
  // `,
  //       },
  //       {
  //         day: 5,
  //         title: "Jaipur/Ajmer → Lucknow (Arrival)",
  //         description:
  //           `Distance: 586 km
  // `,
  //       },
  //       {
  //         day: 6,
  //         title: "Lucknow (Day Break / Rest Day)",
  //         description:
  //           ``,
  //       },
  //       {
  //         day: 7,
  //         title: "Lucknow → Patna (Arrival)",
  //         description:
  //           `Distance: 502 km`,
  //       },
  //       {
  //         day: 8,
  //         title: "Patna → Siliguri (Arrival)",
  //         description:
  //           `Distance: 474 km`,
  //       },
  //       {
  //         day: 9,
  //         title: "Siliguri → Guwahati (Arrival)",
  //         description:
  //           `Distance: 455 km`,
  //       },
  //        {
  //         day: 10,
  //         title: "Guwahati (Day Break / Rest Day)",
  //         description:
  //           ``,
  //       },
  //        {
  //         day: 11,
  //         title: "Guwahati → Itanagar (Arrival)",
  //         description:
  //           `Distance: 323 km`,
  //       },
  //        {
  //         day: 12,
  //         title: "Itanagar → Dibrugarh (Arrival)",
  //         description:
  //           `Distance: 201 km`,
  //       },
  //        {
  //         day: 13,
  //         title: "Dibrugarh → Chongkham (Arrival)",
  //         description:
  //           `Distance: 161 km
  // `,
  //       },
  //        {
  //         day: 14,
  //         title: "Chongkham → Kibithoo",
  //         description:
  //           `Distance: 250 km`,
  //       },
  //        {
  //         day: 15,
  //         title: "Kibithoo → Chongkham",
  //         description:
  //           `Distance: 250 km`,
  //       },
  //        {
  //         day: 16,
  //         title: "Chongkham → Dibrugarh (Arrival)",
  //         description:
  //           `Distance: 161 km`,
  //       },
  //        {
  //         day: 17,
  //         title: "Dibrugarh → Itanagar (Arrival)",
  //         description:
  //           `Distance: 201 km`,
  //       },
  //        {
  //         day: 18,
  //         title: "Itanagar → Guwahati (Arrival)",
  //         description:
  //           `Distance: 323 km`,
  //       },
  //        {
  //         day: 19,
  //         title: "Guwahati → Fly Out",
  //         description:
  //           ``,
  //       },
  //     ],

  //     inclusionExclusion: {
  //       bgImage: expeditionBg4,

  //       inclusions: [
  //         "Recced, hand-picked driving routes",
  //         "Self-drive car rentals (Citroen and Jeep SUVs)",
  //         "Fuel for the car",
  //         "All exclusive stays on twin sharing basis",
  //         "All meals during the expedition",
  //         "All internal sightseeing and special experiences as per itinerary",
  //         "Fun-filled engagement activities",
  //         "Local guide and Embarq support team throughout the journey",
  //       ],

  //       exclusions: [
  //         "Travel cost to reach Kutch, where the drive starts from and departure from Kibithoo once the drive ends",
  //         "Personal insurance",
  //         "Personal expenses and any incidentals like tips, laundry, room service, porter services etc",
  //         "Alcoholic beverages ",
  //         "Actual cost incurred towards repair-work, if required",
  //         "Expenses arising out of unforeseen circumstance",
  //       ],
  //     },
  //   },

  // scotland

  //   scotland: {
  //     hero: {
  //       title: "Scotland",
  //       subtitle: "NC500. Coastlines. Castle country.",
  //       badge: "All Women",
  //       description:
  //         "Embarq’s self-drive tour of Scotland takes you through dramatic mountain passes, rugged coastlines, and the stunning North Coast 500. Experience the thrill of driving a Range Rover Sport, with the highlight being a full day exploring the romantic Isle of Skye — a land of breathtaking scenery, rich history, legends, and unforgettable landscapes.",
  //       bgImage: heroImage5,
  //       mapImage: mapImage,
  //     },
  //     about: {
  //       destination: "Scotland",
  //       duration: "10 Days / 9 Nights",
  //       cost: " INR 5,95,000/- Per head",
  //       travelDates: "8th May to 17th May, 2026",
  //       vehicle: "Range Rover",
  //       distance: "Approx. 4800 km",
  //     },

  //     route: {
  //       desktop: routeMap5,
  //       mobile: routeMapMobile5,
  //     },

  //     itinerary: [
  //       {
  //         day: 1,
  //         title: "Arrive in Edinburgh",
  //         description:
  //           `Arrive in Edinburgh and dive into its rich tapestry of history and culture!
  //           From the imposing Edinburgh Castle to the quaint streets of the Old Town, there’s something to enchant every traveler.
  //           Relax, explore, and soak in the magic of this captivating city!`,
  //       },
  //       {
  //         day: 2,
  //         title: "Edinburgh to Inverness",
  //         description:
  //           `157 Mile day via Aberfeldy – Gentle start using the motorway until we exit at Aberfeldy, famous for its Grouse Distillery.
  //           Overnight stop at Inverness.`,
  //       },
  //       {
  //         day: 3,
  //         title: "Inverness to John O’Groat",
  //         description:
  //           `Leisurely start, drive through the Cairngorms down General Wade’s road to Fort Augustus, Castle Urquhart, and Loch Ness.
  // We drive through the stunning NC500 and reach John O’Groats.`,
  //       },
  //       {
  //         day: 4,
  //         title: "A Day Break at John O’Groats",
  //         description:
  //           `Take a day to rest and unwind in the serene beauty of John O’Groats,recharging for the adventures ahead.`,
  //       },
  //       {
  //         day: 5,
  //         title: "John O’Groats to Lochinver",
  //         description:
  //           `We continue driving on the
  // NC 500 – with lots of stops and going off the routes – visiting Dunnet Head (most northerly point).`,
  //       },
  //       {
  //         day: 6,
  //         title: "Lochinver to Gairloch",
  //         description:
  //           `This is the NC500 at its best:
  // Stunning views, beautiful beaches (Durness), the best hot chocolate in Scotland at Cocoa Café and numerous photo stops.`,
  //       },
  //       {
  //         day: 7,
  //         title: "Gairloch to Flodigarry",
  //         description:
  //           `The final part of the NC500 down the west coast.
  // Including the famous Bealach na Ba and Torridon and then round Loch Carron and over the bridge to Skye.`,
  //       },
  //       {
  //         day: 8,
  //         title: "Isle of Skye",
  //         description:
  //           `A day to enjoy the magical Portree and Isle of Skye.`,
  //       },
  //       {
  //         day: 9,
  //         title: "Isle of Skye to Edinburgh",
  //         description:
  //           `Enjoy a splendid drive from Isle of Skye to Edinburgh via Inveraray.
  // Unwind in a handpicked, beautiful hotel in Edinburgh.`,
  //       },
  //       {
  //         day: 10,
  //         title:"Departure from Edinburgh",
  //         description:`Travel back home with memories for a lifetime.`
  //       }
  //     ],

  //     inclusionExclusion: {
  //       bgImage: expeditionBg5,

  //       inclusions: [
  //         "Recced handpicked routes",
  // "Car rentals - Range Rover or similar",
  // "Fuel for the car",
  // "All exclusive stays on twin sharing basis",
  // "All meals",
  // "All internal sightseeing and special experiences",
  // "Embarq support team",
  //       ],

  //       exclusions: [
  //          "International air tickets and Visa",
  // "Individual insurance & documentation costs",
  // "Refundable security deposit for car rental (2000 GBP)",
  // "All personal expenses not mentioned",
  // "Any cost arising out of unforeseen circumstances",
  // "TCS as applicable"
  //       ],
  //     },
  //   },
};
