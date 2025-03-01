"use client"
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import Location from "@/components/storeLocation/Location";

const Map = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
});

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