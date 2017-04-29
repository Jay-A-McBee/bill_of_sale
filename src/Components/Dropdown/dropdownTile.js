import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';
import { StyledText } from '../Utility/Text';
import { BorderedFixedWidth } from '../Layout';
import styled from 'styled-components';

export const DropdownTile = (props) => {
  const {
    title,
    url
  } = props;

  return(
    <Link to={url}>
      <BorderedFixedWidth
        percent={.8}
      >
        <StyledText 
          size={20}
          color='#4286f4'
        >{title}
        </StyledText>
      </BorderedFixedWidth>
    </Link>
  )
}
