import React from 'react';
import { Text, View } from 'react-native';
import { Link, Route } from 'react-router-native';
import { StyledText } from '../Utility/Text';
import { BorderedFixedWidth } from '../Layout';
import styled from 'styled-components';

{/*<BorderedFixedWidth
          percent={.8}
        >
          <StyledText 
            size={20}
            color='#4286f4'
          >{title}
          </StyledText>
        </BorderedFixedWidth>*/}

export const DropdownTile = (props) => {
  const {
    title,
    url,
    component
  } = props;
  
  return(
    <View>
      <Link to={url} replace>
        <Text>{title}</Text>
      </Link>
      <Route path={url} component={component} />
    </View>
  )
}