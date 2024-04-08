export const invalidateCache = ({
  product,
  order,
  admin,
  userId,
  orderId,
  productId,
}) => {
  if (product) {
    const productKeys = ["latest-products", "categories", "all-products"];

    if (typeof productId === "string") productKeys.push(`product-${productId}`);

    if (Array.isArray(productId))
      productId.forEach((i) => productKeys.push(`product-${i}`));

    myCache.del(productKeys);
  }
  if (order) {
    const ordersKeys = [
      "all-orders",
      `my-orders-${userId}`,
      `order-${orderId}`,
    ];

    myCache.del(ordersKeys);
  }
  if (admin) {
    myCache.del([
      "admin-stats",
    ]);
  }
};
