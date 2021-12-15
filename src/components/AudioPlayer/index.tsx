import React from "react";
import {Feather} from '@expo/vector-icons';

import {ButtonAction, ButtonContainer, Container} from './style';

export default function AudioPLayer(){
  return(
    <Container>
      <ButtonContainer>
        <ButtonAction>
          <Feather name="chevron-left" size={24} color="white" />
        </ButtonAction>
        
        <ButtonAction primary>
          <Feather name="play" size={32} color="white" />
        </ButtonAction> 

        <ButtonAction>
          <Feather name="chevron-right" size={24} color="white" />
        </ButtonAction>
      </ButtonContainer>
    </Container>
  );
}