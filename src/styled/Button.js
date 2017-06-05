import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
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
  }
`
export default Button
