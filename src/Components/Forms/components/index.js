import React from 'react';
import { StyledTitle, FieldLabel } from '../../Utility/Text';
import { StyledTextInput, BottomBorderView } from './formElements';
import { Row, FixedWidthContainer } from '../../Layout';
import { View, Switch } from 'react-native';


export const FullTextField = props => { 

  const {
    defaultVal,
    handleChange,
    keyBrdType,
    label,
    placeholder,
    title,
    value,
  } = props;

  return (
    <View>
      <StyledTitle>{title}</StyledTitle>
        <BottomBorderView withBorder>
          <FieldLabel>{label}</FieldLabel>
          <StyledTextInput
            autoFocus={true}
            defaultValue={defaultVal}
            keyboardType={keyBrdType}
            onChange={(e) => handleChange(e.nativeEvent.text, 'contract')}
            value={value}
          />
        </BottomBorderView>
    </View>
  )
};

export const InlineTextFields = props => {
  
  const {
    defaultVal,
    field,
    handleChange,
    keyBrdType,
    label,
    placeholder,
    title,
    value,
  } = props;

  return (
    <Row justify='space-between'>
      <FixedWidthContainer percent={.35}>
        <BottomBorderView withBorder marginTop={20}>
          <FieldLabel>{label.A}</FieldLabel>
          <StyledTextInput 
            defaultValue={defaultVal.A}
            value={value.A}
            onChange={(e) => handleChange(e.nativeEvent.text, field.A)}
          />
        </BottomBorderView>
      </FixedWidthContainer>
      <FixedWidthContainer percent={.35}>
        <BottomBorderView withBorder>
          <FieldLabel>{label.B}</FieldLabel>
          <StyledTextInput 
            defaultValue={defaultVal.B}
            value={value.B}
            onChange={(e) => handleChange(e.nativeEvent.text, field.B)}
          />
        </BottomBorderView>
      </FixedWidthContainer>
    </Row>
  )
};

export const SwitchField = props => {

  const {
    defaultVal,
    field,
    handleBoolean,
    label,
    title,
    value,
  } = props;

  return (
    <View>
      <StyledTitle>{title}</StyledTitle>
      <Row justify='space-between'>
        <FieldLabel>{label}</FieldLabel>
        <Switch 
          onValueChange={handleBoolean}
          onTintColor='papayawhip'
          value={value}
        />
      </Row> 
    </View>
  )

}