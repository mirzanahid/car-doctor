

const InputField = ({ type = 'text', value, onChange, placeholder, name, label, className, classNameInput })  => {
  return (
    <div className={className}>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={name}
      className={classNameInput}
    />
  </div>
  )
}

export default InputField