function getYears(limit = 1950 ) {
  const date = new Date();
  const year = date.getFullYear();
  let result = [];
  for (let i = year ; i >= limit ; i--) {
    result.push(i);
  }
  return result;
}

const years = getYears();

function Select({ prefix, name }) {
  return (
    <label>{prefix}
      <select name={name}>
        {years.map(year => {
          return <option key={year} value={year}>{year}</option>
        })
        }
      </select>
  </label>
  )
}

export default function Input({ type, name, placeholder, cols, rows }) {
  if (type === 'textarea') {
    return (
      <label>
        <textarea name={name} placeholder={placeholder} cols={cols} rows={rows}></textarea>
      </label>
    );
  } else if (type === 'select') {
    let prefix;

    if (name === 'yearStart') {
      prefix = 'From ';
    } else if (name === 'yearEnd') {
      prefix = 'To ';
    }
    return <Select prefix={prefix} name={name} />
  } else  {
    return (
      <label>
        <input type={type} name={name} placeholder={placeholder} />
      </label>
    );
  };
}