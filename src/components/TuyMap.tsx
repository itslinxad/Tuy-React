import { useState, useMemo } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import MapFilterPills from "./MapFilterPills";
import { tuyMarkers, TUY_CENTER, getMarkerCounts } from "../data/tuyLocations";
import type { MarkerCategory, MapMarker } from "../types/map.types";

/**
 * TuyMap Component
 *
 * Interactive Google Maps component showing points of interest in Tuy, Batangas.
 * Features:
 * - Filter by category (Halls, Barangays, Offices)
 * - Custom markers with category-specific colors
 * - Info windows on marker click
 * - Muted map styling consistent with website theme
 */

function TuyMap() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

  // Filter state - all categories active by default
  const [activeFilters, setActiveFilters] = useState<Set<MarkerCategory>>(
    new Set(["halls", "barangays", "offices"]),
  );

  // Selected marker for info window
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  // Filter markers based on active filters
  const filteredMarkers = useMemo(() => {
    return tuyMarkers.filter((marker) => activeFilters.has(marker.category));
  }, [activeFilters]);

  // Handle filter toggle - exclusive selection (only one category shown at a time)
  const handleFilterToggle = (category: MarkerCategory) => {
    setActiveFilters((prev) => {
      // If this category is already the only one selected, show all
      if (prev.size === 1 && prev.has(category)) {
        return new Set(["halls", "barangays", "offices"]);
      }
      // Otherwise, show only this category
      return new Set([category]);
    });
  };

  // Get marker counts for filter pills
  const markerCounts = getMarkerCounts();

  // Get category color for markers
  const getCategoryColor = (category: MarkerCategory): string => {
    switch (category) {
      case "halls":
        return "#01377d"; // Primary blue
      case "barangays":
        return "#2e7d32"; // Green
      case "offices":
        return "#ed6c02"; // Orange
      default:
        return "#01377d";
    }
  };

  // Get category icon for markers
  const getCategoryIcon = (category: MarkerCategory): string => {
    switch (category) {
      case "halls":
        return "🏛"; // Landmark (single character)
      case "barangays":
        return "📍"; // Map marker (single character)
      case "offices":
        return "🏢"; // Building (single character)
      default:
        return "📍";
    }
  };

  // Custom map styles - muted colors
  const mapStyles = [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ saturation: -30 }],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#a8c5dc" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [{ color: "#f0f0f0" }],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#d0d0d0" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffa500" }, { lightness: 50 }],
    },
  ];

  // Handle API key error
  if (!apiKey) {
    console.log("Google Maps API Key Required");
    return (
      <div className="w-full h-[500px] md:h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Something went wrong.
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={TUY_CENTER}
          defaultZoom={14}
          gestureHandling="cooperative"
          disableDefaultUI={false}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={true}
          zoomControl={true}
          styles={mapStyles}
          className="w-full h-full"
        >
          {/* Render filtered markers */}
          {filteredMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              onClick={() => setSelectedMarker(marker)}
              title={marker.title}
              icon={{
                path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                fillColor: getCategoryColor(marker.category),
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2,
                scale: 1,
              }}
              label={{
                text: getCategoryIcon(marker.category),
                color: "#ffffff",
                fontSize: "14px",
              }}
            />
          ))}

          {/* Info window for selected marker */}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
              maxWidth={300}
            >
              <div className="p-2">
                <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                  <span>{getCategoryIcon(selectedMarker.category)}</span>
                  {selectedMarker.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {selectedMarker.description}
                </p>
                <div className="text-xs text-gray-500 capitalize">
                  {selectedMarker.category === "barangays"
                    ? "Barangay"
                    : selectedMarker.category === "halls"
                      ? "Municipal Facility"
                      : "Government Office"}
                </div>
              </div>
            </InfoWindow>
          )}

          {/* Filter pills overlay - positioned center top */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <MapFilterPills
              activeFilters={activeFilters}
              onFilterToggle={handleFilterToggle}
              markerCounts={markerCounts}
            />
          </div>
        </Map>
      </APIProvider>
    </div>
  );
}

export default TuyMap;
