import React from 'react'
import styled from 'styled-components'

import { media } from '../../styled/style-utils'

import InputField from '../../styled/Input'

const HeroSearch = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.25em;
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`flex-flow: row;`}
  padding: 1em;
  width: 75%;
  ${media.tablet`width: 90%;`}
  max-width: 45em;
  margin-bottom: 2em;
`

const Filter = (props) => {
  return (
    <HeroSearch>
      <InputField type='search' placeholder='Beer Name' id='search' />
      <InputField type='number' min='1' max='20' placeholder='ABV (1-20)' id='abv'/>
      <InputField type='number' min='5' max='120' placeholder='IBU (5-120)' id='ibu'/>
      <InputField type='number' min='2' max='80' placeholder='SRM (2-80)' id='srm'/>
    </HeroSearch>
  )
}

export default Filter
