"use client";
import "./category.scss";
import { getCategoryItems, selectError, selectIsLoading } from "@/redux/reducers/CategoryReducer";
import { AppDispatch, RootState } from "@/redux/store/store";
import { faChevronRight, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Slider/Slider";

import svg1 from "./categoryIcons/1.svg";
import svg2 from "./categoryIcons/2.svg";
import svg3 from "./categoryIcons/3.svg";
import svg4 from "./categoryIcons/4.svg";
import svg5 from "./categoryIcons/5.svg";
import svg6 from "./categoryIcons/6.svg";
import svg7 from "./categoryIcons/7.svg";
import svg8 from "./categoryIcons/8.svg";
import svg9 from "./categoryIcons/9.svg";
import svg10 from "./categoryIcons/10.svg";
import svg11 from "./categoryIcons/11.svg";
import svg12 from "./categoryIcons/12.svg";
import svg13 from "./categoryIcons/13.svg";
import svg14 from "./categoryIcons/14.svg";
import svg15 from "./categoryIcons/15.svg";
import svg16 from "./categoryIcons/16.svg";
import svg17 from "./categoryIcons/17.svg";
import svg18 from "./categoryIcons/18.svg";
import svg19 from "./categoryIcons/19.svg";
import svg20 from "./categoryIcons/20.svg";
import svg21 from "./categoryIcons/21.svg";
import Image from "next/image";
import { useCategory } from "./CategoryContext";
import { LiaTimesSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";

const Category = () => {
  const { isCategoryOpen, toggleCategory } = useCategory();
  const icons = [
    svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9, svg10,
    svg11, svg12, svg13, svg14, svg15, svg16, svg17, svg18, svg19, svg20, svg21
  ];

  const dispatch = useDispatch<AppDispatch>();
  const categoryItems = useSelector((state: RootState) => state.categoryItems.categoryItems);
  const [isHovered, setIsHovered] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isClicked, setIsClicked] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    if (categoryItems.length === 0) {
      dispatch(getCategoryItems());
    }
  }, [dispatch, categoryItems]);

  useEffect(() => {
    document.body.style.overflow = isCategoryOpen ? "hidden" : "auto";
  }, [isCategoryOpen]);


    

  const handleClick = () => {
    
  };
 

  return (
    <div   className={isCategoryOpen ? "responsive-menu" : "category-list"}
    style={pathname !== "/" ? { display: isCategoryOpen ? "flex" : "none" } : {}}
    onClick={handleClick}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {categoryItems && (
        <>
          <div className="res-katalog"><span>Kataloq</span><LiaTimesSolid onClick={  toggleCategory} className="times-res" /></div>
          {categoryItems.map((item, index) => (
            <Link key={item.id} className="c-link" href={"/"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="category-name">
                <Image src={icons[index % icons.length]} alt={`Icon for ${item.name}`} />
                <div className="item">{item.name}</div>
              </div>
              <div className="arrow-icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </Link>
          ))}
        </>
      )}

    </div>
  );
};

export default Category;
