import {ApiRequest} from '@/service/index';

const get = () => {
<<<<<<< HEAD
  return ApiRequest.get(
      '/users',
  );
=======
  return ApiRequest.get("/users");
>>>>>>> remotes/origin/about-us
};

const getUser = (id) => {
  return ApiRequest.get(
      `/users/${id}/`,
  );
};

const User = () => {
  return {
    get,
    getUser,
  };
};


export default User;
