import Card from "@mui/material/Card";
import { SelectOption } from "../SelectOption";
import { statusOptions } from "../../constants/status";
import { FiltersProps } from "./interface";
import { InputSearch } from "../InputSearch";
import { FiltersContainer } from "./styles";

export const Filters = ({
  statusFilter,
  handleStatusChange,
  handleInputChange,
}: FiltersProps) => {
  return (
    <Card sx={{ padding: 2, marginTop: 2, width: "15%" }}>
      <FiltersContainer>
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
      </FiltersContainer>
    </Card>
  );
};
