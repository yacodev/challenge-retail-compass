export const formatCurrency = (number: number) => {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };

  return number?.toLocaleString("es-PE", options as Intl.NumberFormatOptions);
};
