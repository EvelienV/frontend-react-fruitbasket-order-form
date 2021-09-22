import './Button.css';

function Button({type, text, action}) {
  return (
    <button
      className="button"
      type={type}
      onClick={action}
    > {text}
    </button>
  )
}

export default Button;