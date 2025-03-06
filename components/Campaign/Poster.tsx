import "./style.scss";
import React, { useEffect, useState } from "react";
import logo from "../Campaign/download.jpg";
import logo2 from "../Campaign/download2.jpg";
import Image from "next/image";

const Poster = () => {
  const [img, setImg] = useState(
    typeof window !== "undefined" && window.innerWidth < 800 ? logo2 : logo
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setImg(logo2);
      } else {
        setImg(logo);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="capmaignLogo">
      <Image src={img} alt="Campaign Logo"  />
    </div>
  );
};

export default Poster;
