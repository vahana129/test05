import React from 'react'

export default function Home() {

  const main = {
    width: '1000px',
    height: '563px',
  };

  const mainImg = {
    width: '100%',
    height: '100%'
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '800px'}}>
      <div style={main}>
        <img src={`${process.env.PUBLIC_URL}/images/main.jpg`} alt='메인 이미지' style={mainImg} />
      </div>
      <h1>흑백요리사: 요리 계급 전쟁</h1>
      <div style={{width:'400px', textAlign:'justify', margin:'0 auto 20px'}}>
        <p>대한민국 최고의 스타 셰프들과 맛으로 인정받은 실력파 요리사들이 맞붙는다. 베테랑의 내공에 도전하는 숨은 고수들이 이변을 일으킬까? 오직 맛으로만 승부하는 100인의 뜨거운 요리 계급 전쟁.</p>
      </div>
    </div>
  )
}
