import { Link } from "react-router-dom";

function Button({ to, type = "button", className = "", onClick, children }) {
  if (to) {
    return (
      <Link to={`${to}`} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
}

export default Button;
