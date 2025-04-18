import { Box, Card } from "@mui/material";

import { SelectOption } from "../SelectOption";
import { statusOptions } from "../../constants/status";
import { FiltersProps } from "./interface";
import { InputSearch } from "../InputSearch";

export const Filters = ({
  statusFilter,
  handleStatusChange,
  handleInputChange,
}: FiltersProps) => {
  return (
    <Card sx={{ padding: 2, marginTop: 2, width: "15%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "calc(100vh - 64px)",
          overflow: "auto",
          padding: 2,
        }}
      >
        <SelectOption
          options={statusOptions}
          value={statusFilter}
          onChangeValue={handleStatusChange}
          label="Estado"
        />
        <InputSearch
          onInputChange={handleInputChange}
          placeholder="Buscar por marca"
        />
      </Box>
    </Card>
  );
};
