import React from 'react';
import { Text } from 'react-native';
import { StandardForm } from '../HOC/formBuilder';
import { FormMethods } from '../HOC/formMethods';
import { bullConfig } from '../config/bull.config.js';

  const Form = FormMethods(StandardForm, {REQUEST: () => 'blah'}, bullConfig(), ['auth']);
export default class BullForm extends React.Component{
  render(){
  return(
    <Form />
  )
}
}
