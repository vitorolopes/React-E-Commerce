export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR"
  }).format(number / 100) //! we divide by 100 because the price is in cents
  
}

export const getUniqueValues = () => {}
