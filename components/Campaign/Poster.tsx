import "./style.scss";
import React from 'react'
import logo from "../Campaign/download.png";
import Image from 'next/image';

const Poster = () => {
  return (
    <div className='capmaignLogo'>
      <Image src={logo} alt=''/>
    </div>
  )
}

export default Poster
