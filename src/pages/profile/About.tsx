import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const About = () => {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation hooks for each section
  const briefHistoryRef = useScrollAnimation();
  const visionMissionRef = useScrollAnimation();
  const geographicRef = useScrollAnimation();
  const barangaysRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const cultureRef = useScrollAnimation();
  const touristRef = useScrollAnimation();

  const barangays = [
    "Acle",
    "Bayudbud",
    "Bolboc",
    "Dalima",
    "Dao",
    "Guinhawa",
    "Lumbangan",
    "Luntal",
    "Magahis",
    "Mataywanac",
    "Malibu Este",
    "Malibu Oeste",
    "Oitawen",
    "Palincaro",
    "Putol",
    "Rillo",
    "Sabang",
    "San Jose",
    "San Pablo",
    "Santa Clara",
    "Talon",
    "Toong",
  ];

  const geographicInfo = [
    {
      title: "Location",
      icon: "fa-map-marked-alt",
      color: "bg-blue-100 text-blue-600",
      content:
        "Tuy is strategically located in the southwestern part of Batangas province, bounded by Balayan Bay to the west, providing access to rich marine resources and scenic coastal views.",
    },
    {
      title: "Land Area",
      icon: "fa-expand-arrows-alt",
      color: "bg-green-100 text-green-600",
      content:
        "The municipality covers an approximate land area of 74.13 square kilometers, comprising both coastal and inland barangays with diverse topographical features.",
    },
    {
      title: "Climate",
      icon: "fa-sun",
      color: "bg-yellow-100 text-yellow-600",
      content:
        "Tuy experiences a tropical climate with two distinct seasons: the dry season from November to April and the wet season from May to October. The temperature typically ranges from 23°C to 32°C throughout the year.",
    },
    {
      title: "Topography",
      icon: "fa-mountain",
      color: "bg-purple-100 text-purple-600",
      content:
        "The terrain varies from coastal plains ideal for settlement and agriculture to gently rolling hills in the interior areas. The municipality's topography supports various agricultural activities and settlements.",
    },
  ];

  const statistics = [
    { icon: "fa-map-marked-alt", number: "22", label: "Barangays" },
    {
      icon: "fa-expand-arrows-alt",
      number: "74.13",
      label: "Square Kilometers",
      suffix: " km²",
    },
    { icon: "fa-users", number: "45,000", label: "Population", suffix: "+" },
    { icon: "fa-calendar-check", number: "1st Class", label: "Municipality" },
  ];

  const culturalTimeline = [
    {
      title: "Fiestas and Celebrations",
      icon: "fa-calendar-alt",
      content:
        "The people of Tuy celebrate various fiestas throughout the year, with each barangay honoring its patron saint with vibrant festivities, processions, and community gatherings. These celebrations showcase the deep faith and strong sense of community that define the Tuyeño spirit.",
    },
    {
      title: "Traditional Practices",
      icon: "fa-hands-helping",
      content:
        "Tuy has preserved many traditional practices passed down through generations, including local crafts, fishing techniques, and agricultural methods. The municipality takes pride in maintaining these cultural traditions while adapting to modern times.",
    },
    {
      title: "Local Cuisine",
      icon: "fa-utensils",
      content:
        "The local cuisine reflects the municipality's coastal location and agricultural abundance. Fresh seafood, locally-grown vegetables, and traditional Filipino dishes are staples of Tuyeño dining, offering visitors an authentic taste of Batangas culture.",
    },
  ];

  const touristAttractions = [
    {
      icon: "fa-water",
      title: "Coastal Areas and Beaches",
      description:
        "Tuy's coastline along Balayan Bay offers beautiful beaches and scenic views. The calm waters are perfect for swimming, fishing, and various water activities, making it a favorite destination for both locals and tourists.",
    },
    {
      icon: "fa-church",
      title: "Historical Churches",
      description:
        "The municipality is home to several historical churches that showcase Spanish colonial architecture and serve as testaments to the area's rich religious heritage and history.",
    },
    {
      icon: "fa-tree",
      title: "Natural Attractions",
      description:
        "From lush green hills to pristine coastal areas, Tuy offers diverse natural attractions for nature lovers and adventure seekers. The municipality's natural beauty provides opportunities for eco-tourism and outdoor recreation.",
    },
    {
      icon: "fa-fish",
      title: "Local Markets and Fishing Villages",
      description:
        "Experience authentic local life by visiting Tuy's vibrant markets and traditional fishing villages. Witness the daily catch, interact with friendly locals, and immerse yourself in the community's maritime culture.",
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
            <span className="text-white/90">About</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            About Tuy
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            The Pearl of Balayan Bay
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        {/* Brief History Section */}
        <section
          ref={briefHistoryRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            briefHistoryRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Brief History</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The Municipality of Tuy is a first-class municipality in the
              province of Batangas, Philippines. Rich in history and culture,
              Tuy has been an integral part of the region's development since
              the Spanish colonial period.
            </p>
            <p>
              The name "Tuy" is believed to have originated from the Tagalog
              word "tuytoy," referring to a type of tree that was abundant in
              the area during the early days of settlement. The town was
              officially established during the Spanish era and has grown into a
              vibrant community along the shores of Balayan Bay.
            </p>
            <p>
              Throughout its history, Tuy has been known for its agricultural
              productivity, fishing industry, and the warm hospitality of its
              people. The municipality has preserved its rich cultural heritage
              while embracing modern development and progress.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section
          ref={visionMissionRef.elementRef}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Vision and Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div
              className={`relative bg-gradient-to-br from-primary to-primary-hover p-8 rounded-lg text-white shadow-lg overflow-hidden scroll-animate-left ${
                visionMissionRef.isVisible ? "visible" : ""
              }`}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <i className="fas fa-eye text-3xl mr-3"></i>
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed">
                  A progressive, peaceful, and God-loving municipality with
                  improved quality of life for all Tuyeños, characterized by
                  sustainable economic development, efficient governance, and
                  environmental stewardship.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className={`relative bg-gradient-to-br from-primary to-primary-hover p-8 rounded-lg text-white shadow-lg overflow-hidden scroll-animate-right ${
                visionMissionRef.isVisible ? "visible" : ""
              }`}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <i className="fas fa-bullseye text-3xl mr-3"></i>
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed">
                  To provide responsive, transparent, and participatory local
                  governance that delivers quality services, promotes inclusive
                  growth, protects the environment, and empowers every citizen
                  to achieve their fullest potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Information Section */}
        <section
          ref={geographicRef.elementRef}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Geographic Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {geographicInfo.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow scroll-animate stagger-${
                  index + 1
                } ${geographicRef.isVisible ? "visible" : ""}`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}
                >
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Barangays Section */}
        <section
          ref={barangaysRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            barangaysRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Barangays</h2>
          </div>
          <p className="text-gray-700 text-lg mb-6">
            The Municipality of Tuy is politically subdivided into 22 barangays,
            each with its unique character and contribution to the community:
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {barangays.map((barangay, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-map-marker-alt text-primary text-sm"></i>
                <span className="text-gray-800">{barangay}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section - NEW */}
        <section
          ref={statsRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate ${
            statsRef.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Tuy at a Glance
          </h2>

          <div className="grid md:grid-cols-4 gap-8 px-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`text-center scroll-animate stagger-${
                  index + 1
                } ${statsRef.isVisible ? "visible" : ""}`}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${stat.icon} text-3xl text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                  {stat.suffix || ""}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Heritage Timeline Section - NEW */}
        <section
          ref={cultureRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            cultureRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Cultural Heritage
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative mt-12">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>

            <div className="space-y-12">
              {culturalTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative pl-20 scroll-animate-left stagger-${
                    index + 1
                  } ${cultureRef.isVisible ? "visible" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-5 w-7 h-7 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center">
                    <i className={`fas ${item.icon} text-white text-xs`}></i>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tourist Attractions Section */}
        <section
          ref={touristRef.elementRef}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Tourist Attractions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 scroll-animate stagger-${
                  (index % 4) + 1
                } ${touristRef.isVisible ? "visible" : ""}`}
              >
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                  <i className={`fas ${attraction.icon} mr-3 text-2xl`}></i>
                  {attraction.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
