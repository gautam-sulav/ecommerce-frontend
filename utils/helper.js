export const getDiscountedPricePercentage = (originalPrice, discountePrice) => {
  const discount = originalPrice - discountePrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};
