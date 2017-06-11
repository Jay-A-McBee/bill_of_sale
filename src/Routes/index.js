import React from 'react';
import { Route } from 'react-router-native';
import { BullForm } from '../Components/Forms/components/bullForm';


export const Routes = () => {
  return (
    <Route path = '/bulls' component={BullForm} />  
  )
};