import React, {Component} from 'react';
import styled from 'styled-components/native';
import {View, Platform, TextInput, Switch, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';

export const StyledTextInput = styled.TextInput`
  align-self:stretch;
  font-family:${() => isIOS ? 'Copperplate' : 'roboto'};
  height:40;
`

export const BottomBorderView = styled.View`
  align-self:stretch;
  border-bottom-color:${props => !!props.withBorder ? "black" : "black"};
  border-bottom-width:${props => !!props.withBorder ? .5 : 0};
  margin-bottom:10;
  margin-top:${props => !!props.marginTop ? props.marginTop : 0};
  padding-bottom:0;
`


