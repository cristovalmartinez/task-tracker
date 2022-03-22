import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  text: "Hello",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
