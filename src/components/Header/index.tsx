import React from "react";
import {Feather} from '@expo/vector-icons';

import {Button, Container, ImgLogo} from './style';

import logo from '../../assets/images/icon.png';

interface HeaderProps {
  handleToggleList: () => void;
}

export default function Header({handleToggleList} : HeaderProps){
  return(
    <Container>
      <ImgLogo
        source={logo} 
      />

      <Button onPress={() => handleToggleList()}> 
        <Feather name="list" size={24} color="white" />
      </Button>
    </Container>
  );
}