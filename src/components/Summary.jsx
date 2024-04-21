import Form from "./Form";

export default function Summary() {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="container">
        <Form 
          isTextArea={true}
          fields={[
            {
              name: 'summary',
              type: 'textarea',
              value: 'Talk about you in a little paragraph of approximatively 100 words',
              cols: '60',
              rows: '10',
            }
          ]}
        />
      </div>
    </div>
  );
}