export interface Geometry {
    lat: number;
    lng: number;
  }
  
  export interface Result {
    geometry: Geometry;
  }
  
  export interface LocationResponse {
    results: Result[];
  }