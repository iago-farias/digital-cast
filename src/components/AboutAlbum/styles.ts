import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const width = Dimensions.get("screen").width - 40;

export const Container = styled.View`
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 14px
`

export const Album = styled.Image`
  width: ${width}px;
  height: 300px;
`