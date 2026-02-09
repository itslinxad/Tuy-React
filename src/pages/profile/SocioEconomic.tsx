import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const SocioEconomic = () => {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation hooks for each section
  const overviewRef = useScrollAnimation();
  const indicatorsRef = useScrollAnimation();
  const industriesRef = useScrollAnimation();
  const employmentRef = useScrollAnimation();
  const infrastructureRef = useScrollAnimation();
  const educationRef = useScrollAnimation();
  const healthRef = useScrollAnimation();
  const businessRef = useScrollAnimation();

  // ============================================
  // CONTENT NEEDED: Economic Indicators Dashboard
  // ============================================
  // Provide key economic statistics:
  // - averageIncome: Monthly household income
  // - employmentRate: Percentage of employed population
  // - povertyIncidence: Poverty rate percentage
  // - businessEstablishments: Number of registered businesses
  const economicIndicators = [
    {
      icon: "fa-coins",
      value: "REPLACE: ₱25,000",
      label: "Average Income",
      description: "REPLACE: Monthly household income",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: "fa-briefcase",
      value: "REPLACE: 92",
      suffix: "%",
      label: "Employment Rate",
      description: "REPLACE: Employed working-age population",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: "fa-chart-line",
      value: "REPLACE: 12.5",
      suffix: "%",
      label: "Poverty Incidence",
      description: "REPLACE: Households below poverty line",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: "fa-store",
      value: "REPLACE: 850",
      label: "Business Est.",
      description: "REPLACE: Registered establishments",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Major Industries
  // ============================================
  // Provide detailed information about each major industry sector:
  // - title: Industry name
  // - percentage: Contribution to economy or employment
  // - description: 2-3 sentences about the industry
  // - keyActivities: Array of main activities
  // - icon: FontAwesome icon class
  const majorIndustries = [
    {
      title: "REPLACE: Agriculture",
      percentage: "REPLACE: 35",
      icon: "fa-seedling",
      color: "bg-green-100 text-green-600",
      description:
        "REPLACE: Describe agricultural activities in Tuy (2-3 sentences). Include major crops, farming practices, scale of operations, and contribution to the local economy.",
      keyActivities: [
        "REPLACE: Rice farming",
        "REPLACE: Coconut cultivation",
        "REPLACE: Vegetable production",
        "REPLACE: Fruit orchards",
      ],
    },
    {
      title: "REPLACE: Fishing & Aquaculture",
      percentage: "REPLACE: 20",
      icon: "fa-fish",
      color: "bg-blue-100 text-blue-600",
      description:
        "REPLACE: Describe fishing and aquaculture activities (2-3 sentences). Include types of fishing, aquaculture operations, processing activities, and importance to coastal barangays.",
      keyActivities: [
        "REPLACE: Commercial fishing",
        "REPLACE: Aquaculture/fish ponds",
        "REPLACE: Fish processing",
        "REPLACE: Seafood trading",
      ],
    },
    {
      title: "REPLACE: Manufacturing",
      percentage: "REPLACE: 15",
      icon: "fa-industry",
      color: "bg-gray-100 text-gray-600",
      description:
        "REPLACE: Describe manufacturing activities (2-3 sentences). Include types of manufacturing, products made, employment generated, and contribution to economic development.",
      keyActivities: [
        "REPLACE: Food processing",
        "REPLACE: Handicrafts",
        "REPLACE: Local products",
        "REPLACE: Small-scale manufacturing",
      ],
    },
    {
      title: "REPLACE: Services & Trade",
      percentage: "REPLACE: 25",
      icon: "fa-shopping-cart",
      color: "bg-purple-100 text-purple-600",
      description:
        "REPLACE: Describe services and trade sectors (2-3 sentences). Include retail, wholesale, professional services, tourism-related services, and commercial activities.",
      keyActivities: [
        "REPLACE: Retail trade",
        "REPLACE: Professional services",
        "REPLACE: Tourism services",
        "REPLACE: Financial services",
      ],
    },
    {
      title: "REPLACE: Construction",
      percentage: "REPLACE: 5",
      icon: "fa-hard-hat",
      color: "bg-orange-100 text-orange-600",
      description:
        "REPLACE: Describe construction activities (2-3 sentences). Include residential, commercial, infrastructure projects, and employment in this sector.",
      keyActivities: [
        "REPLACE: Residential construction",
        "REPLACE: Commercial buildings",
        "REPLACE: Infrastructure projects",
        "REPLACE: Renovation services",
      ],
    },
  ];

  // ============================================
  // CONTENT NEEDED: Employment & Labor Statistics
  // ============================================
  // Provide workforce and employment information
  const employmentStats = [
    {
      title: "Labor Force",
      value: "REPLACE: 22,000",
      icon: "fa-users",
      description: "REPLACE: Total working-age population in labor force",
    },
    {
      title: "Employed",
      value: "REPLACE: 20,500",
      icon: "fa-user-check",
      description: "REPLACE: Number of employed individuals",
    },
    {
      title: "Unemployment Rate",
      value: "REPLACE: 6.8%",
      icon: "fa-user-times",
      description: "REPLACE: Percentage of unemployed in labor force",
    },
    {
      title: "Underemployment",
      value: "REPLACE: 15.2%",
      icon: "fa-user-clock",
      description: "REPLACE: Percentage wanting additional work hours",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Infrastructure Development
  // ============================================
  // Provide information about infrastructure across categories
  const infrastructure = {
    transportation: {
      title: "Transportation & Roads",
      icon: "fa-road",
      stats: [
        { label: "REPLACE: National Roads", value: "REPLACE: 15 km" },
        { label: "REPLACE: Municipal Roads", value: "REPLACE: 85 km" },
        { label: "REPLACE: Barangay Roads", value: "REPLACE: 120 km" },
        { label: "REPLACE: Paved Roads", value: "REPLACE: 65%" },
      ],
      description:
        "REPLACE: Brief description of road network, transportation services, and ongoing/planned improvements.",
    },
    utilities: {
      title: "Utilities & Services",
      icon: "fa-plug",
      stats: [
        {
          label: "REPLACE: Electrification Rate",
          value: "REPLACE: 98%",
        },
        {
          label: "REPLACE: Water Service Coverage",
          value: "REPLACE: 75%",
        },
        {
          label: "REPLACE: Households with Piped Water",
          value: "REPLACE: 60%",
        },
        {
          label: "REPLACE: Sanitation Coverage",
          value: "REPLACE: 85%",
        },
      ],
      description:
        "REPLACE: Brief description of utility services, water sources, sanitation facilities, and service improvements.",
    },
    telecommunications: {
      title: "Telecommunications",
      icon: "fa-wifi",
      stats: [
        {
          label: "REPLACE: Mobile Coverage",
          value: "REPLACE: 95%",
        },
        {
          label: "REPLACE: Internet Penetration",
          value: "REPLACE: 65%",
        },
        {
          label: "REPLACE: Broadband Availability",
          value: "REPLACE: 50%",
        },
        {
          label: "REPLACE: Cell Towers",
          value: "REPLACE: 8",
        },
      ],
      description:
        "REPLACE: Brief description of telecommunications infrastructure, internet service providers, and digital connectivity.",
    },
  };

  // ============================================
  // CONTENT NEEDED: Education Facilities
  // ============================================
  // Provide information about educational institutions:
  // - type: Level of education
  // - count: Number of schools
  // - enrollment: Total enrolled students (approximate)
  // - description: Brief details about the facilities
  const educationFacilities = [
    {
      type: "REPLACE: Elementary Schools",
      count: "REPLACE: 25",
      enrollment: "REPLACE: 8,500",
      icon: "fa-school",
      color: "bg-blue-100 text-blue-600",
      description:
        "REPLACE: Public and private elementary schools across all barangays",
    },
    {
      type: "REPLACE: High Schools",
      count: "REPLACE: 8",
      enrollment: "REPLACE: 4,200",
      icon: "fa-graduation-cap",
      color: "bg-green-100 text-green-600",
      description: "REPLACE: Junior and senior high schools in the municipality",
    },
    {
      type: "REPLACE: Vocational/Technical",
      count: "REPLACE: 3",
      enrollment: "REPLACE: 600",
      icon: "fa-tools",
      color: "bg-orange-100 text-orange-600",
      description:
        "REPLACE: Technical-vocational institutions offering skills training",
    },
    {
      type: "REPLACE: Day Care Centers",
      count: "REPLACE: 22",
      enrollment: "REPLACE: 1,200",
      icon: "fa-child",
      color: "bg-pink-100 text-pink-600",
      description: "REPLACE: Early childhood care and development centers",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Health Facilities
  // ============================================
  // Provide information about healthcare infrastructure
  const healthFacilities = [
    {
      type: "REPLACE: Rural Health Unit",
      count: "REPLACE: 1",
      icon: "fa-hospital",
      color: "bg-red-100 text-red-600",
      description:
        "REPLACE: Main RHU location, services offered, operating hours",
      services: [
        "REPLACE: Primary healthcare",
        "REPLACE: Immunization",
        "REPLACE: Maternal care",
        "REPLACE: Pharmacy",
      ],
    },
    {
      type: "REPLACE: Barangay Health Stations",
      count: "REPLACE: 22",
      icon: "fa-clinic-medical",
      color: "bg-blue-100 text-blue-600",
      description:
        "REPLACE: Health stations in each barangay providing basic health services",
      services: [
        "REPLACE: Basic consultation",
        "REPLACE: First aid",
        "REPLACE: Health monitoring",
        "REPLACE: Medicine distribution",
      ],
    },
    {
      type: "REPLACE: Private Clinics",
      count: "REPLACE: 12",
      icon: "fa-stethoscope",
      color: "bg-green-100 text-green-600",
      description:
        "REPLACE: Private medical and dental clinics operated by practitioners",
      services: [
        "REPLACE: General practice",
        "REPLACE: Dental care",
        "REPLACE: Specialty consultation",
        "REPLACE: Laboratory services",
      ],
    },
  ];

  // ============================================
  // CONTENT NEEDED: Health Personnel
  // ============================================
  const healthPersonnel = {
    doctors: "REPLACE: 8",
    nurses: "REPLACE: 15",
    midwives: "REPLACE: 25",
    bhws: "REPLACE: 50",
    dentists: "REPLACE: 4",
  };

  // ============================================
  // CONTENT NEEDED: Business & Investment Climate
  // ============================================
  const businessEnvironment = [
    {
      title: "REPLACE: Business Registration",
      icon: "fa-file-signature",
      description:
        "REPLACE: Describe the business registration process, requirements, timeline, and support services available to new businesses.",
    },
    {
      title: "REPLACE: Investment Opportunities",
      icon: "fa-chart-line",
      description:
        "REPLACE: Describe key investment opportunities in Tuy including priority sectors, available land, incentives, and comparative advantages.",
    },
    {
      title: "REPLACE: Banking & Finance",
      icon: "fa-university",
      description:
        "REPLACE: List available banking institutions, microfinance services, and financial support programs for entrepreneurs and businesses.",
    },
    {
      title: "REPLACE: Market Access",
      icon: "fa-shopping-bag",
      description:
        "REPLACE: Describe market facilities, trading centers, distribution networks, and access to regional and national markets.",
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
            <span className="text-white/90">Socio-Economic</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            Socio-Economic Profile
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Economy, Infrastructure, and Development
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        {/* Economic Overview Section */}
        <section
          ref={overviewRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            overviewRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Economic Overview
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            {/* ============================================
                CONTENT NEEDED: Economic Overview
                ============================================
                Provide 2-3 paragraphs introducing Tuy's economy:
                - Paragraph 1: Overall economic landscape and characteristics
                - Paragraph 2: Major economic sectors and their relationships
                - Paragraph 3: Recent economic trends and future outlook
            */}
            <p>
              REPLACE: First paragraph - Provide an overview of Tuy's economic
              landscape. Discuss the municipality's economic classification,
              main sources of income, and overall economic health.
            </p>
            <p>
              REPLACE: Second paragraph - Describe the major economic sectors
              and how they interact. Explain the balance between agriculture,
              fishing, manufacturing, and services, and their contributions to
              employment and income.
            </p>
            <p>
              REPLACE: Third paragraph - Discuss recent economic developments,
              growth trends, challenges faced, and the municipality's vision for
              economic development and poverty reduction.
            </p>
          </div>
        </section>

        {/* Economic Indicators Dashboard */}
        <section
          ref={indicatorsRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate ${
            indicatorsRef.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Economic Indicators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {economicIndicators.map((indicator, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 hover:shadow-xl transition-all scroll-animate stagger-${
                  index + 1
                } ${indicatorsRef.isVisible ? "visible" : ""}`}
              >
                <div
                  className={`w-14 h-14 rounded-full ${indicator.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`fas ${indicator.icon} text-2xl`}></i>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {indicator.value}
                    {indicator.suffix || ""}
                  </div>
                  <div className="text-gray-800 font-semibold mb-1">
                    {indicator.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {indicator.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Industries Section */}
        <section
          ref={industriesRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            industriesRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Major Industries
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Key economic sectors driving Tuy's economy and providing employment.
          </p>

          <div className="space-y-6">
            {majorIndustries.map((industry, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all scroll-animate-left stagger-${
                  (index % 3) + 1
                } ${industriesRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-start gap-6 flex-wrap">
                  <div
                    className={`w-16 h-16 rounded-lg ${industry.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`fas ${industry.icon} text-3xl`}></i>
                  </div>
                  <div className="flex-1 min-w-[250px]">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary">
                        {industry.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
                        {industry.percentage}%
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                        Key Activities:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {industry.keyActivities.map((activity, actIndex) => (
                          <div
                            key={actIndex}
                            className="flex items-center gap-2"
                          >
                            <i className="fas fa-check-circle text-primary text-sm"></i>
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Employment & Labor Section */}
        <section
          ref={employmentRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            employmentRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Employment & Labor
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Workforce statistics and employment situation in Tuy.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employmentStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 hover:shadow-md transition-all scroll-animate stagger-${
                  index + 1
                } ${employmentRef.isVisible ? "visible" : ""}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${stat.icon} text-primary text-xl`}></i>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {stat.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Development Section */}
        <section
          ref={infrastructureRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            infrastructureRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Infrastructure Development
            </h2>
          </div>

          <div className="space-y-8">
            {Object.entries(infrastructure).map(
              ([key, category], catIndex) => (
                <div
                  key={key}
                  className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 scroll-animate-left stagger-${
                    catIndex + 1
                  } ${infrastructureRef.isVisible ? "visible" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <i
                        className={`fas ${category.icon} text-primary text-xl`}
                      ></i>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {category.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-white rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </section>

        {/* Education Facilities Section */}
        <section
          ref={educationRef.elementRef}
          className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 scroll-animate ${
            educationRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Education Facilities
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Educational institutions serving Tuy's learning needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {educationFacilities.map((facility, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 hover:shadow-lg transition-all scroll-animate stagger-${
                  (index % 2) + 1
                } ${educationRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-full ${facility.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`fas ${facility.icon} text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {facility.type}
                    </h3>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-primary font-bold">
                        {facility.count} Schools
                      </span>
                      <span className="text-gray-600">
                        {facility.enrollment} Students
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Health Facilities Section */}
        <section
          ref={healthRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            healthRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Health Facilities
            </h2>
          </div>

          {/* Health Personnel Stats */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <i className="fas fa-user-md text-primary mr-3"></i>
              Health Personnel
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {healthPersonnel.doctors}
                </div>
                <div className="text-gray-700 text-sm">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {healthPersonnel.nurses}
                </div>
                <div className="text-gray-700 text-sm">Nurses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {healthPersonnel.midwives}
                </div>
                <div className="text-gray-700 text-sm">Midwives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {healthPersonnel.bhws}
                </div>
                <div className="text-gray-700 text-sm">BHWs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {healthPersonnel.dentists}
                </div>
                <div className="text-gray-700 text-sm">Dentists</div>
              </div>
            </div>
          </div>

          {/* Health Facilities */}
          <div className="space-y-6">
            {healthFacilities.map((facility, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all scroll-animate-left stagger-${
                  index + 1
                } ${healthRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-start gap-6 flex-wrap">
                  <div
                    className={`w-16 h-16 rounded-lg ${facility.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`fas ${facility.icon} text-3xl`}></i>
                  </div>
                  <div className="flex-1 min-w-[250px]">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary">
                        {facility.type}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
                        {facility.count}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {facility.description}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                        Services Offered:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {facility.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="flex items-center gap-2"
                          >
                            <i className="fas fa-check-circle text-primary text-sm"></i>
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business & Investment Section */}
        <section
          ref={businessRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate ${
            businessRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="px-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business & Investment Climate
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Opportunities and support for businesses and investors in Tuy.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {businessEnvironment.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all scroll-animate stagger-${
                    (index % 2) + 1
                  } ${businessRef.isVisible ? "visible" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${item.icon} text-white text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocioEconomic;
