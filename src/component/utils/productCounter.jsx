import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  wrapper: {
    fontSize: 20,
    borderRadius: "12px",
    backgroundColor: "#e6e6e6 ",
    padding: 5,
    margin: 0,
    color: "#565dc9 ",
    paddingRight: 0,
  },
  btn: {
    color: "inherit",
    margin: 5,
    padding: 5,
    paddingRight: 10,
    textAlign: "center",
    borderRadius: "inherit",
    backgroundColor: "inherit",
    fontSize: "inherit",
    cursor: "pointer",
    border: "none",
    paddingRight: 0,
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      color: "black",
    },
  },
  btn_r: {},
});
const ProductCounter = ({ value, sendProduct, available }) => {
  const styles = useStyle();
  return (
    <span className={styles.wrapper}>
      <button className={styles.btn}>-</button>
      {console.log(available)}
      <span>{value}</span>
      {available ? (
        <button
          onClick={sendProduct}
          className={`${styles.btn} ${styles.btn_r}`}
        >
          +
        </button>
      ) : (
        <button disabled style={{}} className={`${styles.btn} ${styles.btn_r}`}>
          +
        </button>
      )}
    </span>
  );
};

export default ProductCounter;
