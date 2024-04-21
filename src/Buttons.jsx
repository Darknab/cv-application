export function BackButton({ onClick }) {
  return <button type="button" onClick={onClick} ><i className="fa-solid fa-arrow-left-long"></i></button>
}


export function EditButton({ onClick }) {
  return <button type="button" onClick={onClick} ><i className="fa-solid fa-pencil"></i></button>
}

export function AddButton({ onClick }) {
  return <button onClick={onClick}><i className="fa-solid fa-plus"></i></button>
}

export function DeleteButton({ onClick }) {
  return <button onClick={onClick}><i className="fa-solid fa-trash-can"></i></button>
}