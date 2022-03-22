import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    alert("we have clicked the button successfully");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};

// CSS in JS styling

// const headingStyle = {
//     color: 'green',
// }

Header.defaultProps = {
  title: "Task Tracker App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
