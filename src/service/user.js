import { ApiRequest } from "@/service/index";

const get = () => {
  return ApiRequest.get("/users");
};

const User = () => {
  return {
    get,
  };
};

export default User;
