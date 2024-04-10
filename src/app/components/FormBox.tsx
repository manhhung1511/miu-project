import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "styled-components";
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import { SearchIcon } from "core/assets/icons";
import { useSearchStore } from "core/store/useCartStore";
import { useShallow } from "zustand/react/shallow";
import { useNavigate } from "react-router-dom";

export default function FormBox() {

  const handleBySearchValue = (
    useShallow(state => state.handleBySearchValue),
  );


  const location = [
    {
      value: 'all',
      label: 'Tất cả địa điểm',
    },
    {
      value: '10',
      label: 'Hà Nội',
    },
    {
      value: '11',
      label: 'TP.Hồ Chí Minh',
    }
  ];

  const careers = [
    {
      value: 'all',
      label: 'Ngành nghề',
    },
    {
      value: '10',
      label: 'May mặc',
    },
    {
      value: '11',
      label: 'Điện tử',
    }
  ]

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = React.useState({
    keyword: '',
    address: 'all',
    career: 'all',
  });

  // console.log(searchTerm);
  const handleOnClick = () => {
    handleBySearchValue(searchTerm)
    navigate("/tim-don-hang", { replace: true })
  }

  return (
      <Form>  
          <div className="box-title">
              <h1>Đón lấy sự thành công với</h1>
              <span>các đối tác uy tín</span>
          </div>
          <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
              <TextField
              fullWidth={true}
              id="outlined-start-adornment"
              InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
              }}
              onChange={(e) => setSearchTerm({ ...searchTerm, keyword: e.target.value })}
              />
              </Grid>
              <Grid item xs={12} md={6}>
              <TextField
              id="outlined-select-currency"
              select
              fullWidth={true}
              size="medium"
              defaultValue={searchTerm.address}
              sx={{width: { md: '210px' }}}
              onChange={(e) => setSearchTerm({ ...searchTerm, address: e.target.value })}
              >
                {location.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
              <TextField
              id="outlined-select-currency"
              fullWidth={true}
              select
              size="medium"
              defaultValue={searchTerm.address}
              sx={{width: { md: '210px'}}}
              onChange={(e) => setSearchTerm({ ...searchTerm, career: e.target.value })}
              >
              {careers.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>
          </Grid>
          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}  onClick={handleOnClick}>
              TÌM KIẾM NGAY
          </Button>
          </Box>
      </Form>
  );
};

const Form = styled.div`
width: 526px;
max-width: 100%;
margin: 0 auto;
overflow: hidden;
border-radius: 8px;
background: #FFFFFF;
padding: 20px 45px;
border-top-right-radius: 8px;
border-top-left-radius: 8px;
transition: 0.4s ease-in-out all;


@media screen and (max-width: 768px){
  width: auto;
  padding: 20px;
  h1 {
    font-size: 15px !important;
  }
  span {
    font-size: 18px !important;
  }
  .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 9.5px 14px !important;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 9.5px 14px !important;
  }
}

/* tablet */
@media screen and (max-width: 992px) and (min-width: 768px){
  width: auto;
  padding: 20px;
  h1 {
    font-size: 15px !important;
  }
  span {
    font-size: 18px !important;
  }
}

h1 {
    display: grid;
    color: #172642;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
}
span {
    font-size: 24px;
    font-weight: 700;
}
button {
    background-color: #3b49df;
}
`;
