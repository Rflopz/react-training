import React, { useState, useEffect } from 'react'
import { Card } from '../Shared/components/Card'
import { Button, Input } from '../Shared/components'
import { fieldsList, isFieldValid } from './Form.services'

import "./Form.styles.css"

const Form = () => {
  const [canSuscribe, setCanSuscribe] = useState(false)
  const [fieldList, setFieldList] = useState(fieldsList)

  const onFieldChange = ( (e) => {
    const newFieldList = fieldList.map( (field) => {
      if (field.name === e.target.name)
        return { ...field, value: e.target.value };
      return field
    })
    setFieldList(newFieldList)
    setCanSuscribe(
      newFieldList.every( (field) => isFieldValid(field.value) )
    )
  } )

  const clearForm = ( (e) => {
    setFieldList(fieldsList)
  })

  return (
    <Card width={"50%"}>
      <div className="form">
        {fieldList.map((field) => (
          <Input key={field.name} label={field.label} {...field} onChange={onFieldChange}/>)
        )}
      </div>
      <div className="form-actions">
        <Button title="Clear" onClick={clearForm} className="clear-button"/>
        <Button title="Subscribe" disabled={!canSuscribe}/>
      </div>
    </Card>
  )
}

export default Form