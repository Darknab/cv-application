import List from "./List";

const skillField = [
  {
    name: 'skill',
    type: 'textarea',
    value: 'Example: Strong orgazitionnal and time management skills',
    cols: '30',
    rows: '2',
  }
];
  
export default function Skills() {
  return (
    <div>
      <div className="container">
        <h2>Skills</h2>
        <List formName="skill" fields={skillField} />
      </div>
    </div>
  );
}