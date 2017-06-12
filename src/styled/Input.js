import React from 'react'
import styled from 'styled-components'

import { media } from './style-utils'

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 0.5em;
  ${media.tablet`margin-right: 0.5em;`}
  &:last-child {
    margin-bottom: 0;
    ${media.tablet`margin-right: 0;`}
  }
`

const Input = styled.input`
  border-radius: 0.25em;
  color: #8a90ac;
  font-size: 1em;
  width: 100%;
  border: none;
  padding: 0.5em;
  &::-webkit-input-placeholder {
    color: #8a90ac;
  }
`

const Label = styled.label`
  color: #606788;
  font-size: 0.75em;
`

const InputField = (props) => {
  return (
    <Wrap>
      <Label htmlFor={props.id}>{props.placeholder}</Label>
      <Input type={props.type} min={props.min} max={props.max}></Input>
    </Wrap>
  )
}

export default InputField
