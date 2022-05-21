import { useState } from 'react';
import Input from './Input';
import { MdNavigateNext } from 'react-icons/md';

function Form() {
  const [password, setPassword] = useState('');
  const phoneNumberPattern = /[+]*\d{1,2}[\s]*\(*\d{3}\)*[\s]*\d{3}[\s-]*\d{4}/.source;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.source;
  const confirmPasswordPattern = `^${password}$`;

  return (
    <form>
      <div className="FormGrid">
        <Input
          label="First Name"
          placeholder="Satoshi"
          pattern="[a-zA-Z]*"
        />
        <Input
          label="Last Name"
          placeholder="Nakamoto"
          pattern="[a-zA-Z]*"
        />
        <Input
          label="Email"
          placeholder="satoshi@email.com"
          type="email"
        />
        <Input
          label="Phone Number"
          placeholder="+1 (555) 555-5555"
          pattern={phoneNumberPattern}
          type="tel"
        />
        <Input
          label="Password"
          placeholder="••••••••"
          type="password"
          pattern={passwordPattern}
          title="At least 1 uppercase, 1 lowercase and 1 number"
          handleInput={setPassword}
        />
        <Input
          label="Confirm Password"
          placeholder="••••••••"
          type="password"
          pattern={confirmPasswordPattern}
          title="Passwords must match"
        />
      </div>
      <button type="submit">
        Create account
        <MdNavigateNext />
      </button>
    </form>
  )
}

export default Form;
