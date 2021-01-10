import { Card, Container, Divider, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
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
});

const Cart = () => {
  const styles = useStyle();
  const addedProducts = useSelector(
    (state) => state.shoppingCart.addedProducts
  );
  console.log(addedProducts);
  return (
    <Container className={styles.root}>
      <Card className={styles.card_wrapper}>
        {addedProducts.length !== 0 ? (
          <>
            <div className={styles.cart_product_wrapper}>
              <img
                src={addedProducts[0].imageUrl}
                className={styles.cart_product_image}
              />
              <h4>Name of Product</h4>
              <h4>Available</h4>
              <h4>Price</h4>
            </div>
            <Divider />
            <div>second product</div>
          </>
        ) : null}
      </Card>
    </Container>
  );
};

export default Cart;
