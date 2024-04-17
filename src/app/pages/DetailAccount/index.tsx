import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import bannerUrl from "core/assets/images/Image.png";

import products from "../../../datas/product.json";
import styles from "./DetailAccountPage.module.scss";

const cx = classNames.bind(styles);

export default function DetailAccountPage() {
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
      Tin tức
    </Typography>,
    <Typography key="3" color="#999999">
      Nội dung
    </Typography>,
  ];
  return (
    <Box
      sx={{
        marginTop: {sm: "112px", xs: "67px" },
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
      <Container
        maxWidth="lg"
        sx={{
          // padding: "20px",
          marginTop: "20px",
          // display: { sm: "flex", xs: "none" },
        }}
      >
        <Link to="/account/order">
          <Typography style={{ fontWeight: "600", padding: "10px 0" }}>
            <span style={{ marginRight: "10px" }}>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.66699 10.6667L1.00033 6L5.66699 1.33333"
                  stroke="#1A1A1A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Chi tiết đơn hàng
          </Typography>
        </Link>
        <Box sx={{display: {xs:"flex", sm: "none"}}}>
        <img src="https://i.postimg.cc/ZqLF561X/Screenshot-2024-04-15-at-18-44-08.png" />

        </Box>
        {/* <Box sx={{display: {xs:"none", sm: "flex"}}}>
        <img src="https://i.postimg.cc/kX7L9ccb/order.png" />

          </Box> */}

      
      </Container>
    </Box>
  );
}
