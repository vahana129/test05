import React from 'react'
import './style.css'

export default function About() {
  return (
    <div className='about-wrap'>
      <h1>심사위원</h1>
      <div className='person-wrap'>
        <div className='person'> 
          <img src={`${process.env.PUBLIC_URL}/images/an.jpg`} alt="심사위원1" />
          <h2 className='person-txt'>안성재</h2>
          <p>Mosu Seoul
            <br />Mosu Hong Kong
            <br />Mosu San Francisco</p>
        </div>
        <div className='person'> 
          <img src={`${process.env.PUBLIC_URL}/images/baek.jpg`} alt="심사위원2" />
          <h2 className='person-txt'>백종원</h2>
          <p>더본코리아(대표이사)</p>
        </div>
      </div>
    </div>
  )
}