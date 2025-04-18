import { SelectChangeEvent } from "@mui/material/Select";
import { Option } from "../../interfaces/option.interface";

export interface SelectOptionsProps {
  options: Option[];
  value: string;
  onChangeValue: (event: SelectChangeEvent<string>) => void;
  label: string;
}
