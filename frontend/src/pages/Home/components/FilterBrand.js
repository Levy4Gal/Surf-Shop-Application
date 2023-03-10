import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterBrand = (props) => {
  const handleChange = (event) => {
    props.setBrand(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="brand-select-label">Brand</InputLabel>
        <Select
          labelId="brand-select-label"
          id="brand-select-label"
          value={props.brand}
          label="Brand"
          onChange={handleChange}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {props.brands.map((brand) => (
            <MenuItem value={brand}>
              {brand.charAt(0).toUpperCase()}
              {brand.slice(1).toLowerCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBrand;
