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
import styles from "./LikePage.module.scss";

const cx = classNames.bind(styles);

export default function LikePage() {
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
      Yêu thích
    </Typography>,
  ];

  const [number, setNumber] = useState(1);

  const [like, setLike] = useState([]);

  useEffect(() => {
    const allLike = JSON.parse(localStorage.getItem("like") || "[]");
    setLike(allLike);
  }, []);

  interface deleteProps {
    id?: string;
  }
  const handleDelete = (id: deleteProps) => {
    const allLike = JSON.parse(localStorage.getItem("like") || "[]");
    const deleteLike = allLike.filter(item => item.id !== id);
    setLike(deleteLike);
    localStorage.setItem("like", JSON.stringify(deleteLike));
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
      <Container maxWidth="xl" sx={{ paddingTop: {sm: "40px", xs: "20px 5px" } }}>
      <Typography variant="h3" sx={{fontSize: {sm: "24px", xs: "20px"}, fontWeight:'600', padding: '20px 0'}}> Danh sách yêu thích</Typography>

        {/* <h3 style={{ textAlign: "center", marginBottom: "40px" }}>
          Danh sách yêu thích
        </h3> */}
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Grid container spacing={2} sx={{ paddingBottom: "30px" }}>
              <Grid item sm={4} sx={{ color: "#999999", fontWeight: "600", display: {xs: 'none'}  }}>
                SẢN PHẨM
              </Grid>
              <Grid item sm={2} sx={{ color: "#999999", fontWeight: "600", display: {xs: 'none'}  }}>
                ĐƠN GIÁ
              </Grid>
              <Grid item sm={2} sx={{ color: "#999999", fontWeight: "600" , display: {xs: 'none'} }}>
                TRẠNG THÁI
              </Grid>
            </Grid>
            {like &&
              like.map(item => (
                <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
                  <Grid item sm={4}>
                    <div className={cx("cart_name")}>
                      <img
                        style={{ width: "200px", height: "100px" }}
                        src={item.image}
                      />
                      <span style={{ marginLeft: "10px" }}>{item.name}</span>
                    </div>
                  </Grid>
                  <Grid item sm={2}>
                    <p>{item.price}</p>
                  </Grid>
                  <Grid item sm={2}>
                    <div className={cx("status_like")}>Còn hàng</div>
                  </Grid>
                  <Grid item sm={3} sx={{ paddingTop: "0px !important" }}>
                    <Button className={cx("button_buy")} variant="contained">
                      Thêm vào giỏ hàng{" "}
                      <span style={{ marginLeft: "5px" }}>
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.66667 6.83333H3.16667L1.5 16H16.5L14.8333 6.83333H12.3333M5.66667 6.83333V4.33333C5.66667 2.49239 7.15905 1 9 1V1C10.8409 1 12.3333 2.49238 12.3333 4.33333V6.83333M5.66667 6.83333H12.3333M5.66667 6.83333V9.33333M12.3333 6.83333V9.33333"
                            stroke="white"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={1} sx={{ textAlign: "center" }}>
                    <button onClick={() => handleDelete(item.id)}>
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
                </Grid>
              ))}
            <div className={cx("button_bottom")}>
              <div>
                Chia sẻ:
                <span style={{ padding: "0 10px" }}>
                  <svg
                    width="9"
                    height="18"
                    viewBox="0 0 9 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.3575 2.98875H9.00075V0.12675C8.71725 0.08775 7.74225 0 6.60675 0C4.2375 0 2.6145 1.49025 2.6145 4.22925V6.75H0V9.9495H2.6145V18H5.82V9.95025H8.32875L8.727 6.75075H5.81925V4.5465C5.82 3.62175 6.069 2.98875 7.3575 2.98875Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span style={{ padding: "0 10px" }}>
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 1.73138C17.3306 2.025 16.6174 2.21963 15.8737 2.31413C16.6388 1.85738 17.2226 1.13963 17.4971 0.2745C16.7839 0.69975 15.9964 1.00013 15.1571 1.16775C14.4799 0.446625 13.5146 0 12.4616 0C10.4186 0 8.77387 1.65825 8.77387 3.69113C8.77387 3.98363 8.79862 4.26488 8.85938 4.53263C5.7915 4.383 3.07687 2.91263 1.25325 0.67275C0.934875 1.22513 0.748125 1.85738 0.748125 2.538C0.748125 3.816 1.40625 4.94888 2.38725 5.60475C1.79437 5.5935 1.21275 5.42138 0.72 5.15025C0.72 5.1615 0.72 5.17613 0.72 5.19075C0.72 6.984 1.99912 8.4735 3.6765 8.81663C3.37612 8.89875 3.04875 8.93813 2.709 8.93813C2.47275 8.93813 2.23425 8.92463 2.01038 8.87513C2.4885 10.3365 3.84525 11.4109 5.4585 11.4458C4.203 12.4279 2.60888 13.0196 0.883125 13.0196C0.5805 13.0196 0.29025 13.0061 0 12.969C1.63462 14.0231 3.57188 14.625 5.661 14.625C12.4515 14.625 16.164 9 16.164 4.12425C16.164 3.96113 16.1584 3.80363 16.1505 3.64725C16.8829 3.1275 17.4982 2.47838 18 1.73138Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span style={{ padding: "0 10px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9507 5.29205C17.9086 4.33564 17.7539 3.67812 17.5324 3.10836C17.3038 2.50359 16.9522 1.96213 16.4915 1.51201C16.0414 1.05489 15.4963 0.699691 14.8986 0.474702C14.3255 0.253147 13.6714 0.0984842 12.715 0.0563159C11.7515 0.0105764 11.4456 0 9.00174 0C6.55791 0 6.25202 0.0105764 5.29204 0.0527447C4.33563 0.0949129 3.67811 0.249713 3.1085 0.471131C2.50358 0.699691 1.96213 1.05132 1.51201 1.51201C1.05489 1.96213 0.699827 2.50716 0.474701 3.10493C0.253147 3.67812 0.098484 4.33207 0.0563158 5.28848C0.0105764 6.25203 0 6.55792 0 9.00176C0 11.4456 0.0105764 11.7515 0.0527446 12.7115C0.0949128 13.6679 0.249713 14.3254 0.471267 14.8952C0.699827 15.4999 1.05489 16.0414 1.51201 16.4915C1.96213 16.9486 2.50715 17.3038 3.10493 17.5288C3.67811 17.7504 4.33206 17.905 5.28861 17.9472C6.24845 17.9895 6.55448 17.9999 8.99831 17.9999C11.4421 17.9999 11.748 17.9895 12.708 17.9472C13.6644 17.905 14.3219 17.7504 14.8916 17.5288C16.1012 17.0611 17.0577 16.1047 17.5254 14.8952C17.7468 14.322 17.9016 13.6679 17.9437 12.7115C17.9859 11.7515 17.9965 11.4456 17.9965 9.00176C17.9965 6.55792 17.9929 6.25203 17.9507 5.29205ZM16.3298 12.6411C16.2911 13.5202 16.1434 13.9949 16.0203 14.3114C15.7179 15.0956 15.0955 15.7179 14.3114 16.0204C13.9949 16.1434 13.5168 16.2911 12.6411 16.3297C11.6917 16.372 11.407 16.3824 9.00532 16.3824C6.60365 16.3824 6.31534 16.372 5.36937 16.3297C4.4903 16.2911 4.01559 16.1434 3.69913 16.0204C3.3089 15.8761 2.9537 15.6476 2.66539 15.3487C2.3665 15.0568 2.13794 14.7052 1.99372 14.315C1.87065 13.9985 1.72299 13.5202 1.68439 12.6447C1.64209 11.6953 1.63165 11.4104 1.63165 9.00876C1.63165 6.60709 1.64209 6.31878 1.68439 5.37295C1.72299 4.49387 1.87065 4.01917 1.99372 3.7027C2.13794 3.31234 2.3665 2.95727 2.66896 2.66883C2.9607 2.36994 3.31233 2.14138 3.7027 1.99729C4.01917 1.87422 4.49744 1.72656 5.37294 1.68783C6.32235 1.64566 6.60722 1.63508 9.00875 1.63508C11.414 1.63508 11.6987 1.64566 12.6447 1.68783C13.5238 1.72656 13.9985 1.87422 14.3149 1.99729C14.7052 2.14138 15.0604 2.36994 15.3487 2.66883C15.6476 2.96071 15.8761 3.31234 16.0203 3.7027C16.1434 4.01917 16.2911 4.49731 16.3298 5.37295C16.372 6.32236 16.3826 6.60709 16.3826 9.00876C16.3826 11.4104 16.372 11.6917 16.3298 12.6411Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M9.00188 4.37793C6.44912 4.37793 4.37793 6.44898 4.37793 9.00188C4.37793 11.5548 6.44912 13.6258 9.00188 13.6258C11.5548 13.6258 13.6258 11.5548 13.6258 9.00188C13.6258 6.44898 11.5548 4.37793 9.00188 4.37793ZM9.00188 12.0013C7.34578 12.0013 6.00244 10.6581 6.00244 9.00188C6.00244 7.34564 7.34578 6.00244 9.00188 6.00244C10.6581 6.00244 12.0013 7.34564 12.0013 9.00188C12.0013 10.6581 10.6581 12.0013 9.00188 12.0013Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M14.8886 4.19472C14.8886 4.79084 14.4052 5.2742 13.809 5.2742C13.2129 5.2742 12.7295 4.79084 12.7295 4.19472C12.7295 3.59845 13.2129 3.11523 13.809 3.11523C14.4052 3.11523 14.8886 3.59845 14.8886 4.19472Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <Button sx={{ marginRight: "10px" }} className="outlined">
                  Xóa tất cả
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
