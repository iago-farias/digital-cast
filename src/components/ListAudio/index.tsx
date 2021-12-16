import React from "react";
import {FlatList, ScrollView} from 'react-native';
import { useAudio } from "../../hooks/audio";
import { AudioData } from "../../types/Audio";

import { AlbumImage, Hr, ItemContainer, ItemInfoContainer, ItemInfoData, ItemInfoTitle } from './style';

interface RenderItemProps{
  item: AudioData
}

export default function ListAudio(){
  const {playlist} = useAudio();

  const RenderItem = ({ item } : RenderItemProps) => {
    return(
      <ItemContainer>
        <AlbumImage source={{uri: "https://i.ibb.co/FYjqrST/cover.png"}}/>
        <ItemInfoContainer>
          <ItemInfoTitle>{item.title}</ItemInfoTitle>
          <ItemInfoData>{item.date}</ItemInfoData>
        </ItemInfoContainer>
      </ItemContainer>
    );
  }

  return(
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={playlist}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Hr />}
        renderItem={(item) => <RenderItem {...item} />}
      />
    </ScrollView>
  );
}