import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from "styled-components";
import { Button, Grid } from '@mui/material';
import { addRecentSearch, getRecentSearches } from 'core/localstorages/recentSearches';

export default function Grouped() {
 
  const [searchTerm, setSearchTerm] = React.useState({
    keyword: '',
  });
  const handleOnclick = () => {
    addRecentSearch(searchTerm.keyword)
  }
  return (
    <Wrapper>
      <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={Array.from(getRecentSearches())
              .reverse().map((option) => option)}
            renderInput={(params) => <TextField {...params} label="Tên sản phẩm" onChange={(e) => setSearchTerm({ ...searchTerm, keyword: e.target.value })} />}
            onChange={(e, value) => setSearchTerm({ ...searchTerm, keyword: value })}
            sx={{
              width: '600px',
              fontSize: { xs: "13px" },
              display: { xs: "none", lg: "block" }
            }}
            value={searchTerm.keyword}
          />

<Grid item lg={2} sx={{ textAlign: "center",  display: { xs: "none", lg: "block" },width: '100px' }} xs={3}>
          <Button sx={{ maxWidth: "100%", padding: "13px 17px" }} onClick={handleOnclick}>Tìm kiếm</Button>
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
`