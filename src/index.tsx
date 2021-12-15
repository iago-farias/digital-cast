import React from "react";
import {StatusBar} from 'expo-status-bar';

import {Background} from './styles';
import Player from "./pages/Player";

export default function Main(){
  return(
    <>
      <StatusBar style="light" />
      <Background>
        <Player />  
      </Background> 
    </>
  );
}