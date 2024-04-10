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
import styles from "./ContactPage.module.scss";

const cx = classNames.bind(styles);

export default function ContactPage() {
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
      Liên hệ
    </Typography>,
  ];
  return (
    <Box  sx={{
      marginTop: { sm: "110px", xs: "70px" },
      paddingTop: { sm: "78px", xs: "10px" },
      // maxWidth: "45%"
    }}>
      <Container
        maxWidth="xl"
        sx={{ background: "#FBD5E0", padding: {sm: "20px 0", xs: "4px 0"} }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ padding: "20px 0", marginTop: "20px", display: {sm: 'flex', xs: 'none'} }}>
        <Grid container spacing={4}>
          <Grid
            item
            sm={3}
            style={{
              boxShadow:
                "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
            }}
          >
            <div className={cx("contact_address")}>
              <p className={cx("contact_address-item")}>
                {" "}
                <svg
                  width="34"
                  height="45"
                  viewBox="0 0 34 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.65625 43.2188H31.3438"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 24.0938C18.6908 24.0938 20.3123 23.4221 21.5078 22.2266C22.7033 21.031 23.375 19.4095 23.375 17.7188C23.375 16.028 22.7033 14.4065 21.5078 13.2109C20.3123 12.0154 18.6908 11.3438 17 11.3438C15.3092 11.3438 13.6877 12.0154 12.4922 13.2109C11.2966 14.4065 10.625 16.028 10.625 17.7188C10.625 19.4095 11.2966 21.031 12.4922 22.2266C13.6877 23.4221 15.3092 24.0938 17 24.0938V24.0938Z"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.9375 17.7188C32.9375 32.0625 17 43.2188 17 43.2188C17 43.2188 1.0625 32.0625 1.0625 17.7188C1.0625 13.4919 2.74162 9.4381 5.73049 6.44924C8.71935 3.46037 12.7731 1.78125 17 1.78125C21.2269 1.78125 25.2807 3.46037 28.2695 6.44924C31.2584 9.4381 32.9375 13.4919 32.9375 17.7188V17.7188Z"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p className={cx("contact_address-item")}>
                {" "}
                Số 3 Vũ Phạm Hàm Trung Hòa, Cầu Giấy, Hà Nội
              </p>
            </div>
            <div className={cx("contact_address")}>
              <p className={cx("contact_address-item")}>
                {" "}
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_143_9665)">
                    <path
                      d="M48.95 5.94971H3.05C1.64172 5.94971 0.5 7.09133 0.5 8.49971V42.4997C0.5 43.908 1.64162 45.0497 3.05 45.0497H48.95C50.3583 45.0497 51.5 43.9081 51.5 42.4997V8.49971C51.5 7.09143 50.3584 5.94971 48.95 5.94971ZM49.8 42.4998C49.8 42.9692 49.4195 43.3497 48.95 43.3497H3.05C2.58054 43.3497 2.20003 42.9692 2.20003 42.4998V8.49971C2.20003 8.03025 2.58054 7.64974 3.05 7.64974H48.95C49.4195 7.64974 49.8 8.03025 49.8 8.49971V42.4998Z"
                      fill="#FA58A6"
                    />
                    <path
                      d="M47.3244 9.35314C47.0998 9.33351 46.8766 9.40394 46.7039 9.54897L27.0943 26.0219C26.4619 26.5535 25.5388 26.5535 24.9064 26.0219L5.29703 9.54887C5.06444 9.35363 4.74529 9.29725 4.45991 9.40105C4.17453 9.50484 3.96614 9.75307 3.91335 10.0522C3.86056 10.3513 3.97132 10.6558 4.20391 10.8511L23.8134 27.3232C25.0773 28.3873 26.9236 28.3873 28.1876 27.3232L47.797 10.8512C47.9697 10.7062 48.0777 10.4986 48.0973 10.274C48.1169 10.0494 48.0465 9.82618 47.9014 9.65356C47.7566 9.48074 47.549 9.37276 47.3244 9.35314Z"
                      fill="#FA58A6"
                    />
                    <path
                      d="M16.8483 27.2057C16.5474 27.1386 16.2338 27.2396 16.0286 27.4697L4.12856 40.2197C3.91321 40.4402 3.83412 40.7602 3.92197 41.0556C4.00983 41.3512 4.25079 41.5759 4.55161 41.643C4.85253 41.7101 5.1661 41.6091 5.37129 41.379L17.2713 28.629C17.4867 28.4085 17.5658 28.0886 17.4779 27.7931C17.3901 27.4977 17.1492 27.2729 16.8483 27.2057Z"
                      fill="#FA58A6"
                    />
                    <path
                      d="M35.9709 27.4697C35.7658 27.2396 35.4521 27.1386 35.1512 27.2057C34.8503 27.2729 34.6094 27.4977 34.5216 27.7931C34.4337 28.0887 34.5128 28.4085 34.7282 28.629L46.6282 41.3791C46.9509 41.7096 47.4785 41.7219 47.8162 41.4067C48.154 41.0916 48.1783 40.5644 47.8709 40.2196L35.9709 27.4697Z"
                      fill="#FA58A6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_143_9665">
                      <rect
                        width="51"
                        height="51"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <p className={cx("contact_address-item")}>
                {" "}
                Help.mibeauty@gmail.com
              </p>
            </div>
            <div className={cx("contact_address")}>
              <p className={cx("contact_address-item")}>
                {" "}
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.9824 7.24194C34.9244 8.03321 37.6069 9.5836 39.7611 11.7378C41.9154 13.8921 43.4658 16.5745 44.257 19.5166"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.1865 13.95C31.9513 14.4247 33.5604 15.3548 34.8527 16.6471C36.145 17.9394 37.0751 19.5485 37.5499 21.3133"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.4625 25.6413C19.2621 29.3218 22.2449 32.2917 25.933 34.0755C26.2031 34.2034 26.5018 34.2587 26.7998 34.2359C27.0977 34.213 27.3846 34.1129 27.632 33.9453L33.0639 30.3252C33.3038 30.165 33.5799 30.0672 33.8671 30.0405C34.1544 30.0139 34.4437 30.0592 34.709 30.1725L44.8699 34.5284C45.215 34.675 45.5032 34.9298 45.691 35.2544C45.8788 35.579 45.9561 35.9558 45.9112 36.328C45.5895 38.8409 44.3631 41.1504 42.4616 42.8242C40.56 44.498 38.1135 45.4214 35.5802 45.4216C27.7558 45.4216 20.2518 42.3134 14.7191 36.7807C9.18637 31.248 6.07813 23.744 6.07812 15.9195C6.07836 13.3864 7.00185 10.9402 8.67571 9.0389C10.3496 7.1376 12.659 5.91156 15.1717 5.59033C15.544 5.54543 15.9208 5.6227 16.2454 5.81049C16.5699 5.99829 16.8247 6.28645 16.9713 6.63158L21.3307 16.8011C21.4428 17.0639 21.4883 17.3503 21.4632 17.6348C21.4381 17.9194 21.3431 18.1934 21.1867 18.4324L17.577 23.9476C17.4132 24.1959 17.3165 24.4825 17.2964 24.7794C17.2764 25.0762 17.3336 25.3732 17.4625 25.6413V25.6413Z"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p className={cx("contact_address-item")}> (+84) 343 281 206</p>
              <p className={cx("contact_address-item")}> (+84) 903 499 519</p>
            </div>
          </Grid>
          <Grid item sm={9} >
            <form>
              <h3>MiBeauty xin chào,</h3>
              <p style={{padding: "20px 0"}}>
                Nếu có bất kỳ thắc mắc nào về sản phẩm hoặc trang web, hãy liên
                hệ với chúng tôi để được giải đáp và tư vấn kịp thời. Chúng tôi
                sẽ phản hồi lại trong thời gian sớm nhất.
              </p>
              <Grid container spacing={4}>
                <Grid item sm={6}>
                  <TextField
                    type="text"
                    id="username"
                    label="Họ và tên"
                    name="username"
                    size="small"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                    name="email"
                    size="small"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    type="text"
                    id="title"
                    label="Tiêu đề"
                    name="title"
                    size="small"
                    sx={{ width: "100%" }}
                  />

                  <textarea
                    id="w3review"
                    name="w3review"
                    placeholder="Nội dung"
                    rows="6"
                    cols="50"
                    style={{
                      width: "100%",
                      marginTop: "30px",
                      outline: "none",
                      borderColor: "#9999"
                    }}
                  > </textarea>

