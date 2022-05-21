import camelCase from 'camelcase';

function Input(props) {
  const {
    label,
    placeholder,
    pattern,
    title,
    handleInput,
    id = camelCase(label),
    type = 'text',
    required = true,
  } = props;

  return (
    <div className="Input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        onInput={e => handleInput?.(e.target.value)}
      />
    </div>
  );
}

export default Input;
