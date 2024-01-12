import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </div>
  );
}

//all of these are not neccessary buh i ust had to put it because react was complaining about the prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
