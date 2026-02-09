import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";
import TuyMap from "../../components/TuyMap";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Maps = () => {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation hooks for each section
  const mapRef = useScrollAnimation();
  const geographicRef = useScrollAnimation();
  const barangaysRef = useScrollAnimation();
  const poiRef = useScrollAnimation();
  const transportRef = useScrollAnimation();
  const landUseRef = useScrollAnimation();

  // ============================================
  // CONTENT NEEDED: Geographic Boundaries
  // ============================================
  const geographicBoundaries = {
    north: "REPLACE: Municipality to the north",
    south: "REPLACE: Municipality to the south",
    east: "REPLACE: Municipality to the east",
    west: "REPLACE: Body of water or municipality to the west",
    coordinates: {
      latitude: "REPLACE: 13.9833° N",
      longitude: "REPLACE: 120.7167° E",
    },
  };

  // ============================================
  // CONTENT NEEDED: Barangay Locations
  // ============================================
  // For each barangay, provide:
  // - name: Barangay name
  // - classification: "Urban", "Coastal", or "Rural"
  // - population: Approximate population
  // - area: Land area in hectares
  // - description: Brief description of location and features
  const barangayInfo = [
    {
      name: "REPLACE: Acle",
      classification: "REPLACE: Rural/Urban/Coastal",
      population: "REPLACE: 2,500",
      area: "REPLACE: 250 ha",
      description:
        "REPLACE: Brief description of location, key features, and accessibility",
      icon: "fa-map-marker-alt",
    },
    {
      name: "REPLACE: Bayudbud",
      classification: "REPLACE: Rural/Urban/Coastal",
      population: "REPLACE: 1,800",
      area: "REPLACE: 180 ha",
      description:
        "REPLACE: Brief description of location, key features, and accessibility",
      icon: "fa-map-marker-alt",
    },
    {
      name: "REPLACE: Bolboc",
      classification: "REPLACE: Rural/Urban/Coastal",
      population: "REPLACE: 3,200",
      area: "REPLACE: 320 ha",
      description:
        "REPLACE: Brief description of location, key features, and accessibility",
      icon: "fa-map-marker-alt",
    },
    {
      name: "REPLACE: Dalima",
      classification: "REPLACE: Rural/Urban/Coastal",
      population: "REPLACE: 2,100",
      area: "REPLACE: 210 ha",
      description:
        "REPLACE: Brief description of location, key features, and accessibility",
      icon: "fa-map-marker-alt",
    },
    {
      name: "REPLACE: Dao",
      classification: "REPLACE: Rural/Urban/Coastal",
      population: "REPLACE: 2,800",
      area: "REPLACE: 280 ha",
      description:
        "REPLACE: Brief description of location, key features, and accessibility",
      icon: "fa-map-marker-alt",
    },
    {
      name: "REPLACE: Guinhawa",
      classification: "REPLACE: Rural/Urban/Coastal",
      population: "REPLACE: 1,900",
      area: "REPLACE: 190 ha",
      description:
        "REPLACE: Brief description of location, key features, and accessibility",
      icon: "fa-map-marker-alt",
    },
    // Add more barangays - Tuy has 22 barangays total
    // Continue with: Lumbangan, Luntal, Magahis, Mataywanac, Malibu Este,
    // Malibu Oeste, Oitawen, Palincaro, Putol, Rillo, Sabang,
    // San Jose, San Pablo, Santa Clara, Talon, Toong
  ];

  // ============================================
  // CONTENT NEEDED: Points of Interest Categories
  // ============================================
  // Provide locations for various categories
  const pointsOfInterest = [
    {
      category: "Government Offices",
      icon: "fa-landmark",
      color: "bg-blue-100 text-blue-600",
      locations: [
        {
          name: "REPLACE: Municipal Hall",
          address: "REPLACE: Address",
          description: "REPLACE: Brief description",
        },
        {
          name: "REPLACE: Police Station",
          address: "REPLACE: Address",
          description: "REPLACE: Brief description",
        },
        {
          name: "REPLACE: Fire Station",
          address: "REPLACE: Address",
          description: "REPLACE: Brief description",
        },
        {
          name: "REPLACE: Rural Health Unit",
          address: "REPLACE: Address",
          description: "REPLACE: Brief description",
        },
      ],
    },
    {
      category: "Educational Institutions",
      icon: "fa-school",
      color: "bg-green-100 text-green-600",
      locations: [
        {
          name: "REPLACE: School Name 1",
          address: "REPLACE: Address",
          description: "REPLACE: Level (Elementary/High School)",
        },
        {
          name: "REPLACE: School Name 2",
          address: "REPLACE: Address",
          description: "REPLACE: Level (Elementary/High School)",
        },
        {
          name: "REPLACE: School Name 3",
          address: "REPLACE: Address",
          description: "REPLACE: Level (Elementary/High School)",
        },
      ],
    },
    {
      category: "Religious Sites",
      icon: "fa-church",
      color: "bg-purple-100 text-purple-600",
      locations: [
        {
          name: "REPLACE: Church Name 1",
          address: "REPLACE: Address",
          description: "REPLACE: Denomination and year established",
        },
        {
          name: "REPLACE: Church Name 2",
          address: "REPLACE: Address",
          description: "REPLACE: Denomination and year established",
        },
        {
          name: "REPLACE: Chapel Name",
          address: "REPLACE: Address",
          description: "REPLACE: Barangay chapel information",
        },
      ],
    },
    {
      category: "Tourist Attractions",
      icon: "fa-camera",
      color: "bg-yellow-100 text-yellow-600",
      locations: [
        {
          name: "REPLACE: Beach/Resort Name",
          address: "REPLACE: Address",
          description: "REPLACE: Brief description of attraction",
        },
        {
          name: "REPLACE: Historical Site",
          address: "REPLACE: Address",
          description: "REPLACE: Brief description of attraction",
        },
        {
          name: "REPLACE: Natural Attraction",
          address: "REPLACE: Address",
          description: "REPLACE: Brief description of attraction",
        },
      ],
    },
    {
      category: "Commercial Centers",
      icon: "fa-shopping-cart",
      color: "bg-orange-100 text-orange-600",
      locations: [
        {
          name: "REPLACE: Public Market",
          address: "REPLACE: Address",
          description: "REPLACE: Operating hours and features",
        },
        {
          name: "REPLACE: Commercial Area",
          address: "REPLACE: Address",
          description: "REPLACE: Types of businesses",
        },
      ],
    },
  ];

  // ============================================
  // CONTENT NEEDED: Transportation Network
  // ============================================
  const transportation = [
    {
      type: "National Roads",
      icon: "fa-road",
      description:
        "REPLACE: Describe national roads passing through Tuy, their condition, and connectivity to nearby cities/municipalities.",
      routes: [
        "REPLACE: Route 1 description",
        "REPLACE: Route 2 description",
      ],
    },
    {
      type: "Public Transportation",
      icon: "fa-bus",
      description:
        "REPLACE: Describe available public transportation (jeepneys, tricycles, buses), routes, and terminals.",
      routes: [
        "REPLACE: Main jeepney routes",
        "REPLACE: Bus routes and terminals",
        "REPLACE: Tricycle coverage areas",
      ],
    },
    {
      type: "Port/Coastal Access",
      icon: "fa-ship",
      description:
        "REPLACE: Describe port facilities, fishing ports, or coastal access points if applicable.",
      routes: [
        "REPLACE: Port location and services",
        "REPLACE: Fishing port facilities",
      ],
    },
  ];

  // ============================================
  // CONTENT NEEDED: Land Use Distribution
  // ============================================
  // Provide percentage or area for different land uses
  const landUse = [
    {
      type: "Agricultural",
      percentage: "REPLACE: 45",
      area: "REPLACE: 3,336 ha",
      icon: "fa-seedling",
      color: "bg-green-100 text-green-600",
      description:
        "REPLACE: Rice fields, coconut plantations, vegetable farms, etc.",
    },
    {
      type: "Residential",
      percentage: "REPLACE: 25",
      area: "REPLACE: 1,853 ha",
      icon: "fa-home",
      color: "bg-blue-100 text-blue-600",
      description: "REPLACE: Settlements, housing areas, subdivisions",
    },
    {
      type: "Commercial",
      percentage: "REPLACE: 5",
      area: "REPLACE: 371 ha",
      icon: "fa-store",
      color: "bg-purple-100 text-purple-600",
      description: "REPLACE: Business districts, markets, commercial zones",
    },
    {
      type: "Industrial",
      percentage: "REPLACE: 3",
      area: "REPLACE: 222 ha",
      icon: "fa-industry",
      color: "bg-gray-100 text-gray-600",
      description: "REPLACE: Manufacturing areas, processing facilities",
    },
    {
      type: "Institutional",
      percentage: "REPLACE: 7",
      area: "REPLACE: 519 ha",
      icon: "fa-university",
      color: "bg-indigo-100 text-indigo-600",
      description: "REPLACE: Schools, government offices, public facilities",
    },
    {
      type: "Forest/Protected",
      percentage: "REPLACE: 10",
      area: "REPLACE: 741 ha",
      icon: "fa-tree",
      color: "bg-emerald-100 text-emerald-600",
      description: "REPLACE: Forest areas, protected zones, watersheds",
    },
    {
      type: "Others",
      percentage: "REPLACE: 5",
      area: "REPLACE: 371 ha",
      icon: "fa-map",
      color: "bg-yellow-100 text-yellow-600",
      description: "REPLACE: Roads, open spaces, undeveloped areas",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="parallax-bg"
          style={{
            transform: `translateY(${offset}px)`,
            backgroundImage: `url('${import.meta.env.VITE_BASE_PATH}/hero-image.jpg')`,
          }}
        ></div>

        {/* Multi-layer Overlays */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

        {/* Breadcrumb Navigation */}
        <div
          className="absolute top-4 left-48 z-20 animate-fadeIn hidden md:block"
          style={{ animationDelay: "0.2s" }}
        >
          <nav className="text-sm text-white/70 flex items-center">
            <Link to="/">
              <span className="hover:text-white/90 transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-white/90">Maps</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            Maps of Tuy
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Explore Our Geography and Landmarks
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        {/* Interactive Map Section */}
        <section
          ref={mapRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            mapRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Interactive Map
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-6">
            Explore Tuy's locations interactively. Click on markers to see more
            information about government offices, schools, halls, and barangays.
          </p>

          {/* TuyMap Component Integration */}
          <div className="rounded-lg overflow-hidden shadow-md border-4 border-gray-200">
            <TuyMap />
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2 flex items-center">
              <i className="fas fa-info-circle mr-2"></i>
              Map Instructions
            </h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>
                • Click on any marker to view detailed information about that
                location
              </li>
              <li>
                • Use the filter buttons above the map to show specific
                categories
              </li>
              <li>• Zoom in/out using the map controls or scroll wheel</li>
              <li>• Drag to pan around the map and explore different areas</li>
            </ul>
          </div>
        </section>

        {/* Geographic Overview Section */}
        <section
          ref={geographicRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            geographicRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Geographic Overview
            </h2>
          </div>

          {/* ============================================
              CONTENT NEEDED: Geographic Overview Text
              ============================================
              Provide 1-2 paragraphs describing Tuy's geographic location and features
          */}
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
            <p>
              REPLACE: Provide an overview of Tuy's geographic location within
              Batangas province. Describe its position relative to major cities,
              distance from Manila, and general topographical features.
            </p>
            <p>
              REPLACE: Describe key geographic characteristics including
              coastline, terrain variations, water features, and how geography
              influences development and settlement patterns.
            </p>
          </div>

          {/* Boundaries */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <i className="fas fa-compass text-primary mr-3"></i>
              Municipal Boundaries
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <i className="fas fa-arrow-up text-primary text-2xl mb-2"></i>
                <div className="text-sm text-gray-600 mb-1">North</div>
                <div className="font-semibold text-gray-800">
                  {geographicBoundaries.north}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <i className="fas fa-arrow-down text-primary text-2xl mb-2"></i>
                <div className="text-sm text-gray-600 mb-1">South</div>
                <div className="font-semibold text-gray-800">
                  {geographicBoundaries.south}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <i className="fas fa-arrow-right text-primary text-2xl mb-2"></i>
                <div className="text-sm text-gray-600 mb-1">East</div>
                <div className="font-semibold text-gray-800">
                  {geographicBoundaries.east}
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <i className="fas fa-arrow-left text-primary text-2xl mb-2"></i>
                <div className="text-sm text-gray-600 mb-1">West</div>
                <div className="font-semibold text-gray-800">
                  {geographicBoundaries.west}
                </div>
              </div>
            </div>
          </div>

          {/* Coordinates */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-primary mb-3 flex items-center">
              <i className="fas fa-map-pin mr-2"></i>
              Geographic Coordinates
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600">Latitude: </span>
                <span className="font-semibold text-gray-800">
                  {geographicBoundaries.coordinates.latitude}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Longitude: </span>
                <span className="font-semibold text-gray-800">
                  {geographicBoundaries.coordinates.longitude}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Barangay Locations Section */}
        <section
          ref={barangaysRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            barangaysRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Barangay Locations
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Detailed information about each of Tuy's 22 barangays, including
            location, size, and population.
          </p>

          <div className="space-y-4">
            {barangayInfo.map((barangay, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all scroll-animate-left stagger-${
                  (index % 3) + 1
                } ${barangaysRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fas ${barangay.icon} text-primary text-xl`}
                    ></i>
                  </div>
                  <div className="flex-1 min-w-[250px]">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {barangay.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {barangay.classification}
                      </span>
                      <span className="text-gray-600 text-sm">
                        <i className="fas fa-users mr-1"></i>
                        {barangay.population}
                      </span>
                      <span className="text-gray-600 text-sm">
                        <i className="fas fa-expand-arrows-alt mr-1"></i>
                        {barangay.area}
                      </span>
                    </div>
                    <p className="text-gray-700">{barangay.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-4">
            <p className="text-gray-700 text-sm">
              <i className="fas fa-info-circle text-yellow-600 mr-2"></i>
              <strong>Note:</strong> Please add the remaining barangays
              (Lumbangan, Luntal, Magahis, Mataywanac, Malibu Este, Malibu
              Oeste, Oitawen, Palincaro, Putol, Rillo, Sabang, San Jose, San
              Pablo, Santa Clara, Talon, Toong) following the same format above.
            </p>
          </div>
        </section>

        {/* Points of Interest Section */}
        <section
          ref={poiRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate ${
            poiRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="px-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Points of Interest
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Important locations and landmarks across Tuy organized by category.
            </p>

            <div className="space-y-8">
              {pointsOfInterest.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className={`bg-white rounded-lg p-6 scroll-animate stagger-${
                    catIndex + 1
                  } ${poiRef.isVisible ? "visible" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}
                    >
                      <i className={`fas ${category.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      {category.category}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {category.locations.map((location, locIndex) => (
                      <div
                        key={locIndex}
                        className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-semibold text-primary mb-1">
                          {location.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">
                          <i className="fas fa-map-marker-alt mr-1"></i>
                          {location.address}
                        </p>
                        <p className="text-gray-700 text-sm">
                          {location.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Network Section */}
        <section
          ref={transportRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            transportRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Transportation Network
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Road networks and transportation infrastructure connecting Tuy to
            other areas.
          </p>

          <div className="space-y-6">
            {transportation.map((transport, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 scroll-animate-left stagger-${
                  index + 1
                } ${transportRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fas ${transport.icon} text-primary text-2xl`}
                    ></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {transport.type}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {transport.description}
                    </p>
                    <ul className="space-y-2">
                      {transport.routes.map((route, routeIndex) => (
                        <li
                          key={routeIndex}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <i className="fas fa-chevron-right text-primary text-sm mt-1"></i>
                          <span>{route}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Land Use Distribution Section */}
        <section
          ref={landUseRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            landUseRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Land Use Distribution
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            How Tuy's land area is distributed across different uses and
            purposes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landUse.map((use, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all scroll-animate stagger-${
                  (index % 3) + 1
                } ${landUseRef.isVisible ? "visible" : ""}`}
              >
                <div
                  className={`w-14 h-14 rounded-full ${use.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`fas ${use.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-2">
                  {use.type}
                </h3>
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-primary">
                    {use.percentage}%
                  </div>
                  <div className="text-gray-600 text-sm">{use.area}</div>
                </div>
                <div className="bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000"
                    style={{
                      width: landUseRef.isVisible ? `${use.percentage}%` : "0%",
                    }}
                  ></div>
                </div>
                <p className="text-gray-700 text-sm text-center">
                  {use.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
              <i className="fas fa-leaf text-primary mr-3"></i>
              Land Use Planning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              REPLACE: Provide information about land use planning initiatives,
              zoning ordinances, Comprehensive Land Use Plan (CLUP)
              implementation, and efforts to balance development with
              environmental protection and agricultural preservation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Maps;
