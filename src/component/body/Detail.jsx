import {
  CardMedia,
  Card,
  CardContent,
  Container,
  Typography,
  makeStyles,
  Divider,
  Button,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import SecurityIcon from "@material-ui/icons/Security";
import TuneIcon from "@material-ui/icons/Tune";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getProcutDetail, MoreAboutProducts } from "./../../products/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/shoppingCart";
import {
  getCurrentProduct,
  decrimentOneAvai,
} from "../../slices/currentProduct";
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    flex: 1,
  },
  card_content: {
    display: "flex",
  },

  card_media: {
    minHeight: 300,
    minWidth: 400,
    backgroundSize: "contain",
  },
  title_image_holder: {
    display: "flex",
  },
  text_holder: {
    alignSelf: "center",
    margin: 30,
    marginRight: 0,
  },
  bot_card_container: {
    display: "flex",
    margin: 10,
    marginTop: 5,
    alignItems: "center",
  },
  available_text_holder: {
    flex: 1,
  },
  price_txt: {
    marginRight: 30,
    fontSize: 25,
  },
  deli_card: {
    marginTop: 15,
  },
  deli_wrapper: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  deli_company_name: {
    margin: 0,
    padding: 0,
  },
  deli_company_rate: {
    margin: 0,
    padding: 0,
  },
  deli_company_rate_wrapper: {},
  deli_stars_holder: {
    display: "flex",
    alignItems: "center",
    marginTop: 3,
    marginLeft: 3,
  },
  tech_card: {
    marginTop: 14,
    marginBottom: 14,
  },
  tech_wrapper: {
    display: "flex",
    flexDirection: "column",
    margin: 14,
  },
  tech_title: {
    margin: 0,
    paddingBottom: 0,
  },
  tech_title_wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    borderBottom: "2px solid  #4949dd",
    width: "fit-content",
    borderRadius: 2,
  },
  tech_table: {
    margin: 50,
    "&>:nth-child(odd)": {
      backgroundColor: "#8c8f8f",
    },
    width: "80%",
    alignSelf: "center",
  },
}));
const Detail = () => {
  let { id } = useParams();
  const styles = useStyle();

  const dispatch = useDispatch();
  const sendToStore = (item) => {
    dispatch(addToCart(item));
    dispatch(decrimentOneAvai());
  };
  const product = useSelector((state) => state.currentProduct.product);
  useEffect(() => {
    dispatch(getCurrentProduct(id));
  }, []);
  console.log(product);
  return (
    <Container className={styles.root}>
      {product ? (
        <>
          <Card>
            <div className={styles.title_image_holder}>
              <CardMedia
                image={product.imageUrl}
                className={styles.card_media}
              />
              <div className={styles.text_holder}>
                <Typography variant="h5">{product.name}</Typography>
                <Divider />
                <Typography>{product.Description}</Typography>
              </div>
            </div>
            <div className={styles.bot_card_container}>
              <div className={styles.available_text_holder}>
                <Typography color="primary">
                  Available:{" "}
                  <Typography variant="p" color="secondary">
                    {product.available}
                  </Typography>
                </Typography>
              </div>
              <Typography color="secondary" className={styles.price_txt}>
                {product.price}$
              </Typography>
              {product.available > 0 ? (
                <Button
                  color="primary"
                  variant="contained"
                  className={styles.buy_btn}
                  onClick={() => {
                    sendToStore(product);
                  }}
                >
                  Add to cart!
                </Button>
              ) : (
                <Button
                  color="primary"
                  variant="contained"
                  disabled
                  className={styles.buy_btn}
                >
                  Add to cart!
                </Button>
              )}
            </div>
          </Card>
          <Card className={styles.deli_card}>
            <div className={styles.deli_wrapper}>
              <ShoppingCartIcon fontSize="large" color="primary" />
              <div className={styles.deli_company_name_wrapper}>
                <div style={{ flexDirection: "row", display: "flex" }}>
                  <LocalShippingIcon />
                  <h3 className={styles.deli_company_name}>Digi kala</h3>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <SecurityIcon color="secondary" />
                <h4>Infinitive Guarantee</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <h3>Rate</h3>
                <div className={styles.deli_stars_holder}>
                  <StarIcon style={{ color: "#FF9900" }} />
                  <StarIcon style={{ color: "#FF9900" }} />
                  <StarIcon style={{ color: "#FF9900" }} />
                  <StarHalfIcon style={{ color: "#FF9900" }} />
                  <StarBorderIcon style={{ color: "#FF9900" }} />
                </div>
              </div>
            </div>
          </Card>
          <Card className={styles.tech_card}>
            <div className={styles.tech_wrapper}>
              <div className={styles.tech_title_wrapper}>
                <TuneIcon color="primary" fontSize="large" />
                <h1 className={styles.tech_title}>Technical Specifications</h1>
              </div>
              <table className={styles.tech_table}>
                <tr>
                  <th>Memory Speed</th>
                  <th>8000 MHz</th>
                </tr>
                <tr>
                  <th>Graphics Coprocessor</th>
                  <th>NVIDIA GeForce GT</th>
                </tr>
                <tr>
                  <th>Chipset Brand</th>
                  <th>Lorer</th>
                </tr>
                <tr>
                  <th>Graphics Card Ram Size</th>
                  <th>6 GB</th>
                </tr>
                <tr>
                  <th>Series</th>
                  <th>06G-P4-1067-KR</th>
                </tr>
                <tr>
                  <th>Item Weight</th>
                  <th>1.68 pounds</th>
                </tr>
                <tr>
                  <th>Memory Speed</th>
                  <th>8000 MHz</th>
                </tr>
              </table>
            </div>
          </Card>
        </>
      ) : null}
    </Container>
  );
};

export default Detail;
