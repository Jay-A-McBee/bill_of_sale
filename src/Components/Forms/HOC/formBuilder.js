import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
// import { Field } from 'redux-form';
// import { connect } from 'react-redux';
import {
  FullTextField,
  InlineTextField,
  SwitchField,
} from '../components';


//dumb form components
const elements = {
  field: FullTextField,
  splitField: InlineTextField,
  switch: SwitchField,
}


/**
 *Dumb component that uses standard bootstrap form elements to build a form from a config object
 *@param {props} - most important 'prop' is finalConfig - example below
 *@example <caption>finalConfig example:</caption>
 *[{
 * el:'field',
 * handleChange:handlechange,
 * errors:errors,
 * label: 'Email',
 * placeholder: 'Enter your email',
 * handleChange: someFn,
 * field: 'email'
 *},{
 * el:'field',
 * handleChange:handlechange,
 * errors:errors,
 * label: 'Password',
 * placeholder: 'Enter your password',
 * handleChange: someFn,
 * field: 'password'
 *}]
 *@returns {function} returns form markup based on config *should be decorated with FormMethods HOC
 */
export function StandardForm(props){
  
  const {
    isFetching,
    finalConfig,
    errors,
    submit,
    message,
    loadingMessage,
    form
  } = props;
  
  return(
    <View>
      {Object.keys(finalConfig).map( key => {
        const { el, ...rest } = finalConfig[key];
        return elements[el]({errors,form,...rest});
      })}
      <TouchableOpacity
        onPress={submit}
        disabled={isFetching}
      ><Text>{isFetching ? loadingMessage : message}</Text>
      </TouchableOpacity>
    </View>
  )
}