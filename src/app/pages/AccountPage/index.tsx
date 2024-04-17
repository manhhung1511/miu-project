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
import Breadcrumb from "core/app/components/Breadcrumb";

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
    "730.000 đ(1 sản phẩm)",
    "Đang xử lý",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "150.000 đ(1 sản phẩm)",
    "Đang giao",
    "Chi tiết",
  ),
  createData(
    "4152",
    "4 TH 4, 2024",
    "700.000 đ (2 sản phẩm)",
    "Hoàn thành",
    "Chi tiết",
  ),
  createData(
    "4152",
    "19 TH 4, 2024",
    "730.000 đ(1 sản phẩm)",
    "Hoàn thành",
    "Chi tiết",
  ),
  createData(
    "4152",
    "20 TH 4, 2024",
    "130.000 đ(1 sản phẩm)",
    "Hoàn thành",
    "Chi tiết",
  ),
  createData(
    "4122",
    "18 TH 4, 2024",
    "730.000 đ(1 sản phẩm)",
    "Hoàn thành",
    "Chi tiết",
  ),
  createData(
    "4252",
    "11 TH 4, 2024",
    "520.000 đ(1 sản phẩm)",
    "Hoàn thành",
    "Chi tiết",
  ),
  createData(
    "4252",
    "12 TH 4, 2024",
    "520.000 đ(1 sản phẩm)",
    "Hoàn thành",
    "Chi tiết",
  ),
  createData(
    "4252",
    "11 TH 4, 2024",
    "620.000 đ(1 sản phẩm",
    "Hoàn thành",
    "Chi tiết",
  ),
  createData(
    "4252",
    "15 TH 4, 2024",
    "120.000 đ(1 sản phẩm)",
    "Hoàn thành",
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

 
  const [isShow, setShow] = useState(false);

  const handleDetail = () => {
    setShow(true);
  };

  const handleBack = () => {
    setShow(false);
  }

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
        marginTop: {sm: "112px", xs: "67px" },
        paddingTop: { sm: "78px", xs: "10px" },
        // maxWidth: "45%"
      }}
    >
                <Breadcrumb breadcrumbs={breadcrumbs} />

      <Container maxWidth="lg" sx={{ padding: "40px 0", marginTop: "20px"  }}>
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
              width: "280px",
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
              style={{ marginRight: "33px" }}
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

            <Link to="/login">
              <Tab
                style={{ marginLeft: "12px" }}
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
                  spacing={1}
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

                    <Grid container spacing={1}>
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
          <TabPanel value={value} index={1} style={{ width: "82%" }}>
            {!isShow && (
              <Container maxWidth="lg">
                <Grid spacing={1}>
                  <Grid item lg={12}>
                    <Box>
                      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                        Lịch sử đặt hàng
                      </h3>

                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell style={{ fontSize: "22px" }}>
                                ID
                              </TableCell>
                              <TableCell style={{ fontSize: "22px" }}>
                                Ngày
                              </TableCell>
                              <TableCell style={{ fontSize: "22px" }}>
                                Tổng tiền
                              </TableCell>
                              <TableCell style={{ fontSize: "22px" }}>
                                Trạng Thái
                              </TableCell>
                              <TableCell
                                style={{ fontSize: "22px" }}
                              ></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map(row => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
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
                                  <Button
                                    style={{
                                      background: "#FFFF",
                                      color: "#FA58A6",
                                    }}
                                    onClick={handleDetail}
                                  >
                                    {row.protein}
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            )}

            {isShow && (
              <Container maxWidth="lg">
                <Grid spacing={1}>
                  <Grid item lg={12}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{fontSize: "22px", fontWeight: "600"}}>
                            Chi tiết đơn hàng
                          </div>
                          <div>
                            <button onClick={handleBack}style={{background: "none", fontSize: "18px", color: "#FA58A6"}}>
                                Trở về danh sách
                            </button>
                          </div>
                      </div>
                    <img src="https://i.postimg.cc/kX7L9ccb/order.png" />
                  </Grid>
                </Grid>
              </Container>
            )}
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}
