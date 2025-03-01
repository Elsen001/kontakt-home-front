"use client"
import React, { useState } from "react";
import Map from "@/components/map/Map";
import Location from "@/components/storeLocation/Location";

export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [selectedLocation, setSelectedLocation] = useState<string>("Bakı");

    return (
        <>
            {children}
            <section className="stores-container">
                <div className="stores">Mağazalarımız</div>
                <div className="map">
                    <Map />
                </div>
                <div className="location-buttons">
                    <button
                        className={selectedLocation === "Bakı" ? "activeStore" : "deaktiv"}
                        onClick={() => setSelectedLocation("Bakı")}
                    >
                        Bakı
                    </button>
                    <button
                        className={selectedLocation === "Regionlar" ? "activeStore" : "deaktiv"}
                        onClick={() => setSelectedLocation("Regionlar")}
                    >
                        Regionlar
                    </button>
                    <button
                        className={selectedLocation === "Gürcüstan" ? "activeStore" : "deaktiv"}
                        onClick={() => setSelectedLocation("Gürcüstan")}
                    >
                        Gürcüstan
                    </button>
                </div>
            </section>
            <Location selectedLocation={selectedLocation} />
        </>
    );
}
