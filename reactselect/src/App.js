import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {colourOptions} from './docs/data';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
]

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return(
    <Select
     options = {options} 
     closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
     />

  )
  
}
  



