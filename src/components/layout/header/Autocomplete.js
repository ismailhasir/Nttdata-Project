import * as React from "react";
import { Input, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";

export default function AutoCompleteComponent() {
  const [selectBoxValue, setSelectBoxValue] = React.useState("Categories");
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    marginRight: "10px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const CustomSelect = styled(Select)(({ theme }) => ({
    "&::before": {
      border: "0 !important",
    },
    "&::focus": {
      border: "0 !important",
    },
  }));

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectBoxValue(value);
  };
  return (
    <Search>
      <Input
        placeholder="Search..."
        sx={{
          border: "1px solid #89919A",
          paddingLeft: "2rem",
          borderRadius: "3px",
          "&::before": { border: "none", display: "none" },
          "&::focused": { display: "none" },
          "&::after": { display: "none" },
          width: "100%",
          padding: "0 0 0 2rem",
        }}
        endAdornment={
          <CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            autoWidth
            variant="filled"
            sx={{
              ".css-1gzkxga-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
                {
                  paddingTop: ".3rem",
                },
            }}
            size="small"
            value={selectBoxValue}
            onChange={handleChange}
            renderValue={(selected) => {
              if (!selectBoxValue) {
                return <span>Categories</span>;
              }

              return selected;
            }}
          >
            <MenuItem value={"Data"}>Data</MenuItem>
            <MenuItem value={"Category Name"}>Category Name</MenuItem>
            <MenuItem value={"Category Name"}>Category Name</MenuItem>
          </CustomSelect>
        }
        size="medium"
      />
    </Search>
  );
}
