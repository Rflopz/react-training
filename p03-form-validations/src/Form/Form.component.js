import React, { useEffect, useState } from 'react'
import { Card } from '../Shared/components/Card'
import { Button, Input } from '../Shared/components'
import { fieldsList, handleSubmitForm, isFieldValid } from './Form.services'

import "./Form.styles.css"

const formData={
  name:'',
  lastname:'',
  birthdate: '',
  country:'',
  password:'',

}
const Form = () => {
  const [ formState, setFormState ] = useState(formData);
  const [hasValue, setHasValue]= useState(true);
  const [fieldsForm,setFieldForm ]=useState(fieldsList);
  useEffect(() => {
      if(fieldsList.length  === fieldsForm.filter((field)=>field.hasvalue).length) 
       {   
        setHasValue(false);
      }else{
        setHasValue(true);
      }

  }, [formState])
  
  const onInputChange = ({ target }) => {
    const { name, value,type } = target;
      setFormState({
        ...formState,
        [name]: value
      });

 

  const newList= fieldsForm.map((field)=>{
          if (field.name===name && isFieldValid(value)){
            const updateField={
              ...field,
              hasvalue:true,
            }
            return updateField
          }

          return field

    })

    setFieldForm(newList);
       
  }

  const handleForm=()=>{
    setFormState(formData);
    setFieldForm(fieldsList);
    setHasValue(true);
    handleSubmitForm();
    

  }

  const handleClear=()=>{
   setFormState(formData)
  }

  return (
    <Card width={"50%"}>
      {
       fieldsForm.map(({name,label,type})=>(
      
        <div className="form" key={name}>
        <Input label={label} type={type} name={name} value={formState[name]} ChangeValue={onInputChange} />
      </div>

       )) 
      }
      <div className="form-actions">
        <Button title="Clear" style={{color: "darkorange",  borderColor:'yellow'}} onclickButton={handleClear} />
        <Button title="Subscribe" disabled={hasValue} onclickButton={handleForm}/>
      </div>
    </Card>
  )
}

export default Form