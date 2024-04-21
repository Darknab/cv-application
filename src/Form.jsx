import { useState, Fragment } from "react";
import Input from "./Input";
import { BackButton, EditButton } from "./Buttons";
import './App.css';

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
            <div className="btn-group">
              <BackButton onClick={() => setIsEditing(false)} />
              <button type="submit"><i className="fa-regular fa-floppy-disk"></i></button>
            </div>
            {data.map(element => {
              return (
                <Fragment key={element.name}>
                <Input 
                type={element.type} 
                name={element.name} 
                placeholder={element.value}
                cols={element.cols}
                rows={element.rows}
                classes={element.classes} />
                {element.svg}
                </Fragment>
              )
            })}
          </> :
          <>
            <div className="btn-group">
              <EditButton onClick={() => setIsEditing(true)} />
            </div>
            {data.map(element => {
              if (element.name === 'yearStart') {
                return <p key={element.name}>From {element.value}</p>
              } else if (element.name === 'yearEnd') {
                return <p key={element.name}>To {element.value}</p>
              } else return (
                <Fragment key={element.name}>
                  <p className={element.classes}>{element.value}</p>
                  {element.svg}
                </Fragment>
              )
            })}
          </>
        }
      </form>
    </div>
  );
}