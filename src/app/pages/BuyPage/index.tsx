import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import products from "../../../datas/product.json";
import styles from "./BuyPage.module.scss";
import { useCartStore } from "core/store/useCartStore";
import { useShallow } from "zustand/react/shallow";

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
        marginTop: { sm: "110px", xs: "70px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
      <Box
        style={{ background: "#FBD5E0" }}
        sx={{ padding: { sm: "20px 0", xs: "5px 0" } }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
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
          <p>
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
          </p>
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "600",
              color: "#FA58A6",
            }}
          >
            Đặt hàng thành công
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography variant="h3"></Typography>
              <p style={{ textAlign: "center" }}>
                Cảm ơn quý khách đã tin tưởng MiBeauty
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} style={{ borderRadius: "20px", padding:"10px 20px" }}>
              <Link to="/" style={{ color: "#FFF" }}>
             Tiếp tục mua hàng
              </Link>
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}
