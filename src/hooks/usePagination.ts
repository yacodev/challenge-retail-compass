import { ChangeEvent, MouseEvent, useState } from "react";

export function usePagination() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handlePageChange = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    //setPage(0);
  };

  return {
    page,
    rowsPerPage,
    handlePageChange,
    handleChangeRowsPerPage,
  };
}
