import classNames from "classnames/bind";
import React, { useEffect } from "react";
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
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import categories from "../../../datas/categories.json";
import styles from "./CategoryPage.module.scss";
import { useCartStore } from "core/store/useCartStore";
import { useShallow } from "zustand/react/shallow";

const cx = classNames.bind(styles);

export default function CategoryPage() {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const [value, setValue] = React.useState(1);

  const [like, setLike] = React.useState([]);
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const changeCategory = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const allLike = JSON.parse(localStorage.getItem("like") || "[]");
    setLike(allLike);
  }, []);

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
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Danh mục sản phẩm
    </Link>,
    <Typography key="3" color="#999999">
      Tẩy trang
    </Typography>,
  ];

  interface itemLike {
    id: string;
    category: string;
    image?: "string";
    name?: string;
    price?: string;
  }

  function handleLike(item: itemLike) {
    const allLike = JSON.parse(localStorage.getItem("like") || "[]");
    const isExist = allLike.some(current => current.id === item.id);

    // Nếu item chưa tồn tại trong allLike, thêm vào mảng và cập nhật state và localStorage
    if (!isExist) {
      const newArr = [...allLike, item];
      setLike(newArr);
      localStorage.setItem("like", JSON.stringify(newArr));
    }
  }


  const { cart, handleCart } = useCartStore(
    useShallow(state => ({
      cart: state.cart,
      handleCart: state.handleCart,
    })),
  );

  // const [cart, setCart] = React.useState([]);
  const handleAddToCart = (item: propCart) => {
    const allLike = JSON.parse(localStorage.getItem("cart") || "[]");
    const isExist = allLike.some(current => current.id === item.id);

    // Nếu item chưa tồn tại trong allLike, thêm vào mảng và cập nhật state và localStorage
    if (!isExist) {
      const newArr = [...allLike, item];
      // setLike(newArr);
      localStorage.setItem("cart", JSON.stringify(newArr));
      let count = newArr.length;
      handleCart(count);
    }
  };

  const handleUnLike = id => {
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
        sx={{ background: "#FBD5E0", padding: { sm: "20px 0", xs: "5px 0" } }}
      >
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ padding: "20px 4px" }}>
        <Grid container spacing={{ sm: 2, xs: 1 }}>
          <Grid item sm={3}>
            <Button
              variant="contained"
              sx={{ display: { xs: "none", sm: "block" }, marginRight: "10px" }}
            >
              Bộ lọc
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 5H9"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 14H4"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="5" cy="5" r="4" stroke="white" stroke-width="1.5" />
                <circle
                  cx="17"
                  cy="14"
                  r="4"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </Button>
            <Typography
              variant="h3"
              sx={{
                marginTop: { sm: "20px", xs: "0" },
                fontSize: { xs: "18px" },
                fontWeight: "600",
              }}
            >
              Danh mục sản phẩm
            </Typography>
            <FormControl
              sx={{ m: 1, width: "50%", display: { xs: "block", sm: "none" } }}
            >
              <Typography
                variant="h3"
                sx={{
                  margin: { xs: "10px 0" },
                  fontSize: { xs: "16px" },
                }}
              >
                <span style={{ marginRight: "5px" }}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9.33333V10.6667H4V9.33333H0ZM0 1.33333V2.66667H6.66667V1.33333H0ZM6.66667 12V10.6667H12V9.33333H6.66667V8H5.33333V12H6.66667ZM2.66667 4V5.33333H0V6.66667H2.66667V8H4V4H2.66667ZM12 6.66667V5.33333H5.33333V6.66667H12ZM8 4H9.33333V2.66667H12V1.33333H9.33333V0H8V4Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
                Bộ lọc
              </Typography>
              <Select
                value={value}
                onChange={changeCategory}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ fontSize: "15px" }}
                sx={{ width: "200%" }}
              >
                <MenuItem value="1" style={{ fontSize: "15px" }}>
                  Tẩy trang
                </MenuItem>
                <MenuItem value="2" style={{ fontSize: "15px" }}>
                  Sữa rửa mặt
                </MenuItem>
                <MenuItem value="3" style={{ fontSize: "15px" }}>
                  Tẩy da chết
                </MenuItem>
                <MenuItem value="4" style={{ fontSize: "15px" }}>
                  Treatment
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ display: { xs: "none", sm: "block" } }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={value}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FA58A6",
                        },
                      }}
                    />
                  }
                  label="Tẩy trang (34)"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FA58A6",
                        },
                      }}
                    />
                  }
                  label="Sữa rửa mặt (50)"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FA58A6",
                        },
                      }}
                    />
                  }
                  label="Toner (54)"
                />
                <FormControlLabel
                  value="4"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FA58A6",
                        },
                      }}
                    />
                  }
                  label="Tẩy da chết (54)"
                />
                <FormControlLabel
                  value="5"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FA58A6",
                        },
                      }}
                    />
                  }
                  label="Serum (54)"
                />
                <FormControlLabel
                  value="6"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FA58A6",
                        },
                      }}
                    />
                  }
                  label="Treatment (54)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sm={9}>
            <Box
              sx={{ alignItems: "center", display: { xs: "none", sm: "flex" } }}
            >
              <div style={{ marginRight: "10px" }}>Sắp xếp theo</div>
              <div>
                <Button sx={{ marginRight: "10px" }} variant="contained">
                  Mới nhất
                </Button>
                <Button sx={{ marginRight: "10px" }} className="outlined">
                  Phổ biến
                </Button>
                <Button sx={{ marginRight: "10px" }} className="outlined">
                  Giá cao đến thấp
                </Button>
                <Button sx={{ marginRight: "10px" }} className="outlined">
                  Giá thấp đến cao
                </Button>
              </div>
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Grid container spacing={2}>
                {categories?.map(item => {
                  if (item.category == value) {
                    return (
                      <Grid item xs={6} sm={3}>
                        <div className={cx("border_product")}>
                          <Link to={`/detail/${item.id}`}>
                            <div className={cx("product_img")}>
                              <img
                                style={{ width: "100%" }}
                                src={item?.image}
                                alt="product"
                              />
                            </div>
                            <div className={cx("product_content")}>
                              <p
                                style={{ marginLeft: "5px" }}
                                className="product_name"
                              >
                                {item?.name}
                              </p>
                              <ul className={cx("product_content-list")}>
                                <li
                                  style={{ marginLeft: "5px" }}
                                  className={cx("product_content-item")}
                                >
                                  {item?.price}
                                </li>
                                <li className={cx("product_content-item")}>
                                
                                </li>
                              </ul>
                            </div>
                          </Link>

                          <button className={cx("button_add-cart")} onClick={() => handleAddToCart({ ...item, number: "1" })}>
                                    <svg
                                      width="38"
                                      height="38"
                                      viewBox="0 0 38 38"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="18.7072"
                                        cy="18.7072"
                                        r="18.7072"
                                        fill="#F2F2F2"
                                      />
                                      <path
                                        d="M15.1667 16.8333H12.6667L11 26H26L24.3333 16.8333H21.8333M15.1667 16.8333V14.3333C15.1667 12.4924 16.6591 11 18.5 11V11C20.3409 11 21.8333 12.4924 21.8333 14.3333V16.8333M15.1667 16.8333H21.8333M15.1667 16.8333V19.3333M21.8333 16.8333V19.3333"
                                        stroke="#1A1A1A"
                                        stroke-width="1.3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </button>

                          {like.some(current => current.id === item.id) ? (
                            <button
                              className={cx("discount_like")}
                              onClick={() => handleUnLike(item.id)}
                              style={{ background: "#FFF" }}
                            >
                              <svg
                                width="28"
                                height="24"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.8369 23.7983C-12.8293 9.05945 5.83739 -6.94055 13.8369 3.17686C21.8374 -6.94055 40.504 9.05945 13.8369 23.7983Z"
                                  fill="#FA58A6"
                                />
                              </svg>
                            </button>
                          ) : (
                            <button
                              className={cx("discount_like")}
                              onClick={() => handleLike(item)}
                              style={{ background: "#FFF" }}
                            >
                              <svg
                                width="30"
                                height="26"
                                viewBox="0 0 30 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.8369 24.7983C-11.8293 10.0595 6.83739 -5.94055 14.8369 4.17686C22.8374 -5.94055 41.504 10.0595 14.8369 24.7983Z"
                                  stroke="#1A1A1A"
                                  stroke-width="1.5"
                                />
                              </svg>
                            </button>
                          )}

                          {like.length === 0 && (
                            <button
                              className={cx("discount_like")}
                              onClick={() => handleLike(item)}
                              style={{ background: "#FFF" }}
                            >
                              <svg
                                width="30"
                                height="26"
                                viewBox="0 0 30 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.8369 24.7983C-11.8293 10.0595 6.83739 -5.94055 14.8369 4.17686C22.8374 -5.94055 41.504 10.0595 14.8369 24.7983Z"
                                  stroke="#1A1A1A"
                                  stroke-width="1.5"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
