import { useState } from "react";
import Form from "./Form";
import { AddButton, DeleteButton } from "./Buttons";

  
let key = 0;
function incrementKey() {
  key += 1;
  return key;
}

export default function List({ formName, fields}) {
  const [ forms, setForms ] = useState([<Form key={0} formName={formName} fields={fields} />]);

  function addForm() {
    setForms([
      ...forms,
      <Form key={incrementKey()} formName={formName} fields={fields} />
    ]);
  };

  return (
    <>
      <AddButton onClick={addForm} />
      <ul>
        {forms.map((form, index) => {
          return (
            <li key={index} >
              {form}
              <div className="btn-group">
                <DeleteButton onClick={() => {
                  setForms(forms.filter(f => f.key !== form.key))
                }} />
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}