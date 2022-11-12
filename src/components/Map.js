import { useEffect } from "react";
import { useMapEvent, useMap } from "react-leaflet";
import { MapContainer } from "react-leaflet";
import Leaflet from "leaflet";
import { geocoder } from "leaflet-control-geocoder";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useSelector } from 'react-redux';

const SetViewOnClick = () => {
  const map = useMapEvent("click", ({ latlng }) => {
    map.setView(latlng, map.getZoom(), {
      animate: true,
    });
  });

  return null;
};

const Map = () => {
  const map = useMap();
  const pointsFrom = useSelector(store => store.points.pointsFrom)
  const pointsTo = useSelector(store => store.points.pointsTo)

  Leaflet.Icon.Default.mergeOptions({
    draggable: false,

    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
    map
  );

  geocoder({
    collapsed: true,
  });

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      draggableWaypoints: false,
      router: false,
      show: false,
      showAlternatives: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      collapsible: true,
      routeWhileDragging: true,
      waypoints: [L.latLng(pointsFrom[0], pointsFrom[1]), L.latLng(pointsTo[0], pointsTo[1])],
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [pointsFrom, pointsTo, map]);

  return null;
};

export const MapWrapper = () => {
  return (
    <div className="mapContainer">
      <MapContainer
        center={[40.184476598049855, 44.571485213134754]}
        zoom={12}
        scrollWheelZoom
        zoomControl={true}
      >
        <Map />
        <SetViewOnClick />
      </MapContainer>
    </div>
  );
};

