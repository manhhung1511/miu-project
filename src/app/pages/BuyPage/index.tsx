import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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

import products from "../../../datas/product.json";
import styles from "./BuyPage.module.scss";
import React, { useEffect, useState } from "react";

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
    const result = sum + '000';
    return formattedPrice(result);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
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
      <Container
        maxWidth="xl"
        sx={{ background: "#FBD5E0", padding: {sm: "20px 0", xs: "5px 0"} }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={7}>
            <Typography variant="h3" sx={{fontSize: {sm: "24px", xs: "20px"}, fontWeight:'600', padding: '20px 0'}}>Địa chỉ nhận hàng</Typography>
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
          <Typography variant="h3" sx={{fontSize: {sm: "24px", xs: "20px"}, fontWeight:'600', padding: '20px 0'}}>Đơn hàng</Typography>

            <Container maxWidth="xl" sx={{ padding: "20px 0" }}>
            {
              cart?.map((item) => (
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
                      <p style={{marginLeft:"11px"}}>{item.name}</p>{" "}
                      <span style={{fontSize: "15px"}}> x {item.number}</span>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={2}>
                  <div className={cx("order1_price")}>{item.price}</div>
                </Grid>
              </Grid>
              ))
            }
            
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
              <Button onClick={handleClickOpen} className={cx("order_button")}>Đặt hàng</Button>
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
      >
        <DialogTitle id="alert-dialog-title">
        Đặt hàng thành công
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                <Typography variant="h3"></Typography>
                <p>
                  Cảm ơn quý khách đã tin tưởng MiBeauty
                </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{borderRadius: "20px"}}>
            <Link to="/" style={{color: "#FFF"}}>
            Tiếp tục mua sắm

            </Link>
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
    </Box>
  );
}
