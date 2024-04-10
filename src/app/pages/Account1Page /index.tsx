import classNames from "classnames/bind";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Breadcrumbs, Button, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import styles from "./Account1Page.module.scss";

const cx = classNames.bind(styles);

export default function Account1Page() {
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
      Tài khoản
    </Typography>,
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box
      sx={{
        marginTop: { sm: "110px", xs: "70px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
      <Container maxWidth="xl" sx={{ background: "#FBD5E0", padding: "5px 0" }}>
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ padding: "10px 5px" }}>
        {/* <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Thông tin tài khoản
        </h3> */}
            <Grid
              container
              spacing={1}
              style={{
                padding: "20px",
                // border: "1px solid #9999",
              }}
            >
              <Grid item xs={7}>
                <h3 style={{ fontSize: "20px" }}>Tài khoản</h3>

                <div className={cx("input_form")}>
                  <label>Họ</label>
                  <input type="text" />
                </div>

                <div className={cx("input_form")}>
                  <label>Tên</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item xs={5}>
                <div style={{ display: "grid" }}>
                  <img
                    style={{ margin: "0 auto" }}
                    src="https://i.postimg.cc/yNsWg03V/Image-11.png"
                    alt="img"
                  />
                  <Button
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    style={{ fontSize: "10px" }}
                  >
                    Chọn ảnh
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12}>
              <div className={cx("input_form")}>
                  <label>Email</label>
                  <input type="text" />
                </div>
              </Grid>
             
              <Grid item xs={12}>
              <div className={cx("input_form")}>
                  <label>Số điện thoại</label>
                  <input type="text" />
                </div>
              </Grid>
               
                <Button className={cx("order_button")}>Lưu thay đổi</Button>

            

                
            </Grid>
            <Grid
              container
              spacing={1}
              style={{
                padding: "20px",
                // border: "1px solid #9999",
                margin: "20px 0",
              }}
            >
              <Grid item xs={12}>
                <h3 style={{ fontSize: "20px" }}>Địa chỉ</h3>

                <div className={cx("input_form")}>
                  <label>Địa chỉ</label>
                  <input type="text" />
                </div>

                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <div className={cx("input_form")}>
                      <label>Tỉnh</label>
                      <input type="text" />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={cx("input_form")}>
                      <label>Huyện</label>
                      <input type="text" />
                    </div>
                  </Grid>
                </Grid>
                <Button className={cx("order_button")}>Lưu thay đổi</Button>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={1}
              style={{
                padding: "20px",
                // border: "1px solid #9999",
                margin: "20px 0",
              }}
            >
              <Grid item xs={12}>
                <h3 style={{ fontSize: "20px" }}>Đổi mật khẩu</h3>

                <div className={cx("input_form")}>
                  <label>Mật khẩu hiện tại</label>
                  <input type="text" />
                </div>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <div className={cx("input_form")}>
                      <label>Mật khẩu mới</label>
                      <input type="text" />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={cx("input_form")}>
                      <label>Nhập lại mật khẩu</label>
                      <input type="text" />
                    </div>
                  </Grid>
                </Grid>
                <Button className={cx("order_button")}>Lưu thay đổi</Button>
              </Grid>
            </Grid>
      </Container>
    </Box>
  );
}
