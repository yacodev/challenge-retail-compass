import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { SelectOptionsProps } from "./interface";

export const SelectOption = ({
  options,
  value,
  onChangeValue,
  label,
}: SelectOptionsProps) => {
  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const emptyEvent: SelectChangeEvent<string> = {
      target: { value: "" },
    } as SelectChangeEvent<string>;
    onChangeValue(emptyEvent);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChangeValue}
        endAdornment={
          value ? (
            <IconButton
              onClick={handleClear}
              size="small"
              sx={{ marginRight: 2 }}
              aria-label="clear selection"
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ) : null
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
