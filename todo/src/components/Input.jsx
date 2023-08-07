const Input = (props) => {
    const { type = "text", placeholder, value, onChange, checked } = props;
  
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        checked={checked}
        
        onChange={(e) => onChange(e.target.value)}
      />
    );
  };
  
  export default Input;
  