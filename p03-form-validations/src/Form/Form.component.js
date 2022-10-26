import React from 'react'
import { Card } from '../Shared/components/Card'
import { Button, Input } from '../Shared/components'
import { fieldsList } from './Form.services'

import "./Form.styles.css"

const Form = () => {
  
  return (
    <Card width={"50%"}>
      <div className="form">
        <Input label="this is label" />
      </div>
      <div className="form-actions">
        <Button title="Clear"/>
        <Button title="Subscribe"/>
      </div>
    </Card>
  )
}

export default Form