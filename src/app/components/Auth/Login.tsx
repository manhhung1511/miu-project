import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import TextField from "../FormUI/TextField";
import ButtonForm from "./Button";

export default function Login() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const navigateTo = useNavigate();

  const handleSubmit = async values => {
    const information = { name: "Tranh", ...values };
    localStorage.setItem("user", JSON.stringify(information));
    navigateTo("/", { replace: true });
  };

  const INITIAL_FORM_STATE = {
    email: "",
    password: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string()
      .required(`${t("validate.required")}`)
      .email(`${t("validate.email")}`),
    password: Yup.string()
      .required(`${t("validate.required")}`)
      .min(8, `${t("validate.limit")}`),
  });

  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("like");
    localStorage.removeItem("cart");
  }, []);

  return (
    <Formik
      initialValues={{
        ...INITIAL_FORM_STATE,
      }}
      validationSchema={FORM_VALIDATION}
      onSubmit={handleSubmit}
    >
      <Wrapper>
        <Grid container component="main">
          <Grid
            item
            xs={12}
            sm={8}
            component={Paper}
            elevation={6}
            square
            sx={{
              margin: "0 auto",
              marginTop: { sm: "55px", xs: "40px" },
              maxWidth: { sm: "42.666667% !important" },
            }}
          >
            <Box
              sx={{
                my: 4,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontSize: "30", fontWeight: "600" }}
              >
                Đăng Nhập
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item sm={12} sx={{ width: "100%" }}>
                    <TextField
                      type="email"
                      id="email"
                      label={t("login.email")}
                      name="email"
                    />
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    className="passwordNew"
                    sx={{ width: "100%" }}
                  >
                    <TextField
                      name="password"
                      label={t("login.password")}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="off"
                    />

                    <div className="password_icon">
                      <span>
                        {showPassword ? (
                          <AiFillEye
                            className="eye-icon-fill"
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="eye-icon-line"
                            onClick={() => setShowPassword(true)}
                          />
                        )}
                      </span>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Ghi nhớ tôi"
                    />
                    <Link to="/forget-password">Quên mật khẩu?</Link>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ButtonForm>{t("login.button")}</ButtonForm>
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ padding: "20px", color: "#99999" }}
                >
                  <Grid item>
                    <Link to="/register" variant="body2">
                      {t("login.body2")}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Wrapper>
    </Formik>
  );
}

const Wrapper = styled.section`
  ${
    "" /* .css-1y8ugea {
    margin-top: 28px;
  } */
  }
  .css-1y8ugea {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
    -ms-overflow-style: none;
    padding: 5px 16px 20px;
    position: relative;
  }
  .css-1y8ugea::-webkit-scrollbar {
    display: none;
  }
  .passwordNew {
    position: relative;
  }
  .password_icon {
    position: absolute;
    right: 20px;
    top: 38px;
  }
  .google_button {
    margin-left: 12px;
  }
  .or-line {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 30px;
  }
  .or-line::before {
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    z-index: 1;
    height: 1px;
    transform: translate(-50%, -50%);
    background: #e9e9e9;
    content: "";
  }
  .or-line span {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    width: 58px;
    background: #ffffff;
    color: #5d677a;
    font-size: 14.5px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
