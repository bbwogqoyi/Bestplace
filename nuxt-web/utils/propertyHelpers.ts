const showDescription = (description) => {
  return description!==null && description!==undefined && description!=="";
}

const calculateTotalInvestment = (purchasePrice, rehabPrice) => {
  const result = parseFloat(purchasePrice) + parseFloat(rehabPrice);
  return getCurrencyString(result);
}
  
const getListingDateString = (listingDate) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date(listingDate);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

const getCurrencyString = (amount) => {
  return new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  minimumFractionDigits: 2
  }).format(amount)
}

export default {
  showDescription,
  calculateTotalInvestment,
  getListingDateString,
  getCurrencyString
}