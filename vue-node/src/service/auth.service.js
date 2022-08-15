import Cookies from "js-cookie";
import { ApiRequest } from "@/service/index";

const login = (user, pass) => {
  return ApiRequest.post("/users/login", {
    email: user,
    password: pass,
  });
};

const get = () => {
  return ApiRequest.get("/users");
};

const register = (nameUser, lastname, email, pass, confirmPass) => {
  console.log(nameUser, lastname, email, pass, confirmPass);
  return ApiRequest.post("/users/signup", {
    nameUser,
    lastname,
    email,
    pass,
    confirmPass,
  });
};

const setAccessToken = userLogged => {
  Cookies.set("userLogged", userLogged);
};

const getAccessToken = () => {
  return Cookies.get("userLogged");
};

const deleteAccessToken = () => {
  Cookies.remove("userLogged");
};

export default {
  login,
  register,
  get,
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
};
