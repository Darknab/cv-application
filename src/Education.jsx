import Form from './Form';
import { AddButton, DeleteButton } from './Buttons';
import { useState } from 'react';

const educationFields = [
  {
    name: 'educationTitle',
    type: 'text',
    value: '[Name of the school or university]',
  },
  {
    name: 'educationDescription',
    type: 'text',
    value: '[Degree or certification]',
  },
  {
    name: 'yearStart',
    type: 'select',
    value: '[start]',
  },
  {
    name: 'yearEnd',
    type: 'select',
    value: '[end]',
  }
]
let key = 0;
function incrementKey() {
  key += 1;
  return key;
}
export default function Education() {
  const [ forms, setForms ] = useState([<Form key={0} formName="education" fields={educationFields}/>])
  function addForm() {

    setForms([
      ...forms,
      <Form key={incrementKey()} formName="education" fields={educationFields}/>
    ])
  }

  return (
    <div>
      <h2>Education</h2>
      {forms.map((form, index) => {
        return <div key={index}>
          {form}
          <DeleteButton onClick={() => {
            setForms(
              forms.filter(f => f.key !== form.key)
            )
          }} />
          </div>
      })}
      <AddButton onClick={addForm} />
    </div>
  )
}