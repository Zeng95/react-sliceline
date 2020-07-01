import React from 'react'
import styled from 'styled-components'

import { pizzaRad } from '../Styles/colors'
import { Title } from '../Styles/title'

const NavbarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${pizzaRad};
  padding: 10px;
  width: 100%;
  z-index: 999;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Sliceline&nbsp;
        <span role="img" aria-label="pizza slice">
          🍕
        </span>
      </Logo>
    </NavbarStyled>
  )
}
