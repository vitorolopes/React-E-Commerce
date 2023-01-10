export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR"
  }).format(number / 100) //! we divide by 100 because the price is in cents  
}

export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type])
  console.log(unique);
  // In the case of colors it is already an array so when we
  // use Set we are going to get an array of arrays so we use
  // the flat() method
  if(type === "colors"){
    unique = unique.flat()
  }
  return ["all", ...new Set(unique)]
}
