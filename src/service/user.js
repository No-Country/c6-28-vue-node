import { ApiRequest } from "@/service/index";

const get = () => {
  return ApiRequest.get("/users");
};

const getUser = (id) => {
  return ApiRequest.get(`/users/${id}/`);
};

const getDevelopers = () => {
  return ApiRequest.get("/members");
};

const User = () => {
  return {
    get,
    getUser,
    getDevelopers,
  };
};

export default User;
