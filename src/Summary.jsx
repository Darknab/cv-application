import Form from "./Form";

export default function Summary() {
  return (
    <>
      <h2>Summary</h2>
      <Form 
        isTextArea={true}
        formName='summary'
        fields={[
          {
            name: 'summary',
            type: 'textarea',
            value: 'talk about you in a little paragraph of approximatively 100 words',
          }
        ]}
      />
    </>
  );
}