import { ApiRequest } from "@/service/index";

const get = () => {
  return ApiRequest.get("/products");
};

const getCategories = () => {
  return ApiRequest.get("/products/categories");
};
const getPets = () => {
  return ApiRequest.get("/products/pets");
};
const getOffers = () => {
  return ApiRequest.get("/products/offers");
};
const getBrands = () => {
  return ApiRequest.get("/products/brands");
};

const Product = () => {
  return {
    get,
    getProduct,
    getCategories,
    getPets,
    getOffers,
    getBrands,
  };
};

const getProduct = (id) => {
  return ApiRequest.get(`https://c6-28.up.railway.app/api/v1/products/${id}`);
};
// const getCategories = () => {
//   return ApiRequest.get(
//     '/products/categories',
//   );
// };
// const getPets = () => {
//   return ApiRequest.get(
//     '/products/pets',
//   );
// };
// const getOffers = () => {
//   return ApiRequest.get(
//     '/products/offers',
//   );
// };
// const getBrands = () => {
//   return ApiRequest.get(
//     '/products/brands',
//   );
// };

export default {
  get,
  getProduct,
  Product,
};
