import React from "react";
import {StatusBar} from 'expo-status-bar';

import {Background} from './styles';

export default function Main(){
  return(
    <>
      <StatusBar style="light" />
      <Background></Background> 
    </>
  );
}