import { useState } from "react";
import Form from "./Form";
import { AddButton, DeleteButton } from "./Buttons";

const skillField = [
  {
    name: 'skill',
    type: 'textarea',
    value: 'Example: Strong orgazitionnal and time management skills',
    cols: '30',
    rows: '2',
  }
];
  
let key = 0;
function incrementKey() {
  key += 1;
  return key;
}

export default function Skills() {
  const [ forms, setForms ] = useState([<Form key={0} formName="skill" fields={skillField} />]);

  function addForm() {
    setForms([
      ...forms,
      <Form key={incrementKey()} formName="skill" fields={skillField}/>
    ])
  }

  return (
    <div>
      <h2>Skills</h2>
        <ul>
          {forms.map((form, index) => {
            return (
              <li key={index}>
                {form}
                <DeleteButton onClick={() => {
                  setForms(forms.filter(f => f.key !== form.key))
                }} />
              </li>
            )
          })}
        </ul>
        <AddButton onClick={addForm} />
    </div>
  );

}