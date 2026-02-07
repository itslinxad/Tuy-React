import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const DepartmentHeads = () => {
  // Parallax effect for hero section
  const { offset } = useParallax({ speed: 0.3 });

  // Scroll animation hooks
  const introRef = useScrollAnimation();
  const executiveRef = useScrollAnimation();
  const supportRef = useScrollAnimation();
  const operationalRef = useScrollAnimation();

  // ============================================
  // CONTENT NEEDED: Department Heads Information
  // ============================================
  // For each department, provide:
  // - departmentName: Official name of the department/office
  // - head: Name of the department head (e.g., "REPLACE: [Name]")
  // - position: Official title
  // - photoPath: Path to photo in public folder
  // - email: Department email
  // - phone: Contact number
  // - office: Office location in municipal hall
  // - description: Brief description of department functions
  // - icon: FontAwesome icon class

  // Executive Offices
  const executiveOffices = [
    {
      departmentName: "Office of the Municipal Mayor",
      head: "REPLACE: Hon. [Mayor Name]",
      position: "Municipal Mayor",
      photoPath: "/officials/mayor.jpg",
      email: "REPLACE: mayor@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "2nd Floor, Municipal Hall",
      icon: "fa-user-tie",
      color: "bg-blue-100 text-blue-600",
      description:
        "The chief executive of the municipality, responsible for overall governance, policy implementation, and delivery of basic services to constituents.",
    },
    {
      departmentName: "Office of the Municipal Vice Mayor",
      head: "REPLACE: Hon. [Vice Mayor Name]",
      position: "Municipal Vice Mayor",
      photoPath: "/officials/vice-mayor.jpg",
      email: "REPLACE: vicemayor@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "2nd Floor, Municipal Hall",
      icon: "fa-user-shield",
      color: "bg-indigo-100 text-indigo-600",
      description:
        "Presides over the Sangguniang Bayan and performs the duties of the Municipal Mayor in case of temporary absence or incapacity.",
    },
    {
      departmentName: "Office of the Municipal Administrator",
      head: "REPLACE: [Administrator Name]",
      position: "Municipal Administrator",
      photoPath: "/officials/administrator.jpg",
      email: "REPLACE: admin@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "2nd Floor, Municipal Hall",
      icon: "fa-user-cog",
      color: "bg-purple-100 text-purple-600",
      description:
        "Assists the Mayor in supervising and coordinating the operations of all departments, ensuring efficient delivery of municipal services.",
    },
  ];

  // Support Services
  const supportServices = [
    {
      departmentName: "Municipal Planning and Development Office",
      acronym: "MPDO",
      head: "REPLACE: [MPDO Head Name]",
      position: "Municipal Planning and Development Coordinator",
      photoPath: "/officials/mpdo-head.jpg",
      email: "REPLACE: mpdo@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "1st Floor, Municipal Hall",
      icon: "fa-clipboard-list",
      color: "bg-green-100 text-green-600",
      description:
        "Formulates integrated economic, social, physical, and other development plans and policies for consideration of the local development council.",
    },
    {
      departmentName: "Municipal Budget Office",
      acronym: "MBO",
      head: "REPLACE: [Budget Officer Name]",
      position: "Municipal Budget Officer",
      photoPath: "/officials/budget-officer.jpg",
      email: "REPLACE: budget@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "2nd Floor, Municipal Hall",
      icon: "fa-calculator",
      color: "bg-yellow-100 text-yellow-600",
      description:
        "Prepares the municipal budget, monitors budget implementation, and ensures proper allocation and utilization of funds.",
    },
    {
      departmentName: "Municipal Accountant's Office",
      acronym: "MACCO",
      head: "REPLACE: [Municipal Accountant Name]",
      position: "Municipal Accountant",
      photoPath: "/officials/accountant.jpg",
      email: "REPLACE: accounting@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "1st Floor, Municipal Hall",
      icon: "fa-file-invoice-dollar",
      color: "bg-teal-100 text-teal-600",
      description:
        "Maintains financial records, prepares financial statements, and ensures compliance with accounting standards and government regulations.",
    },
    {
      departmentName: "Municipal Treasurer's Office",
      acronym: "MTO",
      head: "REPLACE: [Municipal Treasurer Name]",
      position: "Municipal Treasurer",
      photoPath: "/officials/treasurer.jpg",
      email: "REPLACE: treasury@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "1st Floor, Municipal Hall",
      icon: "fa-coins",
      color: "bg-amber-100 text-amber-600",
      description:
        "Collects revenues, manages municipal funds, and ensures proper custody and disbursement of public funds.",
    },
    {
      departmentName: "Municipal Assessor's Office",
      acronym: "MAO",
      head: "REPLACE: [Municipal Assessor Name]",
      position: "Municipal Assessor",
      photoPath: "/officials/assessor.jpg",
      email: "REPLACE: assessor@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "1st Floor, Municipal Hall",
      icon: "fa-home",
      color: "bg-orange-100 text-orange-600",
      description:
        "Assesses real properties for taxation purposes, maintains property records, and processes tax declarations.",
    },
    {
      departmentName: "Human Resource Management Office",
      acronym: "HRMO",
      head: "REPLACE: [HRMO Head Name]",
      position: "Human Resource Management Officer",
      photoPath: "/officials/hrmo-head.jpg",
      email: "REPLACE: hrmo@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "2nd Floor, Municipal Hall",
      icon: "fa-users-cog",
      color: "bg-pink-100 text-pink-600",
      description:
        "Manages recruitment, employee records, performance evaluation, and personnel development programs for municipal employees.",
    },
    {
      departmentName: "General Services Office",
      acronym: "GSO",
      head: "REPLACE: [GSO Head Name]",
      position: "General Services Officer",
      photoPath: "/officials/gso-head.jpg",
      email: "REPLACE: gso@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "Ground Floor, Municipal Hall",
      icon: "fa-tools",
      color: "bg-gray-100 text-gray-600",
      description:
        "Manages municipal properties, facilities, equipment, and provides general administrative support services to all departments.",
    },
  ];

  // Operational Departments
  const operationalDepartments = [
    {
      departmentName: "Municipal Engineer's Office",
      acronym: "MEO",
      head: "REPLACE: Engr. [Municipal Engineer Name]",
      position: "Municipal Engineer",
      photoPath: "/officials/engineer.jpg",
      email: "REPLACE: engineering@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "Engineering Office Building",
      icon: "fa-hard-hat",
      color: "bg-slate-100 text-slate-600",
      description:
        "Plans, designs, constructs, and maintains public infrastructure including roads, bridges, buildings, and water supply systems.",
    },
    {
      departmentName: "Municipal Health Office",
      acronym: "MHO",
      head: "REPLACE: Dr. [Municipal Health Officer Name]",
      position: "Municipal Health Officer",
      photoPath: "/officials/health-officer.jpg",
      email: "REPLACE: health@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "Rural Health Unit",
      icon: "fa-heartbeat",
      color: "bg-red-100 text-red-600",
      description:
        "Provides primary healthcare services, implements health programs, and promotes health and wellness in the community.",
    },
    {
      departmentName: "Municipal Social Welfare and Development Office",
      acronym: "MSWDO",
      head: "REPLACE: [MSWDO Head Name]",
      position: "Municipal Social Welfare and Development Officer",
      photoPath: "/officials/mswdo-head.jpg",
      email: "REPLACE: socialwelfare@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "1st Floor, Municipal Hall",
      icon: "fa-hands-helping",
      color: "bg-rose-100 text-rose-600",
      description:
        "Implements social welfare programs, provides assistance to vulnerable sectors, and promotes community development.",
    },
    {
      departmentName: "Municipal Agriculture Office",
      acronym: "MAgrO",
      head: "REPLACE: [Agricultural Officer Name]",
      position: "Municipal Agriculturist",
      photoPath: "/officials/agriculture-officer.jpg",
      email: "REPLACE: agriculture@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "Agriculture Office",
      icon: "fa-seedling",
      color: "bg-lime-100 text-lime-600",
      description:
        "Promotes agricultural development, provides technical assistance to farmers and fisherfolk, and implements agricultural programs.",
    },
    {
      departmentName: "Municipal Disaster Risk Reduction and Management Office",
      acronym: "MDRRMO",
      head: "REPLACE: [MDRRMO Officer Name]",
      position: "MDRRMO Officer",
      photoPath: "/officials/mdrrmo-officer.jpg",
      email: "REPLACE: mdrrmo@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "MDRRMO Office",
      icon: "fa-exclamation-triangle",
      color: "bg-red-100 text-red-600",
      description:
        "Coordinates disaster preparedness, response, and recovery operations; implements risk reduction measures and emergency management.",
    },
    {
      departmentName: "Municipal Environment and Natural Resources Office",
      acronym: "MENRO",
      head: "REPLACE: [MENRO Officer Name]",
      position: "MENRO Officer",
      photoPath: "/officials/menro-officer.jpg",
      email: "REPLACE: environment@tuy.gov.ph",
      phone: "REPLACE: (043) XXX-XXXX",
      office: "MENRO Office",
      icon: "fa-leaf",
      color: "bg-emerald-100 text-emerald-600",
      description:
        "Implements environmental programs, monitors environmental compliance, and promotes sustainable use of natural resources.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="parallax-bg"
          style={{
            transform: `translateY(${offset}px)`,
            backgroundImage: `url('${import.meta.env.VITE_BASE_PATH}/hero-image.jpg')`,
          }}
        ></div>
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
            <span className="text-white/90">Department Heads</span>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            Department Heads
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Leading Municipal Offices and Services
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
              Our Municipal Departments
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The Municipal Government of Tuy operates through various departments
              and offices, each headed by qualified professionals dedicated to
              serving the community. These departments work collaboratively to
              deliver efficient and effective public services to all residents.
            </p>
            <p>
              From infrastructure development to social welfare, from revenue
              collection to health services, each department plays a vital role in
              the municipality's governance and development. The department heads
              ensure proper implementation of programs, projects, and policies in
              their respective areas of responsibility.
            </p>
          </div>
        </section>

        {/* Executive Offices Section */}
        <section
          ref={executiveRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            executiveRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Executive Offices</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveOffices.map((dept, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden scroll-animate-scale stagger-${
                  (index % 3) + 1
                } ${executiveRef.isVisible ? "visible" : ""}`}
              >
                {/* Department Header */}
                <div className="bg-gradient-to-r from-primary to-primary-hover p-4 text-white">
                  <div
                    className={`w-12 h-12 rounded-full ${dept.color} bg-white/20 flex items-center justify-center mb-3`}
                  >
                    <i className={`fas ${dept.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-1">
                    {dept.departmentName}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Photo Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-3xl text-gray-400"></i>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-primary">{dept.head}</h4>
                    <p className="text-sm text-gray-600 mb-2">{dept.position}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {dept.description}
                  </p>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-3 space-y-2 text-xs text-gray-600">
                    <p className="flex items-center gap-2">
                      <i className="fas fa-envelope text-primary w-4"></i>
                      <span className="truncate">{dept.email}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="fas fa-phone text-primary w-4"></i>
                      <span>{dept.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-primary w-4"></i>
                      <span>{dept.office}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Services Section */}
        <section
          ref={supportRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            supportRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Support Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((dept, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden scroll-animate-scale stagger-${
                  (index % 3) + 1
                } ${supportRef.isVisible ? "visible" : ""}`}
              >
                {/* Department Header */}
                <div className="bg-gradient-to-r from-primary to-primary-hover p-4 text-white">
                  <div
                    className={`w-12 h-12 rounded-full ${dept.color} bg-white/20 flex items-center justify-center mb-3`}
                  >
                    <i className={`fas ${dept.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-1">
                    {dept.departmentName}
                  </h3>
                  {dept.acronym && (
                    <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded">
                      {dept.acronym}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Photo Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-3xl text-gray-400"></i>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-primary">{dept.head}</h4>
                    <p className="text-sm text-gray-600 mb-2">{dept.position}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {dept.description}
                  </p>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-3 space-y-2 text-xs text-gray-600">
                    <p className="flex items-center gap-2">
                      <i className="fas fa-envelope text-primary w-4"></i>
                      <span className="truncate">{dept.email}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="fas fa-phone text-primary w-4"></i>
                      <span>{dept.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-primary w-4"></i>
                      <span>{dept.office}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Departments Section */}
        <section
          ref={operationalRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            operationalRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-8">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Operational Departments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalDepartments.map((dept, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden scroll-animate-scale stagger-${
                  (index % 3) + 1
                } ${operationalRef.isVisible ? "visible" : ""}`}
              >
                {/* Department Header */}
                <div className="bg-gradient-to-r from-primary to-primary-hover p-4 text-white">
                  <div
                    className={`w-12 h-12 rounded-full ${dept.color} bg-white/20 flex items-center justify-center mb-3`}
                  >
                    <i className={`fas ${dept.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-1">
                    {dept.departmentName}
                  </h3>
                  {dept.acronym && (
                    <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded">
                      {dept.acronym}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Photo Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-3xl text-gray-400"></i>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-primary">{dept.head}</h4>
                    <p className="text-sm text-gray-600 mb-2">{dept.position}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {dept.description}
                  </p>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-3 space-y-2 text-xs text-gray-600">
                    <p className="flex items-center gap-2">
                      <i className="fas fa-envelope text-primary w-4"></i>
                      <span className="truncate">{dept.email}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="fas fa-phone text-primary w-4"></i>
                      <span>{dept.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="fas fa-map-marker-alt text-primary w-4"></i>
                      <span>{dept.office}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note about Photos */}
        <section className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
          <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center">
            <i className="fas fa-info-circle mr-2"></i>
            Photo Placeholder Instructions
          </h3>
          <p className="text-yellow-700 text-sm">
            Add official photos of department heads to the{" "}
            <code className="bg-yellow-200 px-2 py-1 rounded">
              public/officials/
            </code>{" "}
            folder. Use filenames as specified in the code (e.g., mayor.jpg,
            treasurer.jpg, etc.). Recommended image size: 800x800px minimum, square
            aspect ratio.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DepartmentHeads;
