import React, { useState, useEffect } from 'react'
import { Card } from '../Shared/components/Card'
import { Button, Input } from '../Shared/components'
import { fieldsList, isFieldValid } from './Form.services'

import "./Form.styles.css"

const initialState = fieldsList.map(field=> ({...field, ready:false, value:""}))

const Form = () => {

  const [fieldsReady, setFieldsReady] = useState(false)
  const [listo, setListo] = useState('Not ready to send')
  const [fieldsForm, setFieldsForm] = useState(initialState)

  useEffect(()=> {
    setFieldsReady(true)
    setListo('Ready to send')
    fieldsForm.map((field) =>{
      if (!field.ready) {
        setFieldsReady(false)
        setListo('Not ready to send')
      }
    });
  }, [fieldsForm]);

  const handleOnChange = (e) => {
    const { name, value } = e.target
    console.log (`campo ${name} valor ${value}`)

    setFieldsForm(newFieldForms => {
      return newFieldForms.map(field => {
        return field.name===name ? {...field, value: value, ready : isFieldValid(value)}:field
      })
    })

    // setFieldsForm((current) => ({
    //   ...current, ...{[name]:value}
    //   }
    // ))
  }

  const handleClickClear = () => {
    console.log('Clear')
    setFieldsForm(initialState)
  }

  const handleClickSubmit = () => {
    window.alert("Send button clicked");
  }
   
  return (
    <Card width={"50%"}>
      <div className="form">
        
        {console.log (fieldsForm)}
        {fieldsForm.map((field) =>(
          <Input
            key={field.name} 
            name= {field.name}
            label={field.label} 
            value ={field.value}
            type={field.type}
            onChange = {handleOnChange}
            />
          ))
        }

      </div>
      <div className="form-actions">
        <Button title="Clear" handleClick={handleClickClear} className='button-cancel'/>
        <Button title={listo} handleClick={handleClickSubmit} isDisabled={!fieldsReady}/>
      </div>
    </Card>
  )
}

export default Form