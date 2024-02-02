import { useState } from 'react';
import './styles.css';

export const ControlledRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubscribeNewsletterChange = (event) => {
    setSubscribeNewsletter(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <>
      <h2>Controlled Registration Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="address-input">Address:</label>
        <textarea
          id="address-input"
          value={address}
          onChange={handleAddressChange}
        />

        <label htmlFor="phone-input">Phone Number:</label>
        <input
          id="phone-input"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />

        <div>
          <label htmlFor="subscribe-checkbox">Subscribe to Newsletter:</label>
          <input
            id="subscribe-checkbox"
            type="checkbox"
            checked={subscribeNewsletter}
            onChange={handleSubscribeNewsletterChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
