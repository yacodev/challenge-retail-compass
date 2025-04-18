import { useState } from "react";
import { Box, SelectChangeEvent, Card } from "@mui/material";

import { SelectOption } from "../SelectOption";
import { statusOptions } from "../../constants/status";

export const Filters = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value as string);
  };

  const handleBrandChange = (event: SelectChangeEvent<string>) => {
    setBrandFilter(event.target.value as string);
  };

  return (
    <Card sx={{ padding: 2, marginTop: 2, width: "200px" }}>
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
        <SelectOption
          options={statusOptions}
          value={brandFilter}
          onChangeValue={handleBrandChange}
          label="Marca"
        />
      </Box>
    </Card>
  );
};
