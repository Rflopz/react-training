import React, { useState, useEffect } from "react";
import { Card } from "../Shared/components/Card";
import { Button, Input } from "../Shared/components";
import { fieldsList, isFieldValid, handleSubmitForm } from "./Form.services";

import "./Form.styles.css";
const initialState = fieldsList.map((field) => ({
  ...field,
  isValid: false,
  value: "",
}));

const Form = () => {
  const [state, setState] = useState(initialState);
  const [disableButton, setdisableButton] = useState(true);

  useEffect(() => {
    setdisableButton(state.some((field) => !field.isValid));
    console.log(state.some((field) => !field.isValid));
  }, [state]); // Only re-run the effect if state changes

  const handleOnChange = (value, name) => {
    setState((nextState) => {
      return nextState.map((field) => {
        return field.name === name
          ? { ...field, value: value, isValid: isFieldValid(value) }
          : field;
      });
    });
  };
  const handleClearForm = () => {
    // reset form to initial state
    setState(initialState);
  };

  return (
    <Card width={"50%"}>
      <div className="form">
        {state?.map(({ name, label, type, value }) => (
          <Input
            label={label}
            name={name}
            type={type}
            key={name}
            value={value}
            onChange={handleOnChange}
          />
        ))}
      </div>
      <div className="form-actions">
        <Button title="Clear" className="clear" onClick={handleClearForm} />
        <Button
          title={`${!disableButton ? "R" : "Not r"}eady to send`}
          disabled={disableButton}
          onClick={handleSubmitForm}
        />
      </div>
    </Card>
  );
};

export default Form;
