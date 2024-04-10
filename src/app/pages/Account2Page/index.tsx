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

import styles from "./Account2Page.module.scss";

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

export default function Account2Page() {
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
      <Container maxWidth="xs" sx={{ padding: "20px 5px" }}>
        <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Lịch sử đặt hàng
        </h3>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: "22px" }}>ID</TableCell>
                <TableCell style={{ fontSize: "22px" }}>Ngày</TableCell>
                <TableCell style={{ fontSize: "22px" }}>Tổng tiền</TableCell>
                <TableCell style={{ fontSize: "22px" }}>Trạng Thái</TableCell>
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
                  <TableCell style={{ fontSize: "18px" }}>{row.fat}</TableCell>
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
      </Container>
    </Box>
  );
}
