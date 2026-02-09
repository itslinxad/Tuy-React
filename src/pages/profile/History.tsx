import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const History = () => {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation hooks for each section
  const introRef = useScrollAnimation();
  const timelineRef = useScrollAnimation();
  const eventsRef = useScrollAnimation();
  const figuresRef = useScrollAnimation();
  const landmarksRef = useScrollAnimation();
  const heritageRef = useScrollAnimation();

  // ============================================
  // CONTENT NEEDED: Historical Timeline Periods
  // ============================================
  // For each period, provide:
  // - title: Name of the historical period
  // - years: Year range (e.g., "1565-1898")
  // - icon: FontAwesome icon class
  // - description: 2-3 paragraphs describing this period
  // - keyEvents: Array of important events during this period
  const historicalPeriods = [
    {
      title: "REPLACE: Pre-Colonial Era",
      years: "REPLACE: Before 1565",
      icon: "fa-landmark",
      description:
        "REPLACE: Provide 2-3 paragraphs about Tuy before Spanish colonization. Include information about early inhabitants, indigenous communities, early settlements, tribal governance, trade with neighboring areas, cultural practices, and way of life.",
      keyEvents: [
        "REPLACE: Key event 1 - Brief description",
        "REPLACE: Key event 2 - Brief description",
        "REPLACE: Key event 3 - Brief description",
      ],
    },
    {
      title: "REPLACE: Spanish Colonial Period",
      years: "REPLACE: 1565-1898",
      icon: "fa-cross",
      description:
        "REPLACE: Provide 2-3 paragraphs about Tuy during Spanish rule. Include the founding of the town, establishment of the church, Spanish governance, religious conversion, economic activities, social structure, and significant events during this era.",
      keyEvents: [
        "REPLACE: Key event 1 - Brief description",
        "REPLACE: Key event 2 - Brief description",
        "REPLACE: Key event 3 - Brief description",
        "REPLACE: Key event 4 - Brief description",
      ],
    },
    {
      title: "REPLACE: American Period",
      years: "REPLACE: 1898-1942",
      icon: "fa-flag-usa",
      description:
        "REPLACE: Provide 2-3 paragraphs about Tuy under American rule. Include changes in governance, establishment of public education, infrastructure development, economic changes, social reforms, and how American influence shaped the municipality.",
      keyEvents: [
        "REPLACE: Key event 1 - Brief description",
        "REPLACE: Key event 2 - Brief description",
        "REPLACE: Key event 3 - Brief description",
      ],
    },
    {
      title: "REPLACE: Japanese Occupation",
      years: "REPLACE: 1942-1945",
      icon: "fa-shield-alt",
      description:
        "REPLACE: Provide 2-3 paragraphs about Tuy during WWII and Japanese occupation. Include experiences of the local population, resistance movements, significant battles or events in the area, hardships faced, and liberation.",
      keyEvents: [
        "REPLACE: Key event 1 - Brief description",
        "REPLACE: Key event 2 - Brief description",
        "REPLACE: Key event 3 - Brief description",
      ],
    },
    {
      title: "REPLACE: Post-War Era",
      years: "REPLACE: 1945-1986",
      icon: "fa-building",
      description:
        "REPLACE: Provide 2-3 paragraphs about Tuy's recovery and development after WWII through the Marcos era. Include reconstruction efforts, economic recovery, political developments, infrastructure projects, and social changes during this period.",
      keyEvents: [
        "REPLACE: Key event 1 - Brief description",
        "REPLACE: Key event 2 - Brief description",
        "REPLACE: Key event 3 - Brief description",
      ],
    },
    {
      title: "REPLACE: Modern Era",
      years: "REPLACE: 1986-Present",
      icon: "fa-rocket",
      description:
        "REPLACE: Provide 2-3 paragraphs about contemporary Tuy from People Power to today. Include democratic governance, modern development projects, economic growth, social programs, technological advancement, and current achievements.",
      keyEvents: [
        "REPLACE: Key event 1 - Brief description",
        "REPLACE: Key event 2 - Brief description",
        "REPLACE: Key event 3 - Brief description",
        "REPLACE: Key event 4 - Brief description",
      ],
    },
  ];

  // ============================================
  // CONTENT NEEDED: Key Historical Events
  // ============================================
  // Provide 6-8 of the most significant events in Tuy's history
  // For each event:
  // - year: Year or year range
  // - title: Short title of the event
  // - description: 2-3 sentence description
  // - icon: FontAwesome icon class
  // - color: Tailwind color classes for the icon background
  const keyHistoricalEvents = [
    {
      year: "REPLACE: 1700s",
      title: "REPLACE: Event Title 1",
      description:
        "REPLACE: Brief description of this significant event (2-3 sentences). Explain its importance and impact on Tuy's history.",
      icon: "fa-calendar-alt",
      color: "bg-blue-100 text-blue-600",
    },
    {
      year: "REPLACE: 1800s",
      title: "REPLACE: Event Title 2",
      description:
        "REPLACE: Brief description of this significant event (2-3 sentences). Explain its importance and impact on Tuy's history.",
      icon: "fa-church",
      color: "bg-green-100 text-green-600",
    },
    {
      year: "REPLACE: 1898",
      title: "REPLACE: Event Title 3",
      description:
        "REPLACE: Brief description of this significant event (2-3 sentences). Explain its importance and impact on Tuy's history.",
      icon: "fa-flag",
      color: "bg-red-100 text-red-600",
    },
    {
      year: "REPLACE: 1900s",
      title: "REPLACE: Event Title 4",
      description:
        "REPLACE: Brief description of this significant event (2-3 sentences). Explain its importance and impact on Tuy's history.",
      icon: "fa-school",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      year: "REPLACE: 1940s",
      title: "REPLACE: Event Title 5",
      description:
        "REPLACE: Brief description of this significant event (2-3 sentences). Explain its importance and impact on Tuy's history.",
      icon: "fa-medal",
      color: "bg-purple-100 text-purple-600",
    },
    {
      year: "REPLACE: Recent",
      title: "REPLACE: Event Title 6",
      description:
        "REPLACE: Brief description of this significant event (2-3 sentences). Explain its importance and impact on Tuy's history.",
      icon: "fa-trophy",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Notable Historical Figures
  // ============================================
  // Provide information about 4-6 important people in Tuy's history
  // For each person:
  // - name: Full name
  // - role: Their title or role
  // - period: Time period they were active
  // - contribution: 2-3 sentences about their contributions
  // - icon: FontAwesome icon class
  const notableFigures = [
    {
      name: "REPLACE: Name of Historical Figure 1",
      role: "REPLACE: Their Title/Role",
      period: "REPLACE: Year range",
      contribution:
        "REPLACE: Describe their major contributions to Tuy (2-3 sentences). Include their achievements, impact on the community, and why they are remembered.",
      icon: "fa-user-tie",
    },
    {
      name: "REPLACE: Name of Historical Figure 2",
      role: "REPLACE: Their Title/Role",
      period: "REPLACE: Year range",
      contribution:
        "REPLACE: Describe their major contributions to Tuy (2-3 sentences). Include their achievements, impact on the community, and why they are remembered.",
      icon: "fa-user-graduate",
    },
    {
      name: "REPLACE: Name of Historical Figure 3",
      role: "REPLACE: Their Title/Role",
      period: "REPLACE: Year range",
      contribution:
        "REPLACE: Describe their major contributions to Tuy (2-3 sentences). Include their achievements, impact on the community, and why they are remembered.",
      icon: "fa-user-shield",
    },
    {
      name: "REPLACE: Name of Historical Figure 4",
      role: "REPLACE: Their Title/Role",
      period: "REPLACE: Year range",
      contribution:
        "REPLACE: Describe their major contributions to Tuy (2-3 sentences). Include their achievements, impact on the community, and why they are remembered.",
      icon: "fa-user-friends",
    },
  ];

  // ============================================
  // CONTENT NEEDED: Historical Landmarks
  // ============================================
  // Provide information about 4-6 historical sites/landmarks in Tuy
  // For each landmark:
  // - name: Name of the landmark
  // - yearEstablished: When it was built/established
  // - significance: Why it's historically important (2-3 sentences)
  // - currentStatus: Current condition (e.g., "Well-preserved", "Under renovation")
  // - icon: FontAwesome icon class
  const historicalLandmarks = [
    {
      name: "REPLACE: Landmark Name 1",
      yearEstablished: "REPLACE: Year",
      significance:
        "REPLACE: Explain the historical significance of this landmark (2-3 sentences). Include its original purpose, historical events associated with it, and architectural features.",
      currentStatus: "REPLACE: Current status",
      icon: "fa-church",
    },
    {
      name: "REPLACE: Landmark Name 2",
      yearEstablished: "REPLACE: Year",
      significance:
        "REPLACE: Explain the historical significance of this landmark (2-3 sentences). Include its original purpose, historical events associated with it, and architectural features.",
      currentStatus: "REPLACE: Current status",
      icon: "fa-monument",
    },
    {
      name: "REPLACE: Landmark Name 3",
      yearEstablished: "REPLACE: Year",
      significance:
        "REPLACE: Explain the historical significance of this landmark (2-3 sentences). Include its original purpose, historical events associated with it, and architectural features.",
      currentStatus: "REPLACE: Current status",
      icon: "fa-university",
    },
    {
      name: "REPLACE: Landmark Name 4",
      yearEstablished: "REPLACE: Year",
      significance:
        "REPLACE: Explain the historical significance of this landmark (2-3 sentences). Include its original purpose, historical events associated with it, and architectural features.",
      currentStatus: "REPLACE: Current status",
      icon: "fa-building",
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
            <span className="text-white/90">History</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            History of Tuy
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Tracing Our Heritage Through Time
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        {/* Introduction Section */}
        <section
          ref={introRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            introRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Our Historical Journey
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            {/* ============================================
                CONTENT NEEDED: Historical Introduction
                ============================================
                Provide 2-3 paragraphs that give an overview of Tuy's historical significance.
                - Paragraph 1: Introduction to Tuy's rich historical background
                - Paragraph 2: Overview of major periods and transformations
                - Paragraph 3: Legacy and importance of understanding this history
            */}
            <p>
              REPLACE: First paragraph - Introduce Tuy's historical significance
              and importance. Discuss the town's role in regional history and
              its contributions to Batangas province and the Philippines.
            </p>
            <p>
              REPLACE: Second paragraph - Provide an overview of the major
              historical periods Tuy has experienced. Mention the transformation
              from pre-colonial settlement through various colonial periods to
              modern municipality.
            </p>
            <p>
              REPLACE: Third paragraph - Discuss the importance of preserving
              and understanding this history. Explain how historical knowledge
              shapes community identity and guides future development.
            </p>
          </div>
        </section>

        {/* Historical Timeline Section */}
        <section
          ref={timelineRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            timelineRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Historical Timeline
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-10">
            Journey through the major periods that shaped Tuy's history and
            identity.
          </p>

          {/* Timeline */}
          <div className="relative mt-12">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/20"></div>

            <div className="space-y-16">
              {historicalPeriods.map((period, index) => (
                <div
                  key={index}
                  className={`relative pl-24 scroll-animate-left stagger-${
                    (index % 3) + 1
                  } ${timelineRef.isVisible ? "visible" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 w-9 h-9 rounded-full bg-primary border-4 border-white shadow-lg flex items-center justify-center">
                    <i className={`fas ${period.icon} text-white text-sm`}></i>
                  </div>

                  {/* Content Card */}
                  <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-primary">
                        {period.title}
                      </h3>
                      <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {period.years}
                      </span>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {period.description}
                    </p>

                    {/* Key Events */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                        Key Events:
                      </h4>
                      <ul className="space-y-2">
                        {period.keyEvents.map((event, eventIndex) => (
                          <li
                            key={eventIndex}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <i className="fas fa-chevron-right text-primary text-xs mt-1.5"></i>
                            <span>{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Historical Events Section */}
        <section
          ref={eventsRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            eventsRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Milestone Events
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Significant moments that defined Tuy's historical trajectory.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyHistoricalEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 scroll-animate stagger-${
                  (index % 3) + 1
                } ${eventsRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`fas ${event.icon} text-xl`}></i>
                  </div>
                  <span className="text-primary font-bold text-lg">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Notable Historical Figures Section */}
        <section
          ref={figuresRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate ${
            figuresRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="px-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Notable Historical Figures
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Individuals who shaped Tuy's history and left lasting legacies.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {notableFigures.map((figure, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 scroll-animate stagger-${
                    (index % 2) + 1
                  } ${figuresRef.isVisible ? "visible" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <i
                        className={`fas ${figure.icon} text-white text-2xl`}
                      ></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {figure.name}
                      </h3>
                      <p className="text-white/80 text-sm mb-2">
                        {figure.role} • {figure.period}
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        {figure.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Landmarks Section */}
        <section
          ref={landmarksRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            landmarksRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Historical Landmarks
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8">
            Architectural and cultural monuments that stand as testaments to our
            past.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {historicalLandmarks.map((landmark, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 scroll-animate-left stagger-${
                  (index % 2) + 1
                } ${landmarksRef.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`fas ${landmark.icon} text-primary text-3xl`}
                    ></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">
                        {landmark.name}
                      </h3>
                      <span className="text-sm font-semibold text-gray-600">
                        Est. {landmark.yearEstablished}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {landmark.significance}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {landmark.currentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Heritage Preservation Section */}
        <section
          ref={heritageRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            heritageRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Heritage Preservation
            </h2>
          </div>

          <div className="space-y-6">
            {/* ============================================
                CONTENT NEEDED: Heritage Preservation Information
                ============================================
                Provide information about current efforts to preserve Tuy's historical heritage:
                - Overview paragraph about preservation initiatives
                - Specific programs or projects
                - Community involvement
                - Future plans
                Replace the content in each section below
            */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <i className="fas fa-archive text-primary mr-3"></i>
                Preservation Initiatives
              </h3>
              <p className="text-gray-700 leading-relaxed">
                REPLACE: Describe current initiatives to preserve historical
                sites, documents, and artifacts. Include information about
                partnerships with historical societies, government programs, and
                conservation efforts.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <i className="fas fa-users text-primary mr-3"></i>
                Community Engagement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                REPLACE: Explain how the community is involved in preserving
                historical heritage. Include educational programs, heritage
                tours, cultural events, and volunteer opportunities that help
                maintain historical awareness.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <i className="fas fa-lightbulb text-primary mr-3"></i>
                Future Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                REPLACE: Outline plans for future heritage preservation and
                historical promotion. Include planned restoration projects,
                digital archiving initiatives, museum development, or heritage
                tourism programs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
