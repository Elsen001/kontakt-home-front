"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"; 
import Image from "next/image";
import tranferImage from "./images/1.png";
import corporativeImage from "./images/2.jpg";
import logo1 from "./images/PartnerImages/1.png";
import logo2 from "./images/PartnerImages/2.png";
import logo3 from "./images/PartnerImages/3.png";
import logo4 from "./images/PartnerImages/4.png";
import logo5 from "./images/PartnerImages/5.png";
import logo6 from "./images/PartnerImages/6.png";
import logo7 from "./images/PartnerImages/7.png";
import logo8 from "./images/PartnerImages/8.png";
import logo9 from "./images/PartnerImages/9.png";
import logo10 from "./images/PartnerImages/10.png";
import logo11 from "./images/PartnerImages/11.png";
import logo12 from "./images/PartnerImages/12.png";
import logo13 from "./images/PartnerImages/13.png";
import logo14 from "./images/PartnerImages/14.png";
import logo15 from "./images/PartnerImages/15.png";
import logo16 from "./images/PartnerImages/16.png";
import logo17 from "./images/PartnerImages/17.png";
import logo18 from "./images/PartnerImages/18.png";
import logo19 from "./images/PartnerImages/19.png";
import logo20 from "./images/PartnerImages/20.png";
import logo21 from "./images/PartnerImages/21.png";
import logo22 from "./images/PartnerImages/22.png";
import logo23 from "./images/PartnerImages/23.png";
import logo24 from "./images/PartnerImages/24.png";
import logo25 from "./images/PartnerImages/25.png";
import logo26 from "./images/PartnerImages/26.png";
import logo27 from "./images/PartnerImages/27.png";
import logo28 from "./images/PartnerImages/28.png";
import logo29 from "./images/PartnerImages/29.png";





export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const swiperRef = useRef<any>(null); 
    const [selectedLocation, setSelectedLocation] = useState<string>("Bakı");

  const partnerImages = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18,logo19,
    logo20,logo21,logo22,logo23,logo24,logo25,logo26,logo27,logo28,logo29
  ];

    return (
        <>
            {children}

            <section className="CorporativeSales">
                <div className="CorporativeContent">
                    <div className="head">Korporativ satışlar</div>
                    <Swiper
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                        effect="fade"
                        modules={[Autoplay, Navigation, Pagination, EffectFade]}
                        navigation={false}
                        pagination={false}

                    >
                        <SwiperSlide>
                            <Image src={tranferImage} alt="Transfer Image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={corporativeImage} alt="Corporative Image" />
                        </SwiperSlide>
                    </Swiper>
                    <div className="description">
                        <div>
                            <p>Kontakt – müxtəlif növ yüksək keyfiyyətli rəqəmsal və məişət texnikasının, həmçinin mebellərin pərakəndə satışını həyata keçirməklə yanaşı korporativ müştərilərlə əməkdaşlığa xüsusi diqqət yetirir.</p>
                            <p>Hal-hazırda 2000-dən çox korporativ müştəri sayı ilə nəinki Azərbaycan bazarında, hətta Qafqazda da qısa müddət ərzində lider mövqelərdən birini tutmağı bacarıb.</p>
                        </div>
                        <ul>
                            <li>Korporativ sahədə fərdi yanaşma prinsipi ilə hərəkət edən Kontakt-ın partnyor şirkətlər üçün eksklüziv şərtlərlə əməkdaşlıq  təklifləri aşağıdakı kimidir:</li>
                            <li>Əməkdaşlıq etdiyimiz şirkətlər üçün xüsusi endirimli qiymətlər;</li>
                            <li>Korporativ müştərilərə kreditlə satış xidməti;</li>
                            <li>Əməkdaşlıq müddətində ödənişlərini köçürmə yolu ilə edə bilmək imkanı;</li>
                            <li>Telefon, notbuk, kondisioner, mikrodalğalı soba və bu kimi digər elektrotexnika vasitələrinin təmini;</li>
                            <li>Dispenser, printer və bu kimi ofis avadanlıqlarını əldə etmək imkanı;</li>
                            <li>Saytımızda əks olunan məhsullarla yanaşı, orada mövcud olmayan məhsulları belə öncədən sifarişlə əldə edə bilmə imkanı.</li>
                        </ul>
                        <div className="contact">
                            <p>Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə uyğun olanını seçə bilərsiniz:</p>
                            <ul>
                                <li>Aşağıdaki nömrə ilə əlaqə saxlamaqla: <br /> <span>+994102607432</span></li>
                                <li>Poçt ünvanımıza yazmaqla: <a href="corporate-sales@abc-telecom.az">corporate-sales@abc-telecom.az</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="CorporativePartner">
                    <div className="corporativeTitle">Partnyorlarımız:</div>
                    <div className="logos">
                        {
                            partnerImages.map((img)=>(
                                <Image src={img} alt=""/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
