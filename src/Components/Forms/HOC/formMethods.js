import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validate } from 'validate.js'
import _ from 'lodash';

/**
 *creates a form configuration based on an object - can handle properties nested 1 deep
 *@param {dataObj} - server response or initial form state object with added validatorConstraints property
 *@example <caption>dataObj example:</caption>
 *{
 *  payments:{
 *    stripe:true, 
 *    paypal:false
 *  }
 *  validatorConstraints:{
 *    payments:{
 *      presence: true
 *    }
 *  }
 *}
 *@param {handlChangeFn} - handles form changes for text, select etc.
 *@param {handleBooleanFn} - handles form changes for radio button, check box
 *@returns {Object} - with properties initialState, formConfig, validatorConstraints
 */
  const dataObjToFormConfig = function(dataObj){
    
    let {
      validatorConstraints, 
      ...rest
    } = dataObj;
    
    const {
      handleChange,
      handleBoolean
    } = this;
    
    const [fields, baseConfig] = [Object.keys({...rest}), {formConfig:{}}];
    
    const finalConfig = fields.reduce( (acc, field) => {
      
    const [type, val] = [typeof dataObj[field], dataObj[field]];

    const indexOfCapital = field.match(/[A-Z]/);
    
    const label = !!indexOfCapital ?
      `${field[0].toUpperCase()}${field.slice(1,indexOfCapital.index)} ${field.slice(indexOfCapital.index, indexOfCapital.index+1).toUpperCase()}${field.slice(indexOfCapital.index+1)}` :
      `${field[0].toUpperCase()}${field.slice(1)}`;
    
    if(type === 'string' || type === 'number'){
      acc.formConfig[field] = {
        el: 'field',
        label: label,
        defaultValue: val,
        field: field,
        handleChange: handleChange
      }
    }else if(type === 'object'){
      acc.formConfig[field] = {
        el: 'check',
        label: label,
        field: field,
        handleBoolean: handleBoolean,
        options: Object.keys(val).reduce( (acc, key) => {
          acc.push({
            defaultChecked: val[key], 
            title: `${key[0].toUpperCase()}${key.substring(1)}`,
            subField: key
          });
          return acc;
        },[])
      }
    }else if(type === 'boolean'){
      acc.formConfig[field] = {
        el: 'check',
        label: label,
        defaultValue: val,
        handleBoolean: handleBoolean,
        field: field,
        defaultChecked: val,
      }
    }
    return acc;
  },baseConfig);
  
  finalConfig.initialState = {...rest};
  finalConfig.validateConstraints = validatorConstraints;
  return finalConfig;
};
  /**
   *HOC that decorates a form template with all necessary methods - handleChange, handleBoolean, submit
   *@param {FormTemplate} - can be a dumb form component complete with JSX markup(ex.login-page.js) or the StandardForm component(ex. settingsForm.js)
   *@param {actionEntity} - actions objects for submitting the form
   *@param {config} - can be the initial form state(ex.auth-page.js), a prepopulated object from server response(ex. settingsForm.js), or an array of
   *form config objects(ex. groupsForm.config.js)
   *must also have a validatorConstraints property with an object to configure validate.js
   *@param {stateSlice} - always an array of strings - joined and eval'ed to get isFetching, success, and errors state
   *@example <caption>stateSlice example:</caption>
   *['auth','login']
   *will be evaluated in mapState as state.auth.login.isFetching and state.auth.login.errors
   *@param {extraProps} - object to pass extra props to FormTemplate if necessary ex.button text
   *@example <caption>extraProps example:</caption>
   *{message: 'Save Settings', loadingMessage:'Saving...'}
   *@returns {Class} DecoratedForm - connected component with standard form methods
   */
