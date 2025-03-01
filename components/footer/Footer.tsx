import "./footer.scss";
import React from 'react'
import visa from "../footer/images/image.svg"
import master from "../footer/images/image (1).svg"
import facebook from "../footer/images/image (2).svg"
import instagram from "../footer/images/image (3).svg"
import telegram from "../footer/images/image (5).svg"
import whatsapp from "../footer/images/image (4).svg"
import youtube from "../footer/images/image (6).svg"
import tiktok from "../footer/images/image (7).svg"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-contact">
          <div className="title">Əlaqə</div>
          <span>*6060</span>
          <Link className="weOnMap" href={"/"}>Biz xəritədə</Link>
          <div className="visa-master"><span><Image src={visa} alt='' /></span> <span><Image src={master} alt='' /></span></div>
        </div>
        <div className="footer-store">
          <div className="title">Kontakt</div>
          <div>
            <Link href={"/"}>Şirkət haqqında</Link>
            <Link href={"/"}>Karyera</Link>
            <Link href={"/"}>"Qarabağ" proqramı</Link>
            <Link href={"/"}>Kontakt Video</Link>
            <Link href={"/"}>Kontakt TV</Link>
          </div>
        </div>
        <div className="footer-info">
          <div className="title">Məlumat</div>
          <div>
            <Link href={"/"}>Konfidensiallıq siyasəti</Link>
            <Link href={"/"}>Qiymət siyasəti</Link>
            <Link href={"/"}>Şikayətlərin idarəolunması siyasəti</Link>
            <Link href={"/"}>Saytın istifadə şərtləri</Link>
            <Link href={"/"}>Ən yaxşı qiymətə zəmanət!</Link>
            <Link href={"/"}>Korporativ satışlar</Link>
          </div>
        </div>
        <div className="footer-client">
          <div className="title">Müştərilər üçün</div>
          <div>
            <Link href={"/"}>Trade-in</Link>
            <Link href={"/"}>Çatdırılma və ödəmə</Link>
            <Link href={"/"}>Hissə-hissə ödəniş şərtləri</Link>
            <Link href={"/"}>Geri qaytarma siyasəti</Link>
            <Link href={"/"}>Zəmanətlər</Link>
            <Link href={"/"}>Naxçıvana çatdırılma</Link>
            <Link href={"/"}>Aylıq ödənişlərin həyata keçirilməsi</Link>
          </div>
        </div>
        <div className="footer-stayWithUs">
          <div className="title">Bizimlə qalın:</div>
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
      <div className="footer-bottom">
        <div>© Kontakt Home 2025</div>
      </div>
    </footer>
  )
}

export default Footer
