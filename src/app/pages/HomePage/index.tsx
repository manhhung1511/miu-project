import classNames from "classnames/bind";

import { Box, Typography } from "@mui/material";

import Banner from "core/app/components/Banner";
import Discount from "core/app/components/Discount";
import Product from "core/app/components/Product";

import styles from "./HomePage.module.scss";
import FeedBack from "core/app/components/Feedback";

const cx = classNames.bind(styles);

export const HomePage = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "80px", lg: "190px" },
      }}
    >
      <div className={cx("banner_main")}>
        <Banner />
      </div>
      <Box
        sx={{
          marginTop: { xs: "20px", sm: "50px" },
        }}
      >
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            padding: "40px 0",
            fontWeight: "600",
          }}
          sx={{ fontSize: { sm: "40px", xs: "20px" } }}
        >
          Sản Phẩm Bán Chạy
        </Typography>
        <Product />
      </Box>

      <Box
        sx={{
          marginTop: { xs: "20px", sm: "50px" },
        }}
      >
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            padding: "40px 0",
            fontWeight: "600",
          }}
          sx={{ fontSize: { sm: "40px", xs: "20px" } }}
        >
          Giảm giá
        </Typography>
        <Discount />
      </Box>

      <Box
        sx={{
          marginTop: { xs: "20px", sm: "50px" },
        }}
      >
        <Typography
          variant="h3"
          style={{
            textAlign: "center",
            padding: "40px 0",
            fontWeight: "600",
          }}
          sx={{ fontSize: { sm: "40px", xs: "20px" }, display: "grid" }}
        >
          Đánh Giá Của Khách Hàng
          <Typography sx={{ display: { sm: "grid", xs: "none" } }}>
            <svg
              style={{ margin: "0 auto" }}
              width="537"
              height="5"
              viewBox="0 0 537 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.15625 0.200195H536.156V4.2002H0.15625V0.200195Z"
                fill="#FA58A6"
              />
            </svg>
          </Typography>
        </Typography>
        <FeedBack/>
      </Box>
    </Box>
  );
};
