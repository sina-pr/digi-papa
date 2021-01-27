import {
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  makeStyles,
  Paper,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../slices/shoppingCart";

import ProductCounter from "../utils/productCounter";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100%",
    height: "fit-content",
  },
  card_wrapper: {
    display: "flex",
    flexDirection: "column",

    minHeight: 300,
    margin: 50,
    padding: 25,
  },
  cart_product_image: {
    width: 250,
    height: 250,
  },
  cart_product_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&>h4": {
      padding: 5,
    },
  },
  product_detail_wrapper: {
    padding: 50,
  },
});

const Cart = () => {
  const styles = useStyle();
  const addedProducts = useSelector(
    (state) => state.shoppingCart.addedProducts
  );
  const dispatch = useDispatch();
  const sendProduct = (p) => {
    dispatch(addToCart(p));
  };
  const removeProduct = (p) => {
    dispatch(removeFromCart(p));
  };
  let [sum, setSum] = useState(0);
  let sum1 = 0;
  useEffect(() => {
    for (let i in addedProducts) {
      sum1 = addedProducts[i].price * addedProducts[i].count + sum1;
    }
    setSum(sum1);
  }, [addedProducts]);
  return (
    <Container className={styles.root}>
      <Card className={styles.card_wrapper}>
        {addedProducts.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>whoops!</h4>
            <div style={{ padding: 50 }}>Your cart is empety :(</div>

            <Link to="/products">
              <Button color="secondary">Go back to store!</Button>
            </Link>
          </div>
        ) : (
          addedProducts.map((p) => {
            return (
              <>
                <div className={styles.cart_product_wrapper}>
                  <img src={p.imageUrl} className={styles.cart_product_image} />
                  <div className={styles.product_detail_wrapper}>
                    <h4>{p.name}</h4>
                    <ProductCounter
                      available={p.available}
                      value={p.count}
                      sendProduct={() => sendProduct(p)}
                    />
                    <h4>{p.price * p.count}$</h4>
                  </div>

                  <IconButton
                    size="lg"
                    onClick={() => removeProduct(p)}
                    color="secondary"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </div>
                <Divider />
              </>
            );
          })
        )}
        {addedProducts.length !== 0 ? (
          <>
            <div>{sum}+5$ for me KEKW</div>
            <Button color="primary">buy now!</Button>{" "}
          </>
        ) : null}
      </Card>
    </Container>
  );
};

export default Cart;
