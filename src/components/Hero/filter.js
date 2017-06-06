import React from 'react'
import styled from 'styled-components'

import { media } from '../../styled/style-utils'

import Input from '../../styled/Input'

const HeroSearch = styled.div`
  background: pink;
  position: relative;
  padding: 1em;
  width: 80%;
`

const Filter = (props) => {
  return (
    <HeroSearch>
      <Input type='search' placeholder='Name' />
      <Input type='search' placeholder='Search...' />
    </HeroSearch>
  )
}

export default Filter
