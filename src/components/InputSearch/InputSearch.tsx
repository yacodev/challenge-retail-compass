import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { InputSearchProps } from "./interface";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

export const InputSearch = ({
  onInputChange,
  placeholder,
}: InputSearchProps) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onInputChange(inputValue);
    }, 700);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <FormControl fullWidth>
      <OutlinedInput
        onChange={(e) => setInputValue(e.target.value)}
        size="small"
        placeholder={placeholder}
        value={inputValue}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        }
        sx={{
          borderRadius: "10px",
          minWidth: "100%",
        }}
      />
    </FormControl>
  );
};
