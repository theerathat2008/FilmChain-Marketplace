const routes = require('next-routes')();

routes
  .add('/products/new', '/products/new')
  .add('/products/:address', '/products/show')
  .add('/products/:address/offers', '/products/offers/index')
  .add('/products/:address/offers/new', '/products/offers/new')
  .add('/products/:address/offers/withdraw', '/products/offers/withdraw')
  .add('/products/:address/offers/offer-checkout', '/products/offers/offer-checkout')
  .add('/products/:address/checkout/buycheckout', '/products/checkout/buycheckout')
  .add('/products/:address/checkout/buytermconds', '/products/checkout/buytermconds')
  .add('/reviews', 'reviews/index')
  .add('/user/:address/show', '/user/show')
  .add('/user/:address/view-info', '/user/view-info');


module.exports = routes;
