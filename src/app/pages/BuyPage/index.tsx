import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Breadcrumb from "core/app/components/Breadcrumb";
import { useCartStore } from "core/store/useCartStore";

import products from "../../../datas/product.json";
import styles from "./BuyPage.module.scss";

const cx = classNames.bind(styles);

export default function BuyPage() {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const allCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(allCart);
  }, []);

  const { handleCart } = useCartStore(
    useShallow(state => ({
      handleCart: state.handleCart,
    })),
  );

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
      Thanh toán
    </Typography>,
  ];

  const formattedPrice = price => {
    let prices = parseInt(price);
    return prices.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const sumNumber = () => {
    let sum = 0;
    cart.forEach(item => {
      sum += item.price.slice(0, -1) * item.number;
    });
    const result = sum + "000";
    return formattedPrice(result);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    localStorage.removeItem("cart");
    handleCart(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        marginTop: {sm: "112px", xs: "67px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item sm={7}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { sm: "24px", xs: "20px" },
                fontWeight: "600",
                padding: "20px 0",
              }}
            >
              Địa chỉ nhận hàng
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <div className={cx("input_form")}>
                  <label>Họ</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className={cx("input_form")}>
                  <label>Tên</label>
                  <input type="text" />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Grid item sm={6}>
                <div className={cx("input_form")}>
                  <label>Email</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className={cx("input_form")}>
                  <label>Số điện thoại</label>
                  <input type="text" />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Grid item sm={6}>
                <div className={cx("input_form")}>
                  <label>Tỉnh / Thành phố</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className={cx("input_form")}>
                  <label>Quận / huyện</label>
                  <input type="text" />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Grid item sm={12}>
                <div className={cx("input_form")}>
                  <label>Địa chỉ cụ thể</label>
                  <input type="text" />
                </div>

                <div className={cx("input_form")} style={{ marginTop: "20px" }}>
                  <label>Ghi chú</label>
                  <textarea rows="8" cols="50"></textarea>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={5}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { sm: "24px", xs: "20px" },
                fontWeight: "600",
                padding: "20px 0",
              }}
            >
              Đơn hàng
            </Typography>

            <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
              {cart?.map(item => (
                <Grid container spacing={2}>
                  <Grid item sm={10}>
                    <div className={cx("order1")}>
                      <div className={cx("order1_child")}>
                        <img
                          width="100"
                          height="100"
                          src={item.image}
                          alt="img"
                        />
                        <p style={{ marginLeft: "11px" }}>{item.name}</p>{" "}
                        <span style={{ fontSize: "15px" }}>
                          {" "}
                          x {item.number}
                        </span>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={2}>
                    <div className={cx("order1_price")}>{item.price}</div>
                  </Grid>
                </Grid>
              ))}

              <div className={cx("order2")}>
                <p>Tạm tính:</p>
                <div className={cx("order1_price")}>{sumNumber()}</div>
              </div>

              <div className={cx("order3")}>
                <p>Mã giảm giá:</p>
                <div className={cx("order1_price")}>0 đ</div>
              </div>

              <div className={cx("order4")}>
                <p>Phí vận chuyển:</p>
                <div className={cx("order1_price")}>0 đ</div>
              </div>

              <div className={cx("total")}>
                <p>Tổng tiền:</p>
                <div className={cx("order1_price-total")}>{sumNumber()}</div>
              </div>
              <div className={cx("payment")}>
                <h3 className={cx("payment_title")}>Phương thức thanh toán</h3>

                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#FA58A6",
                            },
                          }}
                        />
                      }
                      label="Thanh toán khi nhận hàng"
                    />
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#FA58A6",
                            },
                          }}
                        />
                      }
                      label="Thẻ tín dụng"
                    />

                    <FormControlLabel
                      value="3"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#FA58A6",
                            },
                          }}
                        />
                      }
                      label="Ví điện tử"
                    />

                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#FA58A6",
                            },
                          }}
                        />
                      }
                      label="Chuyển khoản ngân hàng"
                    />
                  </RadioGroup>
                  <Button
                    onClick={handleClickOpen}
                    className={cx("order_button")}
                  >
                    Đặt hàng
                  </Button>
                </FormControl>
              </div>
            </Container>
          </Grid>
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ padding: "20px 30px !important" }}
        >
          <Box sx={{ display: { sm: "flex", xs: "none" } }}>
            <svg
              width="368"
              height="196"
              viewBox="0 0 368 196"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_548_8617)">
                <mask id="path-1-inside-1_548_8617" fill="white">
                  <path d="M248.489 83.0047C251.763 95.247 250.598 108.253 245.2 119.719C239.803 131.184 230.521 140.369 218.999 145.646C207.477 150.923 194.46 151.951 182.252 148.548C170.045 145.145 159.436 137.531 152.306 127.055C145.176 116.579 141.984 103.917 143.296 91.3122C144.608 78.7077 150.339 66.9744 159.474 58.1914C168.61 49.4083 180.559 44.1424 193.205 43.3267C205.852 42.511 218.378 46.1981 228.566 53.7347L223.448 60.6542C214.894 54.3266 204.377 51.231 193.759 51.9158C183.142 52.6007 173.109 57.0218 165.44 64.3959C157.77 71.7699 152.958 81.6208 151.856 92.2033C150.755 102.786 153.435 113.416 159.421 122.212C165.408 131.008 174.315 137.4 184.563 140.257C194.812 143.114 205.742 142.251 215.415 137.821C225.088 133.39 232.881 125.679 237.413 116.053C241.945 106.427 242.923 95.5069 240.174 85.2286L248.489 83.0047Z" />
                </mask>
                <path
                  d="M248.489 83.0047C251.763 95.247 250.598 108.253 245.2 119.719C239.803 131.184 230.521 140.369 218.999 145.646C207.477 150.923 194.46 151.951 182.252 148.548C170.045 145.145 159.436 137.531 152.306 127.055C145.176 116.579 141.984 103.917 143.296 91.3122C144.608 78.7077 150.339 66.9744 159.474 58.1914C168.61 49.4083 180.559 44.1424 193.205 43.3267C205.852 42.511 218.378 46.1981 228.566 53.7347L223.448 60.6542C214.894 54.3266 204.377 51.231 193.759 51.9158C183.142 52.6007 173.109 57.0218 165.44 64.3959C157.77 71.7699 152.958 81.6208 151.856 92.2033C150.755 102.786 153.435 113.416 159.421 122.212C165.408 131.008 174.315 137.4 184.563 140.257C194.812 143.114 205.742 142.251 215.415 137.821C225.088 133.39 232.881 125.679 237.413 116.053C241.945 106.427 242.923 95.5069 240.174 85.2286L248.489 83.0047Z"
                  fill="#FA58A6"
                />
                <path
                  d="M248.489 83.0047C251.763 95.247 250.598 108.253 245.2 119.719C239.803 131.184 230.521 140.369 218.999 145.646C207.477 150.923 194.46 151.951 182.252 148.548C170.045 145.145 159.436 137.531 152.306 127.055C145.176 116.579 141.984 103.917 143.296 91.3122C144.608 78.7077 150.339 66.9744 159.474 58.1914C168.61 49.4083 180.559 44.1424 193.205 43.3267C205.852 42.511 218.378 46.1981 228.566 53.7347L223.448 60.6542C214.894 54.3266 204.377 51.231 193.759 51.9158C183.142 52.6007 173.109 57.0218 165.44 64.3959C157.77 71.7699 152.958 81.6208 151.856 92.2033C150.755 102.786 153.435 113.416 159.421 122.212C165.408 131.008 174.315 137.4 184.563 140.257C194.812 143.114 205.742 142.251 215.415 137.821C225.088 133.39 232.881 125.679 237.413 116.053C241.945 106.427 242.923 95.5069 240.174 85.2286L248.489 83.0047Z"
                  stroke="#FDABD2"
                  stroke-width="0.6"
                  mask="url(#path-1-inside-1_548_8617)"
                />
              </g>
              <g filter="url(#filter1_d_548_8617)">
                <path
                  d="M62.5996 113.837L35.007 94.0677"
                  stroke="#FA58A6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M68.7305 63.8213L41.1378 44.0521"
                  stroke="#FA58A6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M58.7686 83.8867L31.1759 64.1175"
                  stroke="#FA58A6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g filter="url(#filter2_d_548_8617)">
                <path
                  d="M331.314 113.837L358.907 94.0677"
                  stroke="#F50779"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M325.186 63.8213L352.778 44.0521"
                  stroke="#F50779"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M335.148 83.8867L362.741 64.1175"
                  stroke="#F50779"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                d="M14.9126 37.6226L14.4785 43.4586L18.9037 46.9331L13.375 48.5482L11.3442 54.0867L8.36133 49.249L2.67823 49.2036L6.36371 44.5975L4.88121 39.0317L10.1456 41.017L14.9126 37.6226Z"
                fill="#F46242"
                stroke="#F46242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M329.938 177.68L329.504 183.516L333.929 186.991L328.4 188.606L326.37 194.144L323.387 189.307L317.704 189.261L321.389 184.655L319.907 179.089L325.171 181.075L329.938 177.68Z"
                fill="#F46242"
                stroke="#F46242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M233.929 3.95072L233.495 9.78668L237.92 13.2613L232.392 14.8763L230.361 20.4148L227.378 15.5772L221.695 15.5317L225.38 10.9256L223.898 5.35982L229.162 7.34514L233.929 3.95072Z"
                fill="#F46242"
                stroke="#F46242"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g filter="url(#filter3_d_548_8617)">
                <path
                  d="M219.582 79.9707L190.694 108.435L177.563 95.4967"
                  stroke="#FA58A6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_548_8617"
                  x="135.007"
                  y="39.2158"
                  width="123.304"
                  height="123.303"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_548_8617"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_548_8617"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_548_8617"
                  x="26.3535"
                  y="42.9014"
                  width="47.1992"
                  height="80.0869"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_548_8617"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_548_8617"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_548_8617"
                  x="320.363"
                  y="42.9014"
                  width="47.2002"
                  height="80.0869"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_548_8617"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_548_8617"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_548_8617"
                  x="172.563"
                  y="78.9707"
                  width="52.0186"
                  height="38.4639"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_548_8617"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_548_8617"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Box>

          <Box sx={{ display: { sm: "none", xs: "flex" } }}>
            <p style={{ margin: "0 auto" }}>
              <svg
                width="158"
                height="83"
                viewBox="0 0 158 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_799_7921)">
                  <mask id="path-1-inside-1_799_7921" fill="white">
                    <path d="M104.62 34.935C105.998 40.0875 105.508 45.5616 103.236 50.3872C100.964 55.2129 97.0575 59.0786 92.2082 61.2995C87.3589 63.5204 81.8801 63.9531 76.7423 62.5209C71.6045 61.0887 67.1395 57.8841 64.1385 53.4749C61.1374 49.0656 59.794 43.7364 60.3462 38.4314C60.8984 33.1264 63.3106 28.1882 67.1555 24.4916C71.0003 20.7949 76.0296 18.5786 81.3522 18.2353C86.6747 17.892 91.9471 19.4438 96.235 22.6158L94.0806 25.5281C90.4806 22.8649 86.0541 21.5621 81.5853 21.8503C77.1166 22.1386 72.8942 23.9993 69.6661 27.1029C66.4381 30.2065 64.4129 34.3525 63.9492 38.8065C63.4856 43.2604 64.6135 47.7347 67.1331 51.4366C69.6528 55.1385 73.4015 57.829 77.715 59.0314C82.0285 60.2339 86.6285 59.8706 90.6998 58.006C94.7711 56.1414 98.051 52.8958 99.9584 48.8443C101.866 44.7928 102.277 40.1969 101.12 35.871L104.62 34.935Z" />
                  </mask>
                  <path
                    d="M104.62 34.935C105.998 40.0875 105.508 45.5616 103.236 50.3872C100.964 55.2129 97.0575 59.0786 92.2082 61.2995C87.3589 63.5204 81.8801 63.9531 76.7423 62.5209C71.6045 61.0887 67.1395 57.8841 64.1385 53.4749C61.1374 49.0656 59.794 43.7364 60.3462 38.4314C60.8984 33.1264 63.3106 28.1882 67.1555 24.4916C71.0003 20.7949 76.0296 18.5786 81.3522 18.2353C86.6747 17.892 91.9471 19.4438 96.235 22.6158L94.0806 25.5281C90.4806 22.8649 86.0541 21.5621 81.5853 21.8503C77.1166 22.1386 72.8942 23.9993 69.6661 27.1029C66.4381 30.2065 64.4129 34.3525 63.9492 38.8065C63.4856 43.2604 64.6135 47.7347 67.1331 51.4366C69.6528 55.1385 73.4015 57.829 77.715 59.0314C82.0285 60.2339 86.6285 59.8706 90.6998 58.006C94.7711 56.1414 98.051 52.8958 99.9584 48.8443C101.866 44.7928 102.277 40.1969 101.12 35.871L104.62 34.935Z"
                    fill="#FA58A6"
                  />
                  <path
                    d="M104.62 34.935C105.998 40.0875 105.508 45.5616 103.236 50.3872C100.964 55.2129 97.0575 59.0786 92.2082 61.2995C87.3589 63.5204 81.8801 63.9531 76.7423 62.5209C71.6045 61.0887 67.1395 57.8841 64.1385 53.4749C61.1374 49.0656 59.794 43.7364 60.3462 38.4314C60.8984 33.1264 63.3106 28.1882 67.1555 24.4916C71.0003 20.7949 76.0296 18.5786 81.3522 18.2353C86.6747 17.892 91.9471 19.4438 96.235 22.6158L94.0806 25.5281C90.4806 22.8649 86.0541 21.5621 81.5853 21.8503C77.1166 22.1386 72.8942 23.9993 69.6661 27.1029C66.4381 30.2065 64.4129 34.3525 63.9492 38.8065C63.4856 43.2604 64.6135 47.7347 67.1331 51.4366C69.6528 55.1385 73.4015 57.829 77.715 59.0314C82.0285 60.2339 86.6285 59.8706 90.6998 58.006C94.7711 56.1414 98.051 52.8958 99.9584 48.8443C101.866 44.7928 102.277 40.1969 101.12 35.871L104.62 34.935Z"
                    stroke="#FDABD2"
                    stroke-width="0.6"
                    mask="url(#path-1-inside-1_799_7921)"
                  />
                </g>
                <g filter="url(#filter1_d_799_7921)">
                  <path
                    d="M26.3823 47.9116L14.7691 39.5911"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.9629 26.8608L17.3497 18.5404"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.7703 35.3059L13.1571 26.9854"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g filter="url(#filter2_d_799_7921)">
                  <path
                    d="M139.479 47.9116L151.092 39.5911"
                    stroke="#F50779"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M136.9 26.8608L148.513 18.5404"
                    stroke="#F50779"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M141.093 35.3059L152.706 26.9854"
                    stroke="#F50779"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <path
                  d="M6.31198 15.8347L6.12928 18.2909L7.99176 19.7533L5.66481 20.433L4.81008 22.7641L3.55467 20.728L1.16277 20.7089L2.71391 18.7702L2.08996 16.4277L4.30562 17.2633L6.31198 15.8347Z"
                  fill="#F46242"
                  stroke="#F46242"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M138.9 74.7822L138.717 77.2384L140.58 78.7008L138.253 79.3805L137.398 81.7116L136.143 79.6755L133.751 79.6564L135.302 77.7177L134.678 75.3752L136.894 76.2108L138.9 74.7822Z"
                  fill="#F46242"
                  stroke="#F46242"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M98.4917 1.66278L98.309 4.11902L100.171 5.5814L97.8445 6.26114L96.9898 8.59218L95.7344 6.55612L93.3425 6.53698L94.8936 4.59837L94.2696 2.25584L96.4853 3.09142L98.4917 1.66278Z"
                  fill="#F46242"
                  stroke="#F46242"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g filter="url(#filter3_d_799_7921)">
                  <path
                    d="M92.4534 33.6582L80.2951 45.6382L74.7686 40.1928"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_799_7921"
                    x="52.2249"
                    y="14.1885"
                    width="61.1616"
                    height="61.1616"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_799_7921"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_799_7921"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_799_7921"
                    x="8.33496"
                    y="17.3894"
                    width="25.45"
                    height="39.6733"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_799_7921"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_799_7921"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_799_7921"
                    x="132.078"
                    y="17.3894"
                    width="25.4507"
                    height="39.6733"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_799_7921"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_799_7921"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_799_7921"
                    x="69.7686"
                    y="32.6582"
                    width="27.6848"
                    height="21.98"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.980392 0 0 0 0 0.345098 0 0 0 0 0.65098 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_799_7921"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_799_7921"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </p>
          </Box>
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              fontSize: { sm: "30px", xs: "19px" },
              textAlign: "center",
              fontWeight: "600",
              color: "#FA58A6",
            }}
          >
            Đặt hàng thành công
          </DialogTitle>
          <DialogContent>
            <Typography variant="h3"></Typography>
            <Typography
              sx={{ fontSize: { sm: "18px", xs: "15px" } }}
              variant="h5"
              style={{ textAlign: "center" }}
            >
              Cảm ơn quý khách đã tin tưởng MiBeauty
            </Typography>
          </DialogContent>
          <DialogActions>
            <div style={{ display: "flex" }}>
              <div>
                <Button
                  onClick={handleClose}
                  sx={{
                    borderRadius: "20px",
                    padding: { sm: "10px 20px", xs: "6px 4px" },
                    marginRight: {sm: "45px", xs: "10px"},
                  }}
                >
                  <Link to="/" style={{ color: "#FFF" }}>
                    <Typography
                      variant="p"
                      sx={{ fontSize: { sm: "18px", xs: "12px" } }}
                    >
                      Về trang chủ
                    </Typography>
                  </Link>
                </Button>
              </div>
              <div>
                <Button
                  onClick={handleClose}
                  sx={{
                    borderRadius: "20px",
                    padding: { sm: "10px 20px", xs: "6px 4px" },
                    display: {sm: "block", xs: "none"},
                  }}
                >
                  <Link to="/history" style={{ color: "#FFF" }}>
                    <Typography
                      variant="p"
                      sx={{ fontSize: { sm: "18px", xs: "12px" } }}
                    >
                      Xem đơn hàng
                    </Typography>
                  </Link>
                </Button>
                <Button
                  onClick={handleClose}
                  sx={{
                    borderRadius: "20px",
                    padding: { sm: "10px 20px", xs: "6px 4px" },
                    display: {sm: "none", xs: "block"},
                  }}
                >
                  <Link to="/account/order" style={{ color: "#FFF" }}>
                    <Typography
                      variant="p"
                      sx={{ fontSize: { sm: "18px", xs: "12px" } }}
                    >
                      Xem đơn hàng
                    </Typography>
                  </Link>
                </Button>
              </div>
            </div>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}
