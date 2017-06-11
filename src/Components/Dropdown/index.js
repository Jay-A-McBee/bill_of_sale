import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';
import { DropdownTile, RouteComponent } from './dropdownTile';
import { formTypes } from './formTypes.config';
import { FixedWidthContainer, InnerContent, Row } from '../Layout';
import styled from 'styled-components';

const { height } = Dimensions.get('window');

export class DropdownMenu extends Component{
  constructor(props){
    super()
    this.state={
      isOpen : false
    }
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(){
    this.setState( (state,props) => ({
      isOpen: !state.isOpen
    }))
  }

  render(){
    
    const {
      isOpen
    } = this.state;
    
    return(
        <FixedWidthContainer
          percent={.9}
        >
          {!isOpen ? (
            <TouchableOpacity
              style={{alignSelf:'stretch'}}
              onPress={this.toggleOpen}
            > 
              <Row
                justify='space-between'
              >
                <Text style={{textAlign:'left'}}>View Forms</Text>
                <Text>--></Text>
              </Row>
            </TouchableOpacity>
          ) : (
            <InnerContent
              factor={.35}
              alignItems='center'
            >
              <ScrollView>
                {formTypes.map( (props, idx) => (<DropdownTile key={idx} {...props} />))}
              </ScrollView>
            </InnerContent>
          )}
        </FixedWidthContainer>
      )
  }


}