import React from 'react'

import { ButtonContainer } from './styles';

function ButtonBuscar({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      Buscar
    </ButtonContainer>
  )
}

function ButtonRemover({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      Remover
    </ButtonContainer>
  )
}

export { ButtonBuscar, ButtonRemover };