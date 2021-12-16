import React from "react";

import {Container, Album, Title} from './styles';

export default function AboutAlbum(){
  return(
    <Container>
      <Title>Selecione um audio</Title>
      <Album source={{uri: "https://i.ibb.co/FYjqrST/cover.png"}} resizeMode="contain"/>
    </Container>
  );
}