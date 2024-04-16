import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useShallow } from "zustand/react/shallow";

import { Container, Grid } from "@mui/material";

import bannerUrl from "core/assets/images/Image.png";
import discountUrl from "core/assets/images/image 1.png";
import { useCartStore } from "core/store/useCartStore";

import discounts from "../../../datas/discount.json";

export default function Discount() {
  interface propCart {
    id?: string;
    name?: string;
    image?: string;
    price?: string;
    number?: string;
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

  const [like, setLike] = React.useState([]);

  React.useEffect(() => {
    const allLike = JSON.parse(localStorage.getItem("like") || "[]");
    setLike(allLike);
  }, []);
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

  const handleUnLike = id => {
    const allLike = JSON.parse(localStorage.getItem("like") || "[]");
    const deleteLike = allLike.filter(item => item.id !== id);
    setLike(deleteLike);
    localStorage.setItem("like", JSON.stringify(deleteLike));
  };

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <img src={discountUrl} alt="img" />

        <Grid container spacing={2}>
          {discounts?.map(item => (
            <Grid item xs={6} sm={2}>
              <div className="border_discount">
                <Link to={`/detail/${item.id}`}>
                  <div className="discount_img">
                    <img
                      style={{ maxWidth: "100%" }}
                      src={item.image}
                      alt="discount"
                    />
                  </div>
                  <div className="discount_content">
                    <p className="discount_name">{item.name}</p>
                    <ul className="discount_content-list">
                      <li className="discount_content-item">{item.price}</li>
                      <li className="discount_content-item"></li>
                    </ul>
                  </div>
                </Link>
                <button
                  className="button_add-cart"
                  style={{ backgroundColor: "#FFF" }}
                  onClick={() => handleAddToCart({ ...item, number: "1" })}
                >
                  <span className="cart_hover1">
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
                  </span>
                  <span className="cart_hover2">
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.7072"
                        cy="19.1217"
                        r="18.7072"
                        fill="#FA58A6"
                      />
                      <path
                        d="M15.1667 17.2478H12.6667L11 26.4144H26L24.3333 17.2478H21.8333M15.1667 17.2478V14.7478C15.1667 12.9068 16.6591 11.4144 18.5 11.4144V11.4144C20.3409 11.4144 21.8333 12.9068 21.8333 14.7478V17.2478M15.1667 17.2478H21.8333M15.1667 17.2478V19.7478M21.8333 17.2478V19.7478"
                        stroke="white"
                        stroke-width="1.3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {like.some(current => current.id === item.id) ? (
                  <button
                    className="discount_like"
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
                    className="discount_like"
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

                <div className="discount_percent">
                  <p style={{ color: "#FFF", padding: "2px" }}>
                    {item.discount}
                  </p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    max-width: 100%;
  }
  .discount_content {
    padding: 7px 2px;
  }
  .discount_name {
    font-size: 14px;
    margin-left: 4px;
    padding-top: 5px;
    padding-bottom: 7px;
  }
  .discount_content-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .discount_content-item {
    list-style: none;
    font-weight: 600;
    margin: 0 5px;
  }
  button {
    border: none;
    border-radius: 100px;
  }
  button:hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
  .border_discount {
    border: 1px solid #3333;
    position: relative;
  }
  .border_discount:hover {
    border: 1px solid #fa58a6;
  }
  .discount_like {
    position: absolute;
    top: 3%;
    right: 3%;
  }
  .button_add-cart {
    position: absolute;
    bottom: 0%;
    right: 3%;
    background-color: "#FFF";
  }
  .discount_like {
    position: absolute;
    top: 3%;
    right: 3%;
  }
  .discount_img {
    border-bottom: 1px solid #3333;
  }
  .discount_percent {
    background: #EA4B48;
    width: 20%;
    border-radius: 3px;
    position: absolute;
    top: 2%;
    left: 3%;
}
  }
  .cart_hover2 {
    display: none;
  }
  .button_add-cart:hover .cart_hover1 {
    display: none
  }
  .button_add-cart:hover .cart_hover2 {
    display: block
  }
`;
