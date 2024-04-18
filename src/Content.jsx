import { useState } from 'react';
import Form from './Form';
import { DeleteButton, AddButton } from './Buttons';

let key = 0;
function incrementKey() {
  key += 1;
  return key;
}

export default function Content ({ fields, formName, list = null }) {
  const [ forms, setForms ] = useState([<Form key={0} formName={formName} fields={fields} />])

  function addForm() {
    setForms([
      ...forms, 
      <Form key={incrementKey()} formName={formName} fields={fields} />
    ]);
  }

  return (
    <>
      {forms.map((form, index) => {
        return <div key={index}>
          {form}
          <DeleteButton onClick={() => {
            setForms(
              forms.filter(f => f.key !== form.key)
            )
          }} />
          {list}
        </div>
      })}
      <AddButton onClick={addForm} />
    </>
  )
}