import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StyledTitle } from './src/Components/Utility/Text';
import { DropdownMenu } from './src/Components/Dropdown';
import { Container, InnerContent } from './src/Components/Layout';
import { MemoryRouter as Router, Route } from 'react-router-native';
import createStore from './src/Store/store.config.js';
import { BullForm } from './src/Components/Forms/components/bullForm';


const routes = (
  <Route path='/bulls' component={BullForm} />
)
export default class App extends Component{

  render(){
    return (
      <Provider store={createStore(() => ({auth: {isLoading: false}}))}>
        <Router routes={routes}>
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
        </Router>
      </Provider>
    );
  }
}