/**
 * Type definitions for Google Maps integration
 */

export type MarkerCategory = 'halls' | 'barangays' | 'offices';

export interface MapMarker {
  id: string;
  category: MarkerCategory;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  address?: string;
  description?: string;
}

export interface FilterState {
  halls: boolean;
  barangays: boolean;
  offices: boolean;
}

export interface MarkerCounts {
  halls: number;
  barangays: number;
  offices: number;
}

export interface MapConfig {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}
