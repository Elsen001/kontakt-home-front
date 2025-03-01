"use client";
import iconCheck from "../../../assests/images/checkj.svg";
import gif from "../../../assests/images/giphy.gif";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi2";
import { LuCircleMinus } from "react-icons/lu";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { cleanBalanced, deleteBalanced } from "@/redux/reducers/BalancedReducer";
import { useEffect, useState } from "react";
import { Features, OfferItems } from "@/types/types";
import { addToCart } from "@/redux/reducers/AddToCartReducer";
import axios from "axios";

interface BalanceItem {
    id: number;
    name: string;
}

interface BalanceResponse {
    data: { data: BalanceItem[] }[]; 
}

const ItemComparison = () => {
    const dispatch = useDispatch()
    const balanced = useSelector((state: RootState) => state.balanced.balanced);
    const [loading, setLoading] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<string[]>([]); 
    const [balanceName, setBalanceName] = useState<BalanceItem[]>([]);
    const [selectedOption, setSelectedOption] = useState<"all" | "similiar" | "differences">("all");

    async function getBalanceItem() {
        try {
            const response = await axios.get<BalanceResponse>("http://localhost:5000/api/balance");

            const extractedData = response.data.data[0]?.data || [];
            setBalanceName(extractedData);
        } catch (error) {
            console.error("Balance datanı çəkmək mümkün olmadı:", error);
        }
    }

    function formatFeatureName(name: string): string {
        return name.replace(/([a-z])([A-Z])/g, "$1 $2");
    }

    const handleAddToCart = (item: OfferItems) => {
        setLoading(String(item.id)); 
        dispatch(addToCart(item));
        setTimeout(() => {
            setLoading(null); 
            setCartItems(prev => [...prev, String(item.id)]); 
        }, 1000);
    };

    const getSimilarFeatures = (): string[] => {
        if (balanced.length === 0) return [];
    
        const allFeatures = balanced.flatMap(item => Object.keys(item.features || {}));
        const uniqueFeatures = [...new Set(allFeatures)];
    
        const similarFeatures = uniqueFeatures.filter(featureName =>
            balanced.every(item => item.features && item.features[featureName] === balanced[0].features[featureName])
        );
    
        return similarFeatures;
    };

    const getDifferentFeatures = (): string[] => {
        if (balanced.length === 0) return [];
    
        const allFeatures = balanced.flatMap(item => Object.keys(item.features || {}));
        const uniqueFeatures = [...new Set(allFeatures)];
    
        const differentFeatures = uniqueFeatures.filter(featureName =>
            balanced.some(item => item.features && item.features[featureName] !== balanced[0].features[featureName])
        );
    
        return differentFeatures;
    };

    const similarFeatures = getSimilarFeatures();
    const differentFeatures = getDifferentFeatures();

    useEffect(() => {
        getBalanceItem();
    }, []);

    return (
        <div className='comparison-container'>
            <div className="comparison-title">
                <h3>Müqayisə</h3>
                <div className="select-box">
                    <button>Tavalar  <span><IoIosArrowDown /></span></button>
                    <div className="popup"></div>
                </div>
            </div>
            <div className="comparison-cart">
                <div className="cart-details">
                    <div className="cart-detail-head">
                        <h4 className="count">Əlavə olunub: {balanced.length} </h4>
                        <button onClick={() => dispatch(cleanBalanced())}><HiOutlineTrash className="trash-icon" /> Hamısını sil</button>
                    </div>
                    <div className="show">
                        <h4>Göstər:</h4>
                        <div className="radio-group">
                            <label htmlFor="all"><input type="radio" name="option" id="all" checked={selectedOption === "all"} onChange={() => setSelectedOption("all")} /> Hamısı</label>
                            <label htmlFor="similiar"><input type="radio" name="option" id="similiar" checked={selectedOption === "similiar"} onChange={() => setSelectedOption("similiar")} /> Oxşarlıqlar</label>
                            <label htmlFor="differences"><input type="radio" name="option" id="differences" checked={selectedOption === "differences"} onChange={() => setSelectedOption("differences")} /> Fərqlər</label>
                        </div>
                    </div>
                    <div className="parameters">
                        {
                            balanceName
                                ?.filter(i => {
                                    if (selectedOption === "all") return true; 
                                    if (selectedOption === "similiar") return similarFeatures.includes(i.name); 
                                    if (selectedOption === "differences") return differentFeatures.includes(i.name); 
                                    return false;
                                })
                                .map(i => (
                                    <h4 style={{ textTransform: "capitalize" }} key={i.id}>
                                        {i.name}
                                    </h4>
                                ))
                        }
                    </div>
                </div>
                <div className="cart-item">
                    {
                        balanced.map((item) => (
                            <div key={item.id} className="item">
                                <div className="item-title">
                                    <div>{item.name}</div>
                                    <LuCircleMinus onClick={() => dispatch(deleteBalanced(item.id))} className="icon" />
                                </div>
                                <div className="item-body">
                                    <Link href="/"><img src={item.image} alt="" /></Link>
                                    <div className="price">
                                        <span className="new-price">{item.price} ₼</span>
                                        <span></span>
                                        <span className="old-price">{item.oldPrice} ₼</span>
                                    </div>
                                    <div className="item-body-btns">
                                        <button> <span><FaRegHeart /></span></button>
                                        <button className={cartItems.includes(String(item.id)) ? "inCartSlider" : ""}
                                            onClick={() => handleAddToCart(item)}>
                                            {cartItems.includes(String(item.id))
                                                ? <Image src={iconCheck} alt="" />
                                                : <FiShoppingCart className="fa-icon" />}
                                            <span>{cartItems.includes(String(item.id)) ? "Səbətdə" : "Səbətə at"}</span>
                                            {loading === String(item.id) && <span className="spin"><Image src={gif} alt="loading..." /></span>}
                                        </button>
                                    </div>
                                </div>
                                <div className="parameters pcitem">
                                    {
                                        item.features && Object.entries(item.features).map(([featureName, featureValue]) => (
                                            (selectedOption === "all" ||
                                                (selectedOption === "similiar" && similarFeatures.includes(featureName)) ||
                                                (selectedOption === "differences" && differentFeatures.includes(featureName))
                                            ) && (
                                                <h4 style={{ textTransform: "capitalize" }} key={featureName}>
                                                    {formatFeatureName(featureValue)}
                                                </h4>
                                            )
                                        )
                                        )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemComparison;