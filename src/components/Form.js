import Input from './Input';
import { MdNavigateNext } from 'react-icons/md';

function Form() {
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
          pattern="[\+]*\d{1,2}[\s]*\(*\d{3}\)*[\s]*\d{3}[\s\-]*\d{4}"
          type="tel"
        />
        <Input
          label="Password"
          placeholder="••••••••"
          type="password"
        />
        <Input
          label="Confirm Password"
          placeholder="••••••••"
          type="password"
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
