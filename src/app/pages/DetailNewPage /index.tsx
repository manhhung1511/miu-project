import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import {
  Box,
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
import styles from "./DetailNewPage.module.scss";
import Breadcrumb from "core/app/components/Breadcrumb";

const cx = classNames.bind(styles);

export default function DetailNewPage() {
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
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Container
        maxWidth="lg"
        sx={{
          // padding: "20px",
          display: { sm: "flex", xs: "none" },
          marginTop: {sm: "60px", xs: "40px"},
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={12} sx={{ marginTop: "10px" }}>
            <img src="https://i.postimg.cc/htBXVLDG/image-17.png" />
            <ul style={{ display: "flex" }}>
              <li style={{ listStyle: "none" }}>
                <span style={{ marginRight: "8px" }}>
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99935 7.46354C8.8403 7.46354 10.3327 5.97116 10.3327 4.13021C10.3327 2.28926 8.8403 0.796875 6.99935 0.796875C5.1584 0.796875 3.66602 2.28926 3.66602 4.13021C3.66602 5.97116 5.1584 7.46354 6.99935 7.46354Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                    <path
                      d="M9.4997 9.96362H4.4997C2.19804 9.96362 0.137203 12.0886 1.65137 13.8211C2.68137 14.9995 4.3847 15.797 6.9997 15.797C9.6147 15.797 11.3172 14.9995 12.3472 13.8211C13.8622 12.0878 11.8005 9.96362 9.4997 9.96362Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                  </svg>
                </span>
                Đăng bởi Admin
              </li>
              <li
                style={{
                  listStyle: "none",
                  marginLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ marginRight: "8px" }}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5238 14.0697L9.48206 15.8056C9.43209 15.8889 9.36139 15.9578 9.27687 16.0057C9.19234 16.0535 9.09686 16.0787 8.99972 16.0787C8.90258 16.0787 8.8071 16.0535 8.72257 16.0057C8.63804 15.9578 8.56735 15.8889 8.51738 15.8056L7.47675 14.0697C7.42671 13.9864 7.35596 13.9175 7.27138 13.8697C7.1868 13.8219 7.09128 13.7968 6.99413 13.7969H2.8125C2.66332 13.7969 2.52024 13.7376 2.41475 13.6321C2.30926 13.5266 2.25 13.3836 2.25 13.2344V4.23438C2.25 4.08519 2.30926 3.94212 2.41475 3.83663C2.52024 3.73114 2.66332 3.67187 2.8125 3.67188H15.1875C15.3367 3.67188 15.4798 3.73114 15.5852 3.83663C15.6907 3.94212 15.75 4.08519 15.75 4.23438V13.2344C15.75 13.3836 15.6907 13.5266 15.5852 13.6321C15.4798 13.7376 15.3367 13.7969 15.1875 13.7969H11.0059C10.9088 13.7969 10.8134 13.822 10.7289 13.8698C10.6445 13.9176 10.5738 13.9865 10.5238 14.0697V14.0697Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <p>65 bình luận</p>
              </li>
            </ul>
          </Grid>

          <Grid item lg={12}>
            <Typography
              variant="h3"
              sx={{
                padding: { sm: "20px 0" },
                fontSize: { sm: "30px" },
                fontWeight: "500",
              }}
            >
              Thay Đổi Làn Da Cùng Sản Phẩm BHA/AHA Nhà Paula’s Choice
            </Typography>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <li style={{ listStyle: "none" }}>
                <div style={{ display: "flex" }}>
                  <img src="https://i.postimg.cc/t42jN4YL/Images.png" />
                  <div style={{ marginLeft: "5px" }}>
                    <p>Cameron Williamson</p>
                    <p>18 Tháng 2, 2021</p>
                  </div>
                </div>
              </li>
              <li style={{ listStyle: "none" }}>
                <span className={cx("detail_icon")}>
                  <svg
                    width="9"
                    height="19"
                    viewBox="0 0 9 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.3575 3.48875H9.00075V0.62675C8.71725 0.58775 7.74225 0.5 6.60675 0.5C4.2375 0.5 2.6145 1.99025 2.6145 4.72925V7.25H0V10.4495H2.6145V18.5H5.82V10.4503H8.32875L8.727 7.25075H5.81925V5.0465C5.82 4.12175 6.069 3.48875 7.3575 3.48875Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span className={cx("detail_icon")}>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2.23138C17.3306 2.525 16.6174 2.71963 15.8737 2.81413C16.6388 2.35738 17.2226 1.63963 17.4971 0.7745C16.7839 1.19975 15.9964 1.50013 15.1571 1.66775C14.4799 0.946625 13.5146 0.5 12.4616 0.5C10.4186 0.5 8.77387 2.15825 8.77387 4.19113C8.77387 4.48363 8.79862 4.76488 8.85938 5.03263C5.7915 4.883 3.07687 3.41263 1.25325 1.17275C0.934875 1.72513 0.748125 2.35738 0.748125 3.038C0.748125 4.316 1.40625 5.44888 2.38725 6.10475C1.79437 6.0935 1.21275 5.92138 0.72 5.65025C0.72 5.6615 0.72 5.67613 0.72 5.69075C0.72 7.484 1.99912 8.9735 3.6765 9.31663C3.37612 9.39875 3.04875 9.43813 2.709 9.43813C2.47275 9.43813 2.23425 9.42463 2.01038 9.37513C2.4885 10.8365 3.84525 11.9109 5.4585 11.9458C4.203 12.9279 2.60888 13.5196 0.883125 13.5196C0.5805 13.5196 0.29025 13.5061 0 13.469C1.63462 14.5231 3.57188 15.125 5.661 15.125C12.4515 15.125 16.164 9.5 16.164 4.62425C16.164 4.46113 16.1584 4.30363 16.1505 4.14725C16.8829 3.6275 17.4982 2.97838 18 2.23138Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span className={cx("detail_icon")}>
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.55696 0.5C2.62362 0.5 0 3.66139 0 7.10855C0 8.70724 0.89329 10.7008 2.32323 11.3331C2.54036 11.431 2.65849 11.3894 2.70687 11.188C2.74962 11.035 2.93751 10.2981 3.02864 9.95042C3.05676 9.83904 3.04214 9.74229 2.95213 9.63766C2.47736 9.08864 2.10047 8.08847 2.10047 7.15017C2.10047 4.74594 4.01193 2.41146 7.26445 2.41146C10.0771 2.41146 12.0448 4.23854 12.0448 6.85204C12.0448 9.80529 10.4821 11.8484 8.45138 11.8484C7.32745 11.8484 6.49042 10.9663 6.75593 9.87505C7.07657 8.57561 7.70547 7.1783 7.70547 6.24113C7.70547 5.40072 7.2307 4.70544 6.26091 4.70544C5.11673 4.70544 4.18856 5.83837 4.18856 7.35943C4.18856 8.32585 4.53058 8.97838 4.53058 8.97838C4.53058 8.97838 3.39878 13.5506 3.18839 14.4045C2.83288 15.8502 3.23677 18.1914 3.27165 18.3928C3.29302 18.5042 3.4179 18.5391 3.48766 18.4479C3.59904 18.3017 4.9671 16.3497 5.35074 14.9389C5.49025 14.4248 6.0629 12.34 6.0629 12.34C6.43979 13.0207 7.52771 13.5911 8.68651 13.5911C12.1337 13.5911 14.6245 10.5613 14.6245 6.80141C14.6122 3.19675 11.5273 0.5 7.55696 0.5Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span className={cx("detail_icon")}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9507 5.79205C17.9086 4.83564 17.7539 4.17812 17.5324 3.60836C17.3038 3.00359 16.9522 2.46213 16.4915 2.01201C16.0414 1.55489 15.4963 1.19969 14.8986 0.974702C14.3255 0.753147 13.6714 0.598484 12.715 0.556316C11.7515 0.510576 11.4456 0.5 9.00174 0.5C6.55791 0.5 6.25202 0.510576 5.29204 0.552745C4.33563 0.594913 3.67811 0.749713 3.1085 0.971131C2.50358 1.19969 1.96213 1.55132 1.51201 2.01201C1.05489 2.46213 0.699827 3.00716 0.474701 3.60493C0.253147 4.17812 0.098484 4.83207 0.0563158 5.78848C0.0105764 6.75203 0 7.05792 0 9.50176C0 11.9456 0.0105764 12.2515 0.0527446 13.2115C0.0949128 14.1679 0.249713 14.8254 0.471267 15.3952C0.699827 15.9999 1.05489 16.5414 1.51201 16.9915C1.96213 17.4486 2.50715 17.8038 3.10493 18.0288C3.67811 18.2504 4.33206 18.405 5.28861 18.4472C6.24845 18.4895 6.55448 18.4999 8.99831 18.4999C11.4421 18.4999 11.748 18.4895 12.708 18.4472C13.6644 18.405 14.3219 18.2504 14.8916 18.0288C16.1012 17.5611 17.0577 16.6047 17.5254 15.3952C17.7468 14.822 17.9016 14.1679 17.9437 13.2115C17.9859 12.2515 17.9965 11.9456 17.9965 9.50176C17.9965 7.05792 17.9929 6.75203 17.9507 5.79205ZM16.3298 13.1411C16.2911 14.0202 16.1434 14.4949 16.0203 14.8114C15.7179 15.5956 15.0955 16.2179 14.3114 16.5204C13.9949 16.6434 13.5168 16.7911 12.6411 16.8297C11.6917 16.872 11.407 16.8824 9.00532 16.8824C6.60365 16.8824 6.31534 16.872 5.36937 16.8297C4.4903 16.7911 4.01559 16.6434 3.69913 16.5204C3.3089 16.3761 2.9537 16.1476 2.66539 15.8487C2.3665 15.5568 2.13794 15.2052 1.99372 14.815C1.87065 14.4985 1.72299 14.0202 1.68439 13.1447C1.64209 12.1953 1.63165 11.9104 1.63165 9.50876C1.63165 7.10709 1.64209 6.81878 1.68439 5.87295C1.72299 4.99387 1.87065 4.51917 1.99372 4.2027C2.13794 3.81234 2.3665 3.45727 2.66896 3.16883C2.9607 2.86994 3.31233 2.64138 3.7027 2.49729C4.01917 2.37422 4.49744 2.22656 5.37294 2.18783C6.32235 2.14566 6.60722 2.13508 9.00875 2.13508C11.414 2.13508 11.6987 2.14566 12.6447 2.18783C13.5238 2.22656 13.9985 2.37422 14.3149 2.49729C14.7052 2.64138 15.0604 2.86994 15.3487 3.16883C15.6476 3.46071 15.8761 3.81234 16.0203 4.2027C16.1434 4.51917 16.2911 4.99731 16.3298 5.87295C16.372 6.82236 16.3826 7.10709 16.3826 9.50876C16.3826 11.9104 16.372 12.1917 16.3298 13.1411Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M9.00188 4.87793C6.44912 4.87793 4.37793 6.94898 4.37793 9.50188C4.37793 12.0548 6.44912 14.1258 9.00188 14.1258C11.5548 14.1258 13.6258 12.0548 13.6258 9.50188C13.6258 6.94898 11.5548 4.87793 9.00188 4.87793ZM9.00188 12.5013C7.34578 12.5013 6.00244 11.1581 6.00244 9.50188C6.00244 7.84564 7.34578 6.50244 9.00188 6.50244C10.6581 6.50244 12.0013 7.84564 12.0013 9.50188C12.0013 11.1581 10.6581 12.5013 9.00188 12.5013Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M14.8881 4.69472C14.8881 5.29084 14.4048 5.7742 13.8085 5.7742C13.2124 5.7742 12.729 5.29084 12.729 4.69472C12.729 4.09845 13.2124 3.61523 13.8085 3.61523C14.4048 3.61523 14.8881 4.09845 14.8881 4.69472Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </Grid>
          
          <Grid item lg={12}>
            <Typography
              variant="h3"
              sx={{
                padding: { sm: "20px 0" },
                fontSize: { sm: "30px" },
                fontWeight: "500",
                color: "#FA58A6",
                textAlign: 'center',
              }}
            >
             ĐIỂM NỔI BẬT CỦA SẢN PHẨM
            </Typography>
           
            <Typography
              variant="p"
              sx={{
                fontSize: { sm: "18px" },
                fontWeight: "500",
                textAlign: 'center',
              }}
            >
             Loại bỏ tế bào chết hóa học Skin Perfecting 2% BHA Liquid Exfoliant với 2% Salicylic Acid hoạt động trên nền Butylene Glycol an toàn, lành tính giúp loại bỏ bụi bẩn, bã nhờn và tạp chất từ sâu bên trong, giảm tình trạng bít tắc lỗ chân lông, cải thiện tình trạng lỗ chân lông to và ngăn ngừa nguy cơ hình thành mụn.
            </Typography>
          </Grid>
          <Grid item lg={6}>
              <img src="https://i.postimg.cc/BZ7JsZTS/image-18.png" />
          </Grid>

          <Grid item lg={6}>
              <div className={cx("box_content")} style={{padding: "66px 0 0 70px"}}>
                  <h3>
                  ĐÁNH GIÁ CỦA KHÁCH HÀNG
                  </h3>
                  <ul>
                    <li>
                    91% Khách hàng đồng ý da khỏe hơn trông thấy
                    </li>
                    <li>
                    90% Khách hàng nhận thấy da mịn màng hơn
                    </li>
                    <li>
                    82% Khách hàng nhận định lỗ chân lông được thu nhỏ
                    </li>
                  </ul>
                  <p>
                  Kết quả dựa trên đánh giá khách quan của khách hàng sau 4 tuần sử dụng.
                  </p>
              </div>
          </Grid>

          <Grid item lg={6}>
          <div className={cx("box_content")} style={{padding: "90px 0 0 90px"}}>
                  <h3>
                  XỬ LÝ VẤN ĐỀ
                  </h3>
                  <ul>
                    <li>
                    Lỗ chân lông to
                    </li>
                    <li>
                    Lỗ chân lông bít tắc
                    </li>
                    <li>
                    Các dấu hiệu lão hóa
                    </li>
                  </ul>
              </div>
          </Grid>

          <Grid item lg={6} sx={{paddingTop: "0px !important", paddingLeft: "0px !important"}}>
          <img src="https://i.postimg.cc/x8jfTcC5/image-19.png" />
          </Grid>
          
          <Grid item lg={12}>
          
            <Typography
              variant="h3"
              sx={{
                padding: { sm: "20px 0" },
                fontSize: { sm: "30px" },
                fontWeight: "500",
                color: "#FA58A6",
                textAlign: 'center',
              }}
            >
                           CÔNG THỨC THÀNH PHẦN TẬP TRUNG

            </Typography>
          </Grid>
          <Grid item lg={4}>
          <div className={cx("box_content")} style={{padding: "0px 0 60px 60px"}}>
                  <h3 style={{fontSize: "24px", paddingBottom: "20px"}}>
                  SALICYLIC ACID
                  </h3>
                  <ul>
                    <li>
                    Loại bỏ tế bào chết, bụi bẩn, bã nhờn
                    </li>
                    <li>
                    Hỗ trợ thu nhỏ kích thước lỗ chân lông
                    </li>
                    <li>
                    Ngăn ngừa nguy cơ hình thành mụn
                    </li>
                  </ul>
              </div>

              <img src="https://i.postimg.cc/7PQ187bK/image-20.png" />
              </Grid>

              <Grid item lg={4}>
          <div className={cx("box_content")} style={{padding: "0px 0 60px 10px"}}>
                  <h3 style={{fontSize: "24px", paddingBottom: "20px"}}>
                  CHIẾT XUẤT TRÀ XANH
                  </h3>
                  <ul>
                    <li>
                    Hỗ trợ phục hồi da
                    </li>
                    <li>
                    Giảm mẩn đỏ, kích ứng
                    </li>
                    <li>
                    Các dấu hiệu lão hóa
                    </li>
                  </ul>
              </div>

              <img src="https://i.postimg.cc/CKmBCTqc/image-21.png" />
              </Grid>
              <Grid item lg={4}>
          <div className={cx("box_content")} style={{padding: "0px 0 10px 60px"}}>
                  <h3 style={{fontSize: "24px", paddingBottom: "20px"}}>
                  METHYLPROPANEDIOL
                  </h3>
                  <ul>
                    <li>
                    Cung cấp độ ẩm cần thiết
                    </li>
                    <li>
                    Tăng cường khả năng thẩm thấu và phát huy
                    </li>
                    <li>
                    Hạn chế tình trạng khô da, bong tróc do Salicylic Acid gây ra 
                    </li>
                  </ul>
              </div>

              <img src="https://i.postimg.cc/5jd69fh2/image-22.png" />
              </Grid>

              <Grid item lg={8} sx={{marginTop: "20px"}}>
              <h3 style={{fontSize: "24px", marginBottom: "10px"}}>Để lại bình luận</h3>

              <Grid container spacing={2}>
              <Grid item lg={6}>
                <div className={cx("input_form")}>
                  <label>Họ</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className={cx("input_form")}>
                  <label>Tên</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item lg={12}>
                <div className={cx("input_form")} style={{ marginTop: "20px" }}>
                    <label>Ghi chú</label>
                    <textarea rows="8" cols="100"></textarea>
                  </div>
              </Grid>
            </Grid>
              </Grid>
              <Grid item lg={12}>
                  <Button style={{padding:"10px 30px", borderRadius: "30px"}}>Đăng bình luận</Button>
              </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          // padding: "20px",
          display: { sm: "none", xs: "flex" },
          marginTop: {sm: "60px", xs: "40px"},
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ marginTop: "10px" }}>
            <img style={{width: "100%"}} src="https://i.postimg.cc/rmbSxqYB/image-16.png" />
            <ul style={{ display: "flex" }}>
              <li style={{ listStyle: "none" }}>
                <span style={{ marginRight: "8px" }}>
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99935 7.46354C8.8403 7.46354 10.3327 5.97116 10.3327 4.13021C10.3327 2.28926 8.8403 0.796875 6.99935 0.796875C5.1584 0.796875 3.66602 2.28926 3.66602 4.13021C3.66602 5.97116 5.1584 7.46354 6.99935 7.46354Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                    <path
                      d="M9.4997 9.96362H4.4997C2.19804 9.96362 0.137203 12.0886 1.65137 13.8211C2.68137 14.9995 4.3847 15.797 6.9997 15.797C9.6147 15.797 11.3172 14.9995 12.3472 13.8211C13.8622 12.0878 11.8005 9.96362 9.4997 9.96362Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                    />
                  </svg>
                </span>
                Đăng bởi Admin
              </li>
              <li
                style={{
                  listStyle: "none",
                  marginLeft: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ marginRight: "8px" }}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5238 14.0697L9.48206 15.8056C9.43209 15.8889 9.36139 15.9578 9.27687 16.0057C9.19234 16.0535 9.09686 16.0787 8.99972 16.0787C8.90258 16.0787 8.8071 16.0535 8.72257 16.0057C8.63804 15.9578 8.56735 15.8889 8.51738 15.8056L7.47675 14.0697C7.42671 13.9864 7.35596 13.9175 7.27138 13.8697C7.1868 13.8219 7.09128 13.7968 6.99413 13.7969H2.8125C2.66332 13.7969 2.52024 13.7376 2.41475 13.6321C2.30926 13.5266 2.25 13.3836 2.25 13.2344V4.23438C2.25 4.08519 2.30926 3.94212 2.41475 3.83663C2.52024 3.73114 2.66332 3.67187 2.8125 3.67188H15.1875C15.3367 3.67188 15.4798 3.73114 15.5852 3.83663C15.6907 3.94212 15.75 4.08519 15.75 4.23438V13.2344C15.75 13.3836 15.6907 13.5266 15.5852 13.6321C15.4798 13.7376 15.3367 13.7969 15.1875 13.7969H11.0059C10.9088 13.7969 10.8134 13.822 10.7289 13.8698C10.6445 13.9176 10.5738 13.9865 10.5238 14.0697V14.0697Z"
                      stroke="#B3B3B3"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <p>65 bình luận</p>
              </li>
            </ul>
          </Grid>

          <Grid item lg={12}>
            <Typography
              variant="h3"
              sx={{
                padding: { xs: "0 0 20px 0" },
                fontSize: { xs: "22px" },
                fontWeight: "500",
              }}
            >
              Thay Đổi Làn Da Cùng Sản Phẩm BHA/AHA Nhà Paula’s Choice
            </Typography>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <li style={{ listStyle: "none" }}>
                <div style={{ display: "flex" }}>
                  <img src="https://i.postimg.cc/t42jN4YL/Images.png" />
                  <div style={{ marginLeft: "5px" }}>
                    <p>Cameron Williamson</p>
                    <p>18 Tháng 2, 2021</p>
                  </div>
                </div>
              </li>
              <li style={{ listStyle: "none" }}>
                <span className={cx("detail_icon")}>
                  <svg
                    width="9"
                    height="19"
                    viewBox="0 0 9 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.3575 3.48875H9.00075V0.62675C8.71725 0.58775 7.74225 0.5 6.60675 0.5C4.2375 0.5 2.6145 1.99025 2.6145 4.72925V7.25H0V10.4495H2.6145V18.5H5.82V10.4503H8.32875L8.727 7.25075H5.81925V5.0465C5.82 4.12175 6.069 3.48875 7.3575 3.48875Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span className={cx("detail_icon")}>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2.23138C17.3306 2.525 16.6174 2.71963 15.8737 2.81413C16.6388 2.35738 17.2226 1.63963 17.4971 0.7745C16.7839 1.19975 15.9964 1.50013 15.1571 1.66775C14.4799 0.946625 13.5146 0.5 12.4616 0.5C10.4186 0.5 8.77387 2.15825 8.77387 4.19113C8.77387 4.48363 8.79862 4.76488 8.85938 5.03263C5.7915 4.883 3.07687 3.41263 1.25325 1.17275C0.934875 1.72513 0.748125 2.35738 0.748125 3.038C0.748125 4.316 1.40625 5.44888 2.38725 6.10475C1.79437 6.0935 1.21275 5.92138 0.72 5.65025C0.72 5.6615 0.72 5.67613 0.72 5.69075C0.72 7.484 1.99912 8.9735 3.6765 9.31663C3.37612 9.39875 3.04875 9.43813 2.709 9.43813C2.47275 9.43813 2.23425 9.42463 2.01038 9.37513C2.4885 10.8365 3.84525 11.9109 5.4585 11.9458C4.203 12.9279 2.60888 13.5196 0.883125 13.5196C0.5805 13.5196 0.29025 13.5061 0 13.469C1.63462 14.5231 3.57188 15.125 5.661 15.125C12.4515 15.125 16.164 9.5 16.164 4.62425C16.164 4.46113 16.1584 4.30363 16.1505 4.14725C16.8829 3.6275 17.4982 2.97838 18 2.23138Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span className={cx("detail_icon")}>
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.55696 0.5C2.62362 0.5 0 3.66139 0 7.10855C0 8.70724 0.89329 10.7008 2.32323 11.3331C2.54036 11.431 2.65849 11.3894 2.70687 11.188C2.74962 11.035 2.93751 10.2981 3.02864 9.95042C3.05676 9.83904 3.04214 9.74229 2.95213 9.63766C2.47736 9.08864 2.10047 8.08847 2.10047 7.15017C2.10047 4.74594 4.01193 2.41146 7.26445 2.41146C10.0771 2.41146 12.0448 4.23854 12.0448 6.85204C12.0448 9.80529 10.4821 11.8484 8.45138 11.8484C7.32745 11.8484 6.49042 10.9663 6.75593 9.87505C7.07657 8.57561 7.70547 7.1783 7.70547 6.24113C7.70547 5.40072 7.2307 4.70544 6.26091 4.70544C5.11673 4.70544 4.18856 5.83837 4.18856 7.35943C4.18856 8.32585 4.53058 8.97838 4.53058 8.97838C4.53058 8.97838 3.39878 13.5506 3.18839 14.4045C2.83288 15.8502 3.23677 18.1914 3.27165 18.3928C3.29302 18.5042 3.4179 18.5391 3.48766 18.4479C3.59904 18.3017 4.9671 16.3497 5.35074 14.9389C5.49025 14.4248 6.0629 12.34 6.0629 12.34C6.43979 13.0207 7.52771 13.5911 8.68651 13.5911C12.1337 13.5911 14.6245 10.5613 14.6245 6.80141C14.6122 3.19675 11.5273 0.5 7.55696 0.5Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
                <span className={cx("detail_icon")}>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9507 5.79205C17.9086 4.83564 17.7539 4.17812 17.5324 3.60836C17.3038 3.00359 16.9522 2.46213 16.4915 2.01201C16.0414 1.55489 15.4963 1.19969 14.8986 0.974702C14.3255 0.753147 13.6714 0.598484 12.715 0.556316C11.7515 0.510576 11.4456 0.5 9.00174 0.5C6.55791 0.5 6.25202 0.510576 5.29204 0.552745C4.33563 0.594913 3.67811 0.749713 3.1085 0.971131C2.50358 1.19969 1.96213 1.55132 1.51201 2.01201C1.05489 2.46213 0.699827 3.00716 0.474701 3.60493C0.253147 4.17812 0.098484 4.83207 0.0563158 5.78848C0.0105764 6.75203 0 7.05792 0 9.50176C0 11.9456 0.0105764 12.2515 0.0527446 13.2115C0.0949128 14.1679 0.249713 14.8254 0.471267 15.3952C0.699827 15.9999 1.05489 16.5414 1.51201 16.9915C1.96213 17.4486 2.50715 17.8038 3.10493 18.0288C3.67811 18.2504 4.33206 18.405 5.28861 18.4472C6.24845 18.4895 6.55448 18.4999 8.99831 18.4999C11.4421 18.4999 11.748 18.4895 12.708 18.4472C13.6644 18.405 14.3219 18.2504 14.8916 18.0288C16.1012 17.5611 17.0577 16.6047 17.5254 15.3952C17.7468 14.822 17.9016 14.1679 17.9437 13.2115C17.9859 12.2515 17.9965 11.9456 17.9965 9.50176C17.9965 7.05792 17.9929 6.75203 17.9507 5.79205ZM16.3298 13.1411C16.2911 14.0202 16.1434 14.4949 16.0203 14.8114C15.7179 15.5956 15.0955 16.2179 14.3114 16.5204C13.9949 16.6434 13.5168 16.7911 12.6411 16.8297C11.6917 16.872 11.407 16.8824 9.00532 16.8824C6.60365 16.8824 6.31534 16.872 5.36937 16.8297C4.4903 16.7911 4.01559 16.6434 3.69913 16.5204C3.3089 16.3761 2.9537 16.1476 2.66539 15.8487C2.3665 15.5568 2.13794 15.2052 1.99372 14.815C1.87065 14.4985 1.72299 14.0202 1.68439 13.1447C1.64209 12.1953 1.63165 11.9104 1.63165 9.50876C1.63165 7.10709 1.64209 6.81878 1.68439 5.87295C1.72299 4.99387 1.87065 4.51917 1.99372 4.2027C2.13794 3.81234 2.3665 3.45727 2.66896 3.16883C2.9607 2.86994 3.31233 2.64138 3.7027 2.49729C4.01917 2.37422 4.49744 2.22656 5.37294 2.18783C6.32235 2.14566 6.60722 2.13508 9.00875 2.13508C11.414 2.13508 11.6987 2.14566 12.6447 2.18783C13.5238 2.22656 13.9985 2.37422 14.3149 2.49729C14.7052 2.64138 15.0604 2.86994 15.3487 3.16883C15.6476 3.46071 15.8761 3.81234 16.0203 4.2027C16.1434 4.51917 16.2911 4.99731 16.3298 5.87295C16.372 6.82236 16.3826 7.10709 16.3826 9.50876C16.3826 11.9104 16.372 12.1917 16.3298 13.1411Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M9.00188 4.87793C6.44912 4.87793 4.37793 6.94898 4.37793 9.50188C4.37793 12.0548 6.44912 14.1258 9.00188 14.1258C11.5548 14.1258 13.6258 12.0548 13.6258 9.50188C13.6258 6.94898 11.5548 4.87793 9.00188 4.87793ZM9.00188 12.5013C7.34578 12.5013 6.00244 11.1581 6.00244 9.50188C6.00244 7.84564 7.34578 6.50244 9.00188 6.50244C10.6581 6.50244 12.0013 7.84564 12.0013 9.50188C12.0013 11.1581 10.6581 12.5013 9.00188 12.5013Z"
                      fill="#B3B3B3"
                    />
                    <path
                      d="M14.8881 4.69472C14.8881 5.29084 14.4048 5.7742 13.8085 5.7742C13.2124 5.7742 12.729 5.29084 12.729 4.69472C12.729 4.09845 13.2124 3.61523 13.8085 3.61523C14.4048 3.61523 14.8881 4.09845 14.8881 4.69472Z"
                      fill="#B3B3B3"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </Grid>
          
          <Grid item lg={12}>
            <Typography
              variant="h3"
              sx={{
                padding: { xs: "10px 0 20px 0" },
                fontSize: { xs: "20px" },
                fontWeight: "500",
                color: "#FA58A6",
                textAlign: 'center',
              }}
            >
             ĐIỂM NỔI BẬT CỦA SẢN PHẨM
            </Typography>
           
            <Typography
              variant="p"
              sx={{
                fontSize: { sm: "18px" },
                fontWeight: "500",
                textAlign: 'center',
              }}
            >
             Loại bỏ tế bào chết hóa học Skin Perfecting 2% BHA Liquid Exfoliant với 2% Salicylic Acid hoạt động trên nền Butylene Glycol an toàn, lành tính giúp loại bỏ bụi bẩn, bã nhờn và tạp chất từ sâu bên trong, giảm tình trạng bít tắc lỗ chân lông, cải thiện tình trạng lỗ chân lông to và ngăn ngừa nguy cơ hình thành mụn.
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <img src="https://i.postimg.cc/BZ7JsZTS/image-18.png" />
          </Grid>

          <Grid item xs={12}>
              <div className={cx("box_content")}>
                  <h3 style={{fontSize: '20px'}}>
                  ĐÁNH GIÁ CỦA KHÁCH HÀNG
                  </h3>
                  <ul style={{padding: '0 10px'}}>
                    <li>
                    91% Khách hàng đồng ý da khỏe hơn trông thấy
                    </li>
                    <li>
                    90% Khách hàng nhận thấy da mịn màng hơn
                    </li>
                    <li>
                    82% Khách hàng nhận định lỗ chân lông được thu nhỏ
                    </li>
                  </ul>
                  <p>
                  Kết quả dựa trên đánh giá khách quan của khách hàng sau 4 tuần sử dụng.
                  </p>
              </div>
          </Grid>
          <Grid item xs={12}>
          
          <Typography
            variant="h3"
            sx={{
              padding: { xs: "20px 0" },
              fontSize: { xs: "20px" },
              fontWeight: "500",
              color: "#FA58A6",
              textAlign: 'center',
            }}
          >
                         CÔNG THỨC THÀNH PHẦN TẬP TRUNG

          </Typography>
        </Grid>
          <Grid item xs={12}>
          <div className={cx("box_content")}>
                  <h3 style={{fontSize: "20px", textAlign: 'center'}}>
                  XỬ LÝ VẤN ĐỀ
                  </h3>
                  <ul style={{marginLeft: "100px"}}>
                    <li>
                    Lỗ chân lông to
                    </li>
                    <li>
                    Lỗ chân lông bít tắc
                    </li>
                    <li>
                    Các dấu hiệu lão hóa
                    </li>
                  </ul>
              </div>
          </Grid>

          <Grid item xs={12} sx={{paddingTop: "0px !important", paddingLeft: "0px !important"}}>
          <img src="https://i.postimg.cc/x8jfTcC5/image-19.png" />
          </Grid>
          
      
          <Grid item xs={12}>
          <div className={cx("box_content")}>
                  <h3 style={{fontSize: "24px", paddingBottom: "20px", paddingLeft: "50px"}}>
                  SALICYLIC ACID
                  </h3>
                  <ul style={{paddingLeft: "50px"}}>
                    <li>
                    Loại bỏ tế bào chết, bụi bẩn, bã nhờn
                    </li>
                    <li>
                    Hỗ trợ thu nhỏ kích thước lỗ chân lông
                    </li>
                    <li>
                    Ngăn ngừa nguy cơ hình thành mụn
                    </li>
                  </ul>
              </div>

              <img src="https://i.postimg.cc/7PQ187bK/image-20.png" />
              </Grid>

              <Grid item xs={12}>
          <div className={cx("box_content")} style={{padding: "0px 0 10px 40px"}}>
                  <h3 style={{fontSize: "24px", paddingBottom: "20px"}}>
                  CHIẾT XUẤT TRÀ XANH
                  </h3>
                  <ul>
                    <li>
                    Hỗ trợ phục hồi da
                    </li>
                    <li>
                    Giảm mẩn đỏ, kích ứng
                    </li>
                    <li>
                    Các dấu hiệu lão hóa
                    </li>
                  </ul>
              </div>

              <img src="https://i.postimg.cc/CKmBCTqc/image-21.png" />
              </Grid>
              <Grid item xs={12}>
          <div className={cx("box_content")} style={{padding: "0px 0 10px 40px"}}>
                  <h3 style={{fontSize: "24px", paddingBottom: "20px"}}>
                  METHYLPROPANEDIOL
                  </h3>
                  <ul>
                    <li>
                    Cung cấp độ ẩm cần thiết
                    </li>
                    <li>
                    Tăng cường khả năng thẩm thấu và phát huy
                    </li>
                    <li>
                    Hạn chế tình trạng khô da, bong tróc do Salicylic Acid gây ra 
                    </li>
                  </ul>
              </div>

              <img src="https://i.postimg.cc/5jd69fh2/image-22.png" />
              </Grid>

              <Grid item xs={12} sx={{marginTop: "20px"}}>
              <h3 style={{fontSize: "24px", marginBottom: "10px"}}>Để lại bình luận</h3>

              <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className={cx("input_form")}>
                  <label>Họ</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={cx("input_form")}>
                  <label>Tên</label>
                  <input type="text" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={cx("input_form")} style={{ marginTop: "20px" }}>
                    <label>Ghi chú</label>
                    <textarea rows="8" cols="100"></textarea>
                  </div>
              </Grid>
            </Grid>
              </Grid>
              <Grid item lg={12} sx={{marginTop: '30px'}}>
                  <Button style={{padding:"10px 30px", borderRadius: "30px"}}>Đăng bình luận</Button>
              </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
