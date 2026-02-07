import "../../assets/css/index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar.tsx";
import { useParallax } from "../../hooks/useParallax";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const BarangayOfficials = () => {
  const { offset } = useParallax({ speed: 0.3 });
  const introRef = useScrollAnimation();
  const officialsRef = useScrollAnimation();

  // ============================================
  // CONTENT NEEDED: Barangay Officials Data
  // ============================================
  // For each of the 22 barangays, provide:
  // - captain: Punong Barangay name
  // - kagawads: Array of 7 Sangguniang Barangay members
  // - sk: SK Chairperson name
  // - secretary: Barangay Secretary name
  // - treasurer: Barangay Treasurer name
  // - term: Current term (e.g., "2023-2025")
  
  const barangayData: Record<string, any> = {
    Acle: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Bayudbud: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Bolboc: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Dalima: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Dao: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Guinhawa: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Lumbangan: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Luntal: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Magahis: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Mataywanac: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    "Malibu Este": {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    "Malibu Oeste": {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Oitawen: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Palincaro: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Putol: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Rillo: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Sabang: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    "San Jose": {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    "San Pablo": {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    "Santa Clara": {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Talon: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
    Toong: {
      captain: "REPLACE: Hon. [Captain Name]",
      term: "REPLACE: 2023-2025",
      kagawads: [
        { name: "REPLACE: Hon. [Kagawad 1]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 2]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 3]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 4]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 5]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 6]", committee: "REPLACE: Committee" },
        { name: "REPLACE: Hon. [Kagawad 7]", committee: "REPLACE: Committee" },
      ],
      sk: "REPLACE: [SK Chairperson]",
      secretary: "REPLACE: [Secretary Name]",
      treasurer: "REPLACE: [Treasurer Name]",
    },
  };

  const barangayNames = Object.keys(barangayData).sort();
  const [selectedBarangay, setSelectedBarangay] = useState(barangayNames[0]);
  const currentData = barangayData[selectedBarangay];

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
            <span className="text-white/90">Barangay Officials</span>
          </nav>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fadeInUp">
            Barangay Officials
          </h1>
          <p
            className="text-2xl text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            Leaders of Our 22 Barangays
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
        {/* Introduction */}
        <section
          ref={introRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            introRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              About Barangay Government
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The barangay is the smallest administrative division in the
              Philippines and is the native Filipino term for a village, district,
              or ward. Each of Tuy's 22 barangays is governed by elected officials
              who serve the needs of their respective communities.
            </p>
            <p>
              Barangay officials work at the grassroots level to deliver basic
              services, maintain peace and order, and implement programs that
              directly benefit residents. They serve as the primary link between
              the municipal government and the people.
            </p>
          </div>
        </section>

        {/* Barangay Selector */}
        <section
          ref={officialsRef.elementRef}
          className={`bg-white shadow-lg rounded-lg p-8 scroll-animate ${
            officialsRef.isVisible ? "visible" : ""
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-2 h-12 bg-primary mr-4"></div>
            <h2 className="text-4xl font-bold text-primary">
              Select a Barangay
            </h2>
          </div>

          {/* Dropdown */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2">
              Choose a barangay to view its officials:
            </label>
            <select
              value={selectedBarangay}
              onChange={(e) => setSelectedBarangay(e.target.value)}
              className="w-full md:w-96 p-3 border-2 border-primary rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {barangayNames.map((name) => (
                <option key={name} value={name}>
                  Barangay {name}
                </option>
              ))}
            </select>
          </div>

          {/* Officials Display */}
          <div className="space-y-8">
            {/* Barangay Captain */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-user-tie text-primary mr-3"></i>
                Punong Barangay (Barangay Captain)
              </h3>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user text-3xl text-gray-400"></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-primary">
                      {currentData.captain}
                    </h4>
                    <p className="text-gray-600">Term: {currentData.term}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Add photo to: public/barangay/{selectedBarangay.toLowerCase()}/captain.jpg
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sangguniang Barangay Members */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-users text-primary mr-3"></i>
                Sangguniang Barangay Members (Kagawads)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentData.kagawads.map((kagawad: any, index: number) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-user text-xl text-gray-400"></i>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-primary">{kagawad.name}</h5>
                        <p className="text-sm text-gray-600 mt-1">
                          {kagawad.committee}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Officials */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* SK Chairperson */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <i className="fas fa-user-graduate text-primary mr-2"></i>
                  SK Chairperson
                </h4>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-user text-2xl text-gray-400"></i>
                  </div>
                  <p className="font-semibold text-primary">{currentData.sk}</p>
                  <p className="text-xs text-gray-500 mt-2">Youth Representative</p>
                </div>
              </div>

              {/* Secretary */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <i className="fas fa-file-alt text-primary mr-2"></i>
                  Barangay Secretary
                </h4>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-user text-2xl text-gray-400"></i>
                  </div>
                  <p className="font-semibold text-primary">{currentData.secretary}</p>
                  <p className="text-xs text-gray-500 mt-2">Records & Documentation</p>
                </div>
              </div>

              {/* Treasurer */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                  <i className="fas fa-coins text-primary mr-2"></i>
                  Barangay Treasurer
                </h4>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-user text-2xl text-gray-400"></i>
                  </div>
                  <p className="font-semibold text-primary">{currentData.treasurer}</p>
                  <p className="text-xs text-gray-500 mt-2">Financial Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fas fa-info-circle text-primary mr-3"></i>
            Barangay Services & Functions
          </h3>
          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">Barangay officials are responsible for:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>
                  Issuance of Barangay Clearances and Certifications
                </span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>Settlement of disputes through Lupong Tagapamayapa</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>Implementation of barangay ordinances and resolutions</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>Maintenance of peace and order in the barangay</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fas fa-chevron-right text-primary mt-1"></i>
                <span>
                  Delivery of basic services and implementation of community
                  programs
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BarangayOfficials;
