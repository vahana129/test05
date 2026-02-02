import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex !important;
  align-items: flex-end;
  gap: 5px;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 10px;
  margin: 10px 0 50px;


`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: justify;
`;


export default function list() {
  



  return (
    <div>
      <Section>
        <h1>회차</h1>
        <p>(시즌2)</p>
      </Section>
      <Ul className='list-wrap'>
        <Li>
          <img src="/images/01.jpg" alt="회차 썸네일01" />
          <h3>1. 1화</h3>
          <p>
            흑수저 요리사 80인이 치열한 경쟁에 돌입한다. 그중 누가 백수저 요리사들과 겨룰 기회를 잡을 것인가. 대결에 앞서 충격적인 반전이 공개되며 게임의 판이 흔들린다.
          </p>
        </Li>
        <Li>
          <img src="/images/02.jpg" alt="회차 썸네일02" />
          <h3>2. 2화</h3>
          <p>
            서울 음식으로 한 상을 차리고 진한 육수로 죽을 끓인다. 첫 라운드에서 살아남고자 최고의 요리를 선보이는 흑수저 요리사들. 하지만 가차 없는 평가 앞에 탈락자가 속출한다.
          </p>
        </Li>
        <Li>
          <img src="/images/03.jpg" alt="회차 썸네일03" />
          <h3>3. 3화</h3>
          <p>
            긴박했던 대결이 끝나고 보류를 받은 요리사 중에서 추가 생존자가 선정된다. 다음 라운드에서는 대한민국 각지를 대표하는 식재료로 상대를 뛰어넘어야 한다.
          </p>
        </Li>
        <Li>
          <img src="/images/04.jpg" alt="회차 썸네일04" />
          <h3>4. 4화</h3>
          <p>
            예측 불허의 승부가 이어지며 긴장감이 높아진다. 꽃게부터 메추리까지, 까다로운 식재료에서 깊은 풍미를 끌어낼 방법은 무엇일까. 요리사들의 섬세한 손끝에서 창의적인 요리가 태어난다.
          </p>
        </Li>
        <Li>
          <img src="/images/05.jpg" alt="회차 썸네일05" />
          <h3>5. 5화</h3>
          <p>
            누구도 승리를 자신할 수 없는 블라인드 심사가 계속된다. 아귀와 골뱅이, 밤을 비롯한 지역 대표 식재료로 대결하는 흑수저와 백수저 요리사들. 동등한 조건에서 승부를 가르는 건 오직 실력뿐이다.
          </p>
        </Li>
        <Li>
          <img src="/images/06.jpg" alt="회차 썸네일06" />
          <h3>6. 6화</h3>
          <p>
            이번 대결에서는 백수저와 흑수저 요리사들의 팀전이 시작된다. 승자가 모든 것을 차지하는 대결. 가면으로 정체를 감춘 미스터리 심사단은 어느 팀의 요리를 선택할 것인가.
          </p>
        </Li>
        <Li>
          <img src="/images/07.jpg" alt="회차 썸네일07" />
          <h3>7. 7화</h3>
          <p>
            대결이 거듭되면서 새로운 심사 방식들이 적용되어 참가자들을 긴장하게 한다. 긴밀한 팀워크로 최고의 맛을 창조해야 하는 승부. 한발 뒤처진 상황에서 한 팀은 역전을 노린다.
          </p>
        </Li>
        <Li>
          <img src="/images/08.jpg" alt="회차 썸네일08" />
          <h3>8. 8화</h3>
          <p>
            다음 라운드에서 요리사들은 최소한의 재료만 가지고 각자 시그니처 요리를 완성해야 한다. 이어지는 대결에선 서로 다른 요리의 조화로움을 만들어 내는 것이 관건이다.
          </p>
        </Li>
        <Li>
          <img src="/images/09.jpg" alt="회차 썸네일09" />
          <h3>9. 9화</h3>
          <p>
            경력과 장르를 넘어 파트너와 함께 최상의 시너지를 발휘해야 하는 참가자들. 심사 위원들을 사로잡고자 온 힘을 쏟아 보지만, 예상치 못한 변수가 등장하면서 몇몇 참가자가 탈락 위기에 놓인다.
          </p>
        </Li>
        <Li>
          <img src="/images/10.jpg" alt="회차 썸네일10" />
          <h3>10. 10화</h3>
          <p>
            이번 관문만 통과하면 세미파이널이 기다린다. 주어진 시간과 정해진 재료와의 싸움에 위기감을 느끼는 셰프들. 마지막으로 사활을 걸고 싸우는 진검승부가 계속된다.
          </p>
        </Li>      
      </Ul>      
    </div>
  )
}