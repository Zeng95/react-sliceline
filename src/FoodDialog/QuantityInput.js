import React from 'react'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { Title } from '../Styles/title'
import { pizzaRad } from '../Styles/colors'

const IncrementContainer = styled(Title)`
  display: flex;
  align-items: center;
`

const IncrementButton = styled.button`
  width: 24px;
  height: 24px;
  margin: 0 10px;
  border: 1px solid rgb(${pizzaRad});
  border-radius: 0.2rem;
  padding: 0;
  color: rgb(${pizzaRad});
  font-size: 20px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  transition: all 0.3s;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};

  &:hover {
    background-color: #ffe3e3;
  }
`

const DecrementButton = styled(IncrementButton)``

const QuantityLabel = styled.label`
  display: block;
`

// Styling a regular HTML input
const QuantityInputStyled = styled.input`
  width: 40px;
  border: none;
  padding: 0;
  text-align: center;
  font-size: 18px;
  outline: 0;
`

export function QuantityInput({ quantity, setQuantity, handleChange }) {
  const { t } = useTranslation()

  function decreaseQuantity() {
    setQuantity(--quantity)
  }

  function increaseQuantity() {
    setQuantity(++quantity)
  }

  return (
    <IncrementContainer>
      <QuantityLabel htmlFor="input-quantity">
        {t('dialog.quantity-label')}
      </QuantityLabel>

      <DecrementButton
        type="button"
        disabled={quantity <= 1}
        onClick={decreaseQuantity}
      >
        <span>-</span>
      </DecrementButton>

      <QuantityInputStyled
        required
        min="1"
        max="100"
        id="input-quantity"
        type="number"
        value={quantity}
        onChange={handleChange}
      />

      <IncrementButton
        type="button"
        disabled={quantity >= 100}
        onClick={increaseQuantity}
      >
        <span>+</span>
      </IncrementButton>
    </IncrementContainer>
  )
}
