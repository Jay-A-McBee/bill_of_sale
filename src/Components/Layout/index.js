import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window'); 

export const Container = styled.Image`
  align-self: center;
  align-items: center;
  justify-content:${props => props.justify};
  height: ${height};
  width: ${width};
`

export const InnerContent = styled.View`
  align-self:center;
  align-items:${props => props.alignItems};
  justify-content:${props => props.justify || 'flex-start'};
  height: ${props => height * props.factor};
  padding:10;
  width:${width * .9};
`

export const FixedWidthContainer = styled.View`
  width:${props => width * props.percent};
  justify-content:${props => props.justify || 'flex-end'};
  align-items: center;
  margin-top:${props => props.marginTop || 0};
  background-color:${props => props.bckgColor ||'transparent'};
  padding-top:7.5;
  padding-bottom:7.5;
  border-radius:${props => props.circle ? 40 : 0};
`
export const BorderedFixedWidth = styled(FixedWidthContainer)`
  align-items:flex-start;
  border-bottom-color: lightgrey;
  border-bottom-width: 1.5;
  padding-left: 15;
  padding-top: 15;
  padding-bottom: 15;
`
export const Row = styled.View`
  align-self:stretch;
  flex-direction:row;
  justify-content:${props => props.justify};
`

export const BackgroundImage = styled.Image`
  height:${height};
  width:${width};
`