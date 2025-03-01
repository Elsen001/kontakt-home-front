import "./services.scss";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo1 from "./images/image (8).svg"
import logo2 from "./images/image (9).svg"
import logo3 from "./images/image (10).svg"
import logo4 from "./images/image (11).svg"


const Services = () => {
  return (
    <div className='services-container'>
      <Link href={"/"}>
        <div className='card-service'>
          <div className="logo">
            <Image src={logo1} alt='' />
          </div>
          <div className="service">
            <h4>Qapıda rəsmiləşdirmə</h4>
            <p>Nağd, hissə-hissə və ya kartla ödəmə imkanı</p>
          </div>
        </div>
      </Link>
      <Link href={"/"}>
        <div className='card-service'>
          <div className="logo">
            <Image src={logo2} alt='' />
          </div>
          <div className="service">
            <h4>Zəmanət seçimi</h4>
            <p>İstehsalçı zəmanəti, qızıl zəmanət, zəmanət plus</p>
          </div>
        </div></Link>
      <Link href={"/"}>
        <div className='card-service'>
          <div className="logo">
            <Image src={logo3} alt='' />
          </div>
          <div className="service">
            <h4>Pulsuz çatdırılma</h4>
            <p>49.99AZN-dən yuxarı sifarişlərə pulsuz çatdırılma</p>
          </div>
        </div>
      </Link>
      <Link href={"/"}>
        <div className='card-service'>
          <div className="logo">
            <Image src={logo4} alt='' />
          </div>
          <div className="service">
            <h4>Ən yaxşı qiymətə zəmanət!</h4>
            <p>Daha ucuz tap, qiymət fərqinin 120%-ni geri al</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Services
