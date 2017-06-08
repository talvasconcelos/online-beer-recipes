import React from 'react'
import styled from 'styled-components'

import { media } from './style-utils'

const Input = styled.input`
  border-radius: 0.25em;
  font-size: 1em;
  width: 100%;
  border: none;
  padding: 0.5em;
  &:not(:last-child) {
    margin-bottom: 0.5em;
    ${media.tablet`margin-bottom: 0;`}
    ${media.tablet`margin-right: 0.5em;`}
  }
  &::-webkit-input-placeholder {
    color: #8a90ac;
  }
    /*display: inline-block;
  color: white;
  cursor: pointer;
  font-size: 1.35em;
  padding: 1em 1.25em;
  border: 2px solid white;
  border-radius: 0.25em;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: #09203f;
  }*/

`

const InputField = (props) => {
  return (
    <div>
      <label htmlFor=""></label>
      <Input></Input>
    </div>
  )
}

export default InputField
