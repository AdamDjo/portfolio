import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormStyles = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;
export default function ContactForm() {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [message, SetMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zk67if2',
        'template_uwlhoik',
        form.current,
        '8NcMPLbPyJ7JbAUiL'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <FormStyles ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              type="text"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => SetMessage(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Send</button>
      </FormStyles>
    </div>
  );
}
