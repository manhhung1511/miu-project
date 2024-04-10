import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


import styles from "./IntroducePage.module.scss";

const cx = classNames.bind(styles);

export default function IntroducePage() {
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
      Giới thiệu
    </Typography>,
  ];
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
        sx={{ background: "#FBD5E0",padding: {sm: "20px 0", xs: "5px 0" } }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ padding: "20px 8px" }}>
        <Grid container spacing={2}>
          <Grid item sm={6} sx={{ padding: {sm: "90px 90px 90px 20px", xs: "0"} }}>
            <h3 className={cx("introduct_title")}>
              MIBEAUTY - Lan Tỏa Điều Đẹp Đẽ
            </h3>
            <p className={cx("introduct_desc")}>
              Dù chỉ là cửa hàng nhỏ nhắn thuộc Hà Nội xinh đẹp nhưng MIBEAUTY
              thật sự hạnh phúc khi lúc nào cũng nhận được sự yêu thương và ủng
              hộ của các bạn. MIBEAUTY ra đời với niềm tin rằng, mọi chúng ta
              không phân biệt giới tính, tuổi tác đều thuộc về những điều đẹp
              đẽ, tinh tế và lành mạnh nhất ! Hành trình MIBEAUTY chọn là hành
              trình mang đến bạn sự tự tin và xinh đẹp – từ trong ra ngoài –
              theo cách mà chúng ta mong muốn nhất.
            </p>
          </Grid>
          <Grid item sm={6}>
            <div>
              <img
                src="https://i.postimg.cc/c17yCxmJ/Image-6.png"
                alt="image"
              />
            </div>
          </Grid>
          <Grid item sm={12} xs={12} style={{ padding: "40px 0" }}>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://i.postimg.cc/DyDgKsX4/BG.png"
                alt="img"
              />
            </div>
          </Grid>
          <Grid item sm={6} sx={{ padding: {sm: "90px 90px 90px 20px", xs: "0"} }}>
            <div>
              <h3 className={cx("introduct_title")}>
                Mang Lại Trải Nghiệm Hoàn Hảo, Không Ưu Tiên Lợi Nhuận
              </h3>
              <p className={cx("introduct_desc")}>
                Điều mà MIBEAUTY lúc nào cũng ấp ủ đó chính mọi cô gái đều được
                trải nghiệm sản phẩm tuyệt vời với mức giá tốt nhất
              </p>
              <ul className={cx("introduct_desc-list")}>
                <li className={cx("introduct_desc-item")}>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_164_12958)">
                        <rect
                          opacity="0.1"
                          width="20"
                          height="20"
                          rx="10"
                          fill="#FA58A6"
                        />
                        <path
                          d="M14.4166 7.125L8.68742 12.8542L6.08325 10.25"
                          stroke="#FA58A6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_164_12958">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sản phẩm được kiểm định gắt gao, có giấy tờ hợp pháp
                </li>
                <li className={cx("introduct_desc-item")}>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_164_12958)">
                        <rect
                          opacity="0.1"
                          width="20"
                          height="20"
                          rx="10"
                          fill="#FA58A6"
                        />
                        <path
                          d="M14.4166 7.125L8.68742 12.8542L6.08325 10.25"
                          stroke="#FA58A6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_164_12958">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sản phẩm không thí nghiệm trên động vật, thân thiện môi trường
                </li>
                <li className={cx("introduct_desc-item")}>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_164_12958)">
                        <rect
                          opacity="0.1"
                          width="20"
                          height="20"
                          rx="10"
                          fill="#FA58A6"
                        />
                        <path
                          d="M14.4166 7.125L8.68742 12.8542L6.08325 10.25"
                          stroke="#FA58A6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_164_12958">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Tư vấn kĩ càng mọi loại da giúp khách hàng chọn được sản phẩm
                  phù hợp
                </li>
              </ul>
            </div>
            <Link to="/">
              <Button className={cx("order_button")}>
                Mua ngay <span></span>
              </Button>
            </Link>
          </Grid>
          <Grid item sm={6} xs={12} style={{ padding: "40px 0" }}>
            <div>
              <img
                style={{ width: "100%" }}
                src="https://i.postimg.cc/0QWS0RGK/Image-7.png"
                alt="img"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
