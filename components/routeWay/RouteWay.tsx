"use client";
import "./route.scss"
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface DetailsProps {
    name: string

}

const RouteWay: React.FC<DetailsProps> = ({ name }) => {
    const pathname = usePathname();


    const cleanedPathname = pathname
        .replace(/\//g, " ")
        .trim()
        .replace(/^\w/, (char) => char.toUpperCase());

    const validPaths = ["Magazalar", "Korporativ-satislar", "Trade-in", "Cart", "Details", name];
    const isValidPath = validPaths.includes(cleanedPathname) || cleanedPathname === name;


    useEffect(() => {
        console.log(name, cleanedPathname, validPaths)
    }, [pathname, name]);

    return (
        <div className="routeStyle">

            <Link href={"/"}>
                <FontAwesomeIcon icon={faHouse} className="icon" />
                Əsas səhifə
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="icon" />


            {isValidPath ? (
                <Link
                    className={`link ${isValidPath ? "active" : ""}`}
                    href={`/${cleanedPathname.toLowerCase()}`}
                >
                    {cleanedPathname}
                </Link>
            ) : name ? (
                <Link
                    className="link active"
                    href={`/${name.toLowerCase()}`}
                >
                    {name}
                </Link>
            ) : (
                <span>Keçid mövcud deyil</span>
            )}

        </div>
    );
};

export default RouteWay;
