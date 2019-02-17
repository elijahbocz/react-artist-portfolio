import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 0;
  margin-top: 1.3rem;
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  letter-spacing: 0.1rem;
  

  .form-outline {
    margin: 0 10rem;
    background: #fcfff5;
    color: #193441;
    padding: 0.25rem 1rem 0.25rem 1rem;
    border-radius: 6px;
  }

  .form-header {
    padding: 1rem;
  }

  .form-item {
    font-size: 14px;
    padding-bottom: 1rem;
  }

  textarea {
    width: 250px;
    height: 75px;
  }

  .Contact-button {
    background: #fcfff5;
    color: #193441;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .Contact-button:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 750px) {
    .form-outline {
      margin: 0 2rem;
    }
  }
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => this.props.history.push('/success'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit} className="App-form">
        <div className="form-outline">
          <p className="form-header">Get in touch with me!</p>
          <p className="contact-separator" />
          <p className="form-item">
            <label>
              <p>Your Name: </p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p className="form-item">
            <label>
              <p>Your Email: </p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p className="form-item">
            <label>
              <p>Message: </p>
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit" className="Contact-button">
              Send
            </button>
          </p>
        </div>
      </StyledForm>
    );
  }
}

export default ContactForm;
