export const fieldsList = [
  {
    name: "name",
    label: "User first name",
    type: "text",
    hasvalue:false,
  },
  {
    name: "lastname",
    label: "User lastname",
    type: "text",
    hasvalue:false,
  },
  {
    name: "birthdate",
    label: "User birthdate",
    type: "date",
    hasvalue:false,
  },
  {
    name: "country",
    label: "Country where the user is living",
    type: "text",
    hasvalue:false,
  },
  {
    name: "password",
    label: "User password",
    type: "password",
    hasvalue:false,
  },
]

export const isFieldValid = (value) => {
  // here should be the field validations 
  return value.split(" ").join("").length >=1 && true;
}

export const handleSubmitForm = () => {
   alert('Felicidades Te has subscrito....')
}