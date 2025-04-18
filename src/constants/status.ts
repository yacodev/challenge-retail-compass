import { Option, typeStatusOption } from "../interfaces/option.interface";

export const statusOptions: Option[] = [
  {
    value: typeStatusOption.AVAILABLE,
    label: "Activo",
  },
  {
    value: typeStatusOption.OUT_OF_STOCK,
    label: "Fuera de stock",
  },
];
