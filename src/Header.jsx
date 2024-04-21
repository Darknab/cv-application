import Form from './Form';
import './App.css';

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Form
          formName="title"
          paragraph="h1"
          fields={[
            {
              name: 'firstName',
              type: 'text',
              value: '[First Name]',
              classes: 'first-name',
            },
            {
              name: 'lastName',
              type: 'text',
              value: '[Last Name]',
              classes: 'last-name',
            },
            {
              name: 'position',
              type: 'text',
              value: '[Position]',
              classes: 'position',
            },
          ]}
        />
      </div>
      <div className="container">
        <Form
          formName="contact"
          fields={[
            {
              name: 'phone',
              type: 'tel',
              value: '[XXXX XXX XXX]',
              svg: <><i className="fa-solid fa-phone rounded"></i> <br/></>,
              classes: 'contact-field',
            },
            {
              name: 'email',
              type: 'email',
              value: '[example@mail.com]',
              svg: <><i className="fa-solid fa-envelope rounded"></i> <br/></>,
              classes: 'contact-field',
            },
            {
              name: 'address',
              type: 'text',
              value: '[Your street address here]',
              svg: <><i className="fa-solid fa-house rounded"></i> <br/></>,
              classes: 'contact-field',
            },
          ]}
        />
      </div>
    </div>
  )
}