import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import products from "../../../datas/product.json";
import styles from "./CartPage.module.scss";

const cx = classNames.bind(styles);

export default function CartPage() {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6.97794L7.11765 1.625L13.2353 6.97794V14.625H9.41176V11.5662C9.41176 10.9577 9.17006 10.3742 8.73983 9.94399C8.3096 9.51376 7.72608 9.27206 7.11765 9.27206C6.50921 9.27206 5.92569 9.51376 5.49546 9.94399C5.06523 10.3742 4.82353 10.9577 4.82353 11.5662V14.625H1V6.97794Z"
          stroke="#999999"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>,
    <Typography key="3" color="#999999">
      Giỏ hàng
    </Typography>,
  ];

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const allCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(allCart);
  }, []);

  const handleDeleteCart = item => {
    const deleteSuccess = cart.filter(item1 => item1.id !== item.id);
    setCart(deleteSuccess);
    localStorage.setItem("cart", JSON.stringify(deleteSuccess));
  };

  const formattedPrice = price => {
    let prices = parseInt(price);
    return prices.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const handleDesc = id => {
    const allCart = JSON.parse(localStorage.getItem("cart") || "[]");
    allCart.forEach(item => {
      if (item.id === id) {
        let number = parseInt(item.number);
        if (item.number == 1) {
          return;
        }
        item.number = number - 1;
      }
    });
    setCart(allCart);
    localStorage.setItem("cart", JSON.stringify(allCart));
  };

  const handleIncre = id => {
    const allCart = JSON.parse(localStorage.getItem("cart") || "[]");
    allCart.forEach(item => {
      if (item.id === id) {
        let number = parseInt(item.number);
        item.number = number + 1;
      }
    });
    setCart(allCart);
    localStorage.setItem("cart", JSON.stringify(allCart));
  };

  const sumNumber = () => {
    let sum = 0;
    cart.forEach(item => {
      sum += item.price.slice(0, -1) * item.number;
    });
    const result = sum + "000";
    return formattedPrice(result);
  };

  return (
    <Box
      sx={{
        marginTop: { sm: "110px", xs: "70px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ background: "#FBD5E0", padding: { sm: "20px 0", xs: "5px 0" } }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
      <Container
        maxWidth="xl"
        sx={{ padding: { sm: "40px 20px", xs: "20px 5px" } }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { sm: "30px", xs: "20px" },
            fontWeight: "600",
            padding: "20px 0",
            textAlign: {sm: 'center'}
          }}
        >
          Giỏ hàng
        </Typography>

        <Grid container spacing={2}>
          <Grid item sm={8}>
            <Grid container spacing={2} sx={{ paddingBottom: "30px" }}>
              <Grid
                item
                sm={4}
                sx={{ color: "#999999", fontWeight: "600", display: { xs: "none" } }}
              >
                SẢN PHẨM
              </Grid>
              <Grid
                item
                sm={2}
                sx={{
                  color: "#999999",
                  fontWeight: "600",
                  display: { xs: "none" },
                }}
              >
                ĐƠN GIÁ
              </Grid>
              <Grid
                item
                sm={2}
                sx={{
                  color: "#999999",
                  fontWeight: "600",
                  display: { xs: "none" },
                }}
              >
                SỐ LƯỢNG
              </Grid>
              <Grid
                item
                sm={2}
                sx={{
                  color: "#999999",
                  fontWeight: "600",
                  display: { xs: "none" },
                }}
              >
                TỔNG
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              {cart?.map(item => (
                <>
                  <Grid item sm={4} xs={9}>
                    <div className={cx("cart_name")}>
                      <img width="200" height="100" src={item.image} />
                      <span style={{ marginLeft: "10px" }}>{item.name}</span>
                    </div>
                  </Grid>
                  <Grid item sm={2} xs={3}>
                    <p>{item.price}</p>
                  </Grid>
                  <Grid item sm={2} xs={6}>
                    <div className={cx("cart_sum")}>
                      <button
                        className={cx("detail_button-desc")}
                        onClick={() => handleDesc(item.id)}
                      >
                        <svg
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="34"
                            height="34"
                            rx="17"
                            fill="#F2F2F2"
                          />
                          <path
                            d="M12.3335 17.5H21.6668"
                            stroke="#666666"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>

                      <p>{item.number}</p>

                      <button
                        className={cx("detail_button-incre")}
                        onClick={() => handleIncre(item.id)}
                      >
                        <svg
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="34"
                            height="34"
                            rx="17"
                            fill="#F2F2F2"
                          />
                          <path
                            d="M12.3335 17.4997H21.6668M17.0002 12.833V22.1663V12.833Z"
                            stroke="#1A1A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </Grid>
                  <Grid item sm={2} xs={4}>
                    {formattedPrice(
                      item.price.slice(0, -1) * item.number + "000",
                    )}
                  </Grid>
                  <Grid item sm={2} xs={2}>
                    <button
                      style={{ backgroundColor: "none" }}
                      onClick={() => handleDeleteCart(item)}
                    >
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 23.5C18.5748 23.5 23.5 18.5748 23.5 12.5C23.5 6.42525 18.5748 1.5 12.5 1.5C6.42525 1.5 1.5 6.42525 1.5 12.5C1.5 18.5748 6.42525 23.5 12.5 23.5Z"
                          stroke="#CCCCCC"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M16.5 8.5L8.5 16.5"
                          stroke="#666666"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 16.5L8.5 8.5"
                          stroke="#666666"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </Grid>
                </>
              ))}
              <div className={cx("button_bottom")}>
                <div>
                  <Link to="/">
                    <button className={cx("button_view")}>
                      Tiếp tục xem sản phẩm
                    </button>
                  </Link>
                </div>
                <div>
                  <Button sx={{ marginRight: "10px" }} className="outlined">
                    Xóa tất cả
                  </Button>
                </div>
              </div>

              <Grid item sm={12} xs={12}>
                <div className={cx("email_input")}>
                  <p>VOUCHER</p>
                  <input
                    className={cx("email_input-item")}
                    placeholder="Nhập mã"
                    name="email"
                  />
                  <button className={cx("email_input-button")}>Áp dụng</button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className={cx("total_cart")}>
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                  fontSize: "23px",
                }}
              >
                Tổng tiền giỏ hàng
              </h3>
              <div className={cx("total_cart-item")}>
                <p>Tạm tính:</p>
                <div>{sumNumber()}</div>
              </div>
              <div className={cx("total_cart-item")}>
                <p>Mã giảm giá:</p>
                <div>0 đ</div>
              </div>
              <div className={cx("total_cart-item")}>
                <p style={{ fontWeight: "600" }}>Tổng: </p>
                <div style={{ fontWeight: "600" }}>{sumNumber()}</div>
              </div>

              <Button className={cx("button_buy")} variant="contained">
                <Link to="/buy" style={{ color: "#FFF" }}>
                  Mua hàng
                </Link>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
