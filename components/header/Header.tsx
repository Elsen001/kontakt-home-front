"use client";
import "./header.scss";
import { FaChevronRight, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaBalanceScale, FaRegTimesCircle, FaTimes } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../assests/images/download.svg";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
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
import signlogo from "../../assests/images/image (15).svg"
import million from "./images/milliön.png"
import portmanat from "./images/portmanat.png"
import hesab from "./images/hesab.png"
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosInformationCircleOutline, IoMdInformationCircle } from "react-icons/io";
import Category from "../main/Category/Category";

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
    const { isCategoryOpen, toggleCategory } = useCategory();
    const [isMobile, setIsMobile] = useState(false);
    const [allCollection, setAllCollection] = useState<any[]>([]);
    const [keyword, setKeyword] = useState("");
    const [open, setOpen] = useState(false)
    const [signModal, setSignModal] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false)

    useEffect(() => {
        if (signModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [signModal]);


    useEffect(() => {
        if (paymentModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [paymentModal]);


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
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showNav])

    useEffect(() => {
        setShowNav(false)
        setOpen(false)
    }, [pathname])


    function openResponse() {
        setOpen(true)
        getAllCollections()
    }

    function closeResponse() {
        setOpen(false);
    }

    const [isMobileSearch, setIsMobileSearch] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileSearch(window.innerWidth < 760);

        };


        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <Poster />
            <header style={{ display: header ? "flex" : "none" }}>
                <Link className="logo" href={"/"}>
                    <Image src={logo} alt="" />
                </Link>
                <div className="links">
                    <Link prefetch={true} className={`link ${pathname === '/Trade-in' ? 'active' : ''}`} href="/Trade-in">Trade-in</Link>
                    <Link prefetch={true} className={`link ${pathname === '/Magazalar' ? 'active' : ''}`} href="/Magazalar">Magazalar</Link>
                    <Link prefetch={true} className={`link ${pathname === '/korporativ-satislar' ? 'active' : ''}`} href="/korporativ-satislar">Korporativ satislar</Link>
                </div>
                <div className="register">
                    <span className='cont'><span className="color">*</span> 6060</span>
                    <button className='payment' onClick={()=>setPaymentModal(true)} >Aylıq Ödəniş</button>
                    <button className='signIn' onClick={() => setSignModal(true)}>Daxil ol</button>
                    <span className='language'>AZ <FontAwesomeIcon className="down" icon={faChevronDown} /></span>
                    <FaRegUser onClick={() => showNavFunc()} className="fa-user-icon" />
                </div>
            </header>
            {
                paymentModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <div className="modal-title">
                                <div className="title">Aylıq ödəniş</div>
                                <button className="close-btn" onClick={() => setPaymentModal(false)}>
                                    <FontAwesomeIcon className="icon-times-sign" icon={faTimes} />
                                </button>
                            </div>
                            <div className="modal-images">
                                <Link target="_blank" href={"https://www.million.az/services/ecommerce/KontaktHome"}><Image src={million} alt=""/></Link>
                                <Link target="_blank" href={"https://portmanat.az/project/kontaktHome"}><Image src={portmanat} alt=""/></Link>
                                <Link target="_blank" href={"https://hesab.az/unregistered/#/direct-pay/store/kontakthome/parameters?portalPay=kontakt&lang=az"}><Image src={hesab} alt=""/></Link>
                            </div>
                        </div>
                    </div>
                )
            }
            {signModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-title">
                            <Image src={signlogo} alt="" />
                            <button className="close-btn" onClick={() => setSignModal(false)}>
                                <FontAwesomeIcon className="icon-times-sign" icon={faTimes} />
                            </button>
                        </div>
                        <div className="modal-content">
                            <div><IoMdInformationCircle className="info-icon" /><p>Şəxsi kabinet hal-hazırda aktiv deyil.</p></div>
                        </div>
                        <button onClick={() => setSignModal(false)}>Bağla</button>
                    </div>
                </div>
            )}
            <nav className={header ? "" : "fixedNav"}>
                <div className="katalog">
                    <span style={{ order: pathname !== "/" ? "2" : "1" }} onClick={toggleCategory}><LuLayoutGrid className="grid" /></span>
                    <div style={{ order: pathname !== "/" ? "3" : "2" }} >Kataloq</div>
                    <Link style={{ order: pathname !== "/" ? "1" : "3" }} href={"/"}><Image style={{ visibility: header ? "hidden" : "visible" }} src={svgLogo} alt="" /></Link>
                </div>
                <div className="search">
                    <div className={isMobileSearch && open ? "search-bar-res" : "search-bar"}>
                        <div className="search-box">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                            <input
                                value={keyword}
                                onChange={(e) => {
                                    setKeyword(e.target.value);
                                    handleSearch(e.target.value);
                                }}
                                type="text"
                                placeholder='Axtarış...'
                                onFocus={openResponse}
                                onBlur={() => setTimeout(() => setOpen(false), 200)}
                            />
                            <div className="times">
                                <FaRegTimesCircle onClick={closeResponse} />
                            </div>
                        </div>

                        <div style={{ display: open ? "flex" : "none" }} className="search-response" onMouseDown={(e) => e.preventDefault()}>
                            <SearchResponse loading={loading} allCollection={allCollection} keyword={keyword} />
                        </div>
                    </div>

                </div>
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
                <div className="basket">
                    <Link className="compar" href={"/Comparison"} prefetch={true}>
                        <span className="icon-balanced"><FaBalanceScale /> {balanced.length > 0 && <span className="cart-length">{balanced.length}</span>} </span>
                    </Link>
                    <Link className="like" href={"/"} prefetch={true}>
                        <span className="heart"><FaRegHeart /></span>
                    </Link>
                    <Link className="cart" href={"/Cart"} prefetch={true}>
                        <span className="cart"> <FiShoppingCart /> {cart.length > 0 && <span className="cart-length">{cart.length}</span>}</span>
                    </Link>
                </div>
            </nav>
            <Category />
        </>
    );
};

export default Header;