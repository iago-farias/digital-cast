import React, {createContext, useEffect, useState, useContext} from "react";
import {Audio} from 'expo-av';

import { AudioData } from '../types/Audio';
import api from "../services/api";

interface AudioContextData {
  playlist: AudioData[];
}

interface AudioProviderProps {
  children : React.ReactNode
}

export const AudioContext = createContext({} as AudioContextData);

export function AudioProvider({children} : AudioProviderProps)  {
  const [audio, setAudio] = useState();
  const [playlist, setPlaylist] = useState<AudioData[]>([]);

  useEffect(() => {
    async function loadAudio(){
      try{
        const response = await api.get("/playlist");        
        
        if(!response.data){
          return;
        }
  
        setPlaylist(response.data);
      } catch(err){
        console.log(err);
      }
    }

    loadAudio();
  }, []);

  return(
    <AudioContext.Provider
      value={{playlist}}
    >
    {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);

  if(!context){
    throw new Error("Informe dentro do contexto");
  }

  return context;
}