<Button className={cx("order_button")}>Gửi<span></span></Button>

                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ padding: "10px 4px", marginTop: "20px", display: {sm: 'none', xs: 'flex'} }}>
        <Grid container spacing={4}>
        <Grid item xs={12} sx={{marginBottom: "20px"}}>
            <form>
              <h3>MiBeauty xin chào,</h3>
              <p style={{padding: "20px 0"}}>
                Nếu có bất kỳ thắc mắc nào về sản phẩm hoặc trang web, hãy liên
                hệ với chúng tôi để được giải đáp và tư vấn kịp thời. Chúng tôi
                sẽ phản hồi lại trong thời gian sớm nhất.
              </p>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    id="username"
                    label="Họ và tên"
                    name="username"
                    size="small"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                    name="email"
                    size="small"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    type="text"
                    id="title"
                    label="Tiêu đề"
                    name="title"
                    size="small"
                    sx={{ width: "100%" }}
                  />

                  <textarea
                    id="w3review"
                    name="w3review"
                    placeholder="Nội dung"
                    rows="6"
                    cols="50"
                    style={{
                      width: "100%",
                      marginTop: "30px",
                      outline: "none",
                      borderColor: "#9999"
                    }}
                  > </textarea>

<Button className={cx("order_button")}>Gửi<span></span></Button>

                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              boxShadow:
                "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
            }}
          >
            <div className={cx("contact_address")}>
              <p className={cx("contact_address-item")}>
                {" "}
                <svg
                  width="34"
                  height="45"
                  viewBox="0 0 34 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.65625 43.2188H31.3438"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 24.0938C18.6908 24.0938 20.3123 23.4221 21.5078 22.2266C22.7033 21.031 23.375 19.4095 23.375 17.7188C23.375 16.028 22.7033 14.4065 21.5078 13.2109C20.3123 12.0154 18.6908 11.3438 17 11.3438C15.3092 11.3438 13.6877 12.0154 12.4922 13.2109C11.2966 14.4065 10.625 16.028 10.625 17.7188C10.625 19.4095 11.2966 21.031 12.4922 22.2266C13.6877 23.4221 15.3092 24.0938 17 24.0938V24.0938Z"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.9375 17.7188C32.9375 32.0625 17 43.2188 17 43.2188C17 43.2188 1.0625 32.0625 1.0625 17.7188C1.0625 13.4919 2.74162 9.4381 5.73049 6.44924C8.71935 3.46037 12.7731 1.78125 17 1.78125C21.2269 1.78125 25.2807 3.46037 28.2695 6.44924C31.2584 9.4381 32.9375 13.4919 32.9375 17.7188V17.7188Z"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p className={cx("contact_address-item")}>
                {" "}
                Số 3 Vũ Phạm Hàm Trung Hòa, Cầu Giấy, Hà Nội
              </p>
            </div>
            <div className={cx("contact_address")}>
              <p className={cx("contact_address-item")}>
                {" "}
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_143_9665)">
                    <path
                      d="M48.95 5.94971H3.05C1.64172 5.94971 0.5 7.09133 0.5 8.49971V42.4997C0.5 43.908 1.64162 45.0497 3.05 45.0497H48.95C50.3583 45.0497 51.5 43.9081 51.5 42.4997V8.49971C51.5 7.09143 50.3584 5.94971 48.95 5.94971ZM49.8 42.4998C49.8 42.9692 49.4195 43.3497 48.95 43.3497H3.05C2.58054 43.3497 2.20003 42.9692 2.20003 42.4998V8.49971C2.20003 8.03025 2.58054 7.64974 3.05 7.64974H48.95C49.4195 7.64974 49.8 8.03025 49.8 8.49971V42.4998Z"
                      fill="#FA58A6"
                    />
                    <path
                      d="M47.3244 9.35314C47.0998 9.33351 46.8766 9.40394 46.7039 9.54897L27.0943 26.0219C26.4619 26.5535 25.5388 26.5535 24.9064 26.0219L5.29703 9.54887C5.06444 9.35363 4.74529 9.29725 4.45991 9.40105C4.17453 9.50484 3.96614 9.75307 3.91335 10.0522C3.86056 10.3513 3.97132 10.6558 4.20391 10.8511L23.8134 27.3232C25.0773 28.3873 26.9236 28.3873 28.1876 27.3232L47.797 10.8512C47.9697 10.7062 48.0777 10.4986 48.0973 10.274C48.1169 10.0494 48.0465 9.82618 47.9014 9.65356C47.7566 9.48074 47.549 9.37276 47.3244 9.35314Z"
                      fill="#FA58A6"
                    />
                    <path
                      d="M16.8483 27.2057C16.5474 27.1386 16.2338 27.2396 16.0286 27.4697L4.12856 40.2197C3.91321 40.4402 3.83412 40.7602 3.92197 41.0556C4.00983 41.3512 4.25079 41.5759 4.55161 41.643C4.85253 41.7101 5.1661 41.6091 5.37129 41.379L17.2713 28.629C17.4867 28.4085 17.5658 28.0886 17.4779 27.7931C17.3901 27.4977 17.1492 27.2729 16.8483 27.2057Z"
                      fill="#FA58A6"
                    />
                    <path
                      d="M35.9709 27.4697C35.7658 27.2396 35.4521 27.1386 35.1512 27.2057C34.8503 27.2729 34.6094 27.4977 34.5216 27.7931C34.4337 28.0887 34.5128 28.4085 34.7282 28.629L46.6282 41.3791C46.9509 41.7096 47.4785 41.7219 47.8162 41.4067C48.154 41.0916 48.1783 40.5644 47.8709 40.2196L35.9709 27.4697Z"
                      fill="#FA58A6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_143_9665">
                      <rect
                        width="51"
                        height="51"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
              <p className={cx("contact_address-item")}>
                {" "}
                Help.mibeauty@gmail.com
              </p>
            </div>
            <div className={cx("contact_address")}>
              <p className={cx("contact_address-item")}>
                {" "}
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.9824 7.24194C34.9244 8.03321 37.6069 9.5836 39.7611 11.7378C41.9154 13.8921 43.4658 16.5745 44.257 19.5166"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.1865 13.95C31.9513 14.4247 33.5604 15.3548 34.8527 16.6471C36.145 17.9394 37.0751 19.5485 37.5499 21.3133"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.4625 25.6413C19.2621 29.3218 22.2449 32.2917 25.933 34.0755C26.2031 34.2034 26.5018 34.2587 26.7998 34.2359C27.0977 34.213 27.3846 34.1129 27.632 33.9453L33.0639 30.3252C33.3038 30.165 33.5799 30.0672 33.8671 30.0405C34.1544 30.0139 34.4437 30.0592 34.709 30.1725L44.8699 34.5284C45.215 34.675 45.5032 34.9298 45.691 35.2544C45.8788 35.579 45.9561 35.9558 45.9112 36.328C45.5895 38.8409 44.3631 41.1504 42.4616 42.8242C40.56 44.498 38.1135 45.4214 35.5802 45.4216C27.7558 45.4216 20.2518 42.3134 14.7191 36.7807C9.18637 31.248 6.07813 23.744 6.07812 15.9195C6.07836 13.3864 7.00185 10.9402 8.67571 9.0389C10.3496 7.1376 12.659 5.91156 15.1717 5.59033C15.544 5.54543 15.9208 5.6227 16.2454 5.81049C16.5699 5.99829 16.8247 6.28645 16.9713 6.63158L21.3307 16.8011C21.4428 17.0639 21.4883 17.3503 21.4632 17.6348C21.4381 17.9194 21.3431 18.1934 21.1867 18.4324L17.577 23.9476C17.4132 24.1959 17.3165 24.4825 17.2964 24.7794C17.2764 25.0762 17.3336 25.3732 17.4625 25.6413V25.6413Z"
                    stroke="#FA58A6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p className={cx("contact_address-item")}> (+84) 343 281 206</p>
              <p className={cx("contact_address-item")}> (+84) 903 499 519</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
