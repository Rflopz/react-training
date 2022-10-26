export const fieldsList = [
  {
    name: "name",
    label: "User first name",
    type: "text",
  },
  {
    name: "lastname",
    label: "User lastname",
    type: "text",
  },
  {
    name: "birth date",
    label: "User birthdate",
    type: "date",
  },
  {
    name: "country",
    label: "Country where the user is living",
    type: "text",
  },
  {
    name: "password",
    label: "User password",
    type: "password"
  },
]

export const isFieldValid = (value) => {
  // here should be the field validations 
}

export const handleSubmitForm = () => {
  // don't focus on submit functionality yet.
}