export function BackButton({ onClick }) {
  return <button type="button" onClick={onClick} >Back</button>
}


export function EditButton({ onClick }) {
  return <button type="button" onClick={onClick} >Edit</button>
}

export function AddButton({ onClick }) {
  return <button onClick={onClick}>Add</button>
}

export function DeleteButton({ onClick }) {
  return <button onClick={onClick} >Delete</button>
}