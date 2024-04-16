import Form from './Form';

export default function Education() {
  return (
    <div>
      <h2>Education</h2>
      <Form 
        formName="education"
        fields={[
          {
            name: 'educationTitle',
            type: 'text',
            value: '[Name of the school or university]',
          },
          {
            name: 'educationDescription',
            type: 'text',
            value: '[Degree or description of the curriculum]',
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
        ]}
      
      />
    </div>
  )
}