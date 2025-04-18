import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectOptionsProps } from "./typescript";

export const SelectOption = ({
  options,
  value,
  onChangeValue,
  label,
}: SelectOptionsProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Estado</InputLabel>
      <Select value={value} label={label} onChange={onChangeValue}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
