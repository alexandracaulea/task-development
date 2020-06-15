import * as sectorCoordinates from "./coordinates";

// Generate a polygon
const generatePolygon = (sectorCoordinates, fillColor) => {
  return {
    path: sectorCoordinates,
    strokeColor: "#000000",
    strokeOpacity: 0.4,
    strokeWeight: 1,
    fillColor: fillColor,
    fillOpacity: 0.5,
  };
};

export const createMap = () => {
  const options = {
    zoom: 10,
    center: {
      lat: 44.4268,
      lng: 26.1025,
    },
  };

  // Create a new map
  const map = new google.maps.Map(document.getElementById("map"), options);
  const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#2E2B5F"];
  let idx = 0;

  // Create each polygon
  for (let coord in sectorCoordinates) {
    let res = generatePolygon(sectorCoordinates[coord], colors[idx]);
    idx += 1;
    let sector = new google.maps.Polygon(res);
    sector.setMap(map);
  }
};
