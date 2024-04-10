import { Formik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonForm from './Button';

import { ErrorIcon } from "core/assets/icons";

import TextField from "../FormUI/TextField";

export function Signup() {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().required(`${t("validate.required")}`),
    email: Yup.string()
      .required(`${t("validate.required")}`)
      .email(`${t("validate.email")}`),
    password: Yup.string()
      .required(`${t("validate.required")}`)
      .min(8, `${t("validate.limit")}`),
    confirmPassword: Yup.string()
      .required(`${t("validate.required")}`)
      .oneOf([Yup.ref("password")], `${t("validate.match")}`),
  });

  const navigateTo = useNavigate();

  const handleSubmit = async (values) => {
    localStorage.setItem("user", JSON.stringify(values));  
    navigateTo("/", { replace: true });
  };

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
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ margin: "0 auto", marginTop: "10px" }}
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
                {t("signup.title")}
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      fullWidth
                      id="name"
                      label={t("signup.name")}
                      name="name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      type="email"
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12} className="passwordNew">
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label={t("signup.password")}
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
                  <Grid item xs={12} className="confirmPassword">
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label={t("signup.confirmPassword")}
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      autoComplete="off"
                    />

                    <div className="password_icon_confirm">
                      <span>
                        {showConfirmPassword ? (
                          <AiFillEye
                            className="eye-icon-fill"
                            onClick={() => setShowConfirmPassword(false)}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="eye-icon-line"
                            onClick={() => setShowConfirmPassword(true)}
                          />
                        )}
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Chấp nhận các điều khoản và chính sách"
                    />
                  </Grid>
                </Grid>
                <ButtonForm>{t("signup.button")}</ButtonForm>
                <Grid
                  container
                  justifyContent="center"
                  style={{ padding: "10px 0" }}
                >
                  <Link to="/login" variant="body2">
                    Đã có tài khoản.{" "}
                    <span style={{ fontWeight: "600" }}> Đăng nhập</span>
                  </Link>
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
  .confirmPassword,
  .passwordNew {
    position: relative;
  }
  .password_icon_confirm {
    position: absolute;
    right: 20px;
    top: 38px;
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
    margin-bottom: 30px;
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
