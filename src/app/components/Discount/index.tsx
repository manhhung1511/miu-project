import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Grid } from "@mui/material";

import bannerUrl from "core/assets/images/Image.png";
import discountUrl from "core/assets/images/image 1.png";
import discounts from "../../../datas/discount.json"
import { useCartStore } from "core/store/useCartStore";
import { useShallow } from "zustand/react/shallow";

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

  return (
    <Wrapper>
     
      <Container maxWidth="xl">
        <img src={discountUrl} alt="img" />

        <Grid container spacing={2}>
        {
        discounts?.map((item) => (
          <Grid item xs={6} sm={2}>
          <div className="border_discount">
          <Link to="">
              <div className="discount_img">
                <img src={item.image} alt="discount" />
              </div>
              <div className="discount_content">
                <p className="discount_name">
                 {item.name}
                </p>
                <ul className="discount_content-list">
                  <li className="discount_content-item">{item.price}</li>
                  <li className="discount_content-item">
                  
                  </li>
                </ul>
              </div>
            </Link>
            <button  className="button_add-cart"
                  onClick={() => handleAddToCart({ ...item, number: "1" })}>
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
          </div>
        </Grid>
        ))
      }
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
  }
  .discount_name {
    font-size: 14px;
    margin-left: 2px;
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
    bottom: 1%;
    right: 3%;
  }
`;
