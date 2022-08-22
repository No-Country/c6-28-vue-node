import {ApiRequest} from '@/service/config';


const get = () => {
  return ApiRequest.get(
      '',
  );
};

const Product = () => {
  return {
    get,
  };
};

export default Product;
