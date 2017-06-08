import React from 'react'
import styled from 'styled-components'

import { media } from '../../styled/style-utils'

import Input from '../../styled/Input'

const HeroSearch = styled.div`
  background: pink;
  display: flex;
  flex-wrap: wrap;
  ${media.tablet`flex-flow: row;`}
  padding: 1em;
  width: 75%;
  ${media.tablet`width: 90%;`}
`

const Filter = (props) => {
  return (
    <HeroSearch>
      <Input type='search' placeholder='Beer Name' id='search' />
      <Input type='range' placeholder='ABV' min='1' max='12' id='abv'/>
      <Input type='search' placeholder='IBU' id='ibu'/>
      <Input type='search' placeholder='SRM' id='srm'/>
    </HeroSearch>
  )
}

export default Filter
