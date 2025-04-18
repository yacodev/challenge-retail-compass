import { SelectChangeEvent } from "@mui/material";

export interface FiltersProps {
  statusFilter: string;
  handleStatusChange: (event: SelectChangeEvent<string>) => void;
  handleInputChange: (brand: string) => void;
}
