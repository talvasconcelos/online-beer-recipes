import React from 'react'
import styled from 'styled-components'

import { media } from '../../styled/style-utils'

import Button from '../../styled/Button'

import Filter from './filter'

const BeerHero = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 85vh;
  background-image: linear-gradient(to top, rgba(9, 32, 63, 0.75) 0%, rgba(83, 120, 149, 0.75) 100%), url('img/hero_03.jpg');
  background-position: bottom;
  background-size: cover;
  /*background-image: linear-gradient(120deg, rgba(246, 211, 101, 0.75) 0%, rgba(253, 160, 133, 0.75) 100%);*/
  /*background-image: linear-gradient(to top, #09203f 0%, #537895 100%);*/
  /*background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);*/
  ${media.tablet`height: 75vw;`}
`

const BeerHeader = styled.div`
  position: relative;
  margin: 0.75em auto;
  ${media.tablet`margin: 2em auto;`}
`

const BeerHeadeline = styled.h2`
  margin: 0;
  padding: 2rem;
  text-align: center;
  color: white;
  /*background-image: linear-gradient(to top, rgba(207, 217, 223, 0.3) 0%, rgba(226, 235, 240, 0.3) 100%);*/
  /*background: linear-gradient(to top, rgba(253, 219, 146, 0.3) 0%, rgba(209, 253, 255, 0.4) 100%);*/
`

const Hero = (props) => {
  return (
    <BeerHero>
      <BeerHeader>
        <BeerHeadeline>Home Made Beer</BeerHeadeline>
      </BeerHeader>
      <Filter></Filter>
      {/* <div>
        <Button>Beer Me</Button>
      </div> */}
    </BeerHero>
  );
}

export default Hero;
