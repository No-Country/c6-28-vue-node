import { ApiRequest } from "@/service/config";


const get = () => {
    return ApiRequest.get(
        "/products",
    )
}

const getProduct = (id) => {
    return ApiRequest.get(
        `/products/${id}`,
    )
}
const getCategories = () => {
    return ApiRequest.get(
        "/products/categories",
    )
}
const getPets = () => {
    return ApiRequest.get(
        "/products/pets",
    )
}
const getOffers = () => {
    return ApiRequest.get(
        "/products/offers",
    )
}
const getBrands = () => {
    return ApiRequest.get(
        "/products/brands",
    )
}

const Product = () => {
    return {
        get,
        getProduct,
        getCategories,
        getPets,
        getOffers,
        getBrands
    }
}

export default Product