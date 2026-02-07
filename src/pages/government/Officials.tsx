import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Officials = () => {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation hooks for each section
  const introRef = useScrollAnimation();
  const mayorRef = useScrollAnimation();
  const viceMayorRef = useScrollAnimation();
  const councilorsRef = useScrollAnimation();
  const exOfficioRef = useScrollAnimation();

  // ============================================
  // CONTENT NEEDED: Mayor Information
  // ============================================
  const mayorInfo = {
    name: "REPLACE: Hon. [Mayor Name]",
    position: "Municipal Mayor",
    term: "REPLACE: 2022-2025",
    photoPath: "/officials/mayor.jpg", // Add photo to public/officials/
    email: "REPLACE: mayor@tuy.gov.ph",
    phone: "REPLACE: (043) XXX-XXXX",
    vision:
      "REPLACE: Brief statement about the mayor's vision for Tuy (2-3 sentences). Include key priorities, development goals, and commitment to serving the people.",
    platforms: [
      "REPLACE: Platform/Priority 1",
      "REPLACE: Platform/Priority 2",
      "REPLACE: Platform/Priority 3",
      "REPLACE: Platform/Priority 4",
    ],
  };

  // ============================================
  // CONTENT NEEDED: Vice Mayor Information
  // ============================================
  const viceMayorInfo = {
    name: "REPLACE: Hon. [Vice Mayor Name]",
    position: "Municipal Vice Mayor",
    term: "REPLACE: 2022-2025",
    photoPath: "/officials/vice-mayor.jpg",
    email: "REPLACE: vicemayor@tuy.gov.ph",
    phone: "REPLACE: (043) XXX-XXXX",
    responsibilities:
      "REPLACE: Brief description of the Vice Mayor's role and responsibilities in the municipal government (2-3 sentences).",
  };

  // ============================================
  // CONTENT NEEDED: Sangguniang Bayan Members
  // ============================================
  // Note: Assuming 8 councilors (typical for 1st class municipality)
  // Adjust number of entries as needed for Tuy
  const sanggunianMembers = [
    {
      name: "REPLACE: Hon. [Councilor Name 1]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-1.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
    {
      name: "REPLACE: Hon. [Councilor Name 2]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-2.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
    {
      name: "REPLACE: Hon. [Councilor Name 3]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-3.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
    {
      name: "REPLACE: Hon. [Councilor Name 4]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-4.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
    {
      name: "REPLACE: Hon. [Councilor Name 5]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-5.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
    {
      name: "REPLACE: Hon. [Councilor Name 6]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-6.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
    {
      name: "REPLACE: Hon. [Councilor Name 7]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-7.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
    {
      name: "REPLACE: Hon. [Councilor Name 8]",
      position: "Sangguniang Bayan Member",
      photoPath: "/officials/councilor-8.jpg",
      committees: [
        "REPLACE: Committee on [Topic] - Chairperson",
        "REPLACE: Committee on [Topic] - Member",
      ],
    },
  ];

  // ============================================
  // CONTENT NEEDED: Ex-Officio Members
  // ============================================
  const exOfficioMembers = [
    {
      name: "REPLACE: [ABC President Name]",
      position: "ABC President",
      organization: "Association of Barangay Captains",
      photoPath: "/officials/abc-president.jpg",
      description:
        "REPLACE: Represents the 22 Barangay Captains in the Sangguniang Bayan.",
    },
    {
      name: "REPLACE: [SK Federation President Name]",
      position: "SK Federation President",
      organization: "Sangguniang Kabataan Federation",
      photoPath: "/officials/sk-president.jpg",
      description:
        "REPLACE: Represents the youth sector in the Sangguniang Bayan.",
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
            <span className="text-white/90">Municipal Officials</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            Municipal Officials
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Leadership Serving the People of Tuy
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
              Our Local Government
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            {/* ============================================
                CONTENT NEEDED: Introduction Text
                ============================================
                Provide 2-3 paragraphs about the current administration:
                - Overview of the elected officials
                - Their commitment to serve
                - How they work together for the municipality
            */}
            <p>
              REPLACE: First paragraph - Introduce the current administration of
              Tuy. Mention the elected term, the leadership team, and their
              collective commitment to serving the municipality and its people.
            </p>
            <p>
              REPLACE: Second paragraph - Describe how the municipal officials
              work together to deliver services, implement programs, and promote
              development. Highlight the democratic governance and participatory
              approach.
            </p>
            <p>
              REPLACE: Third paragraph - Emphasize the officials' dedication to
              transparency, accountability, and responsive governance. Mention
              how residents can engage with their elected representatives.
            </p>
          </div>
        </section>

        {/* Mayor Section */}
        <section
          ref={mayorRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            mayorRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Municipal Mayor</h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <i className="fas fa-user text-6xl text-gray-400 mb-4"></i>
                      <p className="text-sm text-gray-500">
                        Add photo to:
                        <br />
                        <code className="text-xs">
                          public{mayorInfo.photoPath}
                        </code>
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-primary text-white text-center">
                    <h3 className="text-xl font-bold">{mayorInfo.name}</h3>
                    <p className="text-white/90">{mayorInfo.position}</p>
                    <p className="text-white/80 text-sm">{mayorInfo.term}</p>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="md:col-span-2">
                <div className="space-y-6">
                  {/* Vision Statement */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                      <i className="fas fa-eye text-primary mr-3"></i>
                      Vision for Tuy
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {mayorInfo.vision}
                    </p>
                  </div>

                  {/* Key Priorities */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <i className="fas fa-bullseye text-primary mr-3"></i>
                      Key Priorities & Platforms
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {mayorInfo.platforms.map((platform, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-3 bg-primary/5 rounded"
                        >
                          <i className="fas fa-check-circle text-primary mt-1"></i>
                          <span className="text-gray-700">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <i className="fas fa-address-card text-primary mr-3"></i>
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center gap-3">
                        <i className="fas fa-envelope text-primary w-5"></i>
                        <span>{mayorInfo.email}</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <i className="fas fa-phone text-primary w-5"></i>
                        <span>{mayorInfo.phone}</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <i className="fas fa-map-marker-alt text-primary w-5"></i>
                        <span>Office of the Municipal Mayor, Tuy Municipal Hall</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vice Mayor Section */}
        <section
          ref={viceMayorRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            viceMayorRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Municipal Vice Mayor
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <i className="fas fa-user text-6xl text-gray-400 mb-4"></i>
                      <p className="text-sm text-gray-500">
                        Add photo to:
                        <br />
                        <code className="text-xs">
                          public{viceMayorInfo.photoPath}
                        </code>
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-primary text-white text-center">
                    <h3 className="text-xl font-bold">{viceMayorInfo.name}</h3>
                    <p className="text-white/90">{viceMayorInfo.position}</p>
                    <p className="text-white/80 text-sm">{viceMayorInfo.term}</p>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="md:col-span-2">
                <div className="space-y-6">
                  {/* Role & Responsibilities */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-bold text-primary mb-3 flex items-center">
                      <i className="fas fa-tasks text-primary mr-3"></i>
                      Role & Responsibilities
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {viceMayorInfo.responsibilities}
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2 text-gray-700">
                        <i className="fas fa-chevron-right text-primary mt-1"></i>
                        <span>
                          Presides over the Sangguniang Bayan sessions
                        </span>
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <i className="fas fa-chevron-right text-primary mt-1"></i>
                        <span>
                          Acts as Municipal Mayor in case of temporary absence
                        </span>
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <i className="fas fa-chevron-right text-primary mt-1"></i>
                        <span>
                          Coordinates legislative matters and ordinances
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <i className="fas fa-address-card text-primary mr-3"></i>
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center gap-3">
                        <i className="fas fa-envelope text-primary w-5"></i>
                        <span>{viceMayorInfo.email}</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <i className="fas fa-phone text-primary w-5"></i>
                        <span>{viceMayorInfo.phone}</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <i className="fas fa-map-marker-alt text-primary w-5"></i>
                        <span>
                          Office of the Municipal Vice Mayor, Tuy Municipal Hall
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sangguniang Bayan Members Section */}
        <section
          ref={councilorsRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            councilorsRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Sangguniang Bayan Members
            </h2>
          </div>

          <p className="text-gray-700 text-lg mb-8">
            The legislative body of the Municipality of Tuy, responsible for
            enacting ordinances, approving resolutions, and appropriating funds
            for municipal programs and projects.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sanggunianMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden scroll-animate-scale stagger-${
                  (index % 4) + 1
                } ${councilorsRef.isVisible ? "visible" : ""}`}
              >
                {/* Photo */}
                <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <i className="fas fa-user text-4xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-500">
                      Add photo to:
                      <br />
                      <code className="text-xs">public{member.photoPath}</code>
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{member.position}</p>

                  {/* Committees */}
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-xs font-semibold text-gray-600 uppercase mb-2">
                      Committee Assignments:
                    </p>
                    <div className="space-y-1">
                      {member.committees.map((committee, cIndex) => (
                        <p key={cIndex} className="text-xs text-gray-700">
                          • {committee}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ex-Officio Members Section */}
        <section
          ref={exOfficioRef.elementRef}
          className={`bg-gradient-to-br from-primary to-primary-hover py-12 rounded-lg shadow-xl scroll-animate-scale ${
            exOfficioRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="px-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ex-Officio Members
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Representatives from the barangays and youth sector serving as
              ex-officio members of the Sangguniang Bayan.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {exOfficioMembers.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all scroll-animate-scale stagger-${
                    index + 1
                  } ${exOfficioRef.isVisible ? "visible" : ""}`}
                >
                  <div className="flex items-start gap-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <i className="fas fa-user text-3xl text-gray-400"></i>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Add to:
                        <br />
                        <code className="text-xs">public{member.photoPath}</code>
                      </p>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-1">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {member.organization}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fas fa-info-circle text-primary mr-3"></i>
            How to Reach Your Officials
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              The municipal officials welcome feedback, concerns, and suggestions
              from the residents of Tuy. You may reach them through:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>
                  <strong>Office Hours:</strong> Monday to Friday, 8:00 AM - 5:00
                  PM
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>
                  <strong>Walk-in:</strong> Visit the Tuy Municipal Hall during
                  office hours
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>
                  <strong>Written Communication:</strong> Send letters or
                  correspondence to the Municipal Hall
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>
                  <strong>Contact Page:</strong> Use the Contact Us page to send
                  inquiries
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Officials;
