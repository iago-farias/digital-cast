import React from "react";
import {Feather} from '@expo/vector-icons';

import {ButtonAction, ButtonContainer, Container} from './style';
import { useAudio } from "../../hooks/audio";

export default function AudioPLayer(){
  const {isPlaying, handleToggleAudio} = useAudio();

  return(
    <Container>
      <ButtonContainer>
        <ButtonAction>
          <Feather name="chevron-left" size={24} color="white" />
        </ButtonAction>
        
        <ButtonAction 
          primary
          onPress={handleToggleAudio}
        >
          <Feather name={isPlaying ? "pause" : "play"} size={32} color="white" />
        </ButtonAction> 

        <ButtonAction>
          <Feather name="chevron-right" size={24} color="white" />
        </ButtonAction>
      </ButtonContainer>
    </Container>
  );
}