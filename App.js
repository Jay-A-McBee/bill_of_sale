import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StyledTitle } from './src/Components/Utility/Text';
import { DropdownMenu } from './src/Components/Dropdown';
import { Container, InnerContent } from './src/Components/Layout';

export default class App extends React.Component {
  render() {
    return (
      <Container
        justify='space-around'
      > 
        <InnerContent
          factor={.35}
          justify='center'
          alignItems='center'
        >
          <StyledTitle>Bill of Sale</StyledTitle>
        </InnerContent>
        <InnerContent
          factor={.35}
          alignItems='center'
          justify='flex-start'
        >
          <DropdownMenu/>
        </InnerContent>
      </Container>
    );
  }
}