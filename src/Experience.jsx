import Content from './Content';
import List from './List';

const experienceFields = [
  {
    name: 'experienceTitle',
    type: 'text',
    value: '[Role]',
  },
  {
    name: 'society',
    type: 'text',
    value: '[Society]',
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
  },
]

const taskFields = [
  {
    name: 'task',
    type: 'textarea',
    value: 'Short description of the task',
    cols: '30',
    rows: '2',
  }
]

export default function Experience() {
  return (
    <div>
      <h2>Proffessional Experience</h2>
      <Content 
        formName="experience" 
        fields={experienceFields}
        list={<List formName="task" fields={taskFields} />} />
      
    </div>
  )
}