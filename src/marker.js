const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const markerDomEl = document.createElement("div"); // Create a new, detached DIV

    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

const buildMarker = (type, coords) =&gt; {
    // Your Code Here
    if(type === "activity"){
    markerDomEl.style.backgroundImage = activities;
    }
    else if(type === 'hotels'){
      markerDomEl.style.backgroundImage = hotels
    }
    else{
      markerDomEl.style.backgroundImage = restaurants
    }

    new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
