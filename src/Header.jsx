import Form from './Form';

export default function Header() {
  return (
    <div>
      <Form
        formName="title"
        fields={[
          {
            name: 'firstName',
            type: 'text',
            value: '[First Name]',
          },
          {
            name: 'lastName',
            type: 'text',
            value: '[Last Name]',
          },
          {
            name: 'position',
            type: 'text',
            value: '[Position]',
          },
        ]}
      />
      <Form
        formName="contact"
        fields={[
          {
            name: 'phone',
            type: 'tel',
            value: '[XXXX XXX XXX]',
          },
          {
            name: 'email',
            type: 'email',
            value: '[example@mail.com]',
          },
          {
            name: 'address',
            type: 'text',
            value: '[Your street address here]',
          },
        ]}
      />
    </div>
  )
}