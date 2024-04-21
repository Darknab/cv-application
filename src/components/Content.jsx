import { useState } from 'react';
import Form from './Form';
import { DeleteButton, AddButton } from './Buttons';
import { PropTypes } from "prop-types";

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
      <AddButton onClick={addForm} />
      {forms.map((form, index) => {
        return <div key={index}>
          {form}
          <div className="btn-group">
            <DeleteButton onClick={() => {
            setForms(
                forms.filter(f => f.key !== form.key)
              )
            }} />
          </div>
          {list}
        </div>
      })}
    </>
  )
}

Content.propTypes = {
  fields: PropTypes.object.isRequired,
  formName: PropTypes.string.isRequired,
  list: PropTypes.component.isRequired
}