import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

