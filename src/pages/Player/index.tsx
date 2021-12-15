import React from "react"
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AboutAlbum from "../../components/AboutAlbum";
import AudioPLayer from "../../components/AudioPlayer";

import Header from "../../components/Header";

export default function Player(){
  return(
    <SafeAreaView >
      <Header />
      <ScrollView>
        <AboutAlbum />
        <AudioPLayer />
      </ScrollView>
    </SafeAreaView>
  );
}