import classNames from "classnames/bind";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Breadcrumbs, Button, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import products from "../../../datas/product.json";
import styles from "./AccountPage.module.scss";

const cx = classNames.bind(styles);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "4152",
    "4 TH 4, 2024",
    "730.000 đ(1 san phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "730.000 đ(1 san phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "730.000 đ(1 san phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "730.000 đ(1 san phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "730.000 đ(1 san phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "730.000 đ(1 san phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "730.000 đ(1 san phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
];

export default function AccountPage() {
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
      <Container
        maxWidth="xl"
        sx={{ background: "#FBD5E0", padding: "20px 0" }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ padding: "40px 0" }}>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            // height: "100vh",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              ".MuiTabs-indicator": {
                left: 0,
                backgroundColor: "#FA58A6",
              },
            }}
          >
            <Tab
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z"
                    fill="#1A1A1A"
                  />
                </svg>
              }
              iconPosition="start"
              label="Thông tin tài khoản"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 20V13H11L7.783 16.22C8.33247 16.7819 8.98837 17.2287 9.71241 17.5343C10.4364 17.8399 11.2141 17.9983 12 18C13.2393 17.9982 14.4475 17.6127 15.4589 16.8965C16.4702 16.1802 17.2349 15.1684 17.648 14H17.666C17.78 13.675 17.867 13.34 17.925 13H19.937C19.6934 14.9333 18.7527 16.7111 17.2913 18C15.83 19.2888 13.9485 20 12 20H11.99C10.9398 20.0032 9.89944 19.798 8.9291 19.3963C7.95876 18.9946 7.07772 18.4045 6.337 17.66L4 20ZM6.074 11H4.062C4.30548 9.06751 5.24564 7.29019 6.70616 6.00145C8.16667 4.7127 10.0472 4.00108 11.995 4.00004H12C13.0504 3.99671 14.0909 4.20183 15.0615 4.6035C16.032 5.00517 16.9132 5.59541 17.654 6.34004L20 4.00004V11H13L16.222 7.78004C15.672 7.21752 15.0153 6.77035 14.2903 6.46471C13.5654 6.15907 12.7867 6.0011 12 6.00004C10.7607 6.00187 9.55246 6.38738 8.54114 7.10361C7.52982 7.81985 6.76508 8.83166 6.352 10H6.334C6.219 10.325 6.132 10.66 6.075 11H6.074Z"
                    fill="#999999"
                  />
                </svg>
              }
              iconPosition="start"
              label="Lịch sử đặt hàng"
              {...a11yProps(1)}
            />

            <Tab
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8204 22H10.1804C9.9523 22 9.73107 21.9221 9.55337 21.7792C9.37567 21.6362 9.25218 21.4368 9.20337 21.214L8.79637 19.33C8.25343 19.0921 7.73861 18.7946 7.26137 18.443L5.42437 19.028C5.20694 19.0973 4.97232 19.0902 4.75949 19.0078C4.54666 18.9254 4.36842 18.7727 4.25437 18.575L2.43037 15.424C2.31752 15.2261 2.27516 14.9958 2.31021 14.7708C2.34527 14.5457 2.45568 14.3392 2.62337 14.185L4.04837 12.885C3.98357 12.2961 3.98357 11.7019 4.04837 11.113L2.62337 9.816C2.45544 9.66177 2.34489 9.45507 2.30982 9.22978C2.27476 9.00449 2.31726 8.77397 2.43037 8.576L4.25037 5.423C4.36442 5.22532 4.54266 5.07259 4.75549 4.99019C4.96832 4.90778 5.20294 4.90066 5.42037 4.97L7.25737 5.555C7.50137 5.375 7.75537 5.207 8.01837 5.055C8.27037 4.913 8.53037 4.784 8.79637 4.669L9.20437 2.787C9.25294 2.5642 9.3762 2.36469 9.55372 2.22155C9.73123 2.07841 9.95234 2.00024 10.1804 2H13.8204C14.0484 2.00024 14.2695 2.07841 14.447 2.22155C14.6245 2.36469 14.7478 2.5642 14.7964 2.787L15.2084 4.67C15.751 4.9079 16.2655 5.20539 16.7424 5.557L18.5804 4.972C18.7977 4.90292 19.0321 4.91017 19.2447 4.99256C19.4573 5.07495 19.6354 5.22753 19.7494 5.425L21.5694 8.578C21.8024 8.985 21.7214 9.5 21.3764 9.817L19.9514 11.117C20.0162 11.7059 20.0162 12.3001 19.9514 12.889L21.3764 14.189C21.7214 14.507 21.8014 15.021 21.5694 15.428L19.7494 18.581C19.6354 18.7785 19.4573 18.931 19.2447 19.0134C19.0321 19.0958 18.7977 19.1031 18.5804 19.034L16.7424 18.449C16.2656 18.8004 15.7511 19.0976 15.2084 19.335L14.7964 21.214C14.7476 21.4366 14.6243 21.6359 14.4468 21.7788C14.2693 21.9218 14.0483 21.9998 13.8204 22ZM7.62037 16.229L8.44037 16.829C8.62537 16.965 8.81837 17.09 9.01737 17.204C9.20537 17.313 9.39837 17.411 9.59637 17.5L10.5294 17.909L10.9864 20H13.0164L13.4734 17.908L14.4064 17.499C14.8134 17.319 15.2004 17.096 15.5594 16.833L16.3804 16.233L18.4214 16.883L19.4364 15.125L17.8534 13.682L17.9654 12.67C18.0154 12.227 18.0154 11.78 17.9654 11.338L17.8534 10.326L19.4374 8.88L18.4214 7.121L16.3804 7.771L15.5594 7.171C15.2002 6.90669 14.8136 6.68173 14.4064 6.5L13.4734 6.091L13.0164 4H10.9864L10.5274 6.092L9.59637 6.5C9.18856 6.67861 8.80185 6.90198 8.44337 7.166L7.62237 7.766L5.58237 7.116L4.56537 8.88L6.14837 10.321L6.03637 11.334C5.98637 11.777 5.98637 12.224 6.03637 12.666L6.14837 13.678L4.56537 15.121L5.58037 16.879L7.62037 16.229ZM11.9964 16C10.9355 16 9.91809 15.5786 9.16795 14.8284C8.4178 14.0783 7.99637 13.0609 7.99637 12C7.99637 10.9391 8.4178 9.92172 9.16795 9.17157C9.91809 8.42143 10.9355 8 11.9964 8C13.0572 8 14.0747 8.42143 14.8248 9.17157C15.5749 9.92172 15.9964 10.9391 15.9964 12C15.9964 13.0609 15.5749 14.0783 14.8248 14.8284C14.0747 15.5786 13.0572 16 11.9964 16ZM11.9964 10C11.6047 10.0004 11.2218 10.1158 10.8952 10.3318C10.5685 10.5479 10.3124 10.855 10.1588 11.2153C10.0051 11.5755 9.96059 11.9729 10.0307 12.3583C10.1009 12.7436 10.2826 13.0998 10.5534 13.3828C10.8242 13.6657 11.1721 13.863 11.5539 13.95C11.9358 14.037 12.3348 14.01 12.7014 13.8724C13.0681 13.7347 13.3862 13.4924 13.6164 13.1756C13.8466 12.8587 13.9787 12.4812 13.9964 12.09V12.49V12C13.9964 11.4696 13.7857 10.9609 13.4106 10.5858C13.0355 10.2107 12.5268 10 11.9964 10Z"
                    fill="#999999"
                  />
                </svg>
              }
              label="Cài đặt"
              {...a11yProps(2)}
              iconPosition="start"
              sx={{ marginRight: "88px" }}
            />

            <Link to="/login">
              <Tab
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 18H7C6.46957 18 5.96086 17.7893 5.58579 17.4142C5.21071 17.0391 5 16.5304 5 16V12H7V16H16V2H7V6H5V2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0H16C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18ZM9 13V10H0V8H9V5L14 9L9 13Z"
                      fill="#999999"
                    />
                  </svg>
                }
                iconPosition="start"
                label="Đăng xuất"
              />
            </Link>
          </Tabs>
          <TabPanel value={value} index={0} style={{ width: "82%" }}>
            <Box>
              <Container maxWidth="xl">
                <Grid
                  container
                  spacing={2}
                  style={{
                    padding: "20px",
                    border: "1px solid #9999",
                    margin: "20px 0",
                  }}
                >
                  <Grid item sm={7}>
                    <h3 style={{ fontSize: "20px" }}>Tài khoản</h3>

                    <div className={cx("input_form")}>
                      <label>Họ</label>
                      <input type="text" />
                    </div>

                    <div className={cx("input_form")}>
                      <label>Tên</label>
                      <input type="text" />
                    </div>
                    <div className={cx("input_form")}>
                      <label>Email</label>
                      <input type="text" />
                    </div>
                    <div className={cx("input_form")}>
                      <label>Số điện thoại</label>
                      <input type="text" />
                    </div>

                    <Button className={cx("order_button")}>Lưu thay đổi</Button>
                  </Grid>
                  <Grid item sm={5}>
                    <div style={{ display: "grid" }}>
                      <img
                        style={{ margin: "0 auto" }}
                        src="https://i.postimg.cc/yxfx3yPB/Image-5.png"
                        alt="img"
                      />
                      <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        style={{ width: "50%", margin: "20px  auto" }}
                      >
                        Chọn ảnh
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  style={{
                    padding: "20px",
                    border: "1px solid #9999",
                    margin: "20px 0",
                  }}
                >
                  <Grid item sm={12}>
                    <h3 style={{ fontSize: "20px" }}>Địa chỉ</h3>

                    <div className={cx("input_form")}>
                      <label>Địa chỉ</label>
                      <input type="text" />
                    </div>

                    <Grid container spacing={2}>
                      <Grid item sm={6}>
                        <div className={cx("input_form")}>
                          <label>Tỉnh</label>
                          <input type="text" />
                        </div>
                      </Grid>
                      <Grid item sm={6}>
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
                  spacing={2}
                  style={{
                    padding: "20px",
                    border: "1px solid #9999",
                    margin: "20px 0",
                  }}
                >
                  <Grid item sm={12}>
                    <h3 style={{ fontSize: "20px" }}>Đổi mật khẩu</h3>

                    <div className={cx("input_form")}>
                      <label>Mật khẩu hiện tại</label>
                      <input type="text" />
                    </div>

                    <Grid container spacing={2}>
                      <Grid item sm={6}>
                        <div className={cx("input_form")}>
                          <label>Mật khẩu mới</label>
                          <input type="text" />
                        </div>
                      </Grid>
                      <Grid item sm={6}>
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
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
              Lịch sử đặt hàng
            </h3>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ fontSize: "22px" }}>ID</TableCell>
                    <TableCell style={{ fontSize: "22px" }}>Ngày</TableCell>
                    <TableCell style={{ fontSize: "22px" }}>
                      Tổng tiền
                    </TableCell>
                    <TableCell style={{ fontSize: "22px" }}>
                      Trạng Thái
                    </TableCell>
                    <TableCell style={{ fontSize: "22px" }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        style={{ fontSize: "18px" }}
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell style={{ fontSize: "18px" }}>
                        {row.calories}
                      </TableCell>
                      <TableCell style={{ fontSize: "18px" }}>
                        {row.fat}
                      </TableCell>
                      <TableCell style={{ fontSize: "18px" }}>
                        {row.carbs}
                      </TableCell>
                      <TableCell style={{ fontSize: "18px" }}>
                        <Link to="/" style={{ color: "#FA58A6" }}>
                          {row.protein}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Cài đặt
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}
