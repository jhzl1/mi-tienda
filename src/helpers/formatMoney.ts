import currency from "currency.js"

export const formatMoney = (number: number) => {
  return currency(number, {
    symbol: "$",
    precision: 2,
  })
}
