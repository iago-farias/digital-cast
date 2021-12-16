import React, {createRef} from "react"
import {ScrollView, Text, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ActionSheet from 'react-native-actions-sheet';

import AboutAlbum from "../../components/AboutAlbum";
import AudioPLayer from "../../components/AudioPlayer";
import Header from "../../components/Header";
import ListAudio from "../../components/ListAudio";

export default function Player(){
  const actionSheetRef = createRef<ActionSheet>();

  function handleToggleList() {
    actionSheetRef.current?.setModalVisible();
  }

  return(
    <SafeAreaView >
      <Header handleToggleList={handleToggleList} />
      <ScrollView>
        <AboutAlbum />
        <AudioPLayer />
      </ScrollView>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          height: Dimensions.get("screen").height - 150,
          padding: 20,
        }}
      >
        <ListAudio />
      </ActionSheet>
    </SafeAreaView>
  );
}