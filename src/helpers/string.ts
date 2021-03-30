export const handlePrice = (value: string | number) =>
  Number(value).toLocaleString("en", { style: "currency", currency: "USD" })