import { useState } from "react"
import Input from "./Input";
import { BackButton, EditButton } from "./Buttons";

export default function Form({ formName, fields }) {
  const [ data, setData ] = useState(fields);
  const [ isEditing, setIsEditing ] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const values = [];
    fields.forEach(field => {

      if (formData.get(`${field.name}`) === '') {
        values.push(field)
      } else {
        const newField = {
          ...field,
          value: formData.get(`${field.name}`)
        }
        values.push(newField);
      }
    })
    setData(values);
    setIsEditing(false);
  }

  return (
    <div className={formName}>
      <form onSubmit={handleSubmit}>
        {isEditing ?
          <>
            {data.map(element => {
              return <Input key={element.name} type={element.type} name={element.name} placeholder={element.value} />
            })}
            <BackButton onClick={() => setIsEditing(false)} />
            <button type="submit">Save</button>
          </> :
          <>
            {data.map(element => {
              return <p key={element.name}>{element.value}</p>
            })}
            <EditButton onClick={() => setIsEditing(true)} />
          </>
        }
      </form>
    </div>
  );
}