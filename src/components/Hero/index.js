import React from 'react'
import styled from 'styled-components'

import Button from '../../styled/Button.js'

const Pitch = styled.div`
  position: absolute;
  top: 12em;
  left: 0;
  width: 100%;
  text-align: center;
  color: #eef1f5;
`

const Title = styled.h1`
  margin: 0;
`

const Tagline = styled.h3`
  margin-top: 0.5em;
  margin-bottom: 1em;
`

const Hero = (props) => {
  return (
    <section className='hero'>
      <div className='overlay'></div>
        <Pitch>
          <div>
            <Title>PROBeer</Title>
            <Tagline>Pro Recipes for the homebrewer</Tagline>
            <Button>CTA</Button>
          </div>
        </Pitch>
    </section>
  );
}

export default Hero;
