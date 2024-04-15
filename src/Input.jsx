export default function Input({ type, name, placeholder }) {
  return(
    <label>
      <input type={type} name={name} placeholder={placeholder} />
    </label>
  )
}