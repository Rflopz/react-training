export const fieldsList = [
  {
    name: "name",
    label: "User first name",
    type: "text",
    value: '',
  },
  {
    name: "lastname",
    label: "User lastname",
    type: "text",
    value: '',
  },
  {
    name: "birth date",
    label: "User birthdate",
    type: "date",
    value: '',
  },
  {
    name: "country",
    label: "Country where the user is living",
    type: "text",
    value: '',
  },
  {
    name: "password",
    label: "User password",
    type: "password",
    value: '',
  },
]

export const isFieldValid = (value) => {
  return value.trim() ? true : false
}

export const handleSubmitForm = () => {
  // don't focus on submit functionality yet.
}