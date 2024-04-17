import * as React from "react";
import styled from "styled-components";

import { Button, Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import {
  addRecentSearch,
  getRecentSearches,
} from "core/localstorages/recentSearches";
import { useNavigate } from "react-router-dom";


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'La Roche Posay', year: 1994 },
];

export default function Grouped() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState({
    keyword: "",
  });
  const handleOnclick = () => {
    addRecentSearch(searchTerm.keyword);
    navigate("/search");

  };
  return (
    <Wrapper>
       <Autocomplete
        size="small"
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Tìm sản phẩm" />}
        sx={{
          width: "600px",
          fontSize: { xs: "13px" },
          display: { xs: "none", sm: "block" },
        }}
      />
      {/* <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={Array.from(getRecentSearches())
          .reverse()
          .map(option => option)}
        renderInput={params => (
          <TextField
            {...params}
            label="Tên sản phẩm"
            onChange={e =>
              setSearchTerm({ ...searchTerm, keyword: e.target.value })
            }
          />
        )}
        onChange={(e, value) =>
          setSearchTerm({ ...searchTerm, keyword: value })
        }
        sx={{
          width: "600px",
          fontSize: { xs: "13px" },
          display: { xs: "none", sm: "block" },
        }}
        value={searchTerm.keyword}
      /> */}

      <Grid
        item
        lg={2}
        sx={{
          textAlign: "center",
          display: { xs: "none", lg: "block" },
          width: "100px",
        }}
        xs={3}
      >
        <Button
          sx={{ maxWidth: "100%", padding: "8px 17px" }}
          onClick={handleOnclick}
        >
          Tìm kiếm
        </Button>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .css-16i28g4-MuiAutocomplete-root .MuiOutlinedInput-root {
    padding: 6px;
  }
`;


