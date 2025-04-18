import { Icon } from "@iconify/react";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

import { InputSearchProps } from "./interface";

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
    <TextField
      onChange={(e) => setInputValue(e.target.value)}
      size="small"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <Icon
            style={{ marginRight: "17px" }}
            fontSize="24px"
            color="#919EAB"
            icon="material-symbols:search"
          />
        ),
      }}
      sx={{
        borderRadius: "10px",
        minWidth: "100%",
      }}
      value={inputValue}
    />
  );
};
