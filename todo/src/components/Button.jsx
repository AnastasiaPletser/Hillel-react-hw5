const Button = (props) => {
    const { text, onClick, type = "button" } = props;
    return (
      <button type={type} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Button;
  