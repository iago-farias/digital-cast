import React from "react";
import {Feather} from '@expo/vector-icons';

import {Button, Container, ImgLogo} from './style';

import logo from '../../assets/images/icon.png';

export default function Header(){
  return(
    <Container>
      <ImgLogo
        source={logo} 
      />

      <Button onPress={() => {}}> 
        <Feather name="list" size={24} color="white" />
      </Button>
    </Container>
  );
}