// import { groupsConstraints } from '../Helper/validateGroupForm';

const defaultSettings = {
  shippingPoint: '',
  breed: '',
  registered: false,
  breedReg: '',
  age: '',
  weight: '',
  birthWeight: '',
  number: '',
  origin: '',
  vaccinations: '',
  horns: false,
  feed: '',
  scrote: '',
  delivery: '',
  price: '',
  payment: ''
};

export const bullConfig = currentSettings => {

  
  const bullSettings = currentSettings || defaultSettings;

  return {
    staticConfig: true,
    initialState: {
      ...bullSettings,
    },
    extraProps: {
      message: 'Send Form'
    },
    formConfig:[{
      defaultValue: bullSettings.shippingPoint,
      el: 'field',
      field: 'shippingPoint',
      label: 'Shipping Point',
    },{
      defaultValue: bullSettings.breed,
      el: 'field',
      field: 'breed',
      label: 'Breed(s)',
    },
    {
      defaultValue: bullSettings.registered,
      el: 'switch',
      field: 'registered',
      label: 'Check if registered',
    },
    {
      defaultValue: bullSettings.breedReg,
      field: 'breedReg',
      el: 'field',
      label: 'Breed Registry',
    },
    {
      defaultValue: bullSettings.age,
      el: 'field',
      field: 'age',
      label: 'Age',
    },
    {
      defaultValue: bullSettings.weight,
      el: 'field',
      field: 'weight',
      label: 'weight',
    },
    {
      defaultValue: bullSettings.birthWeight,
      el: 'field',
      field: 'birthWeight',
      label: 'Birth Weight',
    },
    {
      defaultValue: bullSettings.number,
      el: 'field',
      field: 'number',
      label: 'Number of Sale',
    },
    // {
    //   field: 'all',
    //   el: 'select',
    //   templateOptions: {
    //       label: 'Sell part or all',
    //       options: [{
    //           name:'any number',
    //           value: 'any number'
    //         },{
    //           name: 'load lots',
    //           value: 'load lots'
    //         },{
    //           name:'buyer takes all',
    //           value:'buyer takes all'
    //         },{
    //           name:'see comment below',
    //           value:'see comment below'}],
    //       required: false
    //   }
    // },
    {
      defaultValue: bullSettings.origin,
      field: 'origin',
      el: 'field',
      label: 'Origin ex. Native, South Dakota, etc. ',
    },
    // {
    //   field: 'frame',
    //   el: 'select',
    //   templateOptions: {
    //     label: 'Frame',
    //     options: [{
    //       name:'small',
    //       value:'small'
    //       },
    //       {
    //       name:'small to medium',
    //       value: 'small to medium'
    //       },
    //       {
    //       name:'medium',
    //       value: 'medium'
    //       },
    //       {
    //        name:'medium to large',
    //        value: 'medium to large' 
    //       },
    //       {
    //       name:'large',
    //       value:'large'
    //              }],
    //     required: false
    //   }
    // },
    // {
    //   field: 'condition',
    //   el: 'select',
    //   templateOptions: {
    //       label: 'Condition',
    //       options: [{
    //                 name:'thin',
    //                 value:'thin'
    //                 },
    //                 {
    //                 name:'moderate flesh',
    //                 value:'moderate flesh'
    //                 },
    //                 {
    //                 name:'fleshy',
    //                 value:'fleshy'
    //                }],
    //       required: false
    //   }
    // },
    {
      defaultValue: bullSettings.vacc,
      el: 'field',
      field: 'vacc',
      label: 'Vaccinations,etc.',
    },
    {
      defaultValue: bullSettings.horns,
      el: 'switch',
      field: 'horns',
      label: 'Horns',
    },
    {
      field: 'feed',
      el: 'field',
      label: 'type of pasture/feed',
    },
    // {
    //   field: 'fert',
    //   el: 'select',
    //   label: 'Fertility',
    //   templateOptions: {
    //     options: [{
    //       name:'tested fertile',
    //       value:'tested fertile'
    //       },
    //       {
    //       name: 'will gurantee fertile',
    //       value: 'will gurantee fertile'
    //       },
    //       {
    //       name:'not tested',
    //       value: 'not tested'
    //       },
    //       {
    //       name:'other...see comments below',
    //       value:'other...see comments below'
    //              }],
    //     required: true
    //   }
    // },
    {
      field: 'scrote',
      el: 'field',
      label: 'Scrotal Circumference',
    },{
      field: 'delivery',
      el: 'field',
      label: 'Delivery Date',
    },
    {
      field: 'price',
      el: 'field',
      label: 'Price',
    },
    // {
    //   field: 'negoc',
    //   el: 'select',
    //   templateOptions: {
    //       label: 'If Priced?',
    //       options: [{
    //                 name:'negotiable',
    //                 value: 'negotiable'
    //                 },{
    //                 name: 'firm',
    //                 value: 'firm'
    //                 }],
    //       required: false
    //   }
    // },
    {
      field: 'payment',
      el: 'field',
      label: 'Payment Terms',
    }
    // {
    //   field: 'pictures',
    //   el: 'field',
    //   templateOptions: {
    //       el: 'file',
    //       label: 'Pictures',
    //       required: false
    //   }
    // },
    // {
    //   field: 'comments',
    //   el: 'textarea',
    //   templateOptions: {
    //       placeholder: 'Comments or Additional Info',
    //       rows: 4,
    //       required: false
    //   }
    // }
    ]
  };
}
