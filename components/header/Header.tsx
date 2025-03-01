"use client";
import "./header.scss";
import { FaChevronRight, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaBalanceScale, FaTimes } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../assests/images/download.svg";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Poster from "../Campaign/Poster";
import svgLogo from "./image (12).svg";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import { useCategory } from "../main/Category/CategoryContext";
import SearchResponse from "../main/searchResponse/SearchResponse";
import { OfferItems } from "@/types/types";
import axios from "axios";
import { CiWallet, CiWarning } from "react-icons/ci";
import facebook from "../footer/images/image (2).svg"
import instagram from "../footer/images/image (3).svg"
import telegram from "../footer/images/image (5).svg"
import whatsapp from "../footer/images/image (4).svg"
import youtube from "../footer/images/image (6).svg"
import tiktok from "../footer/images/image (7).svg"
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosInformationCircleOutline } from "react-icons/io";
interface Response {
    data: any;
}

interface Collection {
    items: OfferItems[];
}

const Header = () => {
    const pathname = usePathname();
    const [header, setHeader] = useState(true);
    const [loading, setLoading] = useState(false)
    const cart = useSelector((state: RootState) => state.cart.cart);
    const balanced = useSelector((state: RootState) => state.balanced.balanced);
    const { toggleCategory } = useCategory();
    const [isMobile, setIsMobile] = useState(false);
    const [allCollection, setAllCollection] = useState<any[]>([]);
    const [keyword, setKeyword] = useState("");


    useEffect(() => {
        setIsMobile(window.innerWidth < 900);
    
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeader(false);
            } else {
                setHeader(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    const debounce = (func: Function, delay: number) => {
        let timeoutId: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const getAllCollections = async () => {
        try {
            setLoading(true)
            const response = await axios.get<any>("https://kontakt-back-2.onrender.com/api/all-collections");
            const collection: Collection[] = response.data || [];
            setAllCollection(collection);
            setLoading(false)
        } catch (error) {
            console.log("err", error);
        }
    };

    const searchItems = async (query: string) => {
        try {
            const response = await axios.get<any>(`https://kontakt-back-2.onrender.com/api/search?query=${query}`);
            setAllCollection(response.data);
            setLoading(false)
        } catch (error) {
            console.log("Axtarış zamanı xəta:", error);
        }
    };

    const handleSearch = debounce((query: string) => {
        setLoading(true);
        if (query.trim() !== "") {
            searchItems(query);
        } else {
            getAllCollections();
            setAllCollection([]);
        }
    }, 300);


    const [showNav, setShowNav] = useState(false)

    function showNavFunc() {
        setShowNav(!showNav)
    }

    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [showNav])

    useEffect(()=>{
        setShowNav(false)
    },[pathname])

   


    return (
        <>
            <Poster />
            <header>
                <div className={header ? "header-top" : "hidden"}>
                    <div className='logo-img'>
                        <Link href={"/"}>
                            <Image src={logo} alt="" />
                        </Link>
                    </div>
                    <nav>
                        <Link prefetch={true} className={`link ${pathname === '/Trade-in' ? 'active' : ''}`} href="/Trade-in">Trade-in</Link>
                        <Link prefetch={true} className={`link ${pathname === '/Magazalar' ? 'active' : ''}`} href="/Magazalar">Magazalar</Link>
                        <Link prefetch={true} className={`link ${pathname === '/korporativ-satislar' ? 'active' : ''}`} href="/korporativ-satislar">Korporativ satislar</Link>
                        <div className="register">
                            <span className='cont'><span>*</span> 6060</span>
                            <Link className='payment' href="/payment">Aylıq Ödəniş</Link>
                            <Link className='signIn' href="/">Daxil ol</Link>
                            <span className='language'>AZ <FontAwesomeIcon icon={faChevronDown} /></span>
                            <FaRegUser onClick={() => showNavFunc()} className="fa-user-icon" />
                        </div>
                    </nav>

                </div>
            </header>
            <div style={{ display: showNav ? "block" : "none" }} className="reponseive-container">
                <div className="res-title">
                    <h4>Hesab və ayarlar</h4>
                    <LiaTimesSolid className="times" onClick={() => showNavFunc()} />
                </div>
                <button className="pay-month">
                    <CiWallet />  <span>Aylıq ödəniş</span>
                </button>
                <div className="warning">
                <IoIosInformationCircleOutline className="info" />
                    <p>Şəxsi kabinet ilkin test mərhələsindədir. Dəstək üçün<strong> *6060</strong> və ya <strong>info@kontakt.az</strong></p>
                </div>
                <div className="signInToYourAccount">
                    <div className="fa-user-res"><FaRegUser /></div>
                    <div className="href">
                        <Link href={"/"}>Hesaba giriş və qeydiyyat</Link>
                        <Link href={"/"}>Şəxsi hesaba keçid</Link>
                    </div>
                </div>
                <div className="cart-balance-heart-res">
                    <Link href={"/Comparison"}><FaBalanceScale className="icon-res" /><span>Müqayisə {balanced.length > 0 && <span className="cart-length">{balanced.length}</span>}</span></Link>
                    <Link href={"/"}><FaRegHeart className="icon-res" /> <span>Seçilmişlər </span></Link>
                    <Link href={"/Cart"}><FiShoppingCart className="icon-res" /> <span>Sebet {cart.length > 0 && <span className="cart-length">{cart.length}</span>}</span></Link>
                </div>
                <div className="pages">
                    <div><Link prefetch={true} className={`link ${pathname === '/Trade-in' ? 'active' : ''}`} href="/Trade-in">Trade-in</Link><span><FaChevronRight /></span></div>
                    <div><Link prefetch={true} className={`link ${pathname === '/Magazalar' ? 'active' : ''}`} href="/Magazalar">Magazalar</Link><span><FaChevronRight /></span></div>
                    <div><Link prefetch={true} className={`link ${pathname === '/korporativ-satislar' ? 'active' : ''}`} href="/korporativ-satislar">Korporativ satislar</Link><span><FaChevronRight /></span></div>
                </div>
                <div className="contact-res">
                    <span className='cont-res'>Elaqe<span>*6060</span> </span>
                    <div className="social-icons">
                        <a href=""><Image src={facebook} alt='' /></a>
                        <a href=""><Image src={instagram} alt='' /></a>
                        <a href=""><Image src={whatsapp} alt='' /></a>
                        <a href=""><Image src={telegram} alt='' /></a>
                        <a href=""><Image src={youtube} alt='' /></a>
                        <a href=""><Image src={tiktok} alt='' /></a>
                    </div>
                </div>
            </div>
            <div style={{ top: header ? "112px" : "56px" }}
                className="header-bottom">
                <div className="category">
                    <span style={{ order: pathname === "Details" ? "3" : "1" }} className="icon-grid"><LuLayoutGrid onClick={() => {
                        if (isMobile) {
                            toggleCategory();
                        }
                    }} className="menu icon" /></span>
                    <span style={{ order: pathname === "Details" ? "2" : "1" }} className="katalog">Kataloq</span><span style={{ display: header ? "none" : "block" }} >
                        <Image
                            style={{ order: pathname === "Details" ? "1" : "2" }}
                            src={svgLogo}
                            alt=""
                        />
                    </span>
                </div>
                <div className="search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search icon' />
                    <input
                        value={keyword}
                        onChange={(e) => {
                            setKeyword(e.target.value);
                            handleSearch(e.target.value);
                        }}
                        onFocus={() => getAllCollections()}
                        type="text"
                        placeholder='Axtaris...'
                    />
                    <div className="search-response">
                        <SearchResponse loading={loading} allCollection={allCollection} keyword={keyword} />
                    </div>
                </div>
                <div className="basket">
                    <Link href={"/Comparison"} prefetch={true}>
                        <span className="icon-balanced"><FaBalanceScale /> {balanced.length > 0 && <span className="cart-length">{balanced.length}</span>} </span>
                    </Link>
                    <Link href={"/"} prefetch={true}>
                        <span className="heart"><FaRegHeart /></span>
                    </Link>
                    <Link href={"/Cart"} prefetch={true}>
                        <span className="cart"> <FiShoppingCart /> {cart.length > 0 && <span className="cart-length">{cart.length}</span>}</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;