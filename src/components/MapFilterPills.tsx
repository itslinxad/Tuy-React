/**
 * MapFilterPills Component
 *
 * Displays filter pills for Halls, Barangays, and Offices
 * Similar to Google Maps filter interface with pill buttons
 */

import type { MarkerCategory } from "../types/map.types";

interface MapFilterPillsProps {
  activeFilters: Set<MarkerCategory>;
  onFilterToggle: (filter: MarkerCategory) => void;
  markerCounts: {
    halls: number;
    barangays: number;
    offices: number;
  };
}

interface FilterConfig {
  id: MarkerCategory;
  label: string;
  icon: string;
  count: number;
}

function MapFilterPills({
  activeFilters,
  onFilterToggle,
  markerCounts,
}: MapFilterPillsProps) {
  const filters: FilterConfig[] = [
    {
      id: "halls",
      label: "Halls",
      icon: "fa-landmark",
      count: markerCounts.halls,
    },
    {
      id: "barangays",
      label: "Barangays",
      icon: "fa-map-marker-alt",
      count: markerCounts.barangays,
    },
    {
      id: "offices",
      label: "Offices",
      icon: "fa-building",
      count: markerCounts.offices,
    },
  ];

  const handleFilterClick = (filterId: MarkerCategory) => {
    onFilterToggle(filterId);
  };

  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center">
      {filters.map((filter) => {
        const isActive = activeFilters.has(filter.id);

        return (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`
              inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full
              font-semibold text-xs sm:text-sm transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              ${
                isActive
                  ? "bg-primary text-white border-2 border-primary shadow-lg hover:bg-primary-hover"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-primary hover:bg-blue-50"
              }
              transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0
            `}
            aria-pressed={isActive}
            aria-label={`${isActive ? "Hide" : "Show"} ${filter.label}`}
          >
            <i className={`fas ${filter.icon} text-sm sm:text-base`}></i>
            <span className="hidden xs:inline sm:inline">{filter.label}</span>
            <span
              className={`
                px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-bold
                ${
                  isActive
                    ? "bg-white/30 text-white"
                    : "bg-gray-200 text-gray-600"
                }
              `}
            >
              {filter.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default MapFilterPills;
