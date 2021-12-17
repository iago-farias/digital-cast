import React, {createContext, useEffect, useState, useContext} from "react";
import {Audio} from 'expo-av';

import { AudioData } from '../types/Audio';
import api from "../services/api";

interface AudioContextData {
  currentAudio: Audio.Sound | undefined;
  currentAudioInfo: AudioData | undefined;
  isPlaying: boolean;
  playlist: AudioData[];
  playSong: (source : AudioData, autoPlay : boolean) => void;
  handleToggleAudio: () => void;
  handleNextAudio: () => void;
  handlePreviousAudio: () => void;
}

interface AudioProviderProps {
  children : React.ReactNode
}

export const AudioContext = createContext({} as AudioContextData);

export function AudioProvider({children} : AudioProviderProps)  {
  const [currentAudio, setCurrentAudio] = useState<Audio.Sound>();
  const [currentAudioInfo, setCurrentAudioInfo] = useState<AudioData>();
  const [isPlaying, setIsPlaying] = useState(false);
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

  async function playSong(source : AudioData, autoPlay = false){
    if(currentAudio){
      setIsPlaying(false);
      await currentAudio.unloadAsync();
    }

    setCurrentAudioInfo(source);

    const {sound} = await Audio.Sound.createAsync({
      uri: source.uri
    });

    setCurrentAudio(sound);

    if(autoPlay){
      setIsPlaying(true);
      await sound.playAsync();
    }
  }

  async function handleToggleAudio(){
    if(!currentAudio){
      return;
    }

    if(isPlaying){
      await currentAudio.pauseAsync();
    } else {
      await currentAudio.playAsync();
    }

    setIsPlaying((old) => !old);
  }

  async function handleNextAudio(){
    if(!currentAudioInfo){
      return;
    }

    playlist.map(async (playlistAudio, index) => {
      if(playlistAudio.id === currentAudioInfo.id){
        const nextAudioIndex = index + 1;
        
        if(nextAudioIndex > playlist.length - 1){
          return;
        }

        await playSong(playlist[nextAudioIndex], true);
      }
    });
  }

  async function handlePreviousAudio(){
    if(!currentAudioInfo){
      return;
    }

    playlist.map(async (playlistAudio, index) => {
      if(playlistAudio.id === currentAudioInfo.id){
        const previousAudioIndex = index - 1;

        if(previousAudioIndex < 0){
          return;
        }

        await playSong(playlist[previousAudioIndex], true);
      }
    });   
  }

  return(
    <AudioContext.Provider
      value={{
        currentAudio,
        currentAudioInfo,
        isPlaying,
        playlist,
        playSong,
        handleToggleAudio,
        handleNextAudio,
        handlePreviousAudio
      }}
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