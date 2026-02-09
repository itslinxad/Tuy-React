import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Demography = () => {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation hooks for each section
  const overviewRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const ageDistributionRef = useScrollAnimation();
  const trendsRef = useScrollAnimation();
  const householdRef = useScrollAnimation();
  const languageRef = useScrollAnimation();
  const religionRef = useScrollAnimation();
  const educationRef = useScrollAnimation();

  // ============================================
  // CONTENT NEEDED: Population Statistics Dashboard
  // ============================================
  // Provide current demographic statistics:
  // - totalPopulation: Current total population
  // - populationDensity: People per square kilometer
  // - growthRate: Annual growth rate percentage
  // - households: Total number of households
  const populationStats = [
    {
      icon: "fa-users",
      number: "REPLACE: 45,000",
      label: "Total Population",
      suffix: "",
      description: "REPLACE: As of 2024 Census",
    },
    {
      icon: "fa-chart-area",
      number: "REPLACE: 607",
      label: "Population Density",
      suffix: "/km²",
      description: "REPLACE: People per square kilometer",
    },
    {
      icon: "fa-chart-line",
      number: "REPLACE: 1.5",
      label: "Growth Rate",
      suffix: "%",
      description: "REPLACE: Annual population growth",
    },
    {
      icon: "fa-home",
      number: "REPLACE: 11,000",
      label: "Households",
      suffix: "",
      description: "REPLACE: Total number of households",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Age Distribution
  // ============================================
  // Provide population breakdown by age groups:
  // - ageGroup: Age range (e.g., "0-14 years")
  // - population: Number of people in this age group
  // - percentage: Percentage of total population
  // - icon: FontAwesome icon class
  // - color: Tailwind color classes
  const ageDistribution = [
    {
      ageGroup: "REPLACE: 0-14 years",
      population: "REPLACE: 15,000",
      percentage: "REPLACE: 33.3",
      icon: "fa-child",
      color: "bg-blue-100 text-blue-600",
      description: "Children and young adolescents",
    },
    {
      ageGroup: "REPLACE: 15-24 years",
      population: "REPLACE: 8,500",
      percentage: "REPLACE: 18.9",
      icon: "fa-user-graduate",
      color: "bg-green-100 text-green-600",
      description: "Youth and young adults",
    },
    {
      ageGroup: "REPLACE: 25-54 years",
      population: "REPLACE: 16,000",
      percentage: "REPLACE: 35.6",
      icon: "fa-user-tie",
      color: "bg-purple-100 text-purple-600",
      description: "Working-age adults",
    },
    {
      ageGroup: "REPLACE: 55-64 years",
      population: "REPLACE: 3,500",
      percentage: "REPLACE: 7.8",
      icon: "fa-user",
      color: "bg-yellow-100 text-yellow-600",
      description: "Mature adults",
    },
    {
      ageGroup: "REPLACE: 65+ years",
      population: "REPLACE: 2,000",
      percentage: "REPLACE: 4.4",
      icon: "fa-user-clock",
      color: "bg-red-100 text-red-600",
      description: "Senior citizens",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Population Trends
  // ============================================
  // Provide historical population data showing growth over time:
  // - year: Census year
  // - population: Population count
  // - growthRate: Percentage growth from previous census
  const populationTrends = [
    {
      year: "REPLACE: 1990",
      population: "REPLACE: 30,000",
      growthRate: "REPLACE: -",
    },
    {
      year: "REPLACE: 2000",
      population: "REPLACE: 35,000",
      growthRate: "REPLACE: 16.7%",
    },
    {
      year: "REPLACE: 2010",
      population: "REPLACE: 40,000",
      growthRate: "REPLACE: 14.3%",
    },
    {
      year: "REPLACE: 2015",
      population: "REPLACE: 42,500",
      growthRate: "REPLACE: 6.3%",
    },
    {
      year: "REPLACE: 2020",
      population: "REPLACE: 44,000",
      growthRate: "REPLACE: 3.5%",
    },
    {
      year: "REPLACE: 2024",
      population: "REPLACE: 45,000",
      growthRate: "REPLACE: 2.3%",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Household Statistics
  // ============================================
  // Provide household demographic information
  const householdStats = [
    {
      title: "Average Household Size",
      value: "REPLACE: 4.1",
      suffix: "persons",
      icon: "fa-users",
      color: "bg-blue-100 text-blue-600",
      description: "REPLACE: Average number of people per household",
    },
    {
      title: "Male Population",
      value: "REPLACE: 51",
      suffix: "%",
      icon: "fa-male",
      color: "bg-indigo-100 text-indigo-600",
      description: "REPLACE: Percentage of male population",
    },
    {
      title: "Female Population",
      value: "REPLACE: 49",
      suffix: "%",
      icon: "fa-female",
      color: "bg-pink-100 text-pink-600",
      description: "REPLACE: Percentage of female population",
    },
    {
      title: "Dependency Ratio",
      value: "REPLACE: 65",
      suffix: "%",
      icon: "fa-balance-scale",
      color: "bg-green-100 text-green-600",
      description:
        "REPLACE: Ratio of dependents to working-age population",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Language & Ethnicity
  // ============================================
  // Provide information about languages spoken and ethnic composition:
  // - language/ethnicity: Name
  // - percentage: Percentage of population
  // - icon: FontAwesome icon class
  const languageEthnicity = [
    {
      category: "Primary Language",
      items: [
        {
          name: "REPLACE: Tagalog",
          percentage: "REPLACE: 98",
          icon: "fa-comment",
        },
        {
          name: "REPLACE: English",
          percentage: "REPLACE: 85",
          icon: "fa-language",
        },
        {
          name: "REPLACE: Other Languages",
          percentage: "REPLACE: 5",
          icon: "fa-comments",
        },
      ],
    },
    {
      category: "Ethnic Groups",
      items: [
        {
          name: "REPLACE: Tagalog",
          percentage: "REPLACE: 95",
          icon: "fa-flag",
        },
        {
          name: "REPLACE: Bisaya",
          percentage: "REPLACE: 3",
          icon: "fa-flag",
        },
        {
          name: "REPLACE: Others",
          percentage: "REPLACE: 2",
          icon: "fa-flag",
        },
      ],
    },
  ];

  // ============================================
  // CONTENT NEEDED: Religious Demographics
  // ============================================
  // Provide breakdown of religious affiliations:
  // - religion: Name of religion
  // - percentage: Percentage of population
  // - icon: FontAwesome icon class
  // - color: Tailwind color classes
  const religiousDemographics = [
    {
      religion: "REPLACE: Roman Catholic",
      percentage: "REPLACE: 85",
      icon: "fa-cross",
      color: "bg-blue-100 text-blue-600",
    },
    {
      religion: "REPLACE: Iglesia ni Cristo",
      percentage: "REPLACE: 7",
      icon: "fa-church",
      color: "bg-green-100 text-green-600",
    },
    {
      religion: "REPLACE: Protestant",
      percentage: "REPLACE: 4",
      icon: "fa-bible",
      color: "bg-purple-100 text-purple-600",
    },
    {
      religion: "REPLACE: Islam",
      percentage: "REPLACE: 1",
      icon: "fa-mosque",
      color: "bg-teal-100 text-teal-600",
    },
    {
      religion: "REPLACE: Others",
      percentage: "REPLACE: 3",
      icon: "fa-praying-hands",
      color: "bg-gray-100 text-gray-600",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Educational Attainment
  // ============================================
  // Provide education level statistics:
  // - level: Educational level achieved
  // - percentage: Percentage of population 25 years and over
  // - icon: FontAwesome icon class
  // - color: Tailwind color classes
  const educationalAttainment = [
    {
      level: "REPLACE: College Graduate",
      percentage: "REPLACE: 15",
      icon: "fa-graduation-cap",
      color: "bg-blue-100 text-blue-600",
      description: "Completed bachelor's degree or higher",
    },
    {
      level: "REPLACE: Some College",
      percentage: "REPLACE: 20",
      icon: "fa-user-graduate",
      color: "bg-indigo-100 text-indigo-600",
      description: "Attended college but did not complete",
    },
    {
      level: "REPLACE: High School Graduate",
      percentage: "REPLACE: 35",
      icon: "fa-school",
      color: "bg-green-100 text-green-600",
      description: "Completed secondary education",
    },
    {
      level: "REPLACE: Elementary Graduate",
      percentage: "REPLACE: 20",
      icon: "fa-book-reader",
      color: "bg-yellow-100 text-yellow-600",
      description: "Completed primary education",
    },
    {
      level: "REPLACE: No Formal Education",
      percentage: "REPLACE: 10",
      icon: "fa-book",
      color: "bg-red-100 text-red-600",
      description: "Did not complete elementary education",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Literacy Rate
  // ============================================
  const literacyRate = {
    overall: "REPLACE: 96.5",
    male: "REPLACE: 97.0",
    female: "REPLACE: 96.0",
  };

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
            <span className="text-white/90">Demography</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            Demography of Tuy
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Understanding Our People and Communities
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        {/* Overview Section */}
        <section
          ref={overviewRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            overviewRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Demographic Overview
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            {/* ============================================
                CONTENT NEEDED: Demographic Overview
                ============================================
                Provide 2-3 paragraphs introducing Tuy's demographic profile:
                - Paragraph 1: General overview of population composition
                - Paragraph 2: Key demographic characteristics and trends
                - Paragraph 3: Significance of demographic data for planning
            */}
            <p>
              REPLACE: First paragraph - Provide an overview of Tuy's
              demographic composition. Discuss the general characteristics of
              the population, including size, distribution across barangays, and
              overall demographic profile.
            </p>
            <p>
              REPLACE: Second paragraph - Highlight key demographic trends and
              characteristics. Mention age structure, gender distribution,
              growth patterns, and any notable demographic features that define
              the municipality.
            </p>
            <p>
              REPLACE: Third paragraph - Explain the importance of demographic
              data for municipal planning, service delivery, and development
              programs. Discuss how this information guides policy-making and
              resource allocation.
            </p>
          </div>
        </section>

        {/* Population Statistics Dashboard */}
        <section
          ref={statsRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate ${
            statsRef.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Population Statistics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {populationStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center scroll-animate stagger-${
                  index + 1
                } ${statsRef.isVisible ? "visible" : ""}`}
              >
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${stat.icon} text-4xl text-white`}></i>
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-white text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-white/80 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Age Distribution Section */}
        <section
          ref={ageDistributionRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            ageDistributionRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Age Distribution
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Population breakdown by age groups showing the demographic structure
            of Tuy.
          </p>

          <div className="space-y-4">
            {ageDistribution.map((group, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all scroll-animate-left stagger-${
                  index + 1
                } ${ageDistributionRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-14 h-14 rounded-full ${group.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <i className={`fas ${group.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {group.ageGroup}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {group.percentage}%
                    </div>
                    <div className="text-gray-600">{group.population}</div>
                  </div>
                </div>
                {/* Visual Progress Bar */}
                <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000"
                    style={{
                      width: ageDistributionRef.isVisible
                        ? `${group.percentage}%`
                        : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Population Trends Section */}
        <section
          ref={trendsRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            trendsRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Population Growth Trends
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Historical population data showing growth patterns over the decades.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {populationTrends.map((trend, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 hover:shadow-lg transition-all scroll-animate stagger-${
                  (index % 3) + 1
                } ${trendsRef.isVisible ? "visible" : ""}`}
              >
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-2">
                    {trend.year}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {trend.population}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {trend.growthRate !== "-" && (
                      <span className="inline-flex items-center gap-1">
                        <i className="fas fa-arrow-up text-green-600"></i>
                        {trend.growthRate}
                      </span>
                    )}
                    {trend.growthRate === "-" && (
                      <span className="text-gray-400">Base year</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Household Statistics Section */}
        <section
          ref={householdRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            householdRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Household Statistics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {householdStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all scroll-animate stagger-${
                  index + 1
                } ${householdRef.isVisible ? "visible" : ""}`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-4`}
                >
                  <i className={`fas ${stat.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {stat.title}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Language & Ethnicity Section */}
        <section
          ref={languageRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            languageRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Language & Ethnicity
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {languageEthnicity.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 scroll-animate stagger-${
                  catIndex + 1
                } ${languageRef.isVisible ? "visible" : ""}`}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <i
                          className={`fas ${item.icon} text-primary text-lg`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-800">
                            {item.name}
                          </span>
                          <span className="text-primary font-bold">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-1000"
                            style={{
                              width: languageRef.isVisible
                                ? `${item.percentage}%`
                                : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Religious Demographics Section */}
        <section
          ref={religionRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate ${
            religionRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="px-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Religious Demographics
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Distribution of religious affiliations in Tuy.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {religiousDemographics.map((religion, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 hover:shadow-lg transition-all scroll-animate stagger-${
                    (index % 5) + 1
                  } ${religionRef.isVisible ? "visible" : ""}`}
                >
                  <div
                    className={`w-14 h-14 rounded-full ${religion.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <i className={`fas ${religion.icon} text-2xl`}></i>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {religion.percentage}%
                    </div>
                    <div className="text-gray-700 font-semibold">
                      {religion.religion}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Attainment Section */}
        <section
          ref={educationRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            educationRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Educational Attainment
            </h2>
          </div>

          {/* Literacy Rate Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <i className="fas fa-book-reader text-primary mr-3"></i>
              Literacy Rate
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">
                  {literacyRate.overall}%
                </div>
                <div className="text-gray-700 font-semibold">Overall</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">
                  {literacyRate.male}%
                </div>
                <div className="text-gray-700 font-semibold">Male</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">
                  {literacyRate.female}%
                </div>
                <div className="text-gray-700 font-semibold">Female</div>
              </div>
            </div>
          </div>

          {/* Education Levels */}
          <p className="text-gray-700 text-lg mb-6">
            Educational attainment levels of the population (25 years and over).
          </p>

          <div className="space-y-4">
            {educationalAttainment.map((education, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all scroll-animate-left stagger-${
                  index + 1
                } ${educationRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-14 h-14 rounded-full ${education.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <i className={`fas ${education.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {education.level}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {education.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {education.percentage}%
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000"
                    style={{
                      width: educationRef.isVisible
                        ? `${education.percentage}%`
                        : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demography;
