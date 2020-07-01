import React from 'react'
import styled from 'styled-components'

import { foods } from '../Data/FoodData'
import { Food, FoodGrid, FoodLink, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0 400px 50px 20px;
`

export function Menu() {
  return (
    <MenuStyled>
      {/* key => sectionName */}
      {/* value => foods */}
      {Object.entries(foods).map(([sectionName, foods]) => (
        <section key={sectionName}>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map(food => (
              <Food key={food.name}>
                <FoodLink image={food.image}></FoodLink>
                <FoodLabel>{food.name}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </section>
      ))}
    </MenuStyled>
  )
}