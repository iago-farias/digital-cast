import React from "react";
import { useAudio } from "../../hooks/audio";

import {Container, Album, Title} from './styles';

export default function AboutAlbum(){
  const {currentAudioInfo} = useAudio();

  return(
    <Container>
      <Title>{currentAudioInfo ? currentAudioInfo.id +" - "+ currentAudioInfo.title : "Selecione um audio"}</Title>
      <Album 
        source={{uri: currentAudioInfo?.imageSource}} 
        resizeMode="contain"
      />
    </Container>
  );
}