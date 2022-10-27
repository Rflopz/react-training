import React, { useState, useEffect } from 'react'
import { Card } from '../Shared/components/Card'
import { Button, Input } from '../Shared/components'
import { fieldsList, isFieldValid } from './Form.services'

import "./Form.styles.css"

const Form = () => {

  const [statusSendButton, setStatusSendButton] = useState(false)
  const [listo, setListo] = useState('No listo')

  const [fieldsForm, setFieldsForm] = useState(
    fieldsList.map(field=> ({...field, ready:false, value:""})
  )) 

  

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

  useEffect(()=> {
    setStatusSendButton(true)
    setListo('Listo')
    fieldsForm.map((field) =>{
      if (!field.ready) {
        setStatusSendButton(false)
        setListo('No listo')
      }
    });
  }, [fieldsForm]);

  

  
  
  
  return (
    <Card width={"50%"}>
      <div className="form">
        <Input label="this is label" />
        {console.log (fieldsForm)}
        {fieldsForm.map((field) =>(
          <Input
            key={field.name} 
            name= {field.name}
            label={field.label} 
            type={field.type}
            onChange = {handleOnChange}
            />
          ))
        }

      </div>
      <div className="form-actions">
        <Button title="Clear"/>
        <Button title={listo} isDisabled={statusSendButton}/>
        
      </div>
    </Card>
  )
}

export default Form