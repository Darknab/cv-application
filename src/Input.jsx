export default function Input({ type, name, placeholder }) {
  if (type === 'textarea') {
    return (
      <label>
        <textarea name={name} placeholder={placeholder} cols="30" rows="10"></textarea>
      </label>
    );
  } else {
    return (
      <label>
        <input type={type} name={name} placeholder={placeholder} />
      </label>
    );
  };
}