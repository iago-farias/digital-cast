import React from "react";
import {StatusBar} from 'expo-status-bar';

import {Background} from './styles';
import Player from "./pages/Player";
import { AudioProvider } from "./hooks/audio";

export default function Main(){
  return(
    <AudioProvider>
      <StatusBar style="light" />
      <Background>
        <Player />  
      </Background> 
    </AudioProvider>
  );
}