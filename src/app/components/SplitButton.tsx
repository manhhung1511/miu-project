import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "core/constants";


export default function SplitButton() {
  const [age, setAge] = useState('vi');

  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback(
    (event: SelectChangeEvent) => {
      const lng = event.target.value;
      setAge(lng);
      i18n.changeLanguage(lng);
    },
    [i18n],
  );
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, display: { xs: 'none', sm: 'block' }}}>
        <Select 
          value={age}
          onChange={changeLanguage}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{fontSize:"15px"}}
        >
          <MenuItem value="vi" style={{fontSize:"15px"}}>VI</MenuItem>
          <MenuItem value="en" style={{fontSize:"15px"}}>EN</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}