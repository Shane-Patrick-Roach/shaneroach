import styled from "styled-components"
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: #00B0FF;
  white-space: no-wrap;
  padding: ${({big})=> (big ? `14px 48px` : '12px 30px' )};
  color: #000;
  font-size: ${({fontBig})=> (fontBig ? `20px` : '16px' )};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: 'Poppins'

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`
