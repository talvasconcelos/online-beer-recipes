import React from 'react'
import styled from 'styled-components'

import { media } from '../../styled/style-utils';

import Button from '../../styled/Button'

const BeerHero = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 84.375vw;
  ${media.tablet`height: 56.25vw;`}
`

const BeerHeroImg = styled.img`
  position: absolute;
  bottom: -15%;
  ${media.tablet`bottom: -25%;`}
  left: 0;
  z-index: -2;
  width: 100%;
`

const BeerHeader = styled.div`
  position: relative;
  box-shadow: 0 28px 79px 0 rgba(239, 138, 52,.2);
  margin: 2em auto;
`

const BeerHeadeline = styled.h2`
  margin: 0;
  padding: 2rem;
  text-align: center;
  /*background-image: linear-gradient(to top, rgba(207, 217, 223, 0.3) 0%, rgba(226, 235, 240, 0.3) 100%);*/
  background-image: linear-gradient(to top, rgba(253, 219, 146, 0.3) 0%, rgba(209, 253, 255, 0.4) 100%);
`

const Hero = (props) => {
  return (
    <BeerHero>
      <BeerHeader>
        <BeerHeadeline>DIY Beer</BeerHeadeline>
      </BeerHeader>
      <div>
        <BeerHeroImg src={process.env.PUBLIC_URL + 'img/hero_03.jpg'}></BeerHeroImg>
      </div>
      <div>
        <Button>CTA</Button>
      </div>

    </BeerHero>
  );
}

export default Hero;
