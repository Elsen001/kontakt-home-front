"use client";
import "./map.scss"
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import logo from "../../assests/images/Kontakt_Home.png";


const customIcon = new L.Icon({
  iconUrl: logo.src,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const Map = () => {
  
  const stores: { name: string; coords: [number, number] }[] = [
    { name: "Mərkəz Filialı", coords: [40.3989, 49.8501] },
    { name: "Əhmədli Filialı", coords: [40.3745, 49.9481] },
    { name: "Vurğun Residence", coords: [40.3855, 49.8352] },
    { name: "Dəniz Mall", coords: [40.3595, 49.8336] },
    { name: "Gənclik Mall", coords: [40.398, 49.8599] },
    { name: "SMART '28 may metrosu'", coords: [40.3785, 49.8476] },
    { name: "Ukrayna dairəsi", coords: [40.374, 49.948] },
    { name: "3-cü mkr dairəsi", coords: [40.4, 49.822] },
    { name: "Xalqlar Dostluğu metrosu", coords: [40.413, 49.911] },
    { name: "Xırdalan", coords: [40.448, 49.755] },
    { name: "Sumqayıt 10-cu mkr", coords: [40.5853, 49.6317] },
    { name: "Şəmkir Filialı", coords: [40.8297, 46.0174] },
    { name: "Xaçmaz Filialı", coords: [41.4641, 48.8057] },
    { name: "Şamaxı Filialı", coords: [40.6303, 48.6419] },
    { name: "İsmayıllı Filialı", coords: [40.7894, 48.1493] },
    { name: "Salyan Filialı", coords: [39.5956, 49.0] },
    { name: "Sumqayıt Sülh küçəsi", coords: [40.5853, 49.6317] },
    { name: "Ağcabədi Filialı", coords: [40.0521, 47.4617] },
    { name: "Binə Filialı", coords: [40.3745, 49.9481] },
    { name: "Balakən Filialı", coords: [41.7256, 46.4083] },
    { name: "Tovuz Filialı", coords: [40.9926, 45.6286] },
    { name: "Qusar Filialı", coords: [41.4275, 48.43] },
    { name: "Astara Filialı", coords: [38.4564, 48.874] },
    { name: "Sabirabad Filialı", coords: [40.0087, 48.4775] },
    { name: "Masazır Filialı", coords: [40.5139, 49.7606] },
    { name: "İmişli Filialı", coords: [39.8708, 48.065] },
    { name: "Hacıqabul Filialı", coords: [40.0389, 48.9425] },
    { name: "Oğuz Filialı", coords: [41.0708, 47.4583] },
    { name: "Gəncə Mall", coords: [40.6828, 46.3606] },
    { name: "Gəncə Bayraq Meydanı", coords: [40.6828, 46.3606] },
    { name: "Masallı Filialı", coords: [39.0344, 48.6656] },
    { name: "Qəbələ Filialı", coords: [40.9814, 47.8478] },
    { name: "Bərdə Filialı", coords: [40.3758, 47.1267] },
    { name: "Göyçay Filialı", coords: [40.6536, 47.7408] },
    { name: "Quba Filialı", coords: [41.3611, 48.5139] },
    { name: "Lənkəran Filialı", coords: [38.7544, 48.8519] },
    { name: "Gəncə Grand Qafqaz", coords: [40.6828, 46.3606] },
    { name: "Mingəçevir Filialı", coords: [40.77, 47.0489] },
    { name: "Zaqatala Filialı", coords: [41.6317, 46.6444] },
    { name: "Cəlilabad Filialı", coords: [39.2097, 48.4919] },
    { name: "Mərdəkan Filialı", coords: [40.4639, 50.1458] },
  ];

  return (
    <MapContainer
      center={[40.4093, 49.8671]}
      zoom={9}
      style={{ height: "600px", width: "100%" }}
       className="custom-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
      {stores.map((store, index) => (
        <Marker key={index} position={store.coords} icon={customIcon}>
          <Popup>{store.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
