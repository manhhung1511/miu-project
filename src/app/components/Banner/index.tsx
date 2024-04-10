import classNames from "classnames/bind";
import React, { useRef, useState } from "react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Container } from "@mui/material";

import bannerUrl from "core/assets/images/Banner.png";

import Img from "../Img";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function imgUrl() {
  let arr = [
    "https://i.postimg.cc/Y9KGpLQL/Banner.png",

    "https://i.postimg.cc/Y9KGpLQL/Banner.png",
  ];
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

export default function Banner() {
  return (
    <Wrapper>
      <div className="banner-content">
        <div className="banner-img">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={cx("")}
          >
            <SwiperSlide>
              <Img className={cx("image")} src={imgUrl()} />
            </SwiperSlide>
            <SwiperSlide>
              <Img className={cx("image")} src={imgUrl()} />
            </SwiperSlide>
            <SwiperSlide>
              <Img className={cx("image")} src={imgUrl()} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="banner-bottom">
          <Container maxWidth="lg">
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <ul className="banner-bottom-list">
                  <li className="banner-bottom-item">
                    <span className="banner-bottom-span">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.7021 26.3041C31.7247 26.3041 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.859 30.0957 32.5595C30.8043 33.2518 31.7247 33.6346 32.7021 33.6346C34.7058 33.6346 36.3348 31.9893 36.3348 29.9694C36.3348 27.9494 34.7058 26.3041 32.7021 26.3041ZM32.7021 32.0056C31.5781 32.0056 30.6333 31.0771 30.6333 29.9694C30.6333 28.8617 31.5781 27.9331 32.7021 27.9331C33.8098 27.9331 34.7058 28.8454 34.7058 29.9694C34.7058 31.0934 33.8098 32.0056 32.7021 32.0056ZM33.6469 14.0948C33.5003 13.9564 33.3048 13.883 33.1012 13.883H28.9228C28.4749 13.883 28.1083 14.2496 28.1083 14.6975V21.3764C28.1083 21.8244 28.4749 22.1909 28.9228 22.1909H35.5528C36.0008 22.1909 36.3673 21.8244 36.3673 21.3764V16.9048C36.3673 16.6768 36.2696 16.4569 36.0986 16.3021L33.6469 14.0948ZM34.7383 20.5619H29.7373V15.5039H32.7835L34.7383 17.2632V20.5619ZM12.8121 26.3041C11.8347 26.3041 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.859 10.2057 32.5595C10.9143 33.2518 11.8347 33.6346 12.8121 33.6346C14.8157 33.6346 16.4447 31.9893 16.4447 29.9694C16.4447 27.9494 14.8157 26.3041 12.8121 26.3041ZM12.8121 32.0056C11.688 32.0056 10.7432 31.0771 10.7432 29.9694C10.7432 28.8617 11.688 27.9331 12.8121 27.9331C13.9198 27.9331 14.8157 28.8454 14.8157 29.9694C14.8157 31.0934 13.9198 32.0056 12.8121 32.0056ZM7.37935 27.306H5.74221V25.1394C5.74221 24.6914 5.37569 24.3249 4.92771 24.3249C4.47974 24.3249 4.11322 24.6914 4.11322 25.1394V28.1205C4.11322 28.5684 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5684 8.19385 28.1205C8.19385 27.6725 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.3149 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9266L12.3478 19.9836C12.7958 19.9836 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3546 12.3641 18.3546L2.48422 18.2976C2.47607 18.2976 2.47607 18.2976 2.47607 18.2976C2.0281 18.2976 1.66158 18.656 1.66158 19.104C1.65343 19.5601 2.01996 19.9266 2.46793 19.9266ZM4.12951 16.2288H14.0094C14.4573 16.2288 14.8239 15.8623 14.8239 15.4143C14.8239 14.9663 14.4573 14.5998 14.0094 14.5998H4.12951C3.68153 14.5998 3.31501 14.9663 3.31501 15.4143C3.31501 15.8623 3.68153 16.2288 4.12951 16.2288ZM39.6986 15.1292L33.8668 10.2993C33.7202 10.1771 33.541 10.1119 33.3456 10.1119H26.4875V7.17973C26.4875 6.73176 26.121 6.36523 25.673 6.36523H4.92771C4.47974 6.36523 4.11322 6.73176 4.11322 7.17973V13.1419C4.11322 13.5898 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5898 5.74221 13.1419V7.99423H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6725 17.3732 28.1205C17.3732 28.5684 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5684 28.9473 28.1205C28.9473 27.6725 28.5807 27.306 28.1328 27.306H26.4956V11.7409H33.0605L38.371 16.1392L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6562 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5603 39.9348 28.1123L40 15.7645C39.9919 15.5202 39.886 15.284 39.6986 15.1292Z"
                          fill="#FA58A6"
                        />
                      </svg>
                    </span>
                    Miễn phí vẫn chuyển
                  </li>
                  <li className="banner-bottom-item">
                    <span className="banner-bottom-span">
                      <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_950_1744)">
                          <path
                            d="M34.018 15.2101V13.6723C34.018 9.9916 32.7155 6.57143 30.3542 4.03361C27.934 1.42857 24.6063 0 20.976 0H19.7071C16.0768 0 12.7491 1.42857 10.3289 4.03361C7.9676 6.57143 6.66507 9.9916 6.66507 13.6723V15.2101C3.79953 15.4034 1.52222 17.7899 1.52222 20.7059V23.1092C1.52222 26.1429 3.99281 28.6134 7.02642 28.6134H10.1273C10.6819 28.6134 11.1357 28.1597 11.1357 27.605V16.2017C11.1357 15.6471 10.6819 15.1933 10.1273 15.1933H8.68188V13.6723C8.68188 7.02521 13.4214 2.01681 19.6987 2.01681H20.9676C27.2533 2.01681 31.9844 7.02521 31.9844 13.6723V15.1933H30.539C29.9844 15.1933 29.5306 15.6471 29.5306 16.2017V27.5966C29.5306 28.1513 29.9844 28.605 30.539 28.605H31.9508C31.539 33.8655 27.9172 35.084 26.2365 35.3613C25.7743 33.9412 24.4382 32.916 22.8668 32.916H20.3457C18.3962 32.916 16.8079 34.5042 16.8079 36.4538C16.8079 38.4034 18.3962 40 20.3457 40H22.8752C24.5054 40 25.8752 38.8908 26.2869 37.395C27.1105 37.2773 28.413 36.9832 29.7071 36.2269C31.5306 35.1597 33.6903 32.9832 33.976 28.5966C36.8584 28.4202 39.1441 26.0252 39.1441 23.1008V20.6975C39.1525 17.7899 36.8836 15.395 34.018 15.2101ZM9.13566 26.5882H7.04323C5.11886 26.5882 3.55583 25.0252 3.55583 23.1008V20.6975C3.55583 18.7731 5.11886 17.2101 7.04323 17.2101H9.13566V26.5882ZM22.8752 37.9832H20.3457C19.5054 37.9832 18.8247 37.3025 18.8247 36.4622C18.8247 35.6218 19.5054 34.9412 20.3457 34.9412H22.8752C23.7155 34.9412 24.3962 35.6218 24.3962 36.4622C24.3962 37.3025 23.7155 37.9832 22.8752 37.9832ZM37.1357 23.1008C37.1357 25.0252 35.5726 26.5882 33.6483 26.5882H31.5558V17.2101H33.6483C35.5726 17.2101 37.1357 18.7731 37.1357 20.6975V23.1008Z"
                            fill="#FA58A6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_950_1744">
                            <rect
                              width="40"
                              height="40"
                              fill="white"
                              transform="translate(0.333252)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Chăm sóc khách hàng 24/7
                  </li>{" "}
                  <li className="banner-bottom-item">
                    <span className="banner-bottom-span">
                      <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_950_1753)">
                          <path
                            d="M36.6465 34.6678L34.3447 8.72697C34.3033 8.21362 33.8728 7.82447 33.3512 7.82447H28.4992C28.4909 3.51066 24.9802 0 20.6664 0C16.3526 0 12.8419 3.51066 12.8337 7.82447H7.98166C7.46831 7.82447 7.03776 8.21362 6.98808 8.72697L4.68628 34.6678C4.68628 34.7009 4.68628 34.7257 4.68628 34.7589C4.68628 37.6485 7.34411 40 10.6064 40H30.7264C33.9887 40 36.6465 37.6485 36.6465 34.7589C36.6465 34.7257 36.6465 34.7009 36.6465 34.6678ZM20.6664 1.98717C23.8873 1.98717 26.5037 4.6036 26.512 7.82447H14.8208C14.8291 4.6036 17.4455 1.98717 20.6664 1.98717ZM30.7264 38.0046H10.6064C8.45362 38.0046 6.69829 36.5721 6.67345 34.792L8.89245 9.81163H12.8337V13.2975C12.8337 13.8439 13.2808 14.291 13.8272 14.291C14.3737 14.291 14.8208 13.8439 14.8208 13.2975V9.81163H26.512V13.2975C26.512 13.8439 26.9591 14.291 27.5056 14.291C28.052 14.291 28.4992 13.8439 28.4992 13.2975V9.81163H32.4404L34.6594 34.8002C34.6345 36.5721 32.8792 38.0046 30.7264 38.0046Z"
                            fill="#FA58A6"
                          />
                          <path
                            d="M24.798 20.6831L18.9358 26.5453L16.5429 24.1524C16.1538 23.7632 15.5245 23.7632 15.1354 24.1524C14.7462 24.5415 14.7462 25.1708 15.1354 25.56L18.232 28.6566C18.4225 28.8471 18.6791 28.9464 18.9358 28.9464C19.1925 28.9464 19.4409 28.8471 19.6396 28.6566L26.2055 22.0907C26.5947 21.7015 26.5947 21.0723 26.2055 20.6831C25.8164 20.3022 25.1871 20.3022 24.798 20.6831Z"
                            fill="#FA58A6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_950_1753">
                            <rect
                              width="40"
                              height="40"
                              fill="white"
                              transform="translate(0.666504)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    100% Thanh toán an toàn
                  </li>{" "}
                  <li className="banner-bottom-item">
                    <span className="banner-bottom-span">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_950_1764)">
                          <path
                            d="M38.3959 9.43014C38.3959 9.27818 38.3622 9.12621 38.2946 8.98269C38.1595 8.69565 37.8978 8.50148 37.6108 8.44238L20.4137 0.101309C20.1351 -0.0337695 19.8058 -0.0337695 19.5272 0.101309L2.16124 8.51836C1.82354 8.67877 1.60404 9.01646 1.58716 9.39637V9.40481C1.58716 9.41325 1.58716 9.4217 1.58716 9.43858V30.5614C1.58716 30.9498 1.80666 31.3043 2.16124 31.4732L19.5272 39.8903C19.5357 39.8903 19.5357 39.8903 19.5441 39.8987C19.5694 39.9071 19.5948 39.9156 19.6201 39.9325C19.6285 39.9325 19.637 39.9409 19.6539 39.9409C19.6792 39.9493 19.7045 39.9578 19.7298 39.9662C19.7383 39.9662 19.7467 39.9747 19.7552 39.9747C19.7805 39.9831 19.8143 39.9831 19.8396 39.9916C19.848 39.9916 19.8565 39.9916 19.8649 39.9916C19.8987 39.9916 19.9409 40 19.9747 40C20.0084 40 20.0506 40 20.0844 39.9916C20.0929 39.9916 20.1013 39.9916 20.1097 39.9916C20.1351 39.9916 20.1688 39.9831 20.1942 39.9747C20.2026 39.9747 20.211 39.9662 20.2195 39.9662C20.2448 39.9578 20.2701 39.9493 20.2955 39.9409C20.3039 39.9409 20.3124 39.9325 20.3292 39.9325C20.3546 39.924 20.3799 39.9156 20.4052 39.8987C20.4137 39.8987 20.4137 39.8987 20.4221 39.8903L37.8387 31.4479C38.1849 31.279 38.4128 30.9244 38.4128 30.5361V9.45547C38.3959 9.44702 38.3959 9.43858 38.3959 9.43014ZM19.9662 2.13592L35.0274 9.43858L29.4808 12.1317L14.4196 4.82904L19.9662 2.13592ZM19.9662 16.7412L4.90501 9.43858L12.0979 5.95188L27.1591 13.2545L19.9662 16.7412ZM3.61333 11.068L18.9531 18.5057V37.3575L3.61333 29.9198V11.068ZM20.9793 37.3575V18.5057L28.1807 15.0106V19.9409C28.1807 20.4981 28.6365 20.954 29.1937 20.954C29.7509 20.954 30.2068 20.4981 30.2068 19.9409V14.0228L36.3698 11.0342V29.886L20.9793 37.3575Z"
                            fill="#FA58A6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_950_1764">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Đổi trả hàng nhanh chóng
                  </li>
                </ul>
              </Box>
          </Container>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              position: "absolute",
              bottom: "-13%",
              background: "#FFF",
              zIndex: "12",
              padding: "10px",
              justifyContent: "space-between",
              width: "95%",
              left: "3%",
              borderRadius: "10px",
            }}
          >
            <div className="banner-bottom-mobile">
              <p className="banner-bottom-mobile-text">
                <span className="banner-bottom-span">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2633 8.04301C11.8968 8.04301 11.5486 8.19743 11.2859 8.4767C11.0232 8.75926 10.8766 9.12724 10.8766 9.52151C10.8766 9.91577 11.0202 10.2838 11.2859 10.5663C11.5516 10.8456 11.8968 11 12.2633 11C13.0147 11 13.6255 10.3363 13.6255 9.52151C13.6255 8.70669 13.0147 8.04301 12.2633 8.04301ZM12.2633 10.3429C11.8418 10.3429 11.4875 9.96834 11.4875 9.52151C11.4875 9.07467 11.8418 8.70012 12.2633 8.70012C12.6787 8.70012 13.0147 9.0681 13.0147 9.52151C13.0147 9.97491 12.6787 10.3429 12.2633 10.3429ZM12.6176 3.11798C12.5626 3.06213 12.4893 3.03256 12.413 3.03256H10.8461C10.6781 3.03256 10.5406 3.18041 10.5406 3.36111V6.05526C10.5406 6.23596 10.6781 6.38381 10.8461 6.38381H13.3323C13.5003 6.38381 13.6378 6.23596 13.6378 6.05526V4.25149C13.6378 4.1595 13.6011 4.07079 13.537 4.00836L12.6176 3.11798ZM13.0269 5.7267H11.1515V3.68638H12.2938L13.0269 4.39606V5.7267ZM4.80452 8.04301C4.438 8.04301 4.0898 8.19743 3.82712 8.4767C3.56445 8.75926 3.41784 9.12724 3.41784 9.52151C3.41784 9.91577 3.56139 10.2838 3.82712 10.5663C4.09285 10.8456 4.438 11 4.80452 11C5.55589 11 6.16677 10.3363 6.16677 9.52151C6.16677 8.70669 5.55589 8.04301 4.80452 8.04301ZM4.80452 10.3429C4.38302 10.3429 4.02871 9.96834 4.02871 9.52151C4.02871 9.07467 4.38302 8.70012 4.80452 8.70012C5.21991 8.70012 5.55589 9.0681 5.55589 9.52151C5.55589 9.97491 5.21991 10.3429 4.80452 10.3429ZM2.76726 8.44713H2.15333V7.57318C2.15333 7.39247 2.01588 7.24462 1.84789 7.24462C1.6799 7.24462 1.54246 7.39247 1.54246 7.57318V8.77569C1.54246 8.95639 1.6799 9.10424 1.84789 9.10424H2.76726C2.93525 9.10424 3.07269 8.95639 3.07269 8.77569C3.07269 8.59498 2.93525 8.44713 2.76726 8.44713ZM4.31582 6.65651C4.31582 6.47581 4.17838 6.32796 4.01039 6.32796H0.305437C0.137447 6.32796 0 6.47581 0 6.65651C0 6.83722 0.137447 6.98506 0.305437 6.98506H4.01039C4.17838 6.98506 4.31582 6.8405 4.31582 6.65651ZM0.925473 5.47043L4.63042 5.49343C4.79841 5.49343 4.93586 5.34886 4.93891 5.16816C4.94197 4.98417 4.80452 4.83632 4.63653 4.83632L0.931582 4.81332C0.928528 4.81332 0.928528 4.81332 0.928528 4.81332C0.760538 4.81332 0.623091 4.95788 0.623091 5.13859C0.620037 5.32258 0.757483 5.47043 0.925473 5.47043ZM1.54856 3.97879H5.25351C5.4215 3.97879 5.55895 3.83094 5.55895 3.65024C5.55895 3.46953 5.4215 3.32168 5.25351 3.32168H1.54856C1.38057 3.32168 1.24313 3.46953 1.24313 3.65024C1.24313 3.83094 1.38057 3.97879 1.54856 3.97879ZM14.887 3.53524L12.7001 1.58692C12.6451 1.53763 12.5779 1.51135 12.5046 1.51135H9.9328V0.328554C9.9328 0.147849 9.79536 0 9.62737 0H1.84789C1.6799 0 1.54246 0.147849 1.54246 0.328554V2.73357C1.54246 2.91428 1.6799 3.06213 1.84789 3.06213C2.01588 3.06213 2.15333 2.91428 2.15333 2.73357V0.657109H9.32498V8.44713H6.8204C6.65241 8.44713 6.51497 8.59498 6.51497 8.77569C6.51497 8.95639 6.65241 9.10424 6.8204 9.10424H10.5498C10.7178 9.10424 10.8552 8.95639 10.8552 8.77569C10.8552 8.59498 10.7178 8.44713 10.5498 8.44713H9.93586V2.16846H12.3977L14.3891 3.94265L14.3677 8.44056H14.0501C13.8821 8.44056 13.7447 8.58841 13.7447 8.76911C13.7447 8.94982 13.8821 9.09767 14.0501 9.09767H14.6701C14.8381 9.09767 14.9756 8.95311 14.9756 8.7724L15 3.79152C14.9969 3.69295 14.9572 3.59767 14.887 3.53524Z"
                      fill="#FA58A6"
                    />
                  </svg>
                </span>
                Miễn phí vẫn chuyển
              </p>
              <p className="banner-bottom-mobile-text">
                <span className="banner-bottom-span">
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_433_13733)">
                      <path
                        d="M9.94187 4.18277V3.75987C9.94187 2.74769 9.55744 1.80714 8.86051 1.10924C8.14621 0.392857 7.16405 0 6.09261 0H5.7181C4.64665 0 3.66449 0.392857 2.9502 1.10924C2.25326 1.80714 1.86883 2.74769 1.86883 3.75987V4.18277C1.02309 4.23592 0.350952 4.89223 0.350952 5.69412V6.35504C0.350952 7.18929 1.08013 7.8687 1.97548 7.8687H2.89067C3.05437 7.8687 3.1883 7.74391 3.1883 7.59139V4.45546C3.1883 4.30294 3.05437 4.17815 2.89067 4.17815H2.46408V3.75987C2.46408 1.93193 3.86291 0.554622 5.71562 0.554622H6.09013C7.94531 0.554622 9.34166 1.93193 9.34166 3.75987V4.17815H8.91507C8.75138 4.17815 8.61745 4.30294 8.61745 4.45546V7.58908C8.61745 7.7416 8.75138 7.86639 8.91507 7.86639H9.33174C9.21021 9.31303 8.14125 9.64811 7.64521 9.72437C7.5088 9.33382 7.11445 9.05189 6.65065 9.05189H5.90659C5.33119 9.05189 4.86243 9.48866 4.86243 10.0248C4.86243 10.5609 5.33119 11 5.90659 11H6.65313C7.13429 11 7.53856 10.695 7.66009 10.2836C7.90315 10.2513 8.28758 10.1704 8.66953 9.9624C9.20773 9.66891 9.84514 9.07038 9.92947 7.86408C10.7802 7.81555 11.4548 7.15693 11.4548 6.35273V5.69181C11.4573 4.89223 10.7876 4.23361 9.94187 4.18277ZM2.59801 7.31176H1.98044C1.41248 7.31176 0.95116 6.88193 0.95116 6.35273V5.69181C0.95116 5.16261 1.41248 4.73277 1.98044 4.73277H2.59801V7.31176ZM6.65313 10.4454H5.90659C5.65857 10.4454 5.45768 10.2582 5.45768 10.0271C5.45768 9.79601 5.65857 9.60882 5.90659 9.60882H6.65313C6.90115 9.60882 7.10205 9.79601 7.10205 10.0271C7.10205 10.2582 6.90115 10.4454 6.65313 10.4454ZM10.862 6.35273C10.862 6.88193 10.4007 7.31176 9.83274 7.31176H9.21517V4.73277H9.83274C10.4007 4.73277 10.862 5.16261 10.862 5.69181V6.35273Z"
                        fill="#FA58A6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_433_13733">
                        <rect width="11.8057" height="11" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Chăm sóc khách hàng 24/7
              </p>
            </div>
            <div className="banner-bottom-mobile">
              <p className="banner-bottom-mobile-text">
                <span className="banner-bottom-span">
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_433_13739)">
                      <path
                        d="M10.6193 9.53364L9.9399 2.39992C9.92768 2.25875 9.8006 2.15173 9.64665 2.15173H8.21461C8.21217 0.965432 7.17602 0 5.90283 0C4.62964 0 3.59349 0.965432 3.59105 2.15173H2.15901C2.0075 2.15173 1.88042 2.25875 1.86576 2.39992L1.1864 9.53364C1.1864 9.54275 1.1864 9.54958 1.1864 9.55868C1.1864 10.3533 1.97084 11 2.93368 11H8.87198C9.83482 11 10.6193 10.3533 10.6193 9.55868C10.6193 9.54958 10.6193 9.54275 10.6193 9.53364ZM5.90283 0.546471C6.85345 0.546471 7.62567 1.26599 7.62811 2.15173H4.17755C4.17999 1.26599 4.95221 0.546471 5.90283 0.546471ZM8.87198 10.4513H2.93368C2.29831 10.4513 1.78023 10.0573 1.7729 9.56779L2.42782 2.6982H3.59105V3.6568C3.59105 3.80708 3.72301 3.93004 3.8843 3.93004C4.04558 3.93004 4.17755 3.80708 4.17755 3.6568V2.6982H7.62811V3.6568C7.62811 3.80708 7.76008 3.93004 7.92136 3.93004C8.08265 3.93004 8.21461 3.80708 8.21461 3.6568V2.6982H9.37784L10.0328 9.57007C10.0254 10.0573 9.50735 10.4513 8.87198 10.4513Z"
                        fill="#FA58A6"
                      />
                      <path
                        d="M7.12225 5.68785L5.39208 7.29995L4.68584 6.6419C4.57099 6.53489 4.38526 6.53489 4.27041 6.6419C4.15555 6.74892 4.15555 6.92197 4.27041 7.02899L5.18437 7.88057C5.24057 7.93294 5.31633 7.96026 5.39208 7.96026C5.46784 7.96026 5.54115 7.93294 5.5998 7.88057L7.53769 6.07494C7.65255 5.96792 7.65255 5.79487 7.53769 5.68785C7.42283 5.58311 7.23711 5.58311 7.12225 5.68785Z"
                        fill="#FA58A6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_433_13739">
                        <rect width="11.8057" height="11" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                100% Thanh toán an toàn
              </p>
              <p className="banner-bottom-mobile-text">
                <span className="banner-bottom-span">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_433_13747)">
                      <path
                        d="M10.5589 2.59329C10.5589 2.5515 10.5496 2.50971 10.531 2.47024C10.4939 2.3913 10.4219 2.33791 10.343 2.32165L5.61375 0.0278599C5.53714 -0.00928662 5.44659 -0.00928662 5.36998 0.0278599L0.594335 2.34255C0.501469 2.38666 0.441106 2.47953 0.436462 2.584V2.58632C0.436462 2.58864 0.436462 2.59097 0.436462 2.59561V8.40439C0.436462 8.51119 0.496825 8.6087 0.594335 8.65513L5.36998 10.9698C5.3723 10.9698 5.3723 10.9698 5.37462 10.9721C5.38159 10.9745 5.38855 10.9768 5.39552 10.9814C5.39784 10.9814 5.40016 10.9837 5.4048 10.9837C5.41177 10.9861 5.41873 10.9884 5.4257 10.9907C5.42802 10.9907 5.43034 10.993 5.43266 10.993C5.43963 10.9954 5.44892 10.9954 5.45588 10.9977C5.4582 10.9977 5.46052 10.9977 5.46285 10.9977C5.47213 10.9977 5.48374 11 5.49303 11C5.50231 11 5.51392 11 5.52321 10.9977C5.52553 10.9977 5.52785 10.9977 5.53017 10.9977C5.53714 10.9977 5.54642 10.9954 5.55339 10.993C5.55571 10.993 5.55803 10.9907 5.56035 10.9907C5.56732 10.9884 5.57428 10.9861 5.58125 10.9837C5.58357 10.9837 5.58589 10.9814 5.59054 10.9814C5.5975 10.9791 5.60447 10.9768 5.61143 10.9721C5.61375 10.9721 5.61375 10.9721 5.61607 10.9698L10.4056 8.64816C10.5008 8.60173 10.5635 8.50422 10.5635 8.39743V2.60025C10.5589 2.59793 10.5589 2.59561 10.5589 2.59329ZM5.49071 0.587379L9.63254 2.59561L8.10721 3.33622L3.96538 1.32799L5.49071 0.587379ZM5.49071 4.60384L1.34887 2.59561L3.32692 1.63677L7.46876 3.645L5.49071 4.60384ZM0.99366 3.04369L5.21211 5.08907V10.2733L0.99366 8.22794V3.04369ZM5.7693 10.2733V5.08907L7.74968 4.1279V5.48375C7.74968 5.63698 7.87504 5.76235 8.02827 5.76235C8.1815 5.76235 8.30687 5.63698 8.30687 5.48375V3.85627L10.0017 3.0344V8.21866L5.7693 10.2733Z"
                        fill="#FA58A6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_433_13747">
                        <rect width="11" height="11" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Đổi trả hàng nhanh chóng
              </p>
            </div>
          </Box>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .banner-img {
    position: relative;
  }
  .banner-bottom-list {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 91%;
    background-color: rgb(255, 255, 255);
    padding-top: 20px;
    border-radius: 10px;
    left: 12.5%;
    z-index: 100;
  }
  .banner-bottom-item {
    list-style: none;
    padding: 10px 18px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }
  .banner-bottom-span {
    margin-right: 10px;
  }
  img {
    width: 100%;
  }
  .banner-bottom-mobile-text {
    font-size: 11px;
    font-weight: 600;
  }
`;
