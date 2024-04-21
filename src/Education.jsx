import Content from './Content';

const educationFields = [
  {
    name: 'educationTitle',
    type: 'text',
    value: '[Name of the school or university]',
  },
  {
    name: 'educationDescription',
    type: 'text',
    value: '[Degree or certification]',
  },
  {
    name: 'yearStart',
    type: 'select',
    value: '[start]',
  },
  {
    name: 'yearEnd',
    type: 'select',
    value: '[end]',
  }
]

export default function Education() {
  return (
    <div>
      <div className="container">
        <h2>Education</h2>
        <Content fields={educationFields} formName="education" />
      </div>
    </div>
  )
}