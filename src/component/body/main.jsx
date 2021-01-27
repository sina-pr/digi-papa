import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  loading,
  decrimentOneProduct,
} from "../../slices/allProducts";
import { addToCart } from "../../slices/shoppingCart";
import { increment } from "../../slices/badgeNumber";
const useStyle = makeStyles({
  root: {
    marginTop: "20px",
    marginBottom: 10,
    minHeight: "100vh",
    height: "fit-content",
  },
  papers: {
    textAlign: "center",
    minHeight: "300px",
  },
  media: {
    height: 250,
    backgroundSize: "contain",
  },
});
/*

.........without redux!........

const Main = ({ sendToStore, fillterdPrice }) => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {products.map((p) => {
          {
            if (fillterdPrice[0] > p.price || fillterdPrice[1] < p.price)
              return null;
          }
          return (
            <Grid key={p.id} item sm={6} xs={12}>
              <Card>
                <CardMedia image={p.imageUrl} className={classes.media} />
                <CardContent>
                  <Typography variant="h5">{p.name}</Typography>
                  <Typography>{p.Description}</Typography>
                  <Typography variant="h6" color="secondary">
                    {p.price}$
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={sendToStore}
                  >
                    Add
                  </Button>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/products/${p.id}`}
                  >
                    <Button color="primary">More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
*/
const Main = ({ fillterdPrice }) => {
  const classes = useStyle();
  //dispatch....
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(loading());
  }, []);
  const sendToStore = (item) => {
    dispatch(addToCart(item));
  };
  const addToCounte = () => {
    dispatch(increment());
  };
  const handleDecrementOneProduct = (item) => {
    dispatch(decrimentOneProduct(item));
  };
  //selectors.....

  const products = useSelector((state) => state.allProducts.allProducts);
  const isLoading = useSelector((state) => state.allProducts.loading);
  const badgeNum = useSelector((state) => state.badgeNumber.count);

  console.log(badgeNum);
  //....
  if (isLoading) console.log("it's loading...");
  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {products.map((p) => {
          {
            if (fillterdPrice[0] > p.price || fillterdPrice[1] < p.price)
              return null;
          }
          return (
            <Grid key={p.id} item sm={6} xs={12}>
              <Card>
                <CardMedia image={p.imageUrl} className={classes.media} />
                <CardContent>
                  <Typography variant="h5">{p.name}</Typography>
                  <Typography>{p.Description}</Typography>
                  <Typography variant="h6" color="secondary">
                    {p.price}$
                  </Typography>
                  <Typography> {p.available} Remaining!</Typography>
                </CardContent>
                <CardActions>
                  {/*
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      sendToStore(p);
                      addToCounte();
                    }}
                  >
                    Add
                  </Button>*/}

                  {/*p.available == 0 ? (
                    <Button variant="outlined" disabled>
                      Add
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        sendToStore(p);
                        handleDecrementOneProduct(p);
                        addToCounte();
                      }}
                    >
                      Add
                    </Button>
                  )*/}

                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/products/${p.id}`}
                  >
                    <Button variant="outlined" color="primary">
                      More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Main;
