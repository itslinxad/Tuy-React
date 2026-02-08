import "../assets/css/index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import ContactMap from "../components/ContactMap.tsx";
import { useParallax } from "../hooks/useParallax";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ContactUs = () => {
  const { offset } = useParallax({ speed: 0.3 });
  const contactInfoRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const officesRef = useScrollAnimation();
  const emergencyRef = useScrollAnimation();
  const mapRef = useScrollAnimation();

  // Form state (non-functional - visual only)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Contact form is not yet connected to a backend. This is a visual template only.");
  };

  const departments = [
    {
      icon: "fa-user-tie",
      name: "Office of the Municipal Mayor",
      head: "REPLACE: Hon. [Mayor Name]",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: mayor@tuy.gov.ph",
      location: "2nd Floor, Municipal Hall",
    },
    {
      icon: "fa-user",
      name: "Office of the Vice Mayor",
      head: "REPLACE: Hon. [Vice Mayor Name]",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: vicemayor@tuy.gov.ph",
      location: "2nd Floor, Municipal Hall",
    },
    {
      icon: "fa-calculator",
      name: "Municipal Budget Office",
      head: "REPLACE: [Name], Municipal Budget Officer",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: mbo@tuy.gov.ph",
      location: "2nd Floor, Municipal Hall",
    },
    {
      icon: "fa-wallet",
      name: "Municipal Treasurer's Office",
      head: "REPLACE: [Name], Municipal Treasurer",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: mto@tuy.gov.ph",
      location: "1st Floor, Municipal Hall",
    },
    {
      icon: "fa-chart-line",
      name: "Municipal Planning & Development Office",
      head: "REPLACE: [Name], Municipal Planning & Development Coordinator",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: mpdo@tuy.gov.ph",
      location: "2nd Floor, Municipal Hall",
    },
    {
      icon: "fa-users",
      name: "Municipal Social Welfare & Development Office",
      head: "REPLACE: [Name], MSWDO Head",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: mswdo@tuy.gov.ph",
      location: "Ground Floor, Municipal Hall",
    },
    {
      icon: "fa-clinic-medical",
      name: "Municipal Health Office",
      head: "REPLACE: Dr. [Name], Municipal Health Officer",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: mho@tuy.gov.ph",
      location: "Rural Health Unit Building",
    },
    {
      icon: "fa-shield-alt",
      name: "Municipal Disaster Risk Reduction & Management Office",
      head: "REPLACE: [Name], MDRRMO Head",
      phone: "REPLACE: (043) XXX-XXXX",
      email: "REPLACE: mdrrmo@tuy.gov.ph",
      location: "Ground Floor, Municipal Hall",
    },
  ];

  const emergencyContacts = [
    {
      icon: "fa-ambulance",
      service: "Emergency Medical Services",
      number: "REPLACE: (043) XXX-XXXX",
      description: "24/7 emergency medical response",
      color: "red",
    },
    {
      icon: "fa-fire",
      service: "Tuy Fire Station",
      number: "REPLACE: (043) XXX-XXXX",
      description: "Fire emergency and rescue operations",
      color: "orange",
    },
    {
      icon: "fa-shield-alt",
      service: "Tuy Municipal Police Station",
      number: "REPLACE: (043) XXX-XXXX",
      description: "Police assistance and emergency response",
      color: "blue",
    },
    {
      icon: "fa-exclamation-triangle",
      service: "Disaster Response Hotline",
      number: "REPLACE: (043) XXX-XXXX",
      description: "Disaster and calamity assistance",
      color: "yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
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
            <span className="text-white/90">Contact Us</span>
          </nav>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            Contact Us
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            We're Here to Serve You
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        {/* Quick Contact Info */}
        <section
          ref={contactInfoRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            contactInfoRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Get in Touch</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The Municipal Government of Tuy is committed to serving the people. Whether you have
            questions, concerns, or feedback, we're here to help. Reach out to us through any of
            the channels below.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-700">
                <strong>Municipal Hall of Tuy</strong>
                <br />
                REPLACE: [Complete Address]
                <br />
                Tuy, Batangas
                <br />
                Philippines, 4200
              </p>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-700">
                <strong>Main Line:</strong>
                <br />
                REPLACE: (043) XXX-XXXX
                <br />
                <br />
                <strong>Fax:</strong>
                <br />
                REPLACE: (043) XXX-XXXX
              </p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-700">
                <strong>General Inquiries:</strong>
                <br />
                REPLACE: info@tuy.gov.ph
                <br />
                <br />
                <strong>Complaints/Feedback:</strong>
                <br />
                REPLACE: feedback@tuy.gov.ph
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-clock text-primary mr-3"></i>
              Office Hours
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Regular Business Hours</h4>
                <p className="text-gray-700">
                  <strong>Monday to Friday:</strong> 8:00 AM - 5:00 PM
                  <br />
                  <strong>Lunch Break:</strong> 12:00 PM - 1:00 PM
                  <br />
                  <strong>Saturday & Sunday:</strong> Closed
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Special Notes</h4>
                <p className="text-gray-700 text-sm">
                  • Offices are closed on national holidays and special non-working days
                  <br />
                  • Some offices may have extended hours for specific services
                  <br />• Emergency services are available 24/7
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          ref={formRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            formRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Send Us a Message</h2>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
            <p className="text-yellow-800 text-sm flex items-start gap-2">
              <i className="fas fa-info-circle mt-1"></i>
              <span>
                <strong>Note:</strong> This contact form is a visual template and not yet connected
                to a backend system. For actual inquiries, please use the email addresses or phone
                numbers provided above.
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Juan Dela Cruz"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="juan@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="09XX XXX XXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="assistance">Request for Assistance</option>
                  <option value="business">Business Inquiry</option>
                  <option value="tourism">Tourism Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                placeholder="Please type your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Department Contacts */}
        <section
          ref={officesRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            officesRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Department Contacts</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            For specific concerns, you may directly contact the relevant department or office:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className={`fas ${dept.icon} text-primary text-xl`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{dept.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{dept.head}</p>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <i className="fas fa-phone text-primary mr-2"></i>
                        {dept.phone}
                      </p>
                      <p>
                        <i className="fas fa-envelope text-primary mr-2"></i>
                        {dept.email}
                      </p>
                      <p>
                        <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                        {dept.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        <section
          ref={emergencyRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            emergencyRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-red-600 mr-4"></div>
            <h2 className="text-4xl font-bold text-red-600">Emergency Contacts</h2>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            For emergencies, please contact these 24/7 hotlines immediately:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${contact.color}-50 to-${contact.color}-100 rounded-lg p-6 border-2 border-${contact.color}-200`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-${contact.color}-600 rounded-full flex items-center justify-center`}
                    >
                      <i className={`fas ${contact.icon} text-white text-2xl`}></i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.service}</h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                    <p className="text-sm text-gray-700">{contact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-6 rounded">
            <h4 className="font-bold text-red-800 mb-2 flex items-center">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              National Emergency Hotlines
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-red-700 text-sm">
              <p>
                <strong>National Emergency Hotline:</strong> 911
              </p>
              <p>
                <strong>PNP Hotline:</strong> 117
              </p>
              <p>
                <strong>BFP Hotline:</strong> (02) 8426-0219
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section
          ref={mapRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            mapRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">Find Us on the Map</h2>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Municipal Hall is located at the heart of Tuy, easily accessible by various modes
            of transportation.
          </p>

          {/* Interactive Google Map with Directions */}
          <div className="h-[600px] md:h-[800px] rounded-lg overflow-hidden shadow-lg">
            <ContactMap />
          </div>

          {/* Directions */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <i className="fas fa-directions text-primary mr-3"></i>
              How to Get Here
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold mb-2">From Manila</h4>
                <p className="text-sm">
                  Take SLEX/STAR Tollway to Batangas. Exit at Batangas City and follow signs to
                  Tuy. Travel time: approximately 2-3 hours by car.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">From Batangas City</h4>
                <p className="text-sm">
                  Take a bus or jeepney bound for Tuy. Alight at the town proper. The Municipal
                  Hall is near the public market. Travel time: approximately 30-45 minutes.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Public Transportation</h4>
                <p className="text-sm">
                  Jeepneys and tricycles are available from the town proper going to the Municipal
                  Hall. Buses from Manila and Batangas City pass through Tuy.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Landmarks</h4>
                <p className="text-sm">
                  Near: Tuy Public Market, Tuy Catholic Church, Tuy National High School. GPS
                  Coordinates: 14.0191, 120.7302
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg rounded-lg p-8 text-center">
          <div className="mb-4">
            <i className="fas fa-share-alt text-5xl text-white/80"></i>
          </div>
          <h3 className="text-3xl font-bold mb-4">Follow Us on Social Media</h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Stay connected and get the latest updates, news, and announcements from the Municipal
            Government of Tuy
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
