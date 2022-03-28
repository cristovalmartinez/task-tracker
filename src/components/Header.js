import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <Button
        color={showAdd ? "darkred" : "darkgreen"}
        text={showAdd ? "close" : "add"}
        onClick={onAdd}
      />
    </header>
  );
};

// CSS in JS styling

// const headingStyle = {
//     color: 'green',
// }

Header.defaultProps = {
  title: "Tracker App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