export function FormMethods(FormTemplate, actionEntity, config, stateSlice, extraProps){
  class DecoratedForm extends Component{
    constructor(props){
      super()
      this.state={
        form: {},
        errors: {}
      }
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleBoolean = this.handleBoolean.bind(this);
      // this.getGeometry = this.getGeometry.bind(this);
      this.passMethodsToStaticConfig = this.passMethodsToStaticConfig.bind(this);
    }

    componentWillMount(){
      const { 
        staticConfig
      } = config;
      
      let initialState,
        formConfig,
        validateConstraints

      
      if(!!staticConfig){
        initialState = config.initialState;
        formConfig = !!config.formConfig ? config.formConfig.map(this.passMethodsToStaticConfig): null;
        validateConstraints = config.validateConstraints;
      }else{
        const builtConfig = dataObjToFormConfig.call(this,config);
        [ 
          initialState, 
          formConfig, 
          validateConstraints 
        ] = [builtConfig.initialState, builtConfig.formConfig,builtConfig.validateConstraints];
      }
      
      this.setState({
        form:{
          ...initialState
        },
        formConfig,
        validateConstraints,
      })
    }

    // componentWillUnmount(){
    //   const { reset } = this.props;
    //   if(reset) reset();
    // }

    handleChange(val, field){
      if(!val){
        this.setState({
          form:{
            ...this.state.form,
            [field]: null
          }
        })
      }else{
        this.setState({
          form: {
            ...this.state.form,
            [field]: val
          },
          errors:{
            ...this.state.errors,
            [field]:null
          }
        })
      }
    }

    handleBoolean(...args){
      let [prop, subProp] = args;
      
      if(args.length > 1){
        this.setState({
          form:{
            ...this.state.form,
            [prop]:{
              ...this.state.form[prop],
              [subProp]: !this.state.form[prop][subProp]
            }
          },
          errors:{
            ...this.state.errors,
            [prop]:null
          }
        })
      }else{
        this.setState({
          form: {
            ...this.state.form,
            [prop]: !this.state.form[prop]
          },
          errors:{
            ...this.state.errors,
            [prop]:null
          }
        })
      }
    }

    // getGeometry(googleObj, field){

    //   const {
    //     formatted_address:formattedAddress,
    //     geometry:{
    //       location:{lat,lng}
    //     }
    //   } = googleObj;
      
    //   const campusLocation = {
    //     formattedAddress,
    //     latitude: lat(),
    //     longitude: lng()
    //   }
     
    //   this.setState({
    //     form: {
    //       ...this.state.form,
    //       [field]:[...this.state.form[field], campusLocation],
    //     }
    //   })
    // }

    submit(){
      const errors = validate(this.state.form, this.state.validateConstraints);
     
      if(errors){
        this.setState({ errors });
        return;
      }
     
      this.props.submit(this.state.form);
    }

    passMethodsToStaticConfig(configObj, idx){
      
      if(configObj.el === 'switch'){
        return {
          ...configObj,
          handleBoolean:this.handleBoolean
        }
      }else if(configObj.el === 'field' || configObj.el === 'splitField'){
        return {
          ...configObj,
          handleChange:this.handleChange
        }
      }
    }

    render(){
      let errors = Object.assign(this.state.errors, this.props.errors);
      const {
        formConfig
      } = this.state;
      
      const {
        isFetching,
        success
      } = this.props;

      return(
        <FormTemplate
          handleChange={this.handleChange}
          handleBoolean={this.handleBoolean}
          getGeometry={this.getGeometry}
          submit={this.submit}
          isFetching={isFetching}
          errors={errors}
          success={success}
          finalConfig={formConfig}
          form={this.state.form}
          {...extraProps}
        />
      )
    }
  }
  
  const mapStateToProps = (state) => {
    let exactSlice = stateSlice.length > 1 ? stateSlice.join('.') : stateSlice[0];
    return {
      isFetching: eval(`state.${exactSlice}.isFetching`),
      errors: eval(`state.${exactSlice}.errors`),
      success: eval(`state.${exactSlice}.success`)
    }
  }

  return connect(mapStateToProps,{
    submit:actionEntity.request,
    reset:actionEntity.reset
  })(DecoratedForm)
